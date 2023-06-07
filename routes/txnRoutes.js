const express = require('express');
const router = express();
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');


const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());


// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      const transactionId = uuidv4(); // Generate a UUID for the transaction
      console.log('Generated transactionId:', transactionId);

      const invoicePath = path.join(__dirname, '../public/invoice', transactionId);
      const additionalDocumentsPath = path.join(__dirname, '../public/additionalDocuments', transactionId);
  
      // Create directories if they don't exist
      fs.mkdirSync(invoicePath, { recursive: true });
      fs.mkdirSync(additionalDocumentsPath, { recursive: true });
  
      req.transactionId = transactionId; // Store the transactionId in the request object
  
      cb(null, invoicePath);
    },
    filename: function (req, file, cb) {
      // Generate a unique filename using timestamp
      const timestamp = Date.now();
      const filename = `${timestamp}_${file.originalname}`;
      cb(null, filename);
    }
  });
  
  // Create multer instance
  const upload = multer({ storage });


const txnController = require('../controllers/txnController');
const auth = require('../middleware/auth')

router.set('view engine', 'ejs')
router.set('views', './views/users')
// Map the transactionController.getTransactionsByUserId method to a specific route
router.get('/users', auth.isLogin, txnController.loadDashboard)
router.post('/users', upload.fields([
    { name: 'uploadInvoice', maxCount: 1 },
    { name: 'additionalDocuments'}
  ]), txnController.newTxn)

router.post('/users/shareViaWhatsApp', upload.fields([
  { name: 'uploadInvoice', maxCount: 1 },
  { name: 'additionalDocuments'}
]),txnController.newTxnWhatsApp)

router.get('/transactions', (req, res)=>{
    res.render('txn', { transactions: []} )
})

router.post('/users/save-invoice', upload.fields([
  { name: 'additionalDocuments'}
]), txnController.saveInvoice)

router.post('/users/download-invoice', upload.none(), txnController.downloadInvoice)

router.post('/transactions', txnController.txntable);

router.post('/transactions/generate-invoice', txnController.generateInvoice);

router.get('/users/:userId/transactions', auth.isLogin, txnController.getTransactionsByUserId);

module.exports = router;

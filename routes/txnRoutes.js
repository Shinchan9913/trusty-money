const express = require('express');
const router = express();

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

const txnController = require('../controllers/txnController');
const auth = require('../middleware/auth')

router.set('view engine', 'ejs')
router.set('views', './views/users')
// Map the transactionController.getTransactionsByUserId method to a specific route
router.get('/users/:userId', auth.isLogin, txnController.loadDashboard)
router.post('/users/:userId', txnController.newTxn)

router.get('/transactions', (req, res)=>{
    res.render('txn', { transactions: []} )
})

router.post('/transactions', txnController.txntable);

router.post('/transactions/generate-invoice', txnController.generateInvoice);

router.get('/users/:userId/transactions', auth.isLogin, txnController.getTransactionsByUserId);

module.exports = router;
const Transaction = require("../models/txnModel");
const User = require("../models/userModel");
const inv = require("../middleware/invoice");
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');


const getTransactionsByUserId = async (req, res) => {
  try {
    const userId = req.params.userId;
    const transactions = await Transaction.find({ userId: userId });
    res.json(transactions);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

const txntable = async (req, res) => {
  const { userId } = req.body;

  try {
    const transactions = await Transaction.find({ userId: userId });
    res.render("txn", { transactions });
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const loadDashboard = async (req, res) => {
  try {
    const userId = req.session.user_id;
    const user = await User.findById(userId);

    const transactions = await Transaction.find({ userId: userId }).sort({
      date: -1,
    }); // Sort by date in descending order (most recent first)
    // console.log(transactions);
    res.render("dashboard", { user: user, transactions: transactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

const saveInvoice = async (req, res) => {
  try {
    console.log("Save invoice called!!!")
    const userId = req.session.user_id;
    console.log(userId)
    if(!req.transactionId){
      const transactionId = uuidv4(); // Generate a UUID for the transaction
      console.log('Generated transactionId:', transactionId);
      req.transactionId = transactionId;
    }
    // Store transaction data in the database
    const txn = new Transaction({
      userId: userId,
      txnId:req.transactionId,
      amount: req.body.amount,
      companyName: req.body.companyName,
      companyContact: req.body.companyContact,
      companyEmail: req.body.companyEmail,
      expectedDate: req.body.dueDate,
      country: req.body.country,
      description: req.body.description,
      isDraft: req.body.is_draft,
      RBIpurposeCode: req.body.RBIpurposeCode
    });

    const txnData = await txn.save();

    console.log(txnData)

    // Get the uploaded files
    const files = req.files;
    const transactionId = req.transactionId;

    if (files && files['additionalDocuments']) {
      const additionalDocumentsFiles = files['additionalDocuments'];

      additionalDocumentsFiles.forEach((file) => {
        // Handle each additionalDocuments file
        // For example, move the file to the desired directory
        const additionalDocumentsPath = path.join(__dirname, '../public/additionalDocuments', transactionId, file.filename);
        fs.renameSync(file.path, additionalDocumentsPath);
        // You can also save the file path to the database if needed
      }); }
      
      const user = await User.findById(userId)
      console.log(user)
       // Generate PDF and store it in the public/invoice directory
      inv.generateInvoicePdf(txnData, (pdfPath) => {
      if (pdfPath) {
        console.log('PDF saved:', pdfPath);
        // You can also save the PDF path to the database if needed
      } else {
        console.error('Error generating PDF');
      }
        res.redirect('/dashboard/users')
      })
  } catch (error) {
    console.log(error.message)
    res.send("An error occured, Save invoice failed")
  }
}

// Define routes
const newTxn = async (req, res) => {
  try {
    const userId = req.session.user_id;
    console.log(userId)
    // Store transaction data in the database
    const txn = new Transaction({
      userId: userId,
      txnId:req.transactionId,
      amount: req.body.amount,
      companyName: req.body.companyName,
      companyContact: req.body.companyContact,
      companyEmail: req.body.companyEmail,
      expectedDate: req.body.expectedDate,
      country: req.body.country,
      description: req.body.description,
      isDraft: req.body.isDraft,
      RBIpurposeCode: req.body.RBIpurposeCode
    });

    const txnData = await txn.save();

    console.log(txnData)

    // Get the uploaded files
    const files = req.files;
    const transactionId = req.transactionId;

    if (files && files['uploadInvoice']) {
      const uploadInvoiceFile = files['uploadInvoice'][0];
      // Handle the uploadInvoice file
      // For example, move the file to the desired directory
      const uploadInvoicePath = path.join(__dirname, '../public/invoice', transactionId, uploadInvoiceFile.filename);
      fs.renameSync(uploadInvoiceFile.path, uploadInvoicePath);
      // You can also save the file path to the database if needed
    }

    // Check if additionalDocuments file exists
    if (files && files['additionalDocuments']) {
      const additionalDocumentsFiles = files['additionalDocuments'];

      additionalDocumentsFiles.forEach((file) => {
        // Handle each additionalDocuments file
        // For example, move the file to the desired directory
        const additionalDocumentsPath = path.join(__dirname, '../public/additionalDocuments', transactionId, file.filename);
        fs.renameSync(file.path, additionalDocumentsPath);
        // You can also save the file path to the database if needed
      }); }
    // Rest of the code to respond to the client or redirect to a different page
    // ...
    const user = await User.findById(userId)
    res.render('dashboard', {user: user})
    // res.send('Files uploaded successfully.');
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

const newTxnWhatsApp = async (req, res) => {
  try {
    const userId = req.session.user_id;
    console.log(userId)
    // Store transaction data in the database
    const txn = new Transaction({
      userId: userId,
      txnId:req.transactionId,
      amount: req.body.amount,
      companyName: req.body.companyName,
      companyContact: req.body.companyContact,
      companyEmail: req.body.companyEmail,
      expectedDate: req.body.expectedDate,
      country: req.body.country,
      description: req.body.description,
      isDraft: req.body.isDraft,
      RBIpurposeCode: req.body.RBIpurposeCode
    });

    const txnData = await txn.save();

    console.log(txnData)

    // Generate the WhatsApp message with the transaction data
    const message = generateWhatsAppMessage(txnData);

    // Open a new WhatsApp window with the message
    
    // Get the uploaded files
    const files = req.files;
    const transactionId = req.transactionId;
    
    if (files && files['uploadInvoice']) {
      const uploadInvoiceFile = files['uploadInvoice'][0];
      // Handle the uploadInvoice file
      // For example, move the file to the desired directory
      const uploadInvoicePath = path.join(__dirname, '../public/invoice', transactionId, uploadInvoiceFile.filename);
      fs.renameSync(uploadInvoiceFile.path, uploadInvoicePath);
      // You can also save the file path to the database if needed
    }

    // Check if additionalDocuments file exists
    if (files && files['additionalDocuments']) {
      const additionalDocumentsFiles = files['additionalDocuments'];

      additionalDocumentsFiles.forEach((file) => {
        // Handle each additionalDocuments file
        // For example, move the file to the desired directory
        const additionalDocumentsPath = path.join(__dirname, '../public/additionalDocuments', transactionId, file.filename);
        fs.renameSync(file.path, additionalDocumentsPath);
        // You can also save the file path to the database if needed
      }); }
      // Rest of the code to respond to the client or redirect to a different page
      // ...
      res.render('shareViaWhatsapp', { urlW:shareViaWhatsApp(message), urlE:shareViaEmail(message)})
      // shareViaWhatsApp(message);
      // res.render('dashboard')
      // res.send('Files uploaded successfully.');
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
};

// Function to generate the WhatsApp message with transaction data
const generateWhatsAppMessage = (txnData) => {
  // Extract the desired fields from the transaction data
  const {
    amount,
    companyName,
    companyContact,
    companyEmail,
    expectedDate,
    country,
    description
  } = txnData;

  // Construct the message using the extracted fields
  const message = `New Transaction:\n\nAmount: ${amount}\nCompany: ${companyName}\nContact: ${companyContact}\nEmail: ${companyEmail}\nExpected Date: ${expectedDate}\nCountry: ${country}\nDescription: ${description}`;

  return message;
};

const shareViaEmail = (message) => {
  const emailUrl = `mailto:?subject=New Transaction&body=${encodeURIComponent(message)}`
  return emailUrl
}

// Function to open a new WhatsApp window with the message
const shareViaWhatsApp = (message) => {
  // Construct the WhatsApp URL with the encoded message
  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;

  // Open a new window with the WhatsApp URL
  // window.open(whatsappUrl, '_blank');
  return whatsappUrl;
};

const generateInvoice = async (req, res) => {
  const txnId = req.body.txnId;
  console.log(txnId);

  // Retrieve transaction details from the database or wherever you store them
  const transaction = await Transaction.findById(txnId);
  console.log(transaction._doc);

  // Generate the invoice PDF
  inv.generatePdf(transaction, (pdfBuffer) => {
    // Set the response headers for file download
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", "attachment; filename=invoice.pdf");

    // Send the PDF buffer as the response
    res.send(pdfBuffer);
  });
};

module.exports = {
  getTransactionsByUserId,
  loadDashboard,
  newTxn,
  txntable,
  generateInvoice,
  newTxnWhatsApp,
  saveInvoice,
};

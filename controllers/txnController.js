const Transaction = require("../models/txnModel");
const User = require("../models/userModel");
const inv = require("../middleware/invoice");

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
    console.log(transactions);
    res.render("dashboard", { user, transactions });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

const newTxn = async (req, res) => {
  const userId = req.session.user_id;
  try {
    console.log(req.body);
    const userData = await User.findById(userId);
    console.log("user found", req.body.amount);
    const txn = new Transaction({
      userId: userData._id,
      txnId: req.body.txnId,
      amount: req.body.amount,
      customerName: req.body.customerName
    });
    // if (!txn.txnId || !txn.amount) {
    //     return res.status(400).json({ error: 'txnId and amount fields are required' });
    // }

    const txnData = await txn.save();
    // res.send(txnData)
    if (txnData) {
      res.render("home", { message: "Txn created succesfully", userId });
    } else {
      res.render("home", { message: "Could not create txn", userId });
    }
    // console.log(userId)
    // res.render('home')
  } catch (error) {
    console.log(error);
  }
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
};

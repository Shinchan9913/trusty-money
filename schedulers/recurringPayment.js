const cron = require("node-cron");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
const RecurringPayment = require("../models/recurringModel");
const Transaction = require("../models/txnModel");
const inv = require('../middleware/invoice')

const startRecurringPaymentScheduler = () => {
  // Connect to your MongoDB database
//   mongoose
//     .connect("mongodb://localhost:27017/trusty-money", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {
//       console.log("Connected to MongoDB");
//     })
//     .catch((error) => {
//       console.error("Error connecting to MongoDB:", error);
//     });

  // Schedule the recurring payment task to run at 12 midnight
  cron.schedule("0 0 * * *", async () => {
    try {
      // Get all recurring payments that match the current day and frequency
      const currentDate = new Date();
      const recurringPayments = await RecurringPayment.find({
        $or: [
          { frequency: "daily" },
          { frequency: "weekly" },
          { frequency: "monthly" },
          {
            frequency: "custom",
            $expr: {
              $eq: [
                {
                  $mod: [
                    { $subtract: [currentDate, new Date(0)] },
                    "$customDays",
                  ],
                },
                0,
              ],
            },
          },
        ],
      }).populate("userId");

      // Create new transactions for each recurring payment
      for (const recurringPayment of recurringPayments) {
        const oldTransaction = await Transaction.findById(
          recurringPayment.txnId
        );
        const newTransaction = new Transaction({
          userId: oldTransaction.userId,
          amount: oldTransaction.amount,
          txnId: uuidv4(),
          // Set the amount for the transaction based on recurring payment information
          // Set other fields for the transaction based on recurring payment information
          companyName: oldTransaction.companyName,
          companyContact: oldTransaction.companyContact,
          companyEmail: oldTransaction.companyEmail,
          expectedDate: currentDate,
          //   initiationDate: currentDate,
          country: oldTransaction.country,
          description: oldTransaction.description,
          isDraft: oldTransaction.isDraft,
          RBIpurposeCode: oldTransaction.RBIpurposeCode,
          paymentStatus: oldTransaction.paymentStatus,
        });

        const customReq = {
          body: {
            userId: oldTransaction.userId,
            amount: oldTransaction.amount,
            txnId: newTransaction.txnId,
            // Set the amount for the transaction based on recurring payment information
            // Set other fields for the transaction based on recurring payment information
            companyName: oldTransaction.companyName,
            companyContact: oldTransaction.companyContact,
            companyEmail: oldTransaction.companyEmail,
            expectedDate: currentDate,
            //   initiationDate: currentDate,
            country: oldTransaction.country,
            description: oldTransaction.description,
            isDraft: oldTransaction.isDraft,
            RBIpurposeCode: oldTransaction.RBIpurposeCode,
            paymentStatus: oldTransaction.paymentStatus,
          },
        };

        inv.generateInvoicePdf(customReq, (pdfPath) => {
            if (pdfPath) {
              console.log("PDF saved:", pdfPath);
              // You can also save the PDF path to the database if needed
            } else {
              console.error("Error generating PDF");
            }
        });

        // Handle additional documents
        const oldAdditionalDocumentsDirectory = path.join(
          __dirname,
          "../public/additionalDocuments",
          oldTransaction.txnId
        );

        if (fs.existsSync(oldAdditionalDocumentsDirectory)) {
          const files = fs.readdirSync(oldAdditionalDocumentsDirectory);

          files.forEach((file) => {
            // Move each file from the old directory to the new directory
            const oldFilePath = path.join(
              oldAdditionalDocumentsDirectory,
              file
            );
            const newAdditionalDocumentsDirectory = path.join(
              __dirname,
              "../public/additionalDocuments",
              newTransaction.txnId
            );
            // Create the directory if it doesn't exist
            if (!fs.existsSync(newAdditionalDocumentsDirectory)) {
              fs.mkdirSync(newAdditionalDocumentsDirectory, {
                recursive: true,
              });
            }
            const newFilePath = path.join(
              newAdditionalDocumentsDirectory,
              file
            );
            fs.renameSync(oldFilePath, newFilePath);
            // You can also save the new file path to the database if needed
          });

          // Remove the old additional documents directory
          //   fs.rmdirSync(oldAdditionalDocumentsDirectory, { recursive: true });
        }
        await newTransaction.save();
        recurringPayment.txnId = newTransaction._id;
        await recurringPayment.save();
      }

      console.log(
        "New transactions created for recurring payments:",
        recurringPayments.length
      );
    } catch (error) {
      console.error(
        "Error creating transactions for recurring payments:",
        error
      );
    }
  });
};

module.exports = startRecurringPaymentScheduler;

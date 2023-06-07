const puppeteer = require('puppeteer');
const ejs = require('ejs');
const fs = require('fs');
const path = require('path');

async function generatePdf(transaction, callback) {
  // const { txnId, amount, date } = transaction;
  // console.log("GenPDF: ", txnId, " ", amount, " ", date, " ", transaction);
  const txn = {
    txnId: transaction.txnId,
    amount: transaction.amount,
    date: transaction.date
  }
  console.log("GenPDF: ", txn.txnId, " ", txn.amount, " ", txn.date, " ");

  // Read the EJS template file
  const templatePath = path.resolve('./views/layouts/invoice.ejs');
  const templateContent = fs.readFileSync(templatePath, 'utf8');

  // Compile the EJS template with data
  const html = ejs.render(templateContent, { txnId:txn.txnId, amount:txn.amount, date:txn.date });

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html);

    const pdfBuffer = await page.pdf({ format: 'A4' });
    console.log("await browser close")
    await browser.close();

    callback(pdfBuffer);
  } catch (error) {
    console.error('Error generating PDF:', error);
    callback(null);
  }
}

async function generateInvoicePdf(transaction, callback) {
  const { txnId, amount } = transaction;
  const date = transaction.expectedDate;
  // Read the EJS template file
  const templatePath = path.resolve('./views/layouts/invoice.ejs');
  const templateContent = fs.readFileSync(templatePath, 'utf8');

  // Compile the EJS template with data
  const html = ejs.render(templateContent, { txnId, amount, date });

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setContent(html);

    const pdfBuffer = await page.pdf({ format: 'A4' });

    await browser.close();

    // Specify the directory path to save the PDF
    const directoryPath = path.join(__dirname, '../public/invoice', txnId);

    // Create the directory if it doesn't exist
    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }

    // Specify the path to save the PDF
    const pdfPath = path.join(directoryPath, 'invoice.pdf');

    // Write the PDF buffer to a file
    fs.writeFile(pdfPath, pdfBuffer, (error) => {
      if (error) {
        console.error('Error saving PDF:', error);
        callback(null);
      } else {
        console.log('PDF saved:', pdfPath);
        callback(pdfPath);
      }
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
    callback(null);
  }
}


module.exports = {
  generatePdf,
  generateInvoicePdf
}
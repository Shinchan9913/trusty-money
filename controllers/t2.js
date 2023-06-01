const mongoose = require('mongoose');
const User = require('../models/userModel');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/trusty-money', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Wait for the connection to be established
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');

  // Find and update user data
  findAndUpdateUser('64789af182cc3566508670d8').then(() => {
    // Disconnect from MongoDB
    mongoose.connection.close(() => {
      console.log('Disconnected from MongoDB');
    });
  }).catch((err) => {
    console.error('Error updating user:', err);
    // Disconnect from MongoDB
    mongoose.connection.close(() => {
      console.log('Disconnected from MongoDB');
    });
  });
});

// Function to find and update user data
async function findAndUpdateUser(userId) {
  try {
    // Find the user by userId
    const user = await User.findOne({ _id: userId });

    if (user) {
      // Update bankAccounts field
      user.bankAccounts.push({
        country: 'USA',
        vbAccountNumber: 'VB03006',
        routingNumber: '1098762',
        accountType: 'Business',
        bankName: 'Bank of Baroda',
      });

      user.bankAccounts.push({
        country: 'China',
        vbAccountNumber: 'VB03007',
        routingNumber: '1098764',
        accountType: 'Personal',
        bankName: 'ICICI Bank',
      });
      user.bankAccounts.push({
        country: 'India',
        vbAccountNumber: 'VB03012',
        routingNumber: '1098792',
        accountType: 'Business',
        bankName: 'SBI Bank',
      });


      // Save the updated user document
      console.log(await user.save())

      console.log('User data updated:', user);
    } else {
      console.log('User not found');
    }
  } catch (err) {
    throw err;
  }
}

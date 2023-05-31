// const config = require('../config/config')

// console.log(config.smpt.mail)
// console.log(config.smpt.pass)

// Import necessary modules

const mongoose = require('mongoose');
const userModel = require('../models/userModel'); // Update with the actual path to your userModel file
const bcrypt = require('bcrypt')
const kycModel = require('../models/kycModel')

const hashPass = async(password) => {
    try {
        securePass = await bcrypt.hash(password, 9)
        return securePass

    } catch (error) {
        console.log(error)
    }
}

// Import necessary modules
// Update with the actual path to your userModel file

async function saveUser() {
  try {
    // Connect to MongoDB
    await mongoose.connect('mongodb://localhost:27017/trusty-money', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to MongoDB');

    // // Assuming you have a function that hashes the password asynchronously
    // const hashedPass = await hashPass('1111');

    // // Create a new user document
    // const newUser = new userModel({
    //   name: 'Trusty User 1',
    //   email: 'trusty@gmail.com',
    //   mobile: '9111405923',
    //   password: hashedPass,
    //   accountNo: 'SBI000099786445',
    //   routingNo: '45456767',
    //   accountType: 'Pata nai types',
    //   bankName: 'State Bank of India',
    //   is_verified: 1,
    //   is_admin: 1,
    // });

    // // Save the new user document
    // await newUser.save();
    // console.log('User saved successfully');

    const newKYC = new kycModel({
        userId: '64705640bf5e14cefae4e780',
        panNumber: 'ASDFG1234',
        companyName: 'Indian T-shirts',
        companyNickname: 'T-shirt wala',
        GSTIN: 9091039120493,
        companyWebsite: 'tshirtwala.com',
        CIN: 'pta nai kya ayega',
        primaryBusiness: 'T-shirt bechna',
        businessName: 'yaha bhi kuch kuch ayega',
        accountNumber: '0009891099',
        IFSC: 'KTBK0001009'
    })

    await newKYC.save()
    console.log('kyc successful')
  } catch (error) {
    console.error('Error saving user:', error);
  } finally {
    // Disconnect from MongoDB after saving the user or if an error occurred
    mongoose.disconnect();
  }
}

// Call the async function to save the user
saveUser().catch((error) => {
  console.error('Error:', error);
});


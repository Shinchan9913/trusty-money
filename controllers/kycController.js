const kyc = require('../models/kycModel')
const User = require('../models/userModel')

const loadKYC = async(req, res) => {
    try {
        res.render('kyc1')
    } catch (error) {
        console.log(error.message)
    }
}

const form1 = async(req, res) =>{
    try {
        if (!req.session.user_id) {
            // res.status(401).send('Unauthorized');
            res.redirect('/')
            return;
        }else{
            const userId = req.session.user_id
            console.log(userId)
            
            // panNumber = req.body.panNumber
            // console.log(panNumber)
            console.log(req.body)
            const newKYC = new kyc({
                userId: userId,
                panNumber: req.body.panNumber,
                companyName: req.body.companyName,
                companyNickname: req.body.companyNickname,
                GSTIN: req.body.GSTIN,
                companyWebsite: req.body.companyWebsite,
                CIN: req.body.CIN,
                primaryBusiness: req.body.primaryBusiness,
            })
        
            const kycdata = await newKYC.save()
            console.log(kycdata);
            res.redirect('/KYC/form2')
        }
    } catch (error) {
        console.log(error.message)
    }
}

const form2 = async(req, res) => {
    try {
        res.render('kyc2')
    } catch (error) {
        console.log(error.message)
    }
}
const form3 = async(req, res) => {
    try {
        res.render('kyc3')
    } catch (error) {
        console.log(error.message)
    }
}
const form3p = async(req, res) => {
    try {
        const userId = req.session.user_id;

        // Find the existing KYC document based on the userId
        const existingKYC = await kyc.findOne({ userId:userId });

        if (!existingKYC) {
        console.error('No existing KYC document found');
        return;
        }

        // Update the KYC document with the new form data
        existingKYC.businessName = req.body.businessName;
        existingKYC.accountNumber = req.body.accountNumber;
        existingKYC.IFSC = req.body.IFSC;
        existingKYC.bankName = req.body.bankName;

        try {
        // Save the updated KYC document
        const updatedKYC = await existingKYC.save();
        console.log('KYC document updated successfully:', updatedKYC);
        } catch (error) {
        console.error('Error saving updated KYC document:', error);
        }

    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    loadKYC,
    form1,
    form2,
    form3,
    form3p
}
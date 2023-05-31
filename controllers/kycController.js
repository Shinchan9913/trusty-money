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



module.exports = {
    loadKYC,
    form1,
}
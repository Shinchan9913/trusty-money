const isLogin = async(req, res, next) =>{
    try {
        if(req.session.user_id){
            next()
        }
        else{
            res.redirect('/')
        }
        
    } catch (error) {
        console.log(error.message)
    }
}

const isLogout = async(req, res, next) =>{
    try {
        if(req.session.user_id)
            res.redirect('/home')
        next()
    } catch (error) {
        console.log(error.message)
    }
}

const verifyKYC = async(req, res, next) =>{
    try {
        if(req.body.panNumber == "ASDFG1234H"){}
        else{
            res.render('kyc', {error : "INVALID PAN!"})
        }
        next();
    } catch (error) {
        console.log(error.message)
    }
}

module.exports = {
    isLogin,
    isLogout,
    verifyKYC
}
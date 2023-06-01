
function create_account(){
    document.getElementById("create_account").style.display= "flex";
    document.getElementById("header").style.opacity="0.6";
    document.getElementById("container_center").style.opacity="0.6";
    document.getElementById("dashboard_img").style.opacity="0.6";
}

function head_acc_create(){
    document.getElementById("welcome").style.display= "none";
    document.getElementById("create").style.display= "flex";
}

function head_to_OTP(){
    
    document.getElementById("otp_verif").style.display= "block";
    document.getElementById("create_form").style.display="none";
    document.getElementById("create_footer").style.display="none";

}
function head_to_email(){
    
    document.getElementById("otp_verif").style.display= "none";
    document.getElementById("enter_email").style.display= "block";
}
function head_to_otp(){
    
    document.getElementById("otp_verif_email").style.display= "block";
    document.getElementById("enter_email").style.display= "none";
}
function head_to_password(){
    
    document.getElementById("otp_verif_email").style.display= "none";
    document.getElementById("enter_password").style.display= "block";
}

/* faq*/

function forgot_password(){
    document.getElementById("h1").style.display="none";
    document.getElementById("h2").style.display="none";
    document.getElementById("forgot_password").style.display="block";
}

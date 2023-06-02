
function click_drafts(){
    document.getElementById("main_body_info").style.display = "none";
    document.getElementById("drafts").style.display = "block";
}
function invoice_popup(){

    document.getElementById("new_transaction").style.display = "flex";
    document.getElementById("new_transaction").style.border="2px solid gray";
    document.getElementById("sidebar").style.opacity="0.6";
    document.getElementById("main_body").style.opacity="0.6";
}

function payment_request(){
    document.getElementById("new_transaction").style.display = "none";
    document.getElementById("payment_request").style.display = "block";     
}

function generate_invoice(){
    document.getElementById("new_transaction").style.display = "none";
    document.getElementById("container_outer1").style.display = "block";
    
}

function main_click(){
  /*  document.getElementById("new_transaction").style.display='none'; */
    document.getElementById("sidebar").style.opacity="1";
    document.getElementById("main_body").style.opacity="1";
    document.getElementById("sharepop").style.display='none';
    document.getElementById("rbi_code_pop").style.display='none';
    document.getElementById("onepop").style.display='none';
    document.getElementById("twopop").style.display='none';
    document.getElementById("threepop").style.display='none';
    document.getElementById("rbi_code_pop2").style.display='none';
    document.getElementById("onepop2").style.display='none';
    document.getElementById("twopop2").style.display='none';
    document.getElementById("threepop2").style.display='none';
    document.getElementById("payment_request").style.opacity = "1";
    document.getElementById("rec_pay_pop").style.display = "none";
    document.getElementById("container_outer1").style.opacity='1';
}

function close_popup(){
    document.getElementById("twopop").style.display='none';
    document.getElementById("onepop").style.display='none';
    document.getElementById("rbi_code_pop").style.display='none';
    document.getElementById("threepop").style.display='none';
    document.getElementById("twopop2").style.display='none';
    document.getElementById("onepop2").style.display='none';
    document.getElementById("rbi_code_pop2").style.display='none';
    document.getElementById("threepop2").style.display='none';
    document.getElementById("payment_request").style.display='none';
    document.getElementById("sharepop").style.display='none';
    document.getElementById("container_outer1").style.display='none';
   /* document.getElementById("sidebar").style.opacity="1"; 
    document.getElementById("main_body").style.opacity="1";*/
    document.getElementById("rec_pay_pop").style.display = "none";
    
}

function share(){
    // document.getElementById("button_21")
    document.getElementById("sidebar").style.opacity="0.1";
    document.getElementById("main_body").style.opacity="0.1";
    document.getElementById("sharepop").style.display="block";
    document.getElementById("payment_request").style.opacity = "0.6";
    document.getElementById("close_image").style.opacity = "1";
    document.getElementById("container_outer1").style.opacity='0.6';
    
}

function rbi_code_popup(){
    document.getElementById("sidebar").style.opacity="0";
    document.getElementById("main_body").style.opacity="0";
    document.getElementById("payment_request").style.opacity = "0.6";
    document.getElementById("rbi_code_pop").style.display="block";  
    document.getElementById("close_image").style.opacity = "1";

}

function arise1(){
    document.getElementById("onepop").style.display='block';
    document.getElementById("twopop").style.display='none';
    document.getElementById("threepop").style.display='none';
}
function arise2(){
    document.getElementById("onepop").style.display='none';
    document.getElementById("twopop").style.display='block';
    document.getElementById("threepop").style.display='none';
}
function arise3(){
    document.getElementById("onepop").style.display='none';
    document.getElementById("twopop").style.display='none';
    document.getElementById("close_image").style.opacity = "1";
    document.getElementById("threepop").style.display='block';
}
function rbi_code_popup2(){
    document.getElementById("sidebar").style.opacity="0";
    document.getElementById("main_body").style.opacity="0";
    document.getElementById("container_outer1").style.opacity = "0.5";
    document.getElementById("rbi_code_pop2").style.display="block";  
    document.getElementById("close_image").style.opacity = "1";

}

function arise1_2(){
    document.getElementById("onepop2").style.display='block';
    document.getElementById("twopop2").style.display='none';
    document.getElementById("threepop2").style.display='none';
}
function arise2_2(){
    document.getElementById("onepop2").style.display='none';
    document.getElementById("twopop2").style.display='block';
    document.getElementById("threepop2").style.display='none';
}
function arise3_2(){
    document.getElementById("onepop2").style.display='none';
    document.getElementById("twopop2").style.display='none';
    document.getElementById("close_image").style.opacity = "1";
    document.getElementById("threepop2").style.display='block';
}

function arise4(){
    document.getElementById("sidebar").style.opacity="0";
    document.getElementById("main_body").style.opacity="0";
    document.getElementById("payment_request").style.opacity = "0.6";
    document.getElementById("rec_pay_pop").style.display = "block";
    document.getElementById("close_image").style.opacity = "1";
    document.getElementById("container_outer1").style.opacity='0.6';
    
}

function change(){
    document.getElementById("rec_pay_pop").style.left = "40%";
    document.getElementById("rec_pay_pop").style.top = "70%";
    document.getElementById("sharepop").style.left = "40%";
    document.getElementById("sharepop").style.top = "70%";
}

function popup(){
    document.getElementsByClassName("notif").style.display="block";
    document.getElementById("main_body").style.opacity="0.6";
}

function notif_display(){
    document.getElementById("notification_popup").style.display="block";
    document.getElementById("sidebar").style.opacity="0.5";
    document.getElementById("main_body").style.opacity="0.5";
    document.getElementById("container_2").style.opacity="0.5";
}
function notif_hide(){
    document.getElementById("notification_popup").style.display="none";
    document.getElementById("sidebar").style.opacity="1";
    document.getElementById("main_body").style.opacity="1";
    document.getElementById("container_2").style.opacity="1";
}

function exchange_display(){
    document.getElementById("check_exc_rate_popup").style.display="block";
    document.getElementById("sidebar").style.opacity="0.5";
    document.getElementById("main_body").style.opacity="0.5";
    document.getElementById("container_2").style.opacity="0.5";
}
function exchange_hide(){
    document.getElementById("check_exc_rate_popup").style.display="none";
    document.getElementById("sidebar").style.opacity="1";
    document.getElementById("main_body").style.opacity="1";
    document.getElementById("container_2").style.opacity="1";
}
function rate_display(){
    document.getElementById("rate_alert_popup").style.display="block";
    document.getElementById("sidebar").style.opacity="0.5";
    document.getElementById("main_body").style.opacity="0.5";
    document.getElementById("container_2").style.opacity="0.5";
}
function rate_hide(){
    document.getElementById("rate_alert_popup").style.display="none";
    document.getElementById("sidebar").style.opacity="1";
    document.getElementById("main_body").style.opacity="1";
    document.getElementById("container_2").style.opacity="1";
}

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
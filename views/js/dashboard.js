function redirectToAccount() {
  window.location.href = "/myAccount";
}

//rasi


function click_drafts() {
  document.getElementById("main_body_info").style.display = "none";
  document.getElementById("drafts").style.display = "block";
}
function invoice_popup() {
  document.querySelector(".overlay0").style.display = "block";
  document.body.classList.add("popup-open");
  document.getElementById("new_transaction").style.display = "flex";
  document.getElementById("new_transaction").style.border = "2px solid gray";
  document.getElementById("sidebar").style.opacity = "0.6";
  document.getElementById("main_body").style.opacity = "0.6";
}

function close_invoice_popup() {
  document.body.classList.remove("popup-open");
  document.querySelector(".overlay0").style.display = "none";
  document.getElementById("new_transaction").style.display = "none";
  document.getElementById("payment_request").style.display = "none";
  document.getElementById("container_outer1").style.display = "none";
  closePopup();
}

// function payment_request(){
//     document.body.classList.add('popup-open');
//     document.getElementById("new_transaction").style.display = "none";
//     document.getElementById("payment_request").style.display = "block";
// }
function payment_request() {
  var popup = document.querySelector(".popup");
  // var overlay3 = document.querySelector('overlay3');
  // overlay3.style.display = "block";
  document.body.classList.add("popup-open");
  document.getElementById("new_transaction").style.display = "none";
  document.getElementById("payment_request").style.display = "block";
}

function generate_invoice() {
  document.body.classList.remove("popup-open");
  document.getElementById("new_transaction").style.display = "none";
  document.getElementById("container_outer1").style.display = "block";
}

function main_click() {
  document.getElementById("sidebar").style.opacity = "1";
  document.getElementById("main_body").style.opacity = "1";
  document.getElementById("popup2").style.display = "none";
  document.getElementById("rbi_code_pop").style.display = "none";
  document.getElementById("onepop").style.display = "none";
  document.getElementById("twopop").style.display = "none";
  document.getElementById("threepop").style.display = "none";
  document.getElementById("rbi_code_pop2").style.display = "none";
  document.getElementById("onepop2").style.display = "none";
  document.getElementById("twopop2").style.display = "none";
  document.getElementById("threepop2").style.display = "none";
  document.getElementById("payment_request").style.opacity = "1";
  document.getElementById("rec_pay_pop").style.display = "none";
  document.getElementById("container_outer1").style.opacity = "1";
}

function close_popup() {
  document.getElementById("twopop").style.display = "none";
  document.getElementById("onepop").style.display = "none";
  document.getElementById("rbi_code_pop").style.display = "none";
  document.getElementById("threepop").style.display = "none";
  document.getElementById("twopop2").style.display = "none";
  document.getElementById("onepop2").style.display = "none";
  document.getElementById("rbi_code_pop2").style.display = "none";
  document.getElementById("threepop2").style.display = "none";
  document.getElementById("payment_request").style.display = "none";
  document.getElementById("popup2").style.display = "none";
  document.getElementById("container_outer1").style.display = "none";
  /* document.getElementById("sidebar").style.opacity="1"; 
    document.getElementById("main_body").style.opacity="1";*/
  document.getElementById("rec_pay_pop").style.display = "none";
}

function share() {
  // document.getElementById("button_21")
  document.querySelector(".overlay1").style.display = "block";
  document.getElementById("sidebar").style.opacity = "0.1";
  document.getElementById("main_body").style.opacity = "0.1";
  document.getElementById("popup2").style.display = "block";
  document.getElementById("payment_request").style.opacity = "0.5";
  document.getElementById("close_image").style.opacity = "1";
  document.getElementById("container_outer1").style.opacity = "0.6";
}

// function close_share_popup(){
//     document.querySelector(".overlay1").style.display = "none";
//     document.getElementById("popup2").style.display="none"
//     document.getElementById("sidebar").style.opacity="1";
//     document.getElementById("main_body").style.opacity="1";
//     document.getElementById("payment_request").style.opacity = "1";
//     document.getElementById("close_image").style.opacity = "1";
//     document.getElementById("container_outer1").style.opacity='1';
// }

function rbi_code_popup() {
  document.getElementById("sidebar").style.opacity = "0";
  document.getElementById("main_body").style.opacity = "0";
  document.getElementById("payment_request").style.opacity = "0.6";
  document.getElementById("rbi_code_pop").style.display = "block";
  document.getElementById("close_image").style.opacity = "1";
}

function arise1() {
  document.getElementById("onepop").style.display = "block";
  document.getElementById("twopop").style.display = "none";
  document.getElementById("threepop").style.display = "none";
}
function arise2() {
  document.getElementById("onepop").style.display = "none";
  document.getElementById("twopop").style.display = "block";
  document.getElementById("threepop").style.display = "none";
}
function arise3() {
  document.getElementById("onepop").style.display = "none";
  document.getElementById("twopop").style.display = "none";
  document.getElementById("close_image").style.opacity = "1";
  document.getElementById("threepop").style.display = "block";
}
function rbi_code_popup2() {
  document.getElementById("sidebar").style.opacity = "0";
  document.getElementById("main_body").style.opacity = "0";
  document.getElementById("container_outer1").style.opacity = "0.5";
  document.getElementById("rbi_code_pop2").style.display = "block";
  document.getElementById("close_image").style.opacity = "1";
}

function arise1_2() {
  document.getElementById("onepop2").style.display = "block";
  document.getElementById("twopop2").style.display = "none";
  document.getElementById("threepop2").style.display = "none";
}
function arise2_2() {
  document.getElementById("onepop2").style.display = "none";
  document.getElementById("twopop2").style.display = "block";
  document.getElementById("threepop2").style.display = "none";
}
function arise3_2() {
  document.getElementById("onepop2").style.display = "none";
  document.getElementById("twopop2").style.display = "none";
  document.getElementById("close_image").style.opacity = "1";
  document.getElementById("threepop2").style.display = "block";
}

function arise4() {
  document.getElementById("sidebar").style.opacity = "0";
  document.getElementById("main_body").style.opacity = "0";
  document.getElementById("payment_request").style.opacity = "0.6";
  document.getElementById("rec_pay_pop").style.display = "block";
  document.getElementById("close_image").style.opacity = "1";
  document.getElementById("container_outer1").style.opacity = "0.6";
}

function change() {
  document.getElementById("rec_pay_pop").style.left = "40%";
  document.getElementById("rec_pay_pop").style.top = "70%";
  document.getElementById("popup2").style.left = "40%";
  document.getElementById("popup2").style.top = "70%";
}

function popup() {
  document.getElementsByClassName("notif").style.display = "block";
  document.getElementById("main_body").style.opacity = "0.6";
}

function notif_display() {
  document.getElementById("notification_popup").style.display = "block";
  document.getElementById("sidebar").style.opacity = "0.5";
  document.getElementById("main_body").style.opacity = "0.5";
  document.getElementById("container_2").style.opacity = "0.5";
}
function notif_hide() {
  document.getElementById("notification_popup").style.display = "none";
  document.getElementById("sidebar").style.opacity = "1";
  document.getElementById("main_body").style.opacity = "1";
  document.getElementById("container_2").style.opacity = "1";
}

function exchange_display() {
  document.getElementById("check_exc_rate_popup").style.display = "block";
  document.getElementById("sidebar").style.opacity = "0.5";
  document.getElementById("main_body").style.opacity = "0.5";
  document.getElementById("container_2").style.opacity = "0.5";
}
function exchange_hide() {
  document.getElementById("check_exc_rate_popup").style.display = "none";
  document.getElementById("sidebar").style.opacity = "1";
  document.getElementById("main_body").style.opacity = "1";
  document.getElementById("container_2").style.opacity = "1";
}
function rate_display() {
  document.getElementById("rate_alert_popup").style.display = "block";
  document.getElementById("sidebar").style.opacity = "0.5";
  document.getElementById("main_body").style.opacity = "0.5";
  document.getElementById("container_2").style.opacity = "0.5";
}
function rate_hide() {
  document.getElementById("rate_alert_popup").style.display = "none";
  document.getElementById("sidebar").style.opacity = "1";
  document.getElementById("main_body").style.opacity = "1";
  document.getElementById("container_2").style.opacity = "1";
}

window.addEventListener("DOMContentLoaded", function () {
  var popupState = localStorage.getItem("popupState");
  if (popupState === "open") {
    payment_request();
    var inputValue = localStorage.getItem("popupInputValue");
    var input = document.getElementById("popupInput");
    input.value = inputValue;
  }

  var popup2State = sessionStorage.getItem("popup2State");
  if (popup2State === "open") {
    openPopup2();
  }
});

function closePopup() {
  var overlay0 = document.querySelector(".overlay");
  var popup = document.querySelector(".popup");
  var input = document.getElementById("popupInput");

  overlay0.style.display = "none";
  popup.style.display = "none";

  input.value = "";
  localStorage.removeItem("popupState");
  localStorage.removeItem("popupInputValue");
}

function shareForm(event) {
  event.preventDefault();
  var input = document.getElementById("popupInput");
  // console.log('Submitted value:', input.value);

  localStorage.setItem("popupState", "close");
  localStorage.setItem("popupInputValue", input.value);

  sessionStorage.setItem("popup2State", "open");
  location.reload(); // Refresh the page
}

function closePopup2() {
  var popup2 = document.querySelector(".popup2");
  var popup = document.querySelector(".popup");
  popup2.style.display = "none";
  popup.style.display = "none";
  sessionStorage.removeItem("popup2State");
  document.querySelector(".overlay1").style.display = "none";
  document.querySelector(".overlay0").style.display = "none";
  document.getElementById("popup2").style.display = "none";
  document.getElementById("sidebar").style.opacity = "1";
  document.getElementById("main_body").style.opacity = "1";
  document.getElementById("payment_request").style.opacity = "1";
  document.getElementById("close_image").style.opacity = "1";
  document.getElementById("container_outer1").style.opacity = "1";
}

function openPopup2() {
  var popup2 = document.querySelector(".popup2");
  popup2.style.display = "block";
  document.querySelector(".overlay1").style.display = "block";
  // document.querySelector(".overlay1").style.display = "block";
  // document.getElementById("sidebar").style.opacity="0.1";
  // document.getElementById("main_body").style.opacity="0.1";
  // document.getElementById("popup2").style.display="block";
  // document.getElementById("payment_request").style.opacity = "0.5";
  // document.getElementById("close_image").style.opacity = "1";
  // document.getElementById("container_outer1").style.opacity='0.6';
}

function open_dot_popup_ra(spanIdtransactionId) {
  fetch("/dashboard/extras", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ transactionId }),
  })
    .then((response) => response.json())
    .then((data) => {
      const {
        followUpEmailUrl,
        firaEmailUrl,
        firaDownloadUrl,
        invoiceDownloadUrl,
        shareViaEmail,
        shareViaWhatsapp
      } = data;

      // Update the href attribute of each <li> element with the corresponding URL
      document.getElementById("followUpEmail").querySelector("a").href =
        followUpEmailUrl;
      document.getElementById("firaEmail").querySelector("a").href =
        firaEmailUrl;
      document.getElementById("firaDownload").querySelector("a").href =
        firaDownloadUrl;
      document.getElementById("invoiceDownload").querySelector("a").href =
        invoiceDownloadUrl;
      document.getElementById("shareViaEmail").querySelector("a").href =
        shareViaEmail;
      document.getElementById("shareViaWhatsapp").querySelector("a").href =
        shareViaWhatsapp;

      document.querySelector(".overlay-ra").style.display = "block";
      document.body.classList.add('popup-open');
    document.querySelector(".ra-popup").style.display = "block";
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    document.getElementById("main_body").style.opacity="0.6";

        var ra_popup = document.querySelector('.ra-popup');
  
        // Change the position based on the button ID
        switch (spanId) {
          case "ra-popup-1":
            ra_popup.style.top = "420px";
            break;
          case "ra-popup-2":
            ra_popup.style.top = "450px";
            break;
          case "ra-popup-3":
            ra_popup.style.top = "480px";
            break;
          case "ra-popup-4":
            ra_popup.style.top = "510px";
            break;
          case "ra-popup-5":
            ra_popup.style.top = "540px";
            break;
          default:
            // If an unknown button is clicked, reset the position
            ra_popup.style.top = "-38%";
            break;
        }
        if(document.getElementById("drafts").style.display === "block"){
            switch (spanId) {
                case "ra-popup-1":
                  ra_popup.style.top = "85px";
                  break;
                case "ra-popup-2":
                  ra_popup.style.top = "115px";
                  break;
                case "ra-popup-3":
                  ra_popup.style.top = "145px";
                  break;
                case "ra-popup-4":
                  ra_popup.style.top = "175px";
                  break;
                case "ra-popup-5":
                  ra_popup.style.top = "205px";
                  break;
                default:
                  // If an unknown button is clicked, reset the position
                  ra_popup.style.top = "-500%";
                  break;
              }
        }
}
function close_dot_popup_ra(){
    document.body.classList.remove('popup-open');
    document.querySelector('.overlay-ra').style.display = "none";
    document.querySelector('.ra-popup').style.display = "none";
}

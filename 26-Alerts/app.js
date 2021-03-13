window.addEventListener("DOMContentLoaded", function() {
    //Doküman Hazır

    var inputUserName, inputUserPassword;
    var btnRegister = document.getElementById("btn-register");
    var alertSuccess = document.querySelector(".alert-success");
    var alertDanger = document.querySelector(".alert-danger");
    var alertWarning = document.querySelector(".alert-warning");
    var alerts = document.querySelectorAll(".alert");
    var alertCloseButtons = document.querySelectorAll(".alert-close-button");

    // Tüm uyarıları temizle
    allRemoveAlerts();

    btnRegister.addEventListener("click", function() {
        allRemoveAlerts();
        inputUserName = document.getElementById("user-name").value.trim();
        inputUserPassword = document.getElementById("user-password").value.trim();
        if (inputUserName !== "" && inputUserPassword !== "") {
            //İçerik dolu
            if (inputUserName === "mert@gmail.com") {
                //Kullanıcı varsa tekrar kayıt edilemez
                alertDanger.style.display = "flex";
            } else {
                //Kullanıcı kayıt işlemi gerçekleştirilir.
                alertSuccess.style.display = "flex";
                autoRemoveAlert(alertSuccess);
            }
        } else {
            //İçerik boş
            alertWarning.style.display = "flex";
        }
    });

    alertCloseButtons.forEach(function(alertCloseButton){
        alertCloseButton.addEventListener("click",function(e){
            hideElement(e.target.parentElement);
        });
    });

    function hideElement(element){
        element.style.display="none";
    }

    function autoRemoveAlert(alert){
        setTimeout(() => {
            alert.style.display="none";
        }, 2000);
    }

    function allRemoveAlerts() {
        alerts.forEach(function(alert) {
            alert.style.display = "none";
        });
    }

});
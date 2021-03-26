window.addEventListener("DOMContentLoaded", function() {
    var eye = document.getElementsByClassName("fa-eye")[0];
    var inputPassword=document.getElementById("password");
    if (eye !== "undefined") {
        eye.addEventListener("click", function() {
            if (this.className === "far fa-eye") {
                this.className = "far fa-eye-slash";
                inputPassword.type="text";
            } else {
                this.className = "far fa-eye";
                inputPassword.type="password";
            }
        });
    }
});

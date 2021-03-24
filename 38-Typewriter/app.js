var i = 0;
var text = '60 Günde 60 Uygulama';
var speed = 100;
window.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".typewriter-text").innerHTML = "";
    typewriter();

});

function typewriter() {
    if (i < text.length) {
        document.querySelector(".typewriter-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typewriter, speed);
    }
}
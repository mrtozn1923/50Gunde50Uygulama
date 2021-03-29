var message,messageLength,messageMaxLength;
window.addEventListener("DOMContentLoaded", function() {

    message = document.getElementById("message");
    messageLength = document.getElementById("message-length");
    messageMaxLength=message.getAttribute("maxlength");
    updateMessageLength();
    message.addEventListener("keydown",function(){
        updateMessageLength();
    });

});

function updateMessageLength(){
    setTimeout(() => {
        messageLength.innerHTML=message.value.length+"/"+messageMaxLength;
    }, 100);   
}
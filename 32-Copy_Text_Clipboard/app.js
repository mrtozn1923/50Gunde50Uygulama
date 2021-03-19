var input,btnCopy,copyMessage;

window.addEventListener("DOMContentLoaded",function(){
    input=document.querySelector(".input");   
    btnCopy=document.querySelector(".icon");
    copyMessage=document.querySelector(".copy-message");

    btnCopy.addEventListener("click",function(){
        if(input.value!=="" && input.value!==null){
            input.select();
            document.execCommand("copy");
            showMessage("Kopyalandı.");
        }else{
            showMessage("İçerik Yok!");
        }
        
    });
});
function showMessage(text){
    copyMessage.innerText=text;
    copyMessage.style.opacity="1";
    setTimeout(() => {
        copyMessage.style.opacity="0";
    }, 400);
}
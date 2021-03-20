window.addEventListener("DOMContentLoaded",function(){

    var button=document.querySelector(".button");
    var snackbar=document.querySelector(".snackbar");

    button.addEventListener("click",function(){
        snackbar.className+=" show";
        setTimeout(() => {
                snackbar.className=snackbar.className.replace("show","");
        }, 3000);
    });

});
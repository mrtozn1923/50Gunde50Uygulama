window.addEventListener("DOMContentLoaded",function(){

    var image=document.querySelector("img");
    image.addEventListener("click",function(){
        this.classList.add("shake");
        setTimeout(() => {
            this.classList.remove("shake");
        }, 500);
    });

});
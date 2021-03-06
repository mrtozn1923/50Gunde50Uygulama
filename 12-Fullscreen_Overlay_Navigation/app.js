document.addEventListener('DOMContentLoaded',readyDOM);

function readyDOM(){
   var btnOpenNav=document.getElementById("btn-open-nav");
   var btnCloseNav=document.getElementById("btn-close-nav");
   var containerNav=document.querySelector(".container-nav");

   btnOpenNav.addEventListener("click",function(){
        containerNav.style.width="100%";
   });
   btnCloseNav.addEventListener("click",function(){
    containerNav.style.width="0";
});
}
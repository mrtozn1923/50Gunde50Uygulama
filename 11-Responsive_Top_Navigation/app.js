var btnMenu=document.getElementsByClassName("btn-menu")[0];
var navApp=document.getElementsByClassName("nav-app")[0];
var navLink=document.getElementsByClassName("nav-link");

var navLinkHeight=window.getComputedStyle(navLink[0]).height; //string
var navbarAppHeight=(navLinkHeight.substring(0,(navLinkHeight.length-2)))*navLink.length;

setNavbarStatus();
window.addEventListener("resize",function(){
    setNavbarStatus();
});

btnMenu.addEventListener("click",function(){
    navApp.style.transitionDuration="0.5s";
    if(window.getComputedStyle(navApp).maxHeight=="0px"){
        // navApp.style.maxHeight="max-content";
        navApp.style.maxHeight=navbarAppHeight+"px";
    }else{
        navApp.style.maxHeight="0px";
    }
});

function setNavbarStatus(){
    if(window.innerWidth>=768){
        navApp.style.maxHeight=navLinkHeight;
    }else{
        navApp.style.maxHeight="0px";
        navApp.style.transitionDuration="0s";
    }
}
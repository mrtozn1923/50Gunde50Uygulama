var sideNavigation=document.getElementsByClassName("side-navigation")[0];
var sideNavigationWidth;
var content=document.getElementsByClassName("content")[0];
var overlay=document.getElementById("overlay");

document.getElementById("btn-menu").addEventListener("click",function(){
    sideNavigationWidth=window.getComputedStyle(sideNavigation).width;
    
    if(sideNavigationWidth=="0px"){
        sideNavigation.style.width="250px";
        content.style.marginLeft="250px";
        setTimeout(() => {
            overlay.className="overlay";
        }, 600);
    }else if(sideNavigationWidth=="250px"){
        sideNavigation.style.width="0px";
        content.style.marginLeft="0px";
        overlay.className="";
    }
     
});
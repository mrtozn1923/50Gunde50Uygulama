var sideNavigation=document.getElementsByClassName("side-navigation")[0];
var sideNavigationWidth;

document.getElementById("btn-menu").addEventListener("click",function(){
    // console.log(sideNavigation.style.width);
    // console.log(window.getComputedStyle(sideNavigation).width);
    sideNavigationWidth=window.getComputedStyle(sideNavigation).width;
    if(sideNavigationWidth=="0px"){
        sideNavigation.style.width="250px";
    }else if(sideNavigationWidth=="250px"){
        sideNavigation.style.width="0px";
    }
     
});
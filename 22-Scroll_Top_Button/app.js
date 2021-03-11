var btnScrollTop=document.querySelector(".btn-scroll-top");

window.onscroll=function(){
    scrollFunction();
}

btnScrollTop.onclick=function(){
    backToTop();
}

function scrollFunction(){
    if(document.body.scrollTop>=150 || document.documentElement.scrollTop>=150){
        btnScrollTop.style.transform="translateY(0)";
    }else{
        btnScrollTop.style.transform="translateY(90px)";
    }
}

function backToTop(){
    document.body.scrollTop=0; //safari
    document.documentElement.scrollTop=0; //chrome, firefox, opera
}
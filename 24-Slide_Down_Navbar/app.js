window.addEventListener("DOMContentLoaded",function(){
    //Doküman Hazır
    var navbar=document.querySelector(".navbar");
    var currentScroll=document.documentElement.scrollTop;
    var oldScroll=0;
    window.onscroll=function(){
        currentScroll=document.documentElement.scrollTop;
        if(currentScroll>oldScroll){
            //aşağıya kaydırma (navbar gizle)
            oldScroll=currentScroll;
            navbar.style.transform="translateY(-70px)";
        }else{
            //yukarı kaydırma (navbar göster)
            oldScroll=currentScroll;
            navbar.style.transform="translateY(0)";
        }
    }
});

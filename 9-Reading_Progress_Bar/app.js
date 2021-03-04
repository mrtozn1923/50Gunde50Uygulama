var documentHeight;
var browserHeight;
var scrollPosition;
var progressValue;
var progressBar=document.getElementsByClassName("progress-bar")[0];

window.addEventListener('scroll', function() {
    // console.log("scrollTop:"+document.documentElement.scrollTop,"scrollHeight:"+document.documentElement.scrollHeight,window.innerHeight);
    calculateProgress();

});
window.addEventListener('resize',function(){
    // console.log("h:"+window.innerHeight,"w:"+window.innerWidth,"dh:"+document.documentElement.scrollHeight);
    documentHeight = document.documentElement.scrollHeight;
    browserHeight = window.innerHeight;
    if(browserHeight>=documentHeight){
        //içeriğin tamamı görüntülenebiliyor
        progressBar.style.width="100%";
    }else{
        calculateProgress();
    }
});

function calculateProgress(){
    documentHeight = document.documentElement.scrollHeight;
    browserHeight = window.innerHeight;
    scrollPosition = document.documentElement.scrollTop;
    progressValue = ((scrollPosition) / (documentHeight - browserHeight)) * 100;

    // console.log(progressValue);
    progressBar.style.width=progressValue+"%";
}
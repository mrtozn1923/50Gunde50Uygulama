var timer,reset,time,hour=0,minute=0,second=0,interval;
window.addEventListener("DOMContentLoaded",function(){

    timer=document.querySelector(".fa-stopwatch");
    reset=document.querySelector(".fa-trash");
    time=document.querySelector(".time");

    timer.addEventListener("click",function(){
        timer.classList.toggle("active");
        if(document.querySelector(".active")){
            interval=setInterval(start,1000);
        }else{
            stop();
        }   
    });   
    reset.addEventListener("click",function(){
        clear();
    });
});
function start(){ 
    if(second<59){second++;}
    else{
        second=0;
        if(minute<59){minute++;}
        else{
            minute=0;
            hour++;
        }
    }
    timeWrite(hour,minute,second);
}
function stop(){ 
    clearInterval(interval);
}
function clear(){
    hour=0;minute=0;second=0; 
    timeWrite(0,0,0);
    clearInterval(interval);
    timer.classList.remove("active");
}
function timeWrite(hour,minute,second){
    time.innerText=`${hour}:${minute}:${second}`;
}
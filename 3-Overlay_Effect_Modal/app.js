document.getElementById("btn-login").addEventListener("click",function(){
    document.getElementById("overlay").style.display="flex";
});
const overlay=document.getElementById("overlay");
overlay.addEventListener("click",function(e){
    if(e.target.id==="overlay"){
        this.style.display="none";
    }
});
document.getElementById("btn-form-close").addEventListener("click",function(){
    overlay.style.display="none";
});
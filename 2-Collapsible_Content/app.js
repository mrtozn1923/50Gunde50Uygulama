let collapsible=document.getElementsByClassName("collapsible");

// for(var i=0; i<collapsible.length;i++){
//     collapsible[i].addEventListener("click",function(){
//         this.classList.toggle("active");
//         var content=this.nextElementSibling;
//         if(content.style.display==="block"){
//             //görünür->gizli
//             content.style.display="none";
//         }
//         else{
//             //gizli->görünür
//             content.style.display="block";
//         }
//     });
// }

for(var i=0; i<collapsible.length;i++){
    collapsible[i].addEventListener("click",function(){
        collapseElement();
        this.classList.toggle("active");
        var content=this.nextElementSibling;
        if(content.style.maxHeight){
            //görünür->gizli
            content.style.maxHeight=null;
        }
        else{
            //gizli->görünür
            content.style.maxHeight=content.scrollHeight+"px";
        }
    });
}

function collapseElement(){
    let activeElement=document.querySelector(".active");
    console.log(activeElement);
    if(activeElement!==null){
        activeElement.classList.remove("active");
        activeElement.nextElementSibling.style.maxHeight=null;
    }
}

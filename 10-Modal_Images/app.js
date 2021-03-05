var images=document.querySelectorAll(".image");
var imageName;
var modal=document.getElementsByClassName("modal")[0];
var modalImage=document.querySelector(".modal>img");
var modalClose=document.getElementsByClassName("modal-close")[0];

images.forEach(function(image){
    image.addEventListener("click",function(e){
        // console.log(e.target);
        // console.log(e.target.src);
        // console.log(e.target.src.indexOf('sm-'));
        // console.log(e.target.src.substring(29));
        // console.log(e.target.src.substring(29+3));
        imageName=e.target.src.substring(e.target.src.indexOf('sm-')+3);
        modalImage.src=`images/${imageName}`;
        modal.style.display="flex";
    });
});
modalClose.addEventListener("click",function(){
    modal.style.display="none";
});

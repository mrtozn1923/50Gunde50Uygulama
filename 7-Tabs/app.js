let tabs=document.querySelectorAll(".tablinks");
document.querySelector("#tab1").style.display="block";
tabs.forEach(function(e){
    e.addEventListener("click",function(e){
        openTab(e);
    });
});

function openTab(e){

    let i,tabContent, tabLinks;
    let tab;
    tabContent=document.querySelectorAll(".tabcontent");
    for(i=0;i<tabContent.length;i++){
        tabContent[i].style.display="none";
    }

    // tablinks=document.querySelectorAll(".tablinks");
    // for(i=0;i<tabLinks.length;i++){
    //     tabLinks[i].className=tabLinks[i].className.replace("active","");
    // }
    tab= document.querySelector(".active");
    tab.className=tab.className.replace("active","");

    e.currentTarget.className+=" active";
    document.querySelector("#"+e.target.getAttribute("data-tab")).style.display="block";
}
var tabs=document.querySelectorAll(".tab");
var tabContents=document.querySelectorAll(".tabcontent");

tabContents[0].style.display="block";

tabs.forEach(function(e){
    e.addEventListener("click",function(){
        openTabContent(this);
    });
});

function openTabContent(tab){
    var activeTab=document.querySelector(".active");
    activeTab.className=activeTab.className.replace(" active","");
    tab.className+=" active";
    
    var arr=Array.prototype.slice.call(tabs);
    var selectedTabIndex=arr.indexOf(tab);

    tabContents.forEach(function(element){
        element.style.display="none";
    });
    tabContents[selectedTabIndex].style.display="block";

}
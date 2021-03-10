window.addEventListener("DOMContentLoaded",function(){
    //Doküman Hazır
    var filterInput=document.querySelector(".filter-input");
    var customers=document.querySelectorAll("tbody tr");
    var inputValue,fullName;

    filterInput.addEventListener("keyup",function(){
        inputValue=(this.value).toLowerCase();
        customers.forEach(function(customer){
            fullName=(customer.firstElementChild.textContent+" "+customer.lastElementChild.textContent).toLowerCase();
            if(fullName.indexOf(inputValue)===-1){
                //içerik bulunamadı
                customer.style.display="none";
            }else{
                customer.style.display="table-row";
            }
        });
    });
});
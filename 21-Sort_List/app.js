//asc-> artan desc->azalan
var sortCondition = "asc";
var customers, customerList = [],
    defaultCustomerList = [],
    btnSort, btnSortDefault;

window.addEventListener("DOMContentLoaded", function() {
    //Doküman Hazır
    customers = document.querySelectorAll(".customer-list li");
    btnSort = document.getElementById("btn-sort");
    btnSortDefault = document.getElementById("btn-sort-default");
    addCustomerToArray();
    btnSort.addEventListener("click", function() {
        sortCustomerList(function() {
            addCustomerToUI(true);
        });
    });
    btnSortDefault.addEventListener("click", function() {
        addCustomerToUI(false);
    });

});

function addCustomerToArray() {
    customers.forEach(customer => {
        customerList.push(customer.textContent);
        defaultCustomerList.push(customer.textContent);
    });
}

function sortCustomerList(callback) {
    if (sortCondition === "asc") {
        //artan->AZ
        customerList.sort(function(a, b) {
            if (a < b) { return -1; }
            if (a > b) { return 1; }
            return 0;
        });
        sortCondition = "desc";
    } else if (sortCondition === "desc") {
        //azalan->ZA
        customerList.sort(function(a, b) {
            if (a > b) { return -1; }
            if (a < b) { return 1; }
            return 0;
        });
        sortCondition="asc"
    }
    callback();
}

function addCustomerToUI(sort=true) {
    if(sort){
        customers.forEach((customer,index)=>{
            customer.textContent=customerList[index];
        });
    }else{
        customers.forEach((customer,index)=>{
            customer.textContent=defaultCustomerList[index];
        });
    }

}
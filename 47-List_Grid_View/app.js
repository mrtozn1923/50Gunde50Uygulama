var columns, btnGird, btnList;
window.addEventListener("DOMContentLoaded", function() {
    columns = document.querySelectorAll(".column");
    btnList=document.getElementById("btn-list");
    btnGird=document.getElementById("btn-grid");

    btnList.addEventListener("click", function() {
        listView();
    });
    btnGird.addEventListener("click", function() {
        gridView();
    });

});

function listView() {
    columns.forEach(column => {
        column.style.width = "100%";
    });
}

function gridView() {
    columns.forEach(column => {
        column.style.width = "calc(50% - 10px)";
    });
}
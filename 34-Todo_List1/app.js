var inputTodo;
var containerTodo;

window.addEventListener("DOMContentLoaded", function() {
    inputTodo = document.querySelector(".input-todo");
    containerTodo = document.querySelector(".container-todo");

    inputTodo.addEventListener("keydown", function(e) {
        if (e.keyCode === 13) {
            containerTodo.innerHTML += `
            <div class="todo-item">
                <div class="text">${inputTodo.value}</div>
                <div class="remove-todo"></div>
            </div>`;
            inputTodo.value="";
        }
    });

    containerTodo.addEventListener("click",function(e){
        if(e.target.className==="remove-todo"){
            e.target.parentElement.remove();
        }
    });
});
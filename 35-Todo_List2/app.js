var inputTodo,containerTodo,todoList,todo,dataId;

window.addEventListener("DOMContentLoaded", function() {
    inputTodo = document.querySelector(".input-todo");
    containerTodo = document.querySelector(".container-todo");

    if(localStorage.getItem("todoList")!==null){
        todoList=JSON.parse(localStorage.getItem("todoList"));
        //en son elemanın id değeri
        dataId=todoList[todoList.length-1].dataId+1;
        todoList.forEach(todo => {
            addUI(todo.value,todo.dataId);
        });
    }else{
        todoList=[];
        dataId=0;
    }

    inputTodo.addEventListener("keydown", function(e) {
        if (e.keyCode === 13) {
           addUI(inputTodo.value,dataId);
           todo={'dataId':dataId,'value':inputTodo.value};
           todoList.push(todo);
           localStorage.setItem("todoList",JSON.stringify(todoList));
            inputTodo.value="";
            dataId=todoList[todoList.length-1].dataId+1;
        }
    });
    containerTodo.addEventListener("click",function(e){
        if(e.target.className==="remove-todo"){

            todoList.forEach((todo,index)=>{
                if(todo.dataId==e.target.parentElement.getAttribute("data-id")){
                    todoList.splice(index,1);
                }
            });
            localStorage.setItem("todoList",JSON.stringify(todoList));
            e.target.parentElement.remove();
            dataId=todoList[todoList.length-1].dataId+1;
            //dizide eleman kalmadıysa ls sil
            if(todoList.length===0){
                localStorage.removeItem("todoList");
            }
        }
    });
});
function addUI(todo,dataId){
    containerTodo.innerHTML += `
    <div class="todo-item" data-id="${dataId}">
        <div class="text">${todo}</div>
        <div class="remove-todo"></div>
    </div>`;
}
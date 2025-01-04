let enterTodo = document.querySelector("input");
let addTodo = document.querySelector("#add-btn");
let todoList = document.querySelector("ul");
let delAll = document.querySelector("#clear-btn")

addTodo.addEventListener("click", function(){
    let todo = enterTodo.value;
    let li = document.createElement("li");
    li.innerText = todo;
    todoList.appendChild(li);
    enterTodo.value = "";
    let del = document.createElement("button");
    del.innerText = "Delete";
    li.appendChild(del);
});

todoList.addEventListener("click", function(e){
   if(e.target.tagName === "BUTTON"){
       e.target.parentElement.remove();
   }
});

delAll.addEventListener("click", function(){
    todoList.innerHTML = "";
});



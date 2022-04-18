const todos = []

const mainDiv = document.querySelector('#todo-list')

const form = document.querySelector('form')

const todoList = document.querySelector(".todo-items")

form.addEventListener('submit', addItem)

const input = document.querySelector('input')

function addItem (event) {
    event.preventDefault()

    const item = {
        id: Date.now(),
        task: input.value
    }

    todos.push(item)
    console.log(todos)

    displayListToScreen()
    input.value = ''
}

function displayListToScreen(){
    todoList.innerHTML = ``
    for (let i = 0; i < todos.length; i++) {
        const element = todos[i];
        const itemHTMl = 
        `
            <div class="todo-item">
                ${element.task} 
                <button onclick="deleteItem(${element.id})">Delete</button>
            </div>
        `
        todoList.innerHTML = todoList.innerHTML + itemHTMl
    }
}

// document.querySelector('#0').addEventListener('click', deleteItem)

function deleteItem(id){

    console.log("button ki ID hai - ", id)

    let itemIndex = -1
    for (let i = 0; i < todos.length; i++) {
        const element = todos[i];
        if(element.id === id){
            itemIndex = i
        }
    }

    todos.splice(itemIndex, 1)
    console.log("updated todos", todos)

    displayListToScreen()
}
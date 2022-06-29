const form = document.getElementById("form")
const input = document.getElementById("input")
const button = document.getElementById("button")
const todo = document.getElementById("todo")

let todoList = []

form.addEventListener("submit", (event) => {
    event.preventDefault()
    addTodo();
})

const addTodo = () => {
    const newTodo = input.value
    if (!newTodo) return console.log("No value! ❌") || alert("No value! ❌")
    todoList.push({
        text: newTodo,
        completed: false
    })
    localStorage.setItem("todos", JSON.stringify(todoList))
    
    render()
}

const render = () => {
    todo.innerHTML = null
    todoList = JSON.parse(localStorage.getItem("todos")) || []

    for (let i = 0; i < todoList.length; i++){
        let li = document.createElement("li")
        todo.appendChild(li)
        li.innerHTML = `${todoList[i].text}`

        let div = document.createElement("div")

        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        div.appendChild(checkbox)

        let btn = document.createElement("button")
        let text = document.createTextNode("X")
        btn.classList.add("deleteBtn")
        btn.appendChild(text)
        div.appendChild(btn)

        li.appendChild(div)
        checkbox.addEventListener("click", (event) => {
            todoList[i].completed = event.target.checked
            if (todoList[i].completed) {
                li.classList.add("completed")
                li.classList.remove("uncompleted")
                checkbox.checked = todoList[i].completed
            } else{
                li.classList.add("uncompleted")
                li.classList.remove("completed")
                checkbox.checked = todoList[i].completed
            }
        })
    }   
}
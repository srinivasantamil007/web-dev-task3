let button = document.getElementById('add')
let todoList = document.getElementById('todoList')
let input = document.getElementById('input')

let todos = [];

button.addEventListener('click', () => {
    todos.push(input.value)
    addtodos(input.value)
    input.value = ''
})

function addtodos(todo){
    let para = document.createElement('p')
    para.innerText = todo

    let deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.classList.add('delete-btn');
    
    para.appendChild(deleteBtn);
    
    todoList.appendChild(para)
    
    deleteBtn.addEventListener('click', () => { 
        todoList.removeChild(para);
        remove(todo);
    });

    para.addEventListener('click', (event) => {
        if (event.target !== deleteBtn) {
            para.style.textDecoration = 'line-through';
        }
    });
    
    function remove(todo){
        let index = todos.indexOf(todo)
        if (index > -1) {
            todos.splice(index, 1);
        }
        localStorage.setItem('todos',JSON.stringify(todos))
    }
}

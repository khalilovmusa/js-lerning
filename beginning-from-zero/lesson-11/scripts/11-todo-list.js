const todoList = ['adsdad', 'asdsds'];

renderTodoList();
function renderTodoList () {
    let todoListHTML = '';


    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }
    
    let container = document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    console.log(todoListHTML);
}



function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    todoList.push(name);
    console.log(todoList);

    inputElement.value = '';
    renderTodoList();
}
/*
const todoList = []; //empty array

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  todoList.push(name);

  console.log(todoList);

  inputElement.value = '';
}
*/

//todo list example 2
const todoList = [{
  name: 'make dinner',
  dueDate: '2025-03-21'
 }, {
  name: 'wash clothes',
dueDate: '2025-03-21'
}];

renderTodoList();

/* function renderTodoList() {

  let todoListHTML = '';

  todoList.forEach(function(todoObject, index) {
    const { name, dueDate } = todoObject; //Destructuring
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button onclick="
        todoList.splice(${index}, 1);
        renderTodoList();
        " class="delete-todo-button">Delete
      </button>
    `; 
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
} */



//changing the above to arrow function
function renderTodoList() {

  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const { name, dueDate } = todoObject; //Destructuring
    const html = `
      <div>${name}</div>
      <div>${dueDate}</div> 
      <button class="delete-todo-button js-delete-todo-button">Delete
      </button>
    `; 
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      })
    })
}


document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });


function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({
    //name: name,
    //dueDate: dueDate,
    name, //shorthand property syntax
    dueDate //shorthand property syntax
  });


  inputElement.value = '';

  dateInputElement.value = '';

  renderTodoList();
}
console.log('working!');

const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');

const generateTemplate = todo => {
  const html = `
    <li class="todo">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
  `;

  list.innerHTML += html;
};

addTodo.addEventListener('submit', e => {
  e.preventDefault();
  const todo = addTodo.add.value.trim('');

  if (todo.length) {
    generateTemplate(todo);
    addTodo.reset();
  }
});

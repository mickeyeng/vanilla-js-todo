console.log('working!');

const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search');

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

list.addEventListener('click', e => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});

search.addEventListener('keyup', e => {
  console.log(e.target.value);
});

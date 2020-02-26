console.log('working!');

const addTodo = document.querySelector('.add');
const list = document.querySelector('.todos');
const search = document.querySelector('.search input');

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

const filterTodos = term => {
  // don't match term and add class filtered
  Array.from(list.children)
    .filter(todo => !todo.textContent.toLowerCase.includes(term))
    .forEach(todo => todo.classList.add('filtered'));

  // do match term and remove class filtered
  Array.from(list.children)
    .filter(todo => todo.textContent.toLowerCase.includes(term))
    .forEach(todo => todo.classList.remove('filtered'));
};

search.addEventListener('keyup', e => {
  const term = search.value.trim().toLowerCase();
  console.log(term);
  filterTodos(term);
});

import { ToDo } from '../models'
import { TO_DO_LIST } from '../../index.js'


const ELEMENT_TODO_LIST = document.querySelector('ul.todo-list'); 
const ELEMENT_INPUT_NEW = document.querySelector('input.new-todo');
const ELEMENT_TODO_CLEAN_CLOMPLETED = document.querySelector('button.clear-completed');
const ELEMENT_FILTERS = document.querySelector('ul.filters');


export const createToDoHtml = toDo => {
  const template = `
  <li class="${ toDo.completado ? 'completed': '' }" data-id="${ toDo.id }">
    <div class="view">
      <input class="toggle" type="checkbox" ${ toDo.completed ? 'checked' : '' }>
      <label>${ toDo.tarea }</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${ toDo.tarea }">
  </li>
  `;

  const element = document.createElement('div');
  element.innerHTML = template;

  ELEMENT_TODO_LIST.appendChild(element.firstElementChild);
};


// Eventos
ELEMENT_INPUT_NEW.addEventListener('keyup', ({keyCode, target}) => {
  if ( keyCode === 13 && !!ELEMENT_INPUT_NEW.value.length) {
    const toDo = new ToDo(ELEMENT_INPUT_NEW.value);

    TO_DO_LIST.addToDo(toDo);
    ELEMENT_INPUT_NEW.value = '';

    createToDoHtml(toDo);
  }
});

ELEMENT_TODO_LIST.addEventListener('click', ({ target, path }) => {
  const elemToDo = path.find(elem => Boolean(elem.getAttribute('data-id')));
  const elemToDoId = +elemToDo.getAttribute('data-id');

  switch(target.tagName) {
    case 'INPUT':
      TO_DO_LIST.completedToDo(elemToDoId);
  
      elemToDo.classList.toggle('completed');
      break;

    case 'BUTTON':
      TO_DO_LIST.deleteToDo(elemToDoId);

      ELEMENT_TODO_LIST.removeChild(elemToDo);
      break;
  }

});

ELEMENT_TODO_CLEAN_CLOMPLETED.addEventListener('click', () => {
  TO_DO_LIST.deleteCompleted();

  Array.from(ELEMENT_TODO_LIST.children).forEach(elem => {
    if (elem.classList.contains('completed')) {
      ELEMENT_TODO_LIST.removeChild(elem);
    }
  });
});

ELEMENT_FILTERS.addEventListener('click', ({ target }) => {
  const filterType = (target.text || '').toUpperCase();

  if (!filterType) { return; }

  ELEMENT_FILTERS.querySelector('.selected').classList.remove('selected');
  target.classList.add('selected');

  Array.from(ELEMENT_TODO_LIST.children).forEach(elem => {
    elem.classList.remove('hidden');
    const completed = elem.classList.contains('completed');
    
    switch(target.text.toUpperCase()) {
      case 'PENDIENTES':
        if (completed) { elem.classList.add('hidden'); }
        break;

      case 'COMPLETADOS':
        if(!completed) { elem.classList.add('hidden'); }
        break;
    }
  });
});
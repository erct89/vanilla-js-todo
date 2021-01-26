import ToDo from './todo.class.js';

export default class ToDoList {
  constructor() {
    this.load();
  }

  addToDo(toDo) {
    this.tasks.push(toDo);

    this.save();
  }

  deleteToDo(id) {
    this.tasks = this.tasks.filter(toDo => toDo.id === id);

    this.save();
  }

  completedToDo(id) {
    const toDo = this.tasks.find(toDo => toDo.id === id);
    toDo.completado = !toDo.completado;
    
    this.save();
  }

  deleteCompleted() {
    this.tasks = this.tasks.filter(toDo => !toDo.completed);

    this.save();
  }

  load() {
    this.tasks = JSON.parse(localStorage.getItem('todo')) || [];
    this.tasks = this.tasks.map(ToDo.fromJson);

    console.info(`Load localstorage ${JSON.stringify(this.tasks)}`);
  }

  save() {
    localStorage.setItem('todo', JSON.stringify(this.tasks));

    console.info(`Save in localStorage ${JSON.stringify(this.tasks)}`);
  }
}
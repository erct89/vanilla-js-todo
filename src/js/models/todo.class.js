export default class ToDo {

  static fromJson({ id, creado, completado, tarea }) {
    const toDo = new ToDo(tarea);

    toDo.id = id;
    toDo.creado = creado;
    toDo.completado = completado;

    return toDo;
  }

  constructor(tarea, completado = false) {
    this.completado = completado;
    this.creado = new Date();
    this.id = new Date().getTime();
    this.tarea = tarea;
  }

}
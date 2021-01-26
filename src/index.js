import './styles.css';
import {createToDoHtml} from './js/components/components.js'
import { ToDoList, ToDo } from './js/models'

export const TO_DO_LIST = new ToDoList();

TO_DO_LIST.tasks.forEach(createToDoHtml);
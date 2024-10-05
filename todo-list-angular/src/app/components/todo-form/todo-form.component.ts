import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css'
})
export class TodoFormComponent {
@Output() newTaskAdded = new EventEmitter<string>();
newTask: string = '';

addTask():void {
  if (this.newTask.trim()!== '') {
    this.newTaskAdded.emit(this.newTask);
    this.newTask = '';
  }
}
}

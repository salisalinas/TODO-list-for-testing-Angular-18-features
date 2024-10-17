import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  @Output() newTaskAdded = new EventEmitter<string>();
  newTask: string = '';
  newDescription: string = '';

  constructor(private todoService: TodoService) {}
  async addTask(): Promise<void> {
    if (this.newTask.trim() !== '') {
      this.newTaskAdded.emit(this.newTask);
      await this.todoService.addItem({
        id: Date.now(),
        name: this.newTask,
        description: this.newDescription,
        completed: false,
      });
      this.newTask = '';
      this.newDescription = '';
    }
  }
}

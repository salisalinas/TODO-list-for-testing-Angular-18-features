import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';
import TodoItem from '../../interfaces/todoItem.interface';

@Component({
  selector: 'app-todo-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-form.component.html',
  styleUrl: './todo-form.component.css',
})
export class TodoFormComponent {
  todoItem$: Observable<TodoItem> = new Observable<TodoItem>();
  formName: string = '';
  
  formDescription: string = '';

  constructor(private todoService: TodoService) {}
  async addTask(): Promise<void> {
    if (this.formName.trim() !== '') {
      await this.todoService.addItem({
        id: Date.now().toString(),
        name: this.formName,
        description: this.formDescription,
        completed: false,
      });
      this.formName = '';
      this.formDescription = '';
    }
  }
}

import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFormComponent } from '../todo-form/todo-form.component';
import { TodoService } from '../../services/todo.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';
import { Observable } from 'rxjs';
import TodoItem from '../../interfaces/todoItem.interface';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule,TodoFormComponent, TodoItemComponent],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})


export class TodoListComponent {
  todoList: TodoItem[] = [];


  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    //   const storedTodoList = localStorage.getItem('todoList');
    //   if (storedTodoList) {
    //       this.todoList = JSON.parse(storedTodoList);
    //   }
    this.todoService.getItems();
  }

//   addTask(text: string): void {
//       if (text.trim() !== '') {
//           const newTodoItem: TodoItem = {
//               id: Date.now(),
//               name: '',
//               description:'',
//               completed: false
//           };
//         //   this.todoList.push(newTodoItem);
//         //   this.saveTodoList();
//         //   console.log('Updated todo list:', this.todoList);
//         this.todoService.addItem(newTodoItem);
//       }
//   }

//   deleteTask(id: number): void {
//     //   this.todoList = this.todoList.filter(item => item.id !== id);
//     //   this.saveTodoList();
//     this.todoService.deleteItem(this.id);
//   }

  toggleCompleted(id: number): void {
      const todoItem = this.todoList.find(item => item.id === id);
      if (todoItem) {
          todoItem.completed = !todoItem.completed;
          this.saveTodoList();
      }
  }

  saveTodoList(): void {
      localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}


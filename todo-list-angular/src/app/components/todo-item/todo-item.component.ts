import { Component, Input, OnInit} from '@angular/core';
import { CommonModule, AsyncPipe, NgIf } from '@angular/common';
import { TodoService } from '../../services/todo.service';
import { Observable } from 'rxjs';

import TodoItem from '../../interfaces/todoItem.interface';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
  imports: [AsyncPipe, NgIf],
})
export class TodoItemComponent implements OnInit {
  @Input() itemId!: string;
  todoItem$!: Observable<TodoItem>;

  constructor(protected todoService: TodoService) {}

  ngOnInit() {
    this.todoItem$ = this.todoService.getItem(this.itemId);
  }
}

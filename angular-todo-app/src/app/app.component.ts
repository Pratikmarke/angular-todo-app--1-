import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TodoService } from './todo.service';
import { TodoItemComponent } from './todo-item/todo-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, TodoItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  newTodoTitle = '';

  constructor(public todoService: TodoService) {}

  get remainingCount(): number {
    return this.todoService.todos().filter((t) => !t.completed).length;
  }

  addTodo(): void {
    this.todoService.addTodo(this.newTodoTitle);
    this.newTodoTitle = '';
  }

  onToggle(id: number): void {
    this.todoService.toggleTodo(id);
  }

  onRemove(id: number): void {
    this.todoService.removeTodo(id);
  }
}

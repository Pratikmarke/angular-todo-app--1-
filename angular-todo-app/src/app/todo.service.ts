import { Injectable, signal } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  // signal = Angular's built-in reactive state container (Angular 16+)
  private nextId = 4;

  readonly todos = signal<Todo[]>([
    { id: 1, title: 'Learn Angular component basics', completed: true },
    { id: 2, title: 'Build a small project', completed: false },
    { id: 3, title: 'Apply for the internship', completed: false },
  ]);

  addTodo(title: string): void {
    const trimmed = title.trim();
    if (!trimmed) {
      return;
    }
    this.todos.update((current) => [
      ...current,
      { id: this.nextId++, title: trimmed, completed: false },
    ]);
  }

  toggleTodo(id: number): void {
    this.todos.update((current) =>
      current.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  removeTodo(id: number): void {
    this.todos.update((current) => current.filter((todo) => todo.id !== id));
  }
}

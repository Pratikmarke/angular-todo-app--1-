import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css',
})
export class TodoItemComponent {
  // @Input: data flows DOWN from parent (AppComponent) into this child
  @Input({ required: true }) todo!: Todo;

  // @Output: events flow UP from this child back to the parent
  @Output() toggle = new EventEmitter<number>();
  @Output() remove = new EventEmitter<number>();

  onToggle(): void {
    this.toggle.emit(this.todo.id);
  }

  onRemove(): void {
    this.remove.emit(this.todo.id);
  }
}

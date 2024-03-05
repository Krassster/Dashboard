import { Todo } from '../../shared/todo.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.scss'],
})
export class TodoCardComponent {
  @Input()
  todo!: Todo;

  @Output() editClick: EventEmitter<void> = new EventEmitter();
  @Output() deleteClick: EventEmitter<void> = new EventEmitter();

  constructor() {}

  onEditClick() {
    this.editClick.emit();
  }

  onDeleteClick() {
    this.deleteClick.emit();
  }
}

import { Todo } from '../../shared/todo.model';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NotificationService } from 'src/app/shared/notification.service';

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

  constructor(private notificationServive: NotificationService) {}

  onEditClick() {
    this.editClick.emit();
  }

  onDeleteClick() {
    this.deleteClick.emit();

    this.notificationServive.show('Todo deleted!');
  }
}

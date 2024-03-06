import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { Todo } from '../../shared/todo.model';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss'],
})
export class AddTodoComponent {
  showValidationErrors: boolean;
  constructor(
    private todoService: TodoService,
    private router: Router,
    private notificationServive: NotificationService
  ) {
    this.showValidationErrors = false;
  }

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      const todo = new Todo(form.value.title);

      this.todoService.addTodo(todo);
      this.router.navigateByUrl('/todos');

      this.notificationServive.show('Todo created!');
    } else {
      this.showValidationErrors = true;
    }
  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { NotificationService } from 'src/app/shared/notification.service';
import { Todo } from '../../shared/todo.model';
import { TodoService } from '../../shared/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss'],
})
export class EditTodoComponent {
  showValidationErrors: boolean;
  todo!: Todo;
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private router: Router,
    private notificationServive: NotificationService
  ) {
    this.showValidationErrors = false;
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      const idParam = paramMap.get('id');

      if (idParam !== null) {
        const fetchedTodo = this.todoService.getTodo(idParam);
        if (fetchedTodo !== undefined) {
          this.todo = fetchedTodo;
        } else {
        }
      }
    });
  }

  onFormSubmit(form: NgForm) {
    if (form.valid) {
      this.todoService.updateTodo(this.todo.id, form.value);
      this.router.navigateByUrl('/todos');

      this.notificationServive.show('Todo edited!');
    } else {
      this.showValidationErrors = true;
    }
  }
}

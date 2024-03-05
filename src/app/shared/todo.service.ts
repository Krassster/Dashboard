import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: Todo[] = [
    new Todo('This is todo text'),
    new Todo('This is second todo text'),
  ];

  constructor() {
    this.todos[0].completed = true;
  }

  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todos.find((t) => t.id === id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(id: string, updatedFields: Partial<Todo>) {
    const todo = this.getTodo(id);
    if (todo) {
      Object.assign(todo, updatedFields);
    }
  }

  deleteTodo(id: string) {
    const todoIndex = this.todos.findIndex((t) => t.id === id);
    if (todoIndex !== -1) {
      this.todos.splice(todoIndex, 1);
    }
  }
}

import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService implements OnDestroy {
  todos: Todo[] = [new Todo('My first todo')];

  storageListenSub: Subscription;

  constructor() {
    this.todos[0].completed = true;
    this.loadState();
    this.storageListenSub = fromEvent<StorageEvent>(
      window,
      'storage'
    ).subscribe((event) => {
      if (event.key === 'todos') {
        this.loadState();
      }
    });
  }
  ngOnDestroy(): void {
    if (this.storageListenSub) {
      this.storageListenSub.unsubscribe();
    }
  }

  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todos.find((t) => t.id === id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.saveState();
  }

  updateTodo(id: string, updatedFields: Partial<Todo>) {
    const todo = this.getTodo(id);
    if (todo) {
      Object.assign(todo, updatedFields);
    }
    this.saveState();
  }

  deleteTodo(id: string) {
    const todoIndex = this.todos.findIndex((t) => t.id === id);
    if (todoIndex !== -1) {
      this.todos.splice(todoIndex, 1);
    }
    this.saveState();
  }

  saveState() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadState() {
    try {
      const todosInStorage = localStorage.getItem('todos');
      if (todosInStorage) {
        const parsedTodos: Todo[] = JSON.parse(todosInStorage);
        this.todos.length = 0;
        this.todos.push(...parsedTodos);
      }
    } catch (e) {
      console.error('There was an error Todo on LocalState');
    }
  }
}

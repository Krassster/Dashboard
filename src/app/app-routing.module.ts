import { AddBookmarkComponent } from './add-bookmark/add-bookmark.component';
import { EditTodoComponent } from './Todo/edit-todo/edit-todo.component';
import { AddTodoComponent } from './Todo/add-todo/add-todo.component';
import { EditNoteComponent } from './Note/edit-note/edit-note.component';
import { NotesComponent } from './Note/notes/notes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { TodosComponent } from './Todo/todos/todos.component';
import { AddNoteComponent } from './Note/add-note/add-note.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { tab: 1 } },
  { path: 'todos', component: TodosComponent, data: { tab: 2 } },
  { path: 'notes', component: NotesComponent, data: { tab: 3 } },
  { path: 'notes/add', component: AddNoteComponent },
  { path: 'notes/:id', component: EditNoteComponent },
  { path: 'todos/add', component: AddTodoComponent },
  { path: 'todos/:id', component: EditTodoComponent },
  { path: 'bookmarks/:id', component: AddBookmarkComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

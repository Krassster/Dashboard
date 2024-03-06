import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditBookmarkComponent } from './Bookmark/edit-bookmark/edit-bookmark.component';
import { ManageBookmarksComponent } from './Bookmark/manage-bookmarks/manage-bookmarks.component';
import { AddBookmarkComponent } from './Bookmark/add-bookmark/add-bookmark.component';
import { BookmarksComponent } from './Bookmark/bookmarks/bookmarks.component';

import { EditTodoComponent } from './Todo/edit-todo/edit-todo.component';
import { AddTodoComponent } from './Todo/add-todo/add-todo.component';
import { TodosComponent } from './Todo/todos/todos.component';

import { EditNoteComponent } from './Note/edit-note/edit-note.component';
import { NotesComponent } from './Note/notes/notes.component';
import { AddNoteComponent } from './Note/add-note/add-note.component';

const routes: Routes = [
  { path: 'bookmarks', component: BookmarksComponent, data: { tab: 1 } },
  { path: 'bookmarks/add', component: AddBookmarkComponent },
  {
    path: 'bookmarks/manage',
    component: ManageBookmarksComponent,
    children: [{ path: ':id', component: EditBookmarkComponent }],
  },

  { path: 'todos', component: TodosComponent, data: { tab: 2 } },
  { path: 'todos/add', component: AddTodoComponent },
  { path: 'todos/:id', component: EditTodoComponent },

  { path: 'notes', component: NotesComponent, data: { tab: 3 } },
  { path: 'notes/add', component: AddNoteComponent },
  { path: 'notes/:id', component: EditNoteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

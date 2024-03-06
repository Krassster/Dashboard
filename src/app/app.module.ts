import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { BookmarksComponent } from './Bookmark/bookmarks/bookmarks.component';
import { TodosComponent } from './Todo/todos/todos.component';
import { NotesComponent } from './Note/notes/notes.component';
import { BookmarkTileComponent } from './Bookmark/bookmark-tile/bookmark-tile.component';
import { AddNoteComponent } from './Note/add-note/add-note.component';
import { NoteCardComponent } from './Note/note-card/note-card.component';
import { FormsModule } from '@angular/forms';
import { EditNoteComponent } from './Note/edit-note/edit-note.component';
import { AddTodoComponent } from './Todo/add-todo/add-todo.component';
import { TodoCardComponent } from './Todo/todo-card/todo-card.component';
import { EditTodoComponent } from './Todo/edit-todo/edit-todo.component';
import { AddBookmarkComponent } from './Bookmark/add-bookmark/add-bookmark.component';
import { ManageBookmarksComponent } from './Bookmark/manage-bookmarks/manage-bookmarks.component';
import { EditBookmarkComponent } from './Bookmark/edit-bookmark/edit-bookmark.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    BookmarksComponent,
    TodosComponent,
    NotesComponent,
    BookmarkTileComponent,
    AddNoteComponent,
    NoteCardComponent,
    EditNoteComponent,
    AddTodoComponent,
    TodoCardComponent,
    EditTodoComponent,
    AddBookmarkComponent,
    ManageBookmarksComponent,
    EditBookmarkComponent,
    NotificationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

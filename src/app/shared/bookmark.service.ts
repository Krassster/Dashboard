import { Bookmark } from './bookmarks.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService {
  bookmark: Bookmark[] = [
    new Bookmark('Wikipedia', 'https://www.wikipedia.org'),
    new Bookmark('YouTube', 'https://www.youtube.com'),
    new Bookmark('Google', 'https://www.google.ru'),
    new Bookmark('ChatGPT', 'https://chat.openai.com'),
  ];

  constructor() {}

  getBookmarks() {
    return this.bookmark;
  }

  getBookmark(id: string) {
    return this.bookmark.find((b) => b.id === id);
  }

  addBookmark(bookmark: Bookmark) {
    this.bookmark.push(bookmark);
  }

  updateBookmark(id: string, updatedFields: Partial<Bookmark>) {
    const bookmark = this.getBookmark(id);
    if (bookmark) {
      Object.assign(bookmark, updatedFields);
    }
  }

  deleteBookmark(id: string) {
    const bookmarkIndex = this.bookmark.findIndex((b) => b.id === id);
    if (bookmarkIndex !== -1) {
      this.bookmark.splice(bookmarkIndex, 1);
    }
  }
}

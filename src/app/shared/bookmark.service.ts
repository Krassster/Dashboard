import { Bookmark } from './bookmarks.model';
import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookmarkService implements OnDestroy {
  bookmarks: Bookmark[] = [
    new Bookmark('Wikipedia', 'https://www.wikipedia.org'),
    new Bookmark('YouTube', 'https://www.youtube.com'),
    new Bookmark('Google', 'https://www.google.ru'),
    new Bookmark('ChatGPT', 'https://chat.openai.com'),
  ];

  storageListenSub: Subscription;

  constructor() {
    this.loadState();
    this.storageListenSub = fromEvent<StorageEvent>(
      window,
      'storage'
    ).subscribe((event) => {
      if (event.key === 'bookmark') {
        this.loadState();
      }
    });
  }
  ngOnDestroy(): void {
    if (this.storageListenSub) {
      this.storageListenSub.unsubscribe();
    }
  }

  getBookmarks() {
    return this.bookmarks;
  }

  getBookmark(id: string) {
    return this.bookmarks.find((b) => b.id === id);
  }

  addBookmark(bookmarks: Bookmark) {
    this.bookmarks.push(bookmarks);

    this.saveState();
  }

  updateBookmark(id: string, updatedFields: Partial<Bookmark>) {
    const bookmarks = this.getBookmark(id);
    if (bookmarks) {
      Object.assign(bookmarks, updatedFields);
    }

    this.saveState();
  }

  deleteBookmark(id: string) {
    const bookmarkIndex = this.bookmarks.findIndex((b) => b.id === id);
    if (bookmarkIndex !== -1) {
      this.bookmarks.splice(bookmarkIndex, 1);
    }

    this.saveState();
  }

  saveState() {
    localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
  }

  loadState() {
    try {
      const bookmarksInStorage = localStorage.getItem('bookmark');
      if (bookmarksInStorage) {
        const parsedBookmarks: Bookmark[] = JSON.parse(
          bookmarksInStorage,
          (key, value) => {
            if (key == 'url') return new URL(value);
            return value;
          }
        );
        this.bookmarks.length = 0;
        this.bookmarks.push(...parsedBookmarks);
      }
    } catch (e) {
      console.error('There was an error Note on LocalState');
    }
  }
}

import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService implements OnDestroy {
  notes: Note[] = [new Note('First Note', 'Title for the First Note')];

  storageListenSub: Subscription;

  constructor() {
    this.loadState();
    this.storageListenSub = fromEvent<StorageEvent>(
      window,
      'storage'
    ).subscribe((event) => {
      if (event.key === 'notes') {
        this.loadState();
      }
    });
  }
  ngOnDestroy(): void {
    if (this.storageListenSub) {
      this.storageListenSub.unsubscribe();
    }
  }

  getNotes() {
    return this.notes;
  }

  getNote(id: string) {
    return this.notes.find((n) => n.id === id);
  }

  addNote(note: Note) {
    this.notes.push(note);

    this.saveState();
  }

  updateNote(id: string, updatedFields: Partial<Note>) {
    const note = this.getNote(id);
    if (note) {
      Object.assign(note, updatedFields);
    }
    this.saveState();
  }

  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex((n) => n.id === id);
    if (noteIndex !== -1) {
      this.notes.splice(noteIndex, 1);
    }

    this.saveState();
  }

  saveState() {
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  loadState() {
    try {
      const notesInStorage = localStorage.getItem('notes');
      if (notesInStorage) {
        const parsedNotes: Note[] = JSON.parse(notesInStorage);
        this.notes.length = 0;
        this.notes.push(...parsedNotes);
      }
    } catch (e) {
      console.error('There was an error Note on LocalState');
    }
  }
}

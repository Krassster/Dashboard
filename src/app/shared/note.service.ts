import { Injectable } from '@angular/core';
import { Note } from './note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  notes: Note[] = [
    new Note('Test title', 'Test content'),
    new Note('Test title2', 'Test content2'),
    new Note('Test title3', 'Test content3'),
  ];

  constructor() {}

  getNotes() {
    return this.notes;
  }

  getNote(id: string) {
    return this.notes.find((n) => n.id === id);
  }

  addNote(note: Note) {
    this.notes.push(note);
  }

  updateNote(id: string, updatedFields: Partial<Note>) {
    const note = this.getNote(id);
    if (note) {
      Object.assign(note, updatedFields);
    }
  }

  deleteNote(id: string) {
    const noteIndex = this.notes.findIndex((n) => n.id === id);
    if (noteIndex !== -1) {
      this.notes.splice(noteIndex, 1);
    }
  }
}

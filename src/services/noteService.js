const Note = require('../models/note');

const NoteService = {
  createNote: (title, datetime, note, callback) => {
    Note.create(title, datetime, note, callback);
  },

  getAllNotes: (callback) => {
    Note.getAll(callback);
  },

  getNoteById: (id, callback) => {
    Note.getById(id, callback);
  },

  updateNote: (id, title, datetime, note, callback) => {
    Note.update(id, title, datetime, note, callback);
  },

  deleteNote: (id, callback) => {
    Note.delete(id, callback);
  },
};

module.exports = NoteService;

const db = require('../config/db');

const Note = {
  create: (title, datetime, note, callback) => {
    const query = 'INSERT INTO notes (title, datetime, note) VALUES (?, ?, ?)';
    db.query(query, [title, datetime, note], callback);
  },

  getAll: (callback) => {
    const query = 'SELECT * FROM notes';
    db.query(query, callback);
  },

  getById: (id, callback) => {
    const query = 'SELECT * FROM notes WHERE id = ?';
    db.query(query, [id], callback);
  },

  update: (id, title, datetime, note, callback) => {
    const query = 'UPDATE notes SET title = ?, datetime = ?, note = ? WHERE id = ?';
    db.query(query, [title, datetime, note, id], callback);
  },

  delete: (id, callback) => {
    const query = 'DELETE FROM notes WHERE id = ?';
    db.query(query, [id], callback);
  },
};

module.exports = Note;

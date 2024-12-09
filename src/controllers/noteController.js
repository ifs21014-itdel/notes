const NoteService = require('../services/noteService');

const NoteController = {
  createNote: (req, res) => {
    const { title, datetime, note } = req.body;
    NoteService.createNote(title, datetime, note, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error creating note' });
      }
      res.status(201).json({ message: 'Note created', id: result.insertId });
    });
  },

  getAllNotes: (req, res) => {
    NoteService.getAllNotes((err, notes) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching notes' });
      }
      res.status(200).json(notes);
    });
  },

  getNoteById: (req, res) => {
    const { id } = req.params;
    NoteService.getNoteById(id, (err, note) => {
      if (err) {
        return res.status(500).json({ message: 'Error fetching note' });
      }
      if (!note) {
        return res.status(404).json({ message: 'Note not found' });
      }
      res.status(200).json(note);
    });
  },

  updateNote: (req, res) => {
    const { id } = req.params;
    const { title, datetime, note } = req.body;
    NoteService.updateNote(id, title, datetime, note, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error updating note' });
      }
      res.status(200).json({ message: 'Note updated' });
    });
  },

  deleteNote: (req, res) => {
    const { id } = req.params;
    NoteService.deleteNote(id, (err, result) => {
      if (err) {
        return res.status(500).json({ message: 'Error deleting note' });
      }
      res.status(200).json({ message: 'Note deleted' });
    });
  },
};

module.exports = NoteController;

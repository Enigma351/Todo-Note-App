import Note from '../models/Note.js';

export const getNotes = async (_, res) => {
  try {
    const notes = await Note.find().sort({createdAt:-1});
    res.status(200).json(notes);
  } catch (error) {
    console.error('error in gettting the Notes', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const getNotebyId = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ message: 'Note not found!' });
    res.status(200).json(note);
  } catch (error) {
    console.error('Error in gettting the Note', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export const createANote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new Note({ title, content });
    const savedNote = await newNote.save();
    res.status(201).json(savedNote);
  } catch (error) {
    console.error('Error in creating note!', error);
    res.status(500).json({ message: 'Internal server error!' });
  }
};

export const updateANote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const updateNote = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
      }
    );
    if (!updateNote)
      return res.status(404).json({ message: 'Note not found!' });
    res.status(200).json(updateNote);
  } catch (error) {
    console.error('Error in updating note!', error);
    res.status(500).json({ message: 'Internal server error!' });
  }
};

export const deleteANote = async (req, res) => {
  try {
    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if (!deletedNote)
      return res.status(404).json({ message: 'Note not found' });
    res.status(200).json({ message: 'Note deleted successfully!' });
  } catch (error) {
    console.error('Error in deleting note!', error);
    res.status(500).json({ message: 'Internal server error!' });
  }
};

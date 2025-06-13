import express from 'express'
import {getNotes, getNotebyId, createANote, updateANote, deleteANote} from '../controllers/notesControllers.js'

const router = express.Router();

router.get('/', getNotes);

router.get('/:id', getNotebyId);

router.post('/', createANote);

router.put('/:id', updateANote);

router.delete('/:id', deleteANote);

export default router;
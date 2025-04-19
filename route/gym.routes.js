import express from 'express';
import {
  createGym,
  getAllGyms,
  updateGym,
  deleteGym,
} from '../controllers/gymController.js';

const router = express.Router();

router.post('/', createGym);       // Create
router.get('/', getAllGyms);       // Read all
router.put('/:id', updateGym);     // Update by ID
router.delete('/:id', deleteGym);  // Delete by ID

export default router;

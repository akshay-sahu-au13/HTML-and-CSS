import express from 'express';

import { getMovies, createMovie, getMovie, updateMovie, deleteMovie } from '../controllers/movie.js';

const router = express.Router();

router.get('/', getMovies);

router.post('/', createMovie);

router.get('/:id', getMovie);

router.delete('/:id', deleteMovie);

router.patch('/:id', updateMovie);

export default router;
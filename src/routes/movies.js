import { Router } from 'express';
import { MOVIE_TYPES } from '../config/config';
import * as Movie from '../controllers/movie';

const router = Router();

router.get('/', async (req, res) => {
    const movieType = req.query.type || MOVIE_TYPES.now_playing; 
    const movies = await Movie.getMovies(movieType);
    return res.send(movies);
});

router.post('/', async (req, res) => {
    const movie = req.body.movie;
    const userId = req.context.user._id
    const newMovie = await Movie.addMovie(userId, movie)
    return res.send(newMovie);
});



export default router;
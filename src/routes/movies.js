import { Router } from 'express';
import { MOVIE_TYPES } from '../config/config';
import * as Movie from '../controllers/movie';

const router = Router();
var multer  = require('multer')
var upload = multer()

router.get('/', async (req, res) => {
    const movieType = req.query.type || MOVIE_TYPES.now_playing; 
    const movies = await Movie.getMovies(movieType);
    return res.send(movies);
});

router.post('/',upload.single('movieImage'), async (req, res) => {
    const movie = {
        name: req.body.movieName,
        category: req.body.movieCategory,
        image: req.file
    };
    const userId = req.context.user._id
    const newMovie = await Movie.addMovie(userId, movie);
    console.log(newMovie);
    return res.send(newMovie);
});



export default router;
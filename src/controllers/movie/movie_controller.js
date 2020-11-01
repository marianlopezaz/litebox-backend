import { MOVIE_TYPES } from '../../config/config';
import Movie from '../../models/movie';
import * as CategoryController from '../category';
import { uploadFile } from '../../services/as3/as3_service';
import { prepareMoviesData } from '../../services/movies/get_movie_services';
import Category from '../../models/category';


export async function addMovie(userId, movie) {
    const IMAGE = movie.image;
    const NAME = movie.name;
    const OWNER = userId;
    const CATEGORY = movie.category;
    try {
        return await uploadFile(IMAGE).then(async (res) => {
            try {
                const newMovie = new Movie({
                    name: NAME,
                    user: OWNER,
                    image: res['Location'],
                    category: CATEGORY
                });
                await newMovie.save();
                return newMovie;

            } catch (error) {
                return new Error(error);
            }

        });


    } catch (error) {
        return error
    }

}

export async function getMovies(movieType) {
    let movies = []
    if (movieType === MOVIE_TYPES.uploaded) {
        movies = Movie.find({}).then((movies) => {
            return Category.populate(movies, { path: 'category' }).then((data) => {
                return data;
            })
        })
    } else {
        movies = prepareMoviesData(movieType);
    }
    return movies;
}


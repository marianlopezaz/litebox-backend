import Movie from '../../models/movie';
import { uploadFile } from '../../services/as3/as3_service';
import { prepareMoviesData } from '../../services/movies/get_movie_services';


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
                    image: res.Loacation,
                    category: CATEGORY
                });
                await newMovie.save();
                return newMovie;

            } catch (error) {
                console.log(error);
                return new Error(error);
            }

        });


    } catch (error) {
        return error
    }

}

export async function getMovies(movieType) {
    let movies = [];
    if (movieType === 'uploaded') {
        movies = await Movie.find();
    } else {
        movies = prepareMoviesData(movieType);
    }
    return movies;
}



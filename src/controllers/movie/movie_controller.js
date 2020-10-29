import Movie from '../../models/movie';

export async function addMovie(userId, movie) {
    try {
        const newMovie = await Movie.create({
            name: movie.name,
            user: userId
        });
        return newMovie;

    } catch (error) {
        return error
    }

}


export async function getMovies() {
    const movies = await Movie.find();
    return movies;
}
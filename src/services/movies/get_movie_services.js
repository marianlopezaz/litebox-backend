import axios from 'axios';
import { API_URLS, FILES_PATH_TYPE, FILE_SIZES, MOVIE_TYPES } from '../../config/config';
import { getArrayElements } from '../../services/commons/common';

export const prepareMoviesData = async (movieType) => {
    const CONFIG_DATA = await getConfigData();
    const MOVIE_DATA = await getMovieData(movieType);
    const BASE_IMAGE_URL = CONFIG_DATA.images.secure_base_url;
    const QUANTITY_OF_MOVIES = movieType !== MOVIE_TYPES.now_playing ? 4 : 1;
    const IMAGES = getArrayElements(MOVIE_DATA, QUANTITY_OF_MOVIES);
    let movies = [];
    IMAGES.map((movie) => {
        const FINAL_IMAGE_URL = getFinalImageUrl(BASE_IMAGE_URL, movie, movieType);
        const PARSED_MOVIE_DATA = {
            popularity: movie.popularity,
            title: movie.title,
            overview: movie.overview,
            release_date: movie.release_date,
            adult: movie.adult,
            image: FINAL_IMAGE_URL

        }
        movies.push(PARSED_MOVIE_DATA);
    })

    return movies;
}


const getConfigData = async () => {
    const url = `${API_URLS.config_path}`;
    try {
        return axios.get(url, {
            params: {
                api_key: process.env.URL_API_KEY
            }
        }).then((response) => {
            return response.data;
        }).catch((error) => {
            return new Error(error);
        })

    } catch (error) {
        return new Error(error);
    } ƒ
}

const getMovieData = async (movieType) => {
    const url = `${API_URLS.base_path}/${movieType}`;
    try {
        return axios.get(url, {
            params: {
                api_key: process.env.URL_API_KEY
            }
        }).then((response) => {
            return response.data.results;
        }).catch((error) => {
            return new Error(error);
        })

    } catch (error) {
        return new Error(error);
    }
}

const getFinalImageUrl = (basePath, movieData, movieType) => {
    const BASE_PATH = basePath;
    const IMAGE_SIZE = FILE_SIZES.original;
    const IMAGE_PATH = movieType !== MOVIE_TYPES.popular ? FILES_PATH_TYPE.backdrop_path : FILES_PATH_TYPE.poster_path;
    const FILE_ID = movieData[IMAGE_PATH];
    return `${BASE_PATH}${IMAGE_SIZE}${FILE_ID}`
}
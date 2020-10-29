export const API_URLS = { 
    base_path: 'https://api.themoviedb.org/3/movie', 
    config_path: 'https://api.themoviedb.org/3/configuration'
}

export const FILE_SIZES = {
    original: 'original',
    backdrop_sizes: {
        xs: 'w300',
        s: 'w780',
        m: 'w1280',
    },
    poster_sizes: {
        xs: 'w342',
        s: 'w500',
        m: 'w780',
    }
}

export const FILES_PATH_TYPE = {
    backdrop_path: 'backdrop_path',
    poster_path: 'poster_path'
}

export const MOVIE_TYPES = {
    now_playing: 'now_playing',
    upcoming: 'upcoming',
    popular: 'popular'
}
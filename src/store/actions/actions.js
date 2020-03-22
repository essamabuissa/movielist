import { ADD_MOVIE, WATCHED_MOVIE, DELETED_MOVIE } from "./actionTypes"

export const addMovie = title => {
    const newMovie = {
        title: title,
        watched: false

    }
    return {
        type: ADD_MOVIE,
        payload: newMovie
    }

}

export const watchedMovies = movie => {
    movie.watched = !movie.watched
    return {
        type: WATCHED_MOVIE,

    }
}

export const deletedMovie = movie => {

    return {
        type: DELETED_MOVIE,
        payload: movie

    }
}

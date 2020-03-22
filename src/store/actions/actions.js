import { ADD_MOVIE, WATCHED_MOVIE, DELETED_MOVIE, POST_FORM } from "./actionTypes"
import axios from "axios";

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

export const postForm = data => async (userData, dispatch) => {
    try {
        const response = await axios.post("https://api/form-submit-url", userData);
        const data = response.data;
        dispatch({ type: POST_FORM, payload: data })

    }
    catch (error) {
        console.error(error.response)
    }


}

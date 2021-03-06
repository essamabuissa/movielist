import { ADD_MOVIE, WATCHED_MOVIE, DELETED_MOVIE, POST_FORM } from "../actions/actionTypes"

const intialState = {
    movies: [
        {
            title: "Homealone   ",
            watched: false
        },
        {
            title: "Focus",
            watched: false
        },
        {
            title: "Bad Boys",
            watched: false
        },
        {
            title: "The Hangover",
            watched: false
        },
        {
            title: "Joker",
            watched: false
        },
        {
            title: "The Godfather",
            watched: false
        },


    ],
    data: ""
}

const reducer = (state = intialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload]
            }
        case WATCHED_MOVIE:
            return {
                ...state,
                movies: [...state.movies]
            }

        case DELETED_MOVIE:
            return {
                ...state,
                movies: state.movies.filter(movie => movie !== action.payload)

            }

        case POST_FORM:
            return {
                ...state,
                data: action.payload
            }

        default:
            return state;

    }




}
export default reducer;

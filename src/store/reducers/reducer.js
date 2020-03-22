import { ADD_MOVIE, WATCHED_MOVIE, DELETED_MOVIE } from "../actions/actionTypes"

const intialState = {
    movies: [
        {
            title: "Homealone   ",
            watched: false
        },
        {
            title: "Focus",
            watched: false
        }
    ]
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

        default:
            return state;

    }




}
export default reducer;

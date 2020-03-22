import React, { Component } from 'react';
import * as actionCreators from './store/actions/actions';
import { connect } from 'react-redux';

class MovieTableRow extends Component {
    render() {
        const movie = this.props.movie
        return (

            <li className="list-group-item">
                <div className="row">
                    <div className="col-7">{movie.title}</div>
                    <div className="col-5">
                        <button
                            className="btn btn-info mx-1"
                            onClick={() => this.props.watchedMovies(movie)}

                        >
                            {movie.watched ? "Unwatch" : "Watched"}
                        </button>
                        <button
                            className="btn btn-danger mx-1"
                            onClick={() => this.props.deletedMovie(movie)}

                        >
                            Delete
            </button>
                    </div>
                </div>
            </li >


        )


    }







}


const mapDispatchToProps = dispatch => {
    return {
        deletedMovie: movie => dispatch(actionCreators.deletedMovie(movie)),
        watchedMovies: movie => dispatch(actionCreators.watchedMovies(movie))

    }


}
export default connect(null, mapDispatchToProps)(MovieTableRow);
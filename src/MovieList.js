import React, { Component } from 'react'

import MovieTableRow from './MovieTableRow'
import { connect } from 'react-redux';

class MovieList extends Component {

    render() {
        const movies = this.props.movies.filter(
            movie => movie.watched === !this.props.watched
        )

        let filteredMovies = movies;

        const movieRow = filteredMovies.map((movie) => (
            <MovieTableRow key={movie.title} movie={movie} />

        )
        )


        return (
            <div className="col-6">
                <div className="my-4">
                    <h3>
                        {this.props.watched ? "WatchList" : "Watched"}
                        <span className="badge badge-pill badge-light ml-4">
                            {filteredMovies.length}
                            {filteredMovies.length !== movies.length &&
                                ` out of ${movies.length}`}
                        </span>
                    </h3>
                </div>
                <div className="card">
                    <ul className="list-group list-group-flush">

                        {movieRow}
                    </ul>
                </div>
            </div>)
    }
}

const mapStateToProps = state => {
    return {
        movies: state.movies
    }

}
export default connect(mapStateToProps)(MovieList);
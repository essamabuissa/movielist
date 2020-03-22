import React, { Component } from "react";
import { connect } from "react-redux"
import * as actionCreators from "./store/actions/actions"

class AddMovie extends Component {
    state = {
        title: ""

    }

    handleMovieChange = event => {
        this.setState({ title: event.target.value })
    }


    submitMovie = () => {
        if (this.state.title) {
            this.props.addMovie(this.state.title)
            this.setState({ title: "" })
        }


    }
    handleEnterPress = event => {
        if (event.key === "Enter") {
            this.submitMovie();

        }

    }
    render() {
        return (

            <div className="col-6 mx-auto">
                <div className="input-group input-group-lg my-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder=""
                        value={this.state.title}
                        onChange={this.handleMovieChange}
                        onKeyPress={this.handleEnterPress}
                        aria-label="Movie"
                        aria-describedby="add-button"
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-info"
                            type="button"
                            id="add-button"
                            onClick={this.submitMovie}
                        >
                            Add
                </button>
                    </div>
                </div>
            </div>)
    }

}


const mapStateToProps = dispatch => {
    return {

        addMovie: title => dispatch(actionCreators.addMovie(title))
    }
}

export default connect(null, mapStateToProps)(AddMovie);    
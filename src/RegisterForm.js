import React, { Component } from 'react'

import { connect } from "react-redux";
import * as actionCreatores from "./store/actions/actions";

class RegisterForm extends Component {
    state = {
        first_name: "",
        last_name: "",
        email: ""
    }
    handleSubmitForm = event => {
        event.preventDefault()
        this.props.onSubmitForm(this.state)

    }

    handleChangeForm = event => {
        this.setState({ [event.target.name]: event.target.value })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmitForm}>
                <div className="input-group mb-3">
                    <div className="form-group font">
                        <label>First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="first_name"
                            onChange={this.handleChangeForm}
                        />
                    </div>
                </div>
                <div className="input-group mb-3">
                    <div className="form-group font">
                        <label>Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="last_name"
                            onChange={this.handleChangeForm}

                        />
                    </div>

                    <div className="input-group mb-3">
                        <div className="form-group font">
                            <label>Email</label>
                            <input
                                type="text"
                                className="form-control"
                                name="email"
                                onChange={this.handleChangeForm}

                            />
                        </div>

                        <div className="input-group mb-3">
                            <div className="form-group font">
                                <button type="submit" className="btn btn-primary">
                                    Submit
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = dispatch => {

    return {
        onSubmitForm: form => dispatch(actionCreatores.postForm(form))

    }
}

const mapStateToProps = state => {
    return {
        statusMessage: state.data
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm); 
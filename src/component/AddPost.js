import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { add_post } from '../action/PostAction';

class AddPost extends Component {
    state = {
        title: '',
        body: '',
    };

    titleHandle = (e) => {
        this.setState({
            title: e.target.value,
        });
    };

    descriptionHandle = (e) => {
        this.setState({
            body: e.target.value,
        });
    };
    submithandle = (e) => {
        e.preventDefault();
        this.props.add_post(this.state.title, this.state.body);

        this.setState({
            title: '',
            body: '',
        });
    };
    render() {
        return (
            <div className="container">
                <h3 className="center">ADD POST</h3>
                <form onSubmit={this.submithandle}>
                    <label>Title :</label>
                    <input
                        type="text"
                        onChange={this.titleHandle}
                        value={this.state.title}
                    />
                    <label>Description :</label>
                    <input
                        type="text"
                        onChange={this.descriptionHandle}
                        value={this.state.body}
                    />
                    <button className="btn grey">Add Post</button>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log('NNNNNNNNNNNN');
    return {
        add_post: (title, body) => {
            dispatch(add_post(title, body));
        },
    };
};

export default connect(null,mapDispatchToProps)(AddPost);

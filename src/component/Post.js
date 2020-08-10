import React, { Component } from 'react';
import { connect } from 'react-redux';

class Post extends Component {
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/');
    };
    render() {
        return (
            <div className="container">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>
                        Delete Post
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find((post) => post.id === id),
    };
};

const mapDispatchProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch({ type: 'DELETE_POST', id: id });
        },
    };
};

export default connect(mapStateProps, mapDispatchProps)(Post);

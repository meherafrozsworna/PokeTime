import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Home extends Component {
    
    render() {
        const { post } = this.props;
        const postList = post.length ? (
            post.map((post) => {
                return (
                    <div className="post card" key={post.id}>
                        <div className="card-content">
                            <Link to={'/' + post.id}>
                                <span className="card-title">{post.title}</span>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                        
                    </div>
                );
            })
        ) : (
            <div className="center">No post yet</div>
        );

        return (
            <div className="container">
                <h4 className="center">Home</h4>
                {postList}
            </div>
        );
    }
}

const mapStateProps = (state) => {
    return {
        post: state.posts,
    };
};


export default connect(mapStateProps)(Home);

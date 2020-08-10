import React, { Component } from 'react';
import axios from 'axios';

export default class Post extends Component {
    state = {
        post: {},
    };
    componentDidMount() {
        const id = this.props.match.params.post_id;
        axios
            .get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then((res) => {
                console.log(res.data);
                this.setState({
                    post: res.data,
                });
            })
            .catch((err) => console.log(err));
    }
    render() {
        return (
            <div className="container">
                <h4 className="center">{this.state.post.title}</h4>
                <p>{this.state.post.body}</p>
            </div>
        );
    }
}

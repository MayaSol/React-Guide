import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidUpdate() {
        if (this.props.id > 0 && (!this.state.loadedPost || this.state.loadedPost.id !== this.props.id)) {
            const post = axios.get('/posts/' + this.props.id)
                .then(response => {
                        this.setState({loadedPost: response.data});
                })
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.id)
            .then(response => {
                console.log(response);
            })
    }


    render () {
        let post = <p>Please select a Post!</p>;
        if (this.props.id) {
            post = <p>Loading...</p>
        }
        if (this.state.loadedPost) {
            post = (
                <div>
                    <h1>{this.state.loadedPost ? this.state.loadedPost.title : 'Title'}</h1>
                    <p>{this.state.loadedPost ? this.state.loadedPost.body : 'Content'}</p>
                    <div className="Edit">
                        <button onClick = {this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return (
            <div className="FullPost">
                {post}
            </div>
        )
    }
}

export default FullPost;
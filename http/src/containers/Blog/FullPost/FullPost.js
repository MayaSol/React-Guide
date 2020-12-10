import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    static getDerivedStateFromProps(props, state) {
        console.log('[FullPost.js] getDerivedStateFromProps', props);
        return state;
    }

    state = {
        loadedPost: null
    }

    loadPost = () => {
        console.log('loadPost');
        if (this.props.match.params.postId > 0 && (!this.state.loadedPost || +this.state.loadedPost.id !== +this.props.match.params.postId)) {
            console.log('Post loading 2 ...');
            const post = axios.get('/posts/' + this.props.match.params.postId)
                .then(response => {
                    console.log('Post loaded: ');
                    console.log(response.data);
                    this.setState({loadedPost: response.data});
                })
        }
    }


    componentDidMount() {
        console.log('[FullPost componentDidMount]');
        this.loadPost();
    }

    componentDidUpdate() {
        console.log('[FullPost componentDidUpdate]');
        console.log(this.props);
        console.log(this.props.match.params.postId );
        this.loadPost();
    }

    deletePostHandler = () => {
        axios.delete('/' + this.props.match.params.postId)
            .then(response => {
                console.log(response);
            })
    }

    render () {
        let post = <p>Please select a Post!</p>;
        if (this.props.match.params.postId) {
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



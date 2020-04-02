import React, { Component } from 'react';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import './Blog.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedId: null,
        error: false
    }

    onPostClickHandler = (id) => {
        this.setState({selectedId: id})
    }

    componentDidMount() {
        console.log('[Blog] componentDidMount');
        const posts = axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                })
                this.setState({posts: updatedPosts});
            })
            .catch(error => {
                console.log('componentDidMount error: ');
                console.log(error);
                this.setState({error: true});
            })
    }

    render () {
        let posts = '';
        if (this.state.error) {
            posts = <p>Something went wrong! {this.state.error}</p>;
        }
        else {
            posts = this.state.posts.map(post => {
                return <Post
                    key={post.id}
                    title={post.title} 
                    author={post.author} 
                    click={() => this.onPostClickHandler(post.id)}
                />
            })
        }
        return (
            <div>
                <header className = "Blog">
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <section className="Posts">
                    {posts}
                </section>
            </div>
        );
    }
}

export default Blog;
import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';
import './Posts.css';
import axios from '../../../axios';
import FullPost from '../../../containers/Blog/FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
        error: false
    }

    onPostClickHandler = (id) => {
        // this.setState({selectedId: id})
        console.log('onPostClickHandler');
        // console.log(this.props.history.push({pathname: '/' + id}));
        this.props.history.push('/posts/' + id);
    }

    componentDidMount() {
        console.log('[Posts] componentDidMount');
        console.log(this.props);

        axios({
          method: "get",
          url: "posts",
        })
            .then(response => {
            	console.log(response);
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

	render() {
		console.log('[Posts] rendering');
        let posts = 'Loading...';
        if (this.state.error) {
            posts = <p>Something went wrong! {this.state.error}</p>;
        }
        else {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/' + post.id} key={post.id}>
                        <Post
                            key={post.id}
                            title={post.title} 
                            author={post.author} 
                            click={() => this.onPostClickHandler(post.id)}
                        />
                    // </Link>
                )
            })
        }
        return (
                <div>
                <Route path={this.props.match.url + '/:postId'} component={FullPost} />
                <section className="Posts">
                    {posts}
                    <p style={{flexBasis: '100%', textAlign: 'center'}}>
                    <Link to={{
                     pathname: this.props.match.url + "/test",
                     hash: '#test',
                     search: '?test=true'
                    }}>Test</Link>
                    </p>
                </section>
                </div>
        );
	}
}

export default Posts;


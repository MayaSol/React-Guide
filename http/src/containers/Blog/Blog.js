import React, { Component } from 'react';
import axios from '../../axios';
import { Route, NavLink, Switch } from 'react-router-dom';

import Post from '../../components/Post/Post';
import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {

    render () {

        return (
            <div>
                <header className = "Blog">
                    <nav>
                        <ul>
                            <li><NavLink to="/posts" exact>Posts</NavLink></li>
                            <li>
                                <NavLink to={{
                                 pathname: "/new-post",
                                 hash: '#submit',
                                 search: '?quick-submit=true'
                                }} 
                                activeClassName="my-active"
                                activeStyle={{color: 'red'}}>
                                    New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => {return <h1>Home</h1>}} />
                <Route path="/" exact render={() => {return <h1>Home 2</h1>}} />*/}
                <Switch>
                    <Route path="/new-post" exact component={NewPost} />
                    <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;    
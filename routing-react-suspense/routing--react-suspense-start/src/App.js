import React, { Component, Suspense } from 'react';
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

// import Posts from './containers/Posts';
import User from './containers/User';
import Welcome from './containers/Welcome';

const Posts = React.lazy(() => import('./containers/Posts'));

class App extends Component {

  state = {
    showPosts: false
  }

  toggleButtonHandler = () => {
    this.setState(prevState => {
      return {showPosts: !prevState.showPosts}
    })
  }


  render() {


       {/*
    // return (
    //   <BrowserRouter>
    //     <React.Fragment>
    //       <nav>
    //         <NavLink to="/user">User Page</NavLink> |&nbsp;
    //         <NavLink to="/posts">Posts Page</NavLink>
    //       </nav>
    //       <Route path="/" component={Welcome} exact />
    //       <Route path="/user" component={User} />
    //       <Route path="/posts" render={() => (
    //           <Suspense fallback={<div>Loading...</div>}>
    //             <Posts />
    //           </Suspense>
    //         )}
    //       />
    //     </React.Fragment>
    //   </BrowserRouter>
    // );
  // */}

      return (
      <React.Fragment>
      <button onClick={this.toggleButtonHandler}> Toggle to Posts </button>
      {this.state.showPosts ? (<Suspense fallback={<div>Loading...</div>}>
            <Posts />
          </Suspense>) : (<User/>)
      }

      </React.Fragment>




    );


  }

}


export default App;

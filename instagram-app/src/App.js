import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate'
import Login from './components/Login/Login'

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)


const App = () => {

    return (
      <div className="App">
        <ComponentFromWithAuthenticate />
      </div>
    );
  
}

export default withAuthenticate(PostsPage)(Login);


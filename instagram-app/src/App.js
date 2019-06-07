import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate'
import Login from './components/Login/Login'
import { AppStyle } from './components/StyledComponents'

const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)


const App = () => {

    return (
      // <AppStyle>
        <div className="App">
          <ComponentFromWithAuthenticate />
        </div>
      // </AppStyle>

    );
  
}

export default withAuthenticate(PostsPage)(Login);


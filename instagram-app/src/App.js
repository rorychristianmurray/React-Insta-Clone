import React from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import CommentSection from './components/CommentSection/CommentSection';

class App extends React.Component {
  state = {
    data: dummyData,
  };

  render() {
    console.log('dummyData my guy', dummyData)
    
    return (
      <div className="App">
        <h1>Placeholder Capital</h1>
        <SearchBar />
        <PostContainer data={this.state.data} />
      </div>
    );
    
  } 
}

export default App;

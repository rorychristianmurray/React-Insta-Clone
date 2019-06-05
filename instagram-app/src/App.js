import React from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

class App extends React.Component {
  state = {
      data: [],
      filteredPosts: []
    };
  

 componentDidMount() {
   console.log('App this.state.data', this.state.data)
   this.setState({data: dummyData})
 } 

 handleSearch = event => {
   const posts = this.state.data.filter(post => {
     if(post.username.includes(event.target.value)) {
       return post;
     }
   });
   this.setState({filteredPosts: posts});
 }

render() {
  console.log('App this.state.data', this.state.data)
    
    return (
      <div className="App">
        <SearchBar searchPosts={this.handleSearch} />
        <div className="container post-container">
          <PostContainer posts={this.state.filteredPosts.length > 0 ? this.state.filteredPosts : this.state.data} />
        
          </div>
      </div>
    );
    
  } 
}

export default App;


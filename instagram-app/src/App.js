import React from 'react';
import './App.css';
import dummyData from './dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }


 componentDidMount() {
   this.setState({data: dummyData})
 } 

// add a comment from the form to the list

// filterSearch = searchTerm => {
//   const filteredPosts = this.state.data.filter(post => post.username.includes(searchTerm))
// }

render() {
  console.log('dummyData', dummyData)
    
    return (
      <div className="App">
        <SearchBar />
        <div className="container post-container">{this.state.data.map(post => <PostContainer post={post} key={post.id} />)}</div>
      </div>
    );
    
  } 
}

export default App;

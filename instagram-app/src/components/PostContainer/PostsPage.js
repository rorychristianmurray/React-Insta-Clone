import React, { Component } from 'react';
import dummyData from '../PostContainer/dummy-data'
import SearchBar from '../SearchBar/SearchBar'
import PostContainer from './PostContainer'

class PostsPage extends Component {
    state = {
        data: [],
        filteredPosts: []
      };

    componentDidMount() {
    console.log('PostsPage this.state.data', this.state.data)
    this.setState({data: dummyData})
    } 

    handleSearch = event => {
      console.log('PostsPage event.target.value', event.target.value)
        const posts = this.state.data.filter(post => {
          if(post.username.includes(event.target.value)) {
            return post;
          }
        });
        this.setState({filteredPosts: posts});
      }


    render() {
     console.log('PostsPage this.state.data', this.state.data)
     console.log('PostsPage this.state.filteredPosts', this.state.filteredPosts)
          
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

export default PostsPage;

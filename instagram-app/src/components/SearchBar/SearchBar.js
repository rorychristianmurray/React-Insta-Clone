import React from 'react';
import './SearchBar.scss'


const SearchBar = props => {

    return ( 
        <div className="container">
        <div className="row">
            <div className="col search-bar">
            <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
            </div>
        </div>
        </div>
    );
}

export default SearchBar;


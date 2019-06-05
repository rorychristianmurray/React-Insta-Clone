import React from 'react';
import './SearchBar.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartFilled } from '@fortawesome/free-solid-svg-icons';



const SearchBar = props => {
    return ( 
        <div className="container">
        <div className="row">
            <div className="col search-bar">Search Bar</div>
        </div>
        </div>
    );
}

export default SearchBar;


import React from 'react';
import './SearchBar.scss'
import { SearchContainer } from '../StyledComponents' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSafari } from '@fortawesome/free-brands-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';


const SearchBar = props => {

    return ( 
        <SearchContainer>
            <div className="insta-icon">
            <FontAwesomeIcon icon={faInstagram} className="fab fa-instagram" size="2x" />
            <span>|</span>
            Instagram
            </div>
            <div className="col search-bar">
            <input type="text" placeholder="Search" onChange={props.searchPosts} />
            </div>
            <div className="col insta-links">
            <FontAwesomeIcon icon={faSafari} className="fab fa-safari" size="2x" />
            <FontAwesomeIcon icon={faHeart} className="fas fa-heart" size="2x" />
            <FontAwesomeIcon icon={faUserCircle} className="far fa-user-circle" size="2x" />
            </div>
        </SearchContainer>
    );
}

export default SearchBar;


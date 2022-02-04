import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import useGoogleSearch from './useGoogleSearch';
import GoogleImage from '../assets/googleimage.png'

import './SearchPage.css';
import Search from './Search';

function SearchPage() {
  const [{ term }, dispatch] = useStateValue();
  //const {data} = useGoogleSearch(term);

  const data = Response;

  console.log(data)
  return (
    <div className="searchPage">
      <div className="searchPage_header">
        <Link to="/">
          
          <img className="searchPage_logo" src={GoogleImage} alt="" />
        </Link>
      </div>
      <div className="searchPage_results">
       <Search hideButtons />
      </div>
    </div>
  );
}

export default SearchPage;

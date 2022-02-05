import React from 'react';
import { Link } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import useGoogleSearch from './useGoogleSearch';
import GoogleImage from '../assets/googleimage.png'
import SearchIcon from '@material-ui/icons/Search';
import Description  from '@material-ui/icons/Description';
import ImageIcon  from '@material-ui/icons/Image';
import LocalOfferIcon  from '@material-ui/icons/LocalOffer';
import RoomIcon  from '@material-ui/icons/Room';
import MoreVertIcon  from '@material-ui/icons/MoreVert';


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
        <div className="searchPage_headerBody">
         <Search hideButtons />
         <div className="searchPage_options">
          <div className="searchPage_optionsLeft">
            <div className="searchPage_option">
             <SearchIcon />
             <Link to="/all">All </Link>
            </div>
            <div className="searchPage_option">
             <Description />
             <Link to="/news">News </Link>
            </div>
            <div className="searchPage_option">
             <ImageIcon />
             <Link to="/images">Images</Link>
            </div>
            <div className="searchPage_option">
             <LocalOfferIcon />
             <Link to="/shopping">shopping</Link>
            </div>
            <div className="searchPage_option">
             <RoomIcon />
             <Link to="/maps">maps</Link>
            </div>
            <div className="searchPage_option">
             <MoreVertIcon />
             <Link to="/more">more</Link>
            </div>
          </div>
          <div className="searchPage_optionsRight">
            
          </div>
         </div>
        </div>
      </div>
      <div className="searchPage_results">

      </div>
    </div>
  );
}

export default SearchPage;

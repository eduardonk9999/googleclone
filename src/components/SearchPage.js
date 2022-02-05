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

import Response from './response';

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
            <div className="searchPage_option">
             <Link to="/settting">Settings</Link>
            </div> 
            <div className="searchPage_option">
             <Link to="/tools">Tools</Link>
            </div> 
          </div>
         </div>
        </div>
      </div>
      
       {true && (
        <div className="searchPage_results">
          <p className="searchPage_resultsCount">
            About {data?.searchInformation.formattedTotalResults}
            retults ({data?.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {data?.items.map(item => (
            <div className='searchPage_result'>
              <a href={item.link}>
                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                  <img className="searchPage_resultImage" src={item.pagemap?.cse_image[0]?.src} alt="" />
                )}
                {item.displayLink}
              </a>
              <a href={item.link} className="searchPage_resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className='searchPage_resultSnippet'>{item.snippet}</p>
            </div>
          ))}
         </div>
       )}
    </div>
  );
}

export default SearchPage;

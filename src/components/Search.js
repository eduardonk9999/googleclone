import React from 'react';
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import { actionTypes } from '../Context/reducer';

function Search({ hideButtons = false }) {
  const [{}, dispatch] = useStateValue();

  const [input, setInput] = useState();
  let navigate = useNavigate();

  const search = e => {
    e.preventDefault();

    console.log('GOOGLE ME NOTA!!!')

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input
    })

    navigate('/search')
  }

  return(
    <form className="search">
      <div className="search_input">
        <SearchIcon className="search_inputIcon" />
        <input value={input} onChange={e => setInput(e.target.value)} />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search_buttons">
          <button type='submit' onClick={search} variant="outlined">Google Search</button>
          <button variant="outlined">I'm Feeling Luck</button>
        </div>
      ) : (
        <div className="search_buttons">
          <button className='search_buttonsHidden' type='submit' onClick={search} variant="outlined">Google Search</button>
          <button className='search_buttonsHidden' variant="outlined">I'm Feeling Luck</button>
        </div>
      )}
    </form>
  );
}


export default Search;
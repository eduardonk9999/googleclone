import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import GoogleImage from '../assets/googleimage.png'
import Search from './Search';

function Home() {
  return(
    <div className="home">
      <div className="home_header">
        <div className="home_headerLeft">
        
        </div>
        <div className="home_headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>
      
      <div className="home_body">
        <img src={GoogleImage} alt="Google Image" />
        <div className="home_inputContainer">
          <Search hideButtons />
        </div>
      </div>
      
    </div>
  )
}

export default Home;
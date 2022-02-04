import Home from './components/Home';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SearchPage from './components/SearchPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/search" element={<SearchPage />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

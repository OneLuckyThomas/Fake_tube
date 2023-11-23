import { Outlet, Link } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className='RootLayout'>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/SearchView">SearchView</Link>
        <Link to="/VideoView">VideoView</Link>
        <SearchBar/>
      </nav>

      <div className='Outlet'>
        <Outlet/>
      </div>

    </div>
  );
}

export default App;

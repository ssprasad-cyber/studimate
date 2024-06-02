import {React,useEffect} from 'react';
import SearchBar from './SearchBar';
import FeaturedContent from './FeaturedContent';
import Header from "./Header"
import { useNavigate } from 'react-router-dom';

 

function HomePage({ loggedIn, setLoggedIn }) {
  const navigate = useNavigate();

    useEffect(() => {
      // Check if user is not logged in, then redirect to login page
      if (!loggedIn) {
        navigate('/login');
      }
    }, [loggedIn, navigate]);
  return (
    
    <div className=''>
      <Header/>
      <h1 className=''>Welcome to Studimate</h1>
      <SearchBar />
      <FeaturedContent loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
      <a href='./main' className='text-bold'><button className='shadow-xl border border-black-500 border-2 rounded-lg p-3'>main page</button></a>

    </div>
  );
}

export default HomePage;

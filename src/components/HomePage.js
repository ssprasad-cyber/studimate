import React from 'react';
import SearchBar from './SearchBar';
import FeaturedContent from './FeaturedContent';
import Header from "./Header"

function HomePage({ loggedIn, setLoggedIn }) {
  return (
    
    <div className=''>
      <Header/>
      <h1 className=''>Welcome to Studimate</h1>
      <SearchBar />
      <FeaturedContent loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default HomePage;

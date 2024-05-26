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
      <a href='./main' className='text-bold'><button className='shadow-xl border border-black-500 border-2 rounded-lg p-3'>main page</button></a>

    </div>
  );
}

export default HomePage;

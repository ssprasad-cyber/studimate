import React from 'react';
import SearchBar from './SearchBar';
import FeaturedContent from './FeaturedContent';

function HomePage({ loggedIn, setLoggedIn }) {
  return (
    <div>
      <h1>Welcome to Studimate</h1>
      <SearchBar />
      <FeaturedContent loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
    </div>
  );
}

export default HomePage;

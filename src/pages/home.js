import React from 'react';
import SearchBooks from '../components/SearchBooks';
import isLoggedIn from '../appState';
import SearchResult from '../components/SearchResult';

const Home = () => {
  return (
    <React.Fragment>
      <SearchBooks />
    </React.Fragment>
  );
};
export default Home;

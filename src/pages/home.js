import React from 'react';
import ReqsFeed from '../components/ReqsFeed';
import SearchBooks from '../components/SearchBooks';
import SearchResult from '../components/SearchResult';

const Home = () => {
  return (
    <React.Fragment>
      <SearchBooks />
      <ReqsFeed />
    </React.Fragment>
  );
};
export default Home;

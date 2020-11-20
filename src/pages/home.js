import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { ME } from '../gql/query';
import ReqsFeed from '../components/ReqsFeed';
import SearchBooks from '../components/SearchBooks';
import SearchResult from '../components/SearchResult';
import { isLoggedIn } from '../appState';

const Home = () => {
  if (isLoggedIn) {
    const { data, loading, error } = useQuery(ME);
  }

  return (
    <React.Fragment>
      <SearchBooks />
      <ReqsFeed />
    </React.Fragment>
  );
};
export default Home;

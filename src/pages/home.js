import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { ME } from '../gql/query';
import ReqsFeed from '../components/ReqsFeed';
import SearchBooks from '../components/SearchBooks';
import SearchResult from '../components/SearchResult';

const Home = () => {
  const { data: isLoggedIn } = useQuery(gql`
    query isLoggedIn {
      isLoggedIn @client
    }
  `);
  if (isLoggedIn) useQuery(ME);
  return (
    <React.Fragment>
      <SearchBooks />
      <ReqsFeed />
    </React.Fragment>
  );
};
export default Home;

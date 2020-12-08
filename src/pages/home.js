import React, { useEffect } from 'react';
import { gql, useQuery } from '@apollo/client';
import { ME } from '../gql/query';
import ReqsFeed from '../components/ReqsFeed';
import SearchBooks from '../components/SearchBooks';
import SearchResult from '../components/SearchResult';
import Toast from '../components/Toast';
import { toastState } from '../appState';

const Home = () => {
  const { data: isLoggedIn } = useQuery(gql`
    {
      isLoggedIn @client
    }
  `);
  if (isLoggedIn) useQuery(ME);
  return (
    <React.Fragment>
      <SearchBooks />
      <ReqsFeed />
      {toastState() && toastState().added && (
        <Toast message={toastState().message} state={true} />
      )}
      {toastState() && toastState().deleted && (
        <Toast message={toastState().message} state={true} />
      )}
    </React.Fragment>
  );
};
export default Home;

import React from 'react';
import { useQuery } from '@apollo/client';
import { SEARCH_BOOK, HELLO } from '../gql/query';

const Home = () => {
  // query search
  const { data, loading, error, variables } = useQuery(SEARCH_BOOK, {
    variables: { keywords: 'andrea hirata' },
  });
  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  return <div>{JSON.stringify(data.searchBook)}</div>;
};
export default Home;

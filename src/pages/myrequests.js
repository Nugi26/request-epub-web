import React from 'react';
import { ME } from '../gql/query';
import { useQuery } from '@apollo/client';
import Requested from '../components/requested';

const MyRequests = () => {
  const { data, loading, error } = useQuery(ME);
  return (
    <React.Fragment>
      {/* TODO: use mui alert component! */}
      <div aria-live="polite">
        {loading && 'loading'}
        {error && `${error.message}`}
      </div>
      {data && <Requested books={data.me.requests} showedIn="myRequests" />}
    </React.Fragment>
  );
};
export default MyRequests;

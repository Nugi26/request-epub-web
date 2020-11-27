import React from 'react';
import { REQUESTS_FEED, ME } from '../gql/query';
import { useQuery } from '@apollo/client';
import Requested from '../components/requested';

const MyRequests = () => {
  const { data, loading, error } = useQuery(ME);
  const { data: reqsFeedData } = useQuery(REQUESTS_FEED, {
    variables: {
      // TODO: put variables into appState
      pageNumber: 1,
      orderBy: 'reqs_count',
      orderDirection: 'desc',
    },
  });
  return (
    <React.Fragment>
      {/* TODO: use mui alert component! */}
      <div aria-live="polite">
        {loading && 'loading'}
        {error && `${error.message}`}
      </div>
      {data && (
        <Requested
          books={data.me.requests}
          userData={data.me}
          showedIn="myRequests"
        />
      )}
    </React.Fragment>
  );
};
export default MyRequests;

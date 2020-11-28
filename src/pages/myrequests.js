import React from 'react';
import { REQUESTS_FEED, ME } from '../gql/query';
import { useQuery } from '@apollo/client';
import Requested from '../components/requested';
import Typography from '@material-ui/core/Typography';

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
      <Typography variant="h5" component="h2">
        Permintaan Anda
      </Typography>
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

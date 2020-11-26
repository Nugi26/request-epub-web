import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';
import { REQUESTS_FEED } from '../gql/query';
import Grid from '@material-ui/core/Grid';
import Requested from './requested';
import BasicPagination from './Pagination';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
  loadStatus: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));

const ReqsFeed = () => {
  const classes = useStyles();
  // TODO: store these into appState
  const [params, setParams] = useState({
    pageNumber: 1,
    orderBy: 'reqs_count',
    orderDirection: 'desc',
  });
  const { data, loading, error, refetch } = useQuery(REQUESTS_FEED, {
    variables: { ...params },
  });
  console.log(data);
  return (
    <Container className={classes.root}>
      <Grid container justify="center">
        <Grid item xs={12} sm={4} aria-live="polite">
          {loading && 'loading...'}
          {error && `${error.message}`}
        </Grid>
      </Grid>
      {data && <Requested books={data.requestsFeed.requests} showedIn="home" />}
      {data && data.requestsFeed.totalReqs > 10 && (
        <Grid container justify="center">
          <BasicPagination
            totalReqs={data.requestsFeed.totalReqs}
            refetch={() => refetch()}
            setParams={() => setParams()}
            params={params}
          />
        </Grid>
      )}
      <button
        onClick={() =>
          refetch({
            pageNumber: 2,
            orderBy: 'reqs_count',
            orderDirection: 'desc',
          })
        }
      >
        test
      </button>
    </Container>
  );
};
export default ReqsFeed;

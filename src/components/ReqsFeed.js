import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';
import { REQUESTS_FEED } from '../gql/query';
import Grid from '@material-ui/core/Grid';
import Requested from './requested';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
  },
  loadStatus: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));

const ReqsFeed = () => {
  const classes = useStyles();
  const [params, setParams] = useState({
    pageNumber: 1,
    orderBy: 'reqs_count',
    orderDirection: 'desc',
  });
  const { data, loading, error } = useQuery(REQUESTS_FEED, {
    variables: { ...params },
  });
  return (
    <Container className={classes.root}>
      <Typography variant="h6" component="h2">
        Daftar Permintaan Buku
      </Typography>
      <Grid container justify="center">
        <Grid item xs={12} sm={4} aria-live="polite">
          {loading && 'loading...'}
          {error && `${error.message}`}{' '}
        </Grid>
      </Grid>
      {data && <Requested books={data.requestsFeed.requests} showedIn="home" />}
    </Container>
  );
};
export default ReqsFeed;

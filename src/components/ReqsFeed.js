import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';
import { REQUESTS_FEED } from '../gql/query';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Requested from './requested';
import BasicPagination from './Pagination';
import { pageState } from '../appState';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  loadStatus: {
    marginBottom: theme.spacing(1),
    marginTop: theme.spacing(1),
  },
}));

const ReqsFeed = () => {
  const classes = useStyles();
  const { data, loading, error, refetch } = useQuery(REQUESTS_FEED, {
    variables: pageState(),
  });

  // sort
  const sortOnChange = event => {
    pageState({
      pageNumber: pageState().pageNumber,
      orderBy: event.target.value,
      orderDirection: 'desc',
    });
    refetch(pageState());
  };
  return (
    <React.Fragment>
      <Typography variant="h5" component="h2">
        Daftar Permintaan Buku
      </Typography>
      {/* TODO: change into loading circle */}
      <Grid container justify="center">
        <Grid item xs={12} sm={4} aria-live="polite">
          {loading && 'loading...'}
          {error && `${error.message}`}
        </Grid>
      </Grid>

      {/* sort options */}
      <Grid container justify="center">
        <InputLabel variant="outlined" id="urutkan">
          Urutkan
        </InputLabel>
        <Select
          labelId="urutkan"
          id="sort"
          value={pageState().orderBy}
          onChange={sortOnChange}
          variant="outlined"
          autoWidth
        >
          <MenuItem value="reqs_count">Permintaan terbanyak</MenuItem>
          <MenuItem value="id">Permintaan terbaru</MenuItem>
        </Select>
      </Grid>

      {data && <Requested books={data.requestsFeed.requests} showedIn="home" />}

      {/* pagination */}
      {data && data.requestsFeed.totalReqs > 10 && (
        <Grid container justify="center">
          <BasicPagination
            totalReqs={data.requestsFeed.totalReqs}
            refetch={() => refetch(pageState())}
          />
        </Grid>
      )}
    </React.Fragment>
  );
};
export default ReqsFeed;

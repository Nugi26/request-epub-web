import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery } from '@apollo/client';
import { REQUESTS_FEED } from '../gql/query';
import Grid from '@material-ui/core/Grid';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Requested from './requested';
import { BasicPagination } from './Pagination';
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
        <FormControl>
          <InputLabel htmlFor="sort">Urutkan</InputLabel>
          <Select
            native
            value={pageState().orderBy}
            onChange={sortOnChange}
            inputProps={{
              name: 'sort',
              id: 'sort',
            }}
          >
            <option value="reqs_count">Permintaan terbanyak</option>
            <option value="id">Permintaan terbaru</option>
          </Select>
        </FormControl>
      </Grid>

      {data && <Requested books={data.requestsFeed.requests} showedIn="home" />}

      {/* pagination */}
      {data && data.requestsFeed.totalReqs > 10 && (
        <BasicPagination
          totalItems={data.requestsFeed.totalReqs}
          refetch={() => refetch(pageState())}
        />
      )}
    </React.Fragment>
  );
};
export default ReqsFeed;

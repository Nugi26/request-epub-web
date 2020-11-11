import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Requested from './requested';
import Unrequested from './unrequested';

const SearchResult = ({ result, data }) => {
  let books;
  if (data) books = data.searchBook.items;
  return (
    <React.Fragment>
      <Grid container justify="center">
        <Paper aria-live="polite">
          {result && result.loading && 'loading....'}
          {result && result.error && 'Buku tidak ditemukan'}{' '}
          {data && `ditemukan ${data.searchBook.totalItems} hasil`}
        </Paper>
      </Grid>
      {data && <BookResult books={books} />}
    </React.Fragment>
  );
};
export default SearchResult;

const BookResult = ({ books }) => {
  const requested = books.filter(book => book.reqs_count !== null);
  const unrequested = books.filter(book => book.reqs_count === null);
  return (
    <React.Fragment>
      {!!requested.length && <Requested books={requested} />}
      {!!unrequested.length && <Unrequested books={unrequested} />}
    </React.Fragment>
  );
};

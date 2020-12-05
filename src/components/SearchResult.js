import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Requested from './requested';
import Unrequested from './unrequested';
import { SearchResultPagination } from './Pagination';

const SearchResult = ({ result, data, totalItems }) => {
  let books;
  if (data) books = data.searchBook.items;
  return (
    <React.Fragment>
      <Grid container justify="center">
        <Paper aria-live="polite">
          {result && result.loading && 'loading....'}
          {result && result.error && 'Buku tidak ditemukan'}{' '}
          {data && `ditemukan ${totalItems} hasil`}
        </Paper>
      </Grid>
      {data && <BookResult books={books} />}
    </React.Fragment>
  );
};
export default SearchResult;

const BookResult = ({ books }) => {
  let requested = books.filter(book => book.reqs_count !== 0);
  let unrequested = books.filter(book => book.reqs_count === 0);
  return (
    <React.Fragment>
      {!!requested.length && (
        <Requested books={requested} showedIn="searchResult" />
      )}
      {!!unrequested.length && (
        <Unrequested books={unrequested} showedIn="searchResult" />
      )}
    </React.Fragment>
  );
};

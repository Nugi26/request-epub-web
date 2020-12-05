import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Requested from './requested';
import Unrequested from './unrequested';
import { SearchResultPagination } from './Pagination';

const SearchResult = ({ result, data, runQuery }) => {
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
      {data && (
        <BookResult
          books={books}
          totalItems={data.searchBook.totalItems}
          runQuery={runQuery}
        />
      )}
    </React.Fragment>
  );
};
export default SearchResult;

const BookResult = ({ books, totalItems, runQuery }) => {
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
      <SearchResultPagination totalItems={30} queryPage={runQuery} />
    </React.Fragment>
  );
};

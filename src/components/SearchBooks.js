import React, { useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { SEARCH_BOOK } from '../gql/query';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import SearchResult from './SearchResult';

const useStyles = makeStyles(theme => ({
  search: {
    padding: 0,
    margin: 0,
    borderRadius: 0,
    width: '80%',
  },
  searchButton: {
    margin: 0,
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    height: '100%',
  },
}));

const SearchBooks = () => {
  const classes = useStyles();

  // search field handler
  const [keywords, setKeywords] = useState('');
  const onChange = event => {
    setKeywords(event.target.value);
  };

  const [querySearch, { loading, error, data }] = useLazyQuery(SEARCH_BOOK);

  // run query
  const runQuery = () => {
    if (!keywords) return null;
    querySearch({
      variables: { keywords },
    });
  };

  const onKeyUp = e => {
    if (e.keyCode === 13) {
      runQuery();
    }
  };

  return (
    <React.Fragment>
      <Container maxWidth="xs">
        <TextField
          className={classes.search}
          id="search"
          label="Cari"
          type="search"
          placeholder="Judul & Pengarang"
          variant="outlined"
          onChange={onChange}
          onKeyUp={onKeyUp}
        />
        <IconButton aria-label="Search" onClick={runQuery}>
          <SearchIcon />
        </IconButton>
      </Container>
      <SearchResult result={{ loading, error }} data={data} />
    </React.Fragment>
  );
};
export default SearchBooks;

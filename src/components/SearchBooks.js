import React, { useState } from 'react';
import { useLazyQuery, makeVar } from '@apollo/client';
import { SEARCH_BOOK } from '../gql/query';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Container from '@material-ui/core/Container';
import SearchResult from './SearchResult';
import { SearchResultPagination } from './Pagination';
import { fixedTotalItems, lastKeywords } from '../appState';

const useStyles = makeStyles(theme => ({
  searchBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
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
  const [keywordsChanged, setKeywordsChanged] = useState(false);

  // run query
  const runQuery = (startIndex = 0) => {
    if (!keywords) return null;
    // check if keywords are changed
    if (keywords !== lastKeywords()) {
      setKeywordsChanged(true);
      lastKeywords(keywords);
    } else setKeywordsChanged(false);

    querySearch({
      variables: { keywords, startIndex },
    });
  };

  const { searchBook } = { ...data };
  const { totalItems } = { ...searchBook };
  // set fixed totalItems results
  // because gbook api always returns different totalItems on paginated query, and is always bigger approx. about 60%
  if (keywordsChanged) fixedTotalItems(totalItems * 0.5);

  const onKeyUp = e => {
    if (e.keyCode === 13) {
      runQuery();
    }
  };

  return (
    <React.Fragment>
      <Container className={classes.searchBar}>
        <TextField
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
      <SearchResult
        result={{ loading, error }}
        data={data}
        totalItems={fixedTotalItems()}
      />
      <SearchResultPagination
        totalItems={fixedTotalItems()}
        queryPage={runQuery}
        keywords={keywords}
        keywordsChanged={keywordsChanged}
      />
    </React.Fragment>
  );
};
export default SearchBooks;

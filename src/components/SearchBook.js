import React, { useState } from 'react';
import { useQuery } from '@apollo/client';

const SearchBook = () => {
  // search edit box onChange handler
  const [keywords, setKeywords] = useState('');
  const onChange = event => {
    setKeywords(event.target.value);
  };
  console.log(keywords);

  // query the book search
  const { data, loading, error } = useQuery(SEARCH_BOOK, {
    variables: { keywords },
  });
};

export default SearchBook;

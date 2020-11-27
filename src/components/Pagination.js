import React, { useState } from 'react';
import { pageState } from '../appState';
import Pagination from '@material-ui/lab/Pagination';
import { useLazyQuery } from '@apollo/client';
import { REQUESTS_FEED } from '../gql/query';

export default function BasicPagination({ totalReqs, refetch }) {
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(totalReqs / 10);
  const [feed, { loading, data, error }] = useLazyQuery(REQUESTS_FEED);
  const handleChange = (event, value) => {
    setPage(value);
    pageState({
      pageNumber: value,
      orderBy: 'reqs_count',
      orderDirection: 'desc',
    });
    refetch();
  };
  return (
    <Pagination
      size="large"
      count={totalPage}
      color="primary"
      page={page}
      onChange={handleChange}
    />
  );
}

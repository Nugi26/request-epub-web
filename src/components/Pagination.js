import React, { useState } from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useLazyQuery } from '@apollo/client';
import { REQUESTS_FEED } from '../gql/query';

export default function BasicPagination({
  totalReqs,
  setParams,
  params,
  refetch,
}) {
  const [page, setPage] = useState(1);
  const totalPage = Math.ceil(totalReqs / 10);
  const [feed, { loading, data, error }] = useLazyQuery(REQUESTS_FEED);
  console.log(page);
  const handleChange = (event, value) => {
    // setParams({
    //   pageNumber: page,
    //   orderBy: 'reqs_count',
    //   orderDirection: 'desc',
    // });
    // feed({
    //   variables: {
    //     pageNumber: value,
    //     orderBy: 'reqs_count',
    //     orderDirection: 'desc',
    //   },
    // });
    refetch({
      pageNumber: value,
      orderBy: 'reqs_count',
      orderDirection: 'desc',
    });
  };
  return (
    <Pagination
      count={totalPage}
      color="primary"
      page={page}
      onChange={handleChange}
    />
  );
}

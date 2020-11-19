import React from 'react';
import { ADD_REQ, DELETE_REQ } from '../gql/mutation';
import { ME, REQUESTS_FEED } from '../gql/query';
import { useApolloClient, useMutation } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
  reqButton: {
    margin: theme.spacing(3, 'auto', 0),
  },
}));

const ReqButton = ({ book }) => {
  const classes = useStyles();
  // remove book props that shouldn't be recorded into db
  const {
    __typename,
    id,
    reqs_count,
    req_by_me: reqByMe,
    ...bookInputData
  } = book;

  const [
    add,
    { loading: loadingAdd, error: errorAdd, data: dataAdd },
  ] = useMutation(ADD_REQ, {
    refetchQueries: [
      { query: ME },
      {
        query: REQUESTS_FEED,
        variables: {
          pageNumber: 1,
          orderBy: 'reqs_count',
          orderDirection: 'desc',
        },
      },
    ],
  });

  const [
    del,
    { loading: loadingDel, error: errorDel, data: dataDel },
  ] = useMutation(DELETE_REQ, {
    refetchQueries: [
      { query: ME },
      {
        query: REQUESTS_FEED,
        variables: {
          pageNumber: 1,
          orderBy: 'reqs_count',
          orderDirection: 'desc',
        },
      },
    ],
  });

  const addReq = () => {
    add({
      variables: { book: bookInputData },
    });
  };

  const delReq = () => {
    del({
      variables: { bookId: id },
    });
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        aria-label={
          reqByMe ? 'batalkan permintaan buku' : 'tambah permintaan buku'
        }
        color={reqByMe ? 'primary' : 'secondary'}
        className={classes.reqButton}
        onClick={reqByMe ? delReq : addReq}
      >
        {reqByMe ? <Remove /> : <Add />}
        {(loadingAdd || loadingDel) && (
          <CircularProgress color="inherit" size={14} />
        )}
      </Button>
    </React.Fragment>
  );
};
export default ReqButton;

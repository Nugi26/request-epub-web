import React, { useState } from 'react';
import { ADD_REQ, DELETE_REQ } from '../gql/mutation';
import { IS_LOGGED_IN, ME, REQUESTS_FEED } from '../gql/query';
import { useApolloClient, useMutation, useQuery } from '@apollo/client';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';
import { pageState, toastState } from '../appState';

const useStyles = makeStyles(theme => ({
  reqButton: {
    margin: theme.spacing(3, 'auto', 0),
  },
}));

const ReqButton = ({ book, showedIn }) => {
  const classes = useStyles();
  // remove book props that shouldn't be recorded into db
  const {
    __typename,
    id,
    reqs_count,
    req_by_me: reqByMe,
    ...bookInputData
  } = book;

  const updateHandler = action => {
    return {
      update(cache) {
        const userData = cache.readQuery({
          query: ME,
        });

        // update user's myRequests list
        cache.writeQuery({
          query: ME,
          data: {
            me: {
              requests:
                action === 'add'
                  ? [...userData.me.requests, book]
                  : userData.me.requests.filter(req => req.id !== book.id),
            },
          },
        });

        cache.modify({
          id: cache.identify(book),
          fields: {
            reqs_count(existing) {
              return action === 'add' ? existing + 1 : existing - 1;
            },
            req_by_me(currentState) {
              return !currentState;
            },
          },
        });

        // remove book if reqs_count reaches 0
        if (book.reqs_count === 1 && action === 'del') {
          cache.evict({ id: cache.identify(book) });
        }
      },
      variables: action === 'add' ? { book: bookInputData } : { bookId: id },
      onCompleted: () => {
        toastState(
          action === 'add'
            ? {
                message: 'Permintaan berhasil ditambahkan',
                severity: 'success',
              }
            : { message: 'Permintaan dibatalkan', severity: 'success' }
        );
      },
    };
  };

  const [
    add,
    { loading: loadingAdd, error: errorAdd, data: dataAdd },
  ] = useMutation(ADD_REQ, updateHandler('add'));

  const [
    del,
    { loading: loadingDel, error: errorDel, data: dataDel },
  ] = useMutation(DELETE_REQ, updateHandler('del'));

  const { data: login } = useQuery(IS_LOGGED_IN);

  const addReq = () => {
    if (!login.isLoggedIn)
      return toastState({
        message: 'Anda harus login terlebih dahulu',
        severity: 'error',
      });
    add();
  };

  const delReq = () => {
    if (!login.isLoggedIn)
      return toastState({
        message: 'Anda harus login terlebih dahulu',
        severity: 'error',
      });
    del();
  };

  return (
    <React.Fragment>
      <Button
        variant="contained"
        aria-label={
          reqByMe ? 'batalkan permintaan buku' : 'tambah permintaan buku'
        }
        color={reqByMe ? 'secondary' : 'primary'}
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

import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { toastState } from '../appState';
import { gql, useQuery } from '@apollo/client';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Toast() {
  const { data, loading, error } = useQuery(gql`
    {
      toastState @client
    }
  `);

  const handleClose = (event, reason) => {
    if (reason === 'timeout') {
      toastState(false);
    }
  };
  if (loading || error) return <React.Fragment></React.Fragment>;

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={data.toastState}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert severity={toastState().severity || 'success'}>
          {toastState().message}
        </Alert>
      </Snackbar>
    </div>
  );
}

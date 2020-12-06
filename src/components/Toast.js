import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { toastState } from '../appState';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Toast({ message, state }) {
  const [open, setOpen] = React.useState(state);
  // const message = toastMessage();

  const handleClose = (event, reason) => {
    if (reason === 'timeout') {
      setOpen(false);
      toastState(false);
    }
  };

  return (
    <div>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
      >
        <Alert severity="success">{message}</Alert>
      </Snackbar>
    </div>
  );
}

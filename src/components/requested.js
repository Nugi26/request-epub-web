import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Requested = ({ books }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper className={classes.paper}>book cover</Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.paper}>book info</Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>requests count</Paper>
        </Grid>
      </Grid>
    </div>
  );
};
export default Requested;

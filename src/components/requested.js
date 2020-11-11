import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
        <Typography gutterBottom variant="h5" component="h3">
          Buku yang belum di-request
        </Typography>

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

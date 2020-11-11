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
      <Typography gutterBottom variant="h4" component="h3">
        Buku yang telah di-request
      </Typography>

      <Grid container spacing={1}>
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

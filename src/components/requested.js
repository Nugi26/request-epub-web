import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RequestedCard from './RequestedCard';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
    listStyleType: 'none',
  },
  gridContainer: {
    paddingTop: theme.spacing(3),
  },
}));

export default function Requested({ books }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography gutterBottom variant="h5" component="h3">
          Buku yang telah di-request
        </Typography>
        <Grid
          container
          spacing={4}
          component="ul"
          justify="center"
          className={classes.gridContainer}
        >
          {books.map(book => {
            return (
              <Grid item key={book.id} xs={12} md={12} component="li">
                <RequestedCard book={book} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

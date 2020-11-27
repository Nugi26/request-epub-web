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
    flexDirection: 'column',
  },
}));

export default function Requested({ books, userData, showedIn }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography
          gutterBottom
          variant="h5"
          component={showedIn === 'searchResult' ? 'h3' : 'h2'}
        >
          {showedIn === 'searchResult'
            ? 'Buku yang telah di-request'
            : showedIn === 'home'
            ? 'Daftar Permintaan Buku'
            : 'Request Anda'}
        </Typography>
        <Grid
          container
          spacing={3}
          component="ul"
          className={classes.gridContainer}
          wrap="nowrap"
        >
          {books.map(book => {
            return (
              <Grid item key={book.id} xs={12} component="li">
                <RequestedCard
                  book={book}
                  showedIn={showedIn}
                  userData={userData}
                />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

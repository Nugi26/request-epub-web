import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RequestedCard from './RequestedCard';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
  gridContainer: {
    paddingTop: theme.spacing(2),
    flexDirection: 'column',
  },
  cardItem: {
    listStyleType: 'none',
  },
}));

export default function Requested({ books, userData, showedIn }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.root} maxWidth="lg">
        {showedIn === 'searchResult' && (
          <Typography gutterBottom variant="h5" component="h3">
            Buku yang telah di-request
          </Typography>
        )}
        <Grid
          container
          spacing={3}
          component="ul"
          className={classes.gridContainer}
          wrap="nowrap"
        >
          {books.map(book => {
            return (
              <Grid
                item
                key={book.id}
                xs={12}
                component="li"
                className={classes.cardItem}
              >
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

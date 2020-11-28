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
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
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
      <Container className={classes.cardGrid} maxWidth="lg">
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

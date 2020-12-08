import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UnrequestedCard from './UnrequestedCard';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
  },
  cardGrid: {
    paddingTop: theme.spacing(4),
  },
  cardItem: {
    listStyleType: 'none',
  },
}));

export default function Unrequested({ books, showedIn }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.root} maxWidth="md">
        <Typography gutterBottom variant="h5" component="h3">
          Buku yang belum di-request
        </Typography>
        <Grid container spacing={4} component="ul" className={classes.cardGrid}>
          {books.map(book => {
            return (
              <Grid
                item
                key={book.id}
                xs={12}
                sm={6}
                md={4}
                component="li"
                className={classes.cardItem}
              >
                <UnrequestedCard book={book} showedIn={showedIn} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

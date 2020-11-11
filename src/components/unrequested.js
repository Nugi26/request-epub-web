import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import UnrequestedCard from './UnrequestedCard';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    listStyleType: 'none',
  },
}));

export default function Unrequested({ books }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography gutterBottom variant="h5" component="h3">
          Buku yang belum di-request
        </Typography>
        <Grid container spacing={4}>
          {books.map(book => {
            return (
              <Grid item key={book.gbook_id} xs={12} sm={6} md={4}>
                <UnrequestedCard book={book} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

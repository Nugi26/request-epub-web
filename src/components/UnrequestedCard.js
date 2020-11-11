import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles(theme => ({
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const UnrequestedCard = ({ book }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cardMedia}
        image={book.small_thumbnail || 'https://source.unsplash.com/random'}
        title={`Gambar cover buku ${book.title}`}
      />
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle1" component="h4">
          {book.title}
        </Typography>
        {book.subtitle && (
          <Typography variant="subtitle2" component="h5" noWrap>
            {book.subtitle}
          </Typography>
        )}

        <Typography variant="body2">
          {!!book.authors && `Penulis: ${book.authors.join(', ')}.`}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="medium" color="primary">
          Tambah Request
        </Button>
      </CardActions>
    </Card>
  );
};
export default UnrequestedCard;

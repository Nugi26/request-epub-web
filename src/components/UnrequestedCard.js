import React from 'react';
import ReqButton from './ReqButton';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Collapse from '@material-ui/core/Collapse';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const UnrequestedCard = ({ book, showedIn }) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
          <br />
          {!!book.publisher && `Penerbit ${book.publisher}`}
          <br />
          {!!book.published_date && `${book.published_date}`}
          <br />
          {!!book.average_rating && `Rating ${book.average_rating}`}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <ReqButton book={book} showedIn={showedIn} />
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="body2">
            {book.description || 'Tidak ada deskripsi'}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default UnrequestedCard;

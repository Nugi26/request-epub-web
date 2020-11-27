import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
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
import ReqButton from './ReqButton';

const useStyles = makeStyles(theme => ({
  cardMedia: {
    height: '100%',
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

const RequestedCard = ({ book, userData, showedIn }) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles();

  const [bookId, setBookId] = useState(book.id);
  const handleId = newId => setBookId(newId);

  return (
    <React.Fragment>
      <Card>
        <Grid container justify="center" alignItems="stretch">
          <Grid item xs={3} md={2}>
            <CardMedia
              className={classes.cardMedia}
              image={
                book.small_thumbnail || 'https://source.unsplash.com/random'
              }
              title={`Gambar cover buku ${book.title}`}
            />
          </Grid>
          <Grid
            item
            xs={6}
            md={4}
            container
            direction="column"
            justify="space-between"
            alignItems="stretch"
          >
            <Grid item>
              <CardContent>
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
            </Grid>
            <Grid item>
              <CardActions>
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="lihat deskripsi"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
            </Grid>
          </Grid>
          <Grid
            item
            xs={3}
            md={2}
            container
            justify="center"
            direction="column"
          >
            <Typography
              variant="h3"
              align="center"
              display="block"
              component="span"
            >
              {book.reqs_count}
            </Typography>
            <Typography
              variant="caption"
              component="span"
              align="center"
              display="block"
            >
              Total request
            </Typography>
            <ReqButton book={book} showedIn={showedIn} userData={userData} />
          </Grid>
        </Grid>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2" align="center">
              {book.description || 'Tidak ada deskripsi'}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </React.Fragment>
  );
};
export default RequestedCard;

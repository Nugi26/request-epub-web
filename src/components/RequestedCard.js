import React from 'react';
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
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  cardMedia: {
    height: '100%',
  },
  cardContent: {
    height: '80%',
  },
  cardAction: {
    height: '20%',
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

const RequestedCard = ({ book }) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles();
  return (
    <React.Fragment>
      <Card>
        <Grid container spacing={0}>
          <Grid item xs={3}>
            <CardMedia
              className={classes.cardMedia}
              image={
                book.small_thumbnail || 'https://source.unsplash.com/random'
              }
              title={`Gambar cover buku ${book.title}`}
            />
          </Grid>
          <Grid item xs={6}>
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
            <CardActions className={classes.cardAction} disableSpacing>
              {/* TODO: setState for toggle */}
              <Button size="medium" color="primary">
                Tambah Request
              </Button>
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
          </Grid>
          <Grid item xs={3}>
            request count
          </Grid>
        </Grid>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography variant="body2">
              {book.description || 'Tidak ada deskripsi'}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </React.Fragment>
  );
};
export default RequestedCard;

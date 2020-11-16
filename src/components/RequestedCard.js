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
import Add from '@material-ui/icons/Add';
import Remove from '@material-ui/icons/Remove';

const useStyles = makeStyles(theme => ({
  cardMedia: {
    height: '100%',
  },
  cardContent: {
    height: '80%',
    padding: theme.spacing(2, 4, 0),
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
  reqsAction: {
    height: '100%',
    padding: theme.spacing(4, 1),
    flexDirection: 'column',
  },
  reqButton: {
    margin: theme.spacing(3, 'auto', 0),
  },
}));

const RequestedCard = ({ book }) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const classes = useStyles();

  const reqByMe = book.req_by_me;
  return (
    <React.Fragment>
      <Card>
        <Grid container spacing={0} justify="center">
          <Grid item xs={3} md={2}>
            <CardMedia
              className={classes.cardMedia}
              image={
                book.small_thumbnail || 'https://source.unsplash.com/random'
              }
              title={`Gambar cover buku ${book.title}`}
            />
          </Grid>
          <Grid item xs={6} md={4}>
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
          <Grid
            container
            xs={3}
            md={2}
            className={classes.reqsAction}
            justify="center"
          >
            <Typography
              variant="h3"
              component="p"
              align="center"
              display="block"
            >
              {book.reqs_count}
            </Typography>
            <Typography
              variant="caption"
              component="p"
              align="center"
              display="block"
            >
              Total request
            </Typography>
            <Button
              variant="contained"
              aria-label={
                reqByMe ? 'batalkan permintaan buku' : 'tambah permintaan buku'
              }
              color={reqByMe ? 'primary' : 'secondary'}
              className={classes.reqButton}
            >
              {reqByMe ? <Remove /> : <Add />}
            </Button>
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

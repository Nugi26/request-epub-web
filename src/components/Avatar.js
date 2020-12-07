import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));

export default function UserAvatar({ url, username }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="subtitle2">{username}</Typography>
      <Avatar alt={username} src={url} className={classes.large} />
    </div>
  );
}

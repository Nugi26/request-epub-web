import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { useQuery, gql } from '@apollo/client';
import { ME } from '../gql/query';

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

export default function UserAvatar() {
  const classes = useStyles();
  const { data, loading, error } = useQuery(ME);
  if (loading) return <React.Fragment>loading</React.Fragment>;
  if (error) return <p>`${error.message}`</p>;
  const { me } = { ...data };
  const { username, avatar } = { ...me };
  return (
    <div className={classes.root}>
      <Typography variant="subtitle2">{username}</Typography>
      <Avatar alt={username} src={avatar} className={classes.large} />
    </div>
  );
}

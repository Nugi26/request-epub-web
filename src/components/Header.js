import React from 'react';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useQuery, useApolloClient, gql } from '@apollo/client';
import { isLoggedIn } from '../appState';
import { IS_LOGGED_IN, ME } from '../gql/query';
import UserAvatar from './Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    background: '#00008b',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();
  const client = useApolloClient();
  const { data } = useQuery(IS_LOGGED_IN);

  const history = useHistory();
  const onClick = () => {
    // remove the token
    localStorage.removeItem('token');
    // clear the application's cache
    // client.resetStore();
    // update isLoggedIn state
    // isLoggedIn(!!localStorage.getItem('token'));
    // reload page
    history.go(0);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Container maxWidth="lg">
          <Toolbar>
            <Typography variant="h6" className={classes.title} component="h1">
              Request EPUB untuk Tunanetra
            </Typography>
            {!data.isLoggedIn && (
              <React.Fragment>
                <Button component={Link} color="inherit" to="/signin">
                  Sign in
                </Button>
                <span>|</span>
                <Button component={Link} color="inherit" to="/signup">
                  Sign up
                </Button>
              </React.Fragment>
            )}
            {data.isLoggedIn && (
              <React.Fragment>
                {/* FIXME: query to ME id as {22} */}
                <UserAvatar />
                <Button color="inherit" onClick={onClick}>
                  Logout
                </Button>
              </React.Fragment>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

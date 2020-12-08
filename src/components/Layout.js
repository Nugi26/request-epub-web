import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/adinugraha2611/">
        Adinugraha2611
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <Container maxWidth="md">
        <main>{children}</main>
      </Container>
      <Box mt={5}>
        <Copyright />
      </Box>
    </React.Fragment>
  );
};

export default Layout;

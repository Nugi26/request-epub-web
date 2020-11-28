import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Container from '@material-ui/core/Container';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <Container maxWidth="md">
        <main>{children}</main>
      </Container>
    </React.Fragment>
  );
};

export default Layout;

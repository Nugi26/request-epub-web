import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Container from '@material-ui/core/Container';
import Toast from './Toast';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <Container maxWidth="md">
        <main>{children}</main>
      </Container>
      <Footer />
      <Toast />
    </React.Fragment>
  );
};

export default Layout;

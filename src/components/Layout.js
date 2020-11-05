import React from 'react';
import Header from './Header';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <Navigation />
      <main>{children}</main>
    </React.Fragment>
  );
};

export default Layout;

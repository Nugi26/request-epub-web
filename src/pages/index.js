import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Home from './home';
import MyRequests from './myrequests';
import About from './about';
import SignUp from './SignUp';

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/myrequests" component={MyRequests} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={SignUp} />
      </Layout>
    </Router>
  );
};

export default Pages;

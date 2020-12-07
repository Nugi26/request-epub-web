import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';
import CircularProgress from '@material-ui/core/CircularProgress';
import Layout from '../components/Layout';
import Home from './home';
import MyRequests from './myrequests';
import About from './about';
import SignUp from './SignUp';
import SignIn from './signin';
import { useQuery } from '@apollo/client';
import { IS_LOGGED_IN } from '../gql/query';

const Pages = () => {
  return (
    <Router>
      <Layout>
        <Route exact path="/" component={Home} />
        <PrivateRoute path="/myrequests" component={MyRequests} />
        <Route path="/about" component={About} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
      </Layout>
    </Router>
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { loading, error, data } = useQuery(IS_LOGGED_IN);
  // if the data is loading, display a loading message
  if (loading) return <CircularProgress color="inherit" size={40} />;
  // if there is an error fetching the data, display an error message
  if (error) return <p>`Error! ${error.message}`</p>;
  // if the user is logged in, route them to the requested component
  // else redirect them to the sign-in page
  return (
    <Route
      {...rest}
      render={props =>
        data.isLoggedIn === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/signin',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default Pages;

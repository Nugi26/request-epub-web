import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { useLocation, Link } from 'react-router-dom';

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
  };
}

function LinkTab(props) {
  return <Tab component={Link} {...props} />;
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    background: '#707070',
  },
}));

export default function Navigation(props) {
  const classes = useStyles();
  const { pathname } = useLocation();
  const selectedIndex = () => {
    switch (pathname) {
      case '/myrequests':
        return 1;
      case '/about':
        return 2;
      case '/':
        return 0;
    }
  };
  const [value, setValue] = React.useState(selectedIndex() || 0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" component="nav" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="Navigation Bar"
          centered
        >
          <LinkTab label="Home" to="/" {...a11yProps(0)} />
          <LinkTab label="My Requests" to="/myrequests" {...a11yProps(1)} />
          <LinkTab label="About" to="/about" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
    </div>
  );
}

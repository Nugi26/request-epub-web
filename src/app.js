import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import 'fontsource-roboto';
import Pages from './pages';

const App = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Pages />
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

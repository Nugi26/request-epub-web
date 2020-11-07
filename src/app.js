import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Pages from './pages';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';

const cache = new InMemoryCache();
const uri = process.env.API_URI;
const httpLink = createHttpLink({ uri });

const client = new ApolloClient({
  // link: authLink.concat(httpLink),
  uri,
  cache,
  connectToDevTools: true,
});

// theme settings
const theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Pages />
      </ThemeProvider>
    </ApolloProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

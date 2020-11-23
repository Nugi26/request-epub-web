import { InMemoryCache, makeVar } from '@apollo/client';

export const isLoggedIn = makeVar(!!localStorage.getItem('token'));

export const outputId = makeVar();

export const cache = new InMemoryCache({
  typePolicies: {
    User: {
      fields: {
        requests: {
          merge(existing = [], incoming) {
            return incoming;
          },
        },
      },
    },
    Query: {
      fields: {
        isLoggedIn: {
          read() {
            return isLoggedIn();
          },
        },
      },
    },
  },
});

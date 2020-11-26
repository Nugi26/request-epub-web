import { InMemoryCache, makeVar } from '@apollo/client';

export const isLoggedIn = makeVar(!!localStorage.getItem('token'));

export const outputId = makeVar();

export const cache = new InMemoryCache({
  typePolicies: {
    Book: {
      // when any fields other than keyFileds are changed., the object will be overwritten.
      // So, whenever book.id is changed because of mutation, the object will be the same as before, but with different book.id
      keyFields: ['gbook_id'],
    },
    User: {
      fields: {
        requests: {
          merge: false,
        },
      },
    },
    Query: {
      fields: {
        requestsFeed: {
          keyArgs: ['pageNumber', 'orderBy', 'orderDirection'],
          merge: false,
        },
        isLoggedIn: {
          read() {
            return isLoggedIn();
          },
        },
      },
    },
  },
});

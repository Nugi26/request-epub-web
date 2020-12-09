import { InMemoryCache, makeVar } from '@apollo/client';

export const isLoggedIn = makeVar(!!localStorage.getItem('token'));
export const pageState = makeVar({
  pageNumber: 1,
  orderBy: 'reqs_count',
  orderDirection: 'desc',
});

export const lastKeywords = makeVar('');
export const toastState = makeVar(null);

export const fixedTotalItems = makeVar(null);

export const cache = new InMemoryCache({
  typePolicies: {
    Book: {
      // when any fields other than keyFields are changed., the object will be overwritten.
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
        toastState: {
          read() {
            return toastState();
          },
        },
        requestsFeed: {
          keyArgs: false,
          merge: false,
        },
        searchBook: {
          keyArgs: ['keywords', 'startIndex'],
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

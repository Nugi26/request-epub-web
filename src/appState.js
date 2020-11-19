import { makeVar } from '@apollo/client';

const isLoggedIn = makeVar(!!localStorage.getItem('token'));
export { isLoggedIn };

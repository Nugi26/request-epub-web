import { makeVar } from '@apollo/client';
// make reactive var for storing app login state
const isLoggedIn = makeVar(!!localStorage.getItem('token'));
export default isLoggedIn;

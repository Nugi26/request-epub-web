import { gql } from '@apollo/client';

const SIGN_UP = gql`
  mutation signUp($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password)
  }
`;

const SIGN_IN = gql`
  mutation signIn($usernameOrEmail: String!, $password: String!) {
    signIn(usernameOrEmail: $usernameOrEmail, password: $password)
  }
`;

const ADD_REQ = gql`
  mutation addReq($book: BookInput!) {
    addReq(book: $book)
  }
`;

const DELETE_REQ = gql`
  mutation deleteReq($bookId: ID!) {
    deleteReq(bookId: $bookId)
  }
`;

export { SIGN_UP, SIGN_IN, ADD_REQ, DELETE_REQ };

import { gql } from '@apollo/client';

const SEARCH_BOOK = gql`
  query searchBook($keywords: String!, $startIndex: Int) {
    searchBook(keywords: $keywords, startIndex: $startIndex) {
      totalItems
      items {
        id
        gbook_id
        title
        subtitle
        authors
        publisher
        published_date
        description
        page_count
        maturity_rating
        small_thumbnail
        thumbnail
        average_rating
        ratings_count
        reqs_count
        req_by_me
      }
    }
  }
`;

const HELLO = gql`
  query {
    hello
  }
`;

const ME = gql`
  query me {
    me {
      id
      username
      email
      avatar
      requests {
        id
        gbook_id
        title
        subtitle
        authors
        publisher
        published_date
        description
        page_count
        maturity_rating
        small_thumbnail
        thumbnail
        average_rating
        ratings_count
        reqs_count
        req_by_me
      }
    }
  }
`;

const REQUESTS_FEED = gql`
  query requestsFeed(
    $pageNumber: Int
    $orderBy: String
    $orderDirection: String
  ) {
    requestsFeed(
      pageNumber: $pageNumber
      orderBy: $orderBy
      orderDirection: $orderDirection
    ) {
      totalReqs
      requests {
        id
        gbook_id
        title
        subtitle
        authors
        publisher
        published_date
        description
        page_count
        maturity_rating
        small_thumbnail
        thumbnail
        average_rating
        ratings_count
        reqs_count
        req_by_me
      }
    }
  }
`;

const GET_BOOK = gql`
  query getBook($id: ID!) {
    getBook(id: $id) {
      id
      gbook_id
      title
      subtitle
      authors
      publisher
      published_date
      description
      page_count
      maturity_rating
      small_thumbnail
      thumbnail
      average_rating
      ratings_count
      req_by_me
      reqs_count
    }
  }
`;

export { SEARCH_BOOK, HELLO, ME, REQUESTS_FEED, GET_BOOK };

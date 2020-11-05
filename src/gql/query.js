import { gql } from '@apollo/client';

const SEARCH_BOOK = gql`
  query searchBook($keywords: String) {
    totalItems
    items {
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
      requestedId
    }
  }
`;

export { SEARCH_BOOK };

import { gql } from '@apollo/client';

export const QUERY_GET_ME = gql`
  query me($username: String) {
  }
`;
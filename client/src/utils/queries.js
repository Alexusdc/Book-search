import { gql } from '@apollo/client';

export const GET_ME = gql`
  query me($username: String) {
    user {
        _id
        username
      }
  }
`;
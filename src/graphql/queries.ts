import { gql } from '@apollo/client';

export const GET_POSTS_QUERY = gql`
  query GetPosts($cursor: String) {
    posts(cursor: $cursor) {
      edges {
        id
        content
        image
        userId
        isFollowing
      }
      cursor
      hasNextPage
    }
  }
`;
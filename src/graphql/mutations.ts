import { gql } from '@apollo/client';

export const FOLLOW_USER_MUTATION = gql`
  mutation FollowUser($userId: ID!) {
    followUser(userId: $userId) {
      success
      message
    }
  }
`;

export const UNFOLLOW_USER_MUTATION = gql`
  mutation UnfollowUser($userId: ID!) {
    unfollowUser(userId: $userId) {
      success
      message
    }
  }
`;

export const CREATE_POST_MUTATION = gql`
  mutation CreatePost($content: String!, $image: Upload) {
    createPost(content: $content, image: $image) {
      id
      content
      image
    }
  }
`;
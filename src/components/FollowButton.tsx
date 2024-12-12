
import React from 'react';
import { useMutation } from '@apollo/client';
import { FOLLOW_USER_MUTATION, UNFOLLOW_USER_MUTATION } from '../graphql/mutations';

interface FollowButtonProps {
  userId: string;
  isFollowing: boolean;
}

const FollowButton: React.FC<FollowButtonProps> = ({ userId, isFollowing }) => {
  const [followUser] = useMutation(FOLLOW_USER_MUTATION);
  const [unfollowUser] = useMutation(UNFOLLOW_USER_MUTATION);

  const handleFollowToggle = async () => {
    if (isFollowing) {
      await unfollowUser({ variables: { userId } });
    } else {
      await followUser({ variables: { userId } });
    }
  };

  return (
    <button
      onClick={handleFollowToggle}
      className={`py-2 px-4 rounded-md ${
        isFollowing ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
      }`}
    >
      {isFollowing ? 'Unfollow' : 'Follow'}
    </button>
  );
};

export default FollowButton;

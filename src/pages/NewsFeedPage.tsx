
import React from 'react';
import { useQuery } from '@apollo/client';
import InfiniteScroll from 'react-infinite-scroll-component';
import { GET_POSTS_QUERY } from '../graphql/queries';
import FollowButton from '../components/FollowButton';

const NewsFeedPage = () => {
  const { data, fetchMore, loading } = useQuery(GET_POSTS_QUERY);

  const fetchMorePosts = () => {
    if (data?.posts?.hasNextPage) {
      fetchMore({
        variables: { cursor: data.posts.cursor },
      });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">News Feed</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <InfiniteScroll
          dataLength={data.posts.edges.length}
          next={fetchMorePosts}
          hasMore={data.posts.hasNextPage}
          loader={<p>Loading more posts...</p>}
        >
          {data.posts.edges.map((post: any) => (
            <div key={post.id} className="p-4 mb-4 border rounded-md">
              <p>{post.content}</p>
              {post.image && <img src={post.image} alt="Post" />}
              {/* Follow button example */}
              <FollowButton userId={post.userId} isFollowing={post.isFollowing} />
            </div>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default NewsFeedPage;

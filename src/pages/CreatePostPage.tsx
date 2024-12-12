import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_POST_MUTATION } from '../graphql/mutations';

const CreatePostPage = () => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState<File | null>(null);
  const [createPost, { loading }] = useMutation(CREATE_POST_MUTATION);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content) return;

    await createPost({
      variables: { content, image },
    });

    setContent('');
    setImage(null);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Create Post</h1>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full border p-2 rounded-md"
      />
      <input
        type="file"
        onChange={(e) => setImage(e.target.files?.[0] || null)}
        className="block"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
        disabled={loading}
      >
        {loading ? 'Posting...' : 'Post'}
      </button>
    </form>
  );
};

export default CreatePostPage;

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from './Comment';

const mockPosts = [
  { id: 1, title: 'My Crazy Hangover Story', content: 'I woke up in a different country!', author: 'Alice', likes: 0, comments: [] },
  { id: 2, title: 'Epic Party Night', content: 'We danced until sunrise.', author: 'Bob', likes: 0, comments: [] },
];

const Post = () => {
  const { postId } = useParams();
  const post = mockPosts.find(p => p.id === parseInt(postId, 10));
  const [comments, setComments] = useState(post ? post.comments : []);
  const [likes, setLikes] = useState(post ? post.likes : 0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  };

  if (!post) return <div>Post not found.</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg mb-4">{post.content}</p>
      <p className="text-gray-500 text-sm">Posted by {post.author}</p>
      <div className="flex items-center space-x-2 mb-4">
        <button onClick={handleLike} className="text-blue-500">Like</button>
        <span>{likes} {likes === 1 ? 'like' : 'likes'}</span>
      </div>
      <Comment comments={comments} onAddComment={handleAddComment} />
    </div>
  );
};

export default Post;

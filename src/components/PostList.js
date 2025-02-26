import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const mockPosts = [
  { id: 1, title: 'My Crazy Hangover Story', content: 'I woke up in a different country!', author: 'Alice', likes: 0, comments: [] },
  { id: 2, title: 'Epic Party Night', content: 'We danced until sunrise.', author: 'Bob', likes: 0, comments: [] },
];

const PostList = () => {
  const [posts, setPosts] = useState(mockPosts);

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    );
    setPosts(updatedPosts);
  };

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="border p-4 mb-4 rounded-lg shadow-lg">
          <Link to={`/hangover-tales/posts/${post.id}`}>
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          </Link>
          <p className="text-lg">{post.content}</p>
          <p className="text-gray-500 text-sm">Posted by {post.author}</p>
          <div className="flex items-center space-x-2">
            <button onClick={() => handleLike(post.id)} className="text-blue-500">Like</button>
            <span>{post.likes} {post.likes === 1 ? 'like' : 'likes'}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;

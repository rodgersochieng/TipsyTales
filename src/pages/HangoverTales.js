
import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import PostList from '../components/PostList';
import Post from '../components/Post';
import CreatePost from '../components/CreatePost';
import { mockPosts as initialPosts } from '../data/mockData';

const HangoverTales = () => {
  const [posts, setPosts] = useState(initialPosts);

  const handleAddPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const handleLikePost = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        const currentUserLiked = post.likedBy.includes('currentUser');
        return {
          ...post,
          likes: currentUserLiked ? post.likes - 1 : post.likes + 1,
          likedBy: currentUserLiked
            ? post.likedBy.filter(user => user !== 'currentUser')
            : [...post.likedBy, 'currentUser']
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleAddComment = (postId, comment) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, comment]
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  const handleAddReply = (postId, commentId, reply) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments.map(comment => {
            if (comment.id === commentId) {
              return {
                ...comment,
                replies: [...(comment.replies || []), reply]
              };
            }
            return comment;
          })
        };
      }
      return post;
    });
    setPosts(updatedPosts);
  };

  return (
    <div className="container mx-auto p-4 max-w-3xl">
      <header className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Hangover Tales</h1>
        <p className="text-gray-600">Share your wildest party stories!</p>
        <nav className="mt-4 flex space-x-4">
          <Link to="/hangover-tales" className="text-blue-500 hover:underline">Home</Link>
          <Link to="/hangover-tales/create-post" className="text-blue-500 hover:underline">Share Your Story</Link>
        </nav>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<PostList posts={posts} onLikePost={handleLikePost} />} />
          <Route path="/posts/:postId" element={<Post posts={posts} onLikePost={handleLikePost} onAddComment={handleAddComment} onAddReply={handleAddReply} />} />
          <Route path="/create-post" element={<CreatePost onAddPost={handleAddPost} />} />
        </Routes>
      </main>
      
      <footer className="mt-8 pt-4 border-t text-center text-gray-500 text-sm">
        <p>© 2025 Hangover Tales - Where party memories live forever</p>
      </footer>
    </div>
  );
};

export default HangoverTales;
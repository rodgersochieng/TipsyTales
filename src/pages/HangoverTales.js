import React from 'react';
import { Routes, Route, Link, useMatch } from 'react-router-dom';
import PostList from '../components/PostList';
import Post from '../components/Post';
import CreatePost from '../components/Post';

const HangoverTales = () => {
  const match = useMatch('/hangover-tales/*');
  const { path, url } = match ? match : { path: '/hangover-tales', url: '/hangover-tales' };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Hangover Tales</h1>
      <nav className="mb-4">
        <Link to={url}>Home</Link> | <Link to={`${url}/create-post`}>Create Post</Link>
      </nav>
      <Routes>
        <Route exact path={path} element={<PostList />} />
        <Route path={`${path}/posts/:postId`} element={<Post />} />
        <Route path={`${path}/create-post`} element={<CreatePost />} />
      </Routes>
    </div>
  );
};

export default HangoverTales;

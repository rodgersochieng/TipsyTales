// // import React from 'react';
// // import { Routes, Route, Link, useMatch } from 'react-router-dom';
// // import PostList from '../components/PostList';
// // import Post from '../components/Post';
// // import CreatePost from '../components/Post';

// // const HangoverTales = () => {
// //   const match = useMatch('/hangover-tales/*');
// //   const { path, url } = match ? match : { path: '/hangover-tales', url: '/hangover-tales' };

// //   return (
// //     <div className="container mx-auto p-4">
// //       <h1 className="text-3xl font-bold mb-4">Hangover Tales</h1>
// //       <nav className="mb-4">
// //         <Link to={url}>Home</Link> | <Link to={`${url}/create-post`}>Create Post</Link>
// //       </nav>
// //       <Routes>
// //         <Route exact path={path} element={<PostList />} />
// //         <Route path={`${path}/posts/:postId`} element={<Post />} />
// //         <Route path={`${path}/create-post`} element={<CreatePost />} />
// //       </Routes>
// //     </div>
// //   );
// // };

// // export default HangoverTales;


// // File: src/pages/HangoverTales.jsx
// import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import PostList from '../components/PostList';
// import Post from '../components/Post';
// import CreatePost from '../components/CreatePost';

// const HangoverTales = () => {
//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-4">Hangover Tales</h1>
//       <nav className="mb-4">
//         <Link to="/hangover-tales" className="text-blue-500 hover:underline mr-4">Home</Link>
//         <Link to="/hangover-tales/create-post" className="text-blue-500 hover:underline">Create Post</Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<PostList />} />
//         <Route path="/posts/:postId" element={<Post />} />
//         <Route path="/create-post" element={<CreatePost />} />
//       </Routes>
//     </div>
//   );
// };

// export default HangoverTales;


import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import PostList from '../components/PostList';
import Post from '../components/Post';
import CreatePost from '../components/CreatePost';

const HangoverTales = () => {
  const location = useLocation();
  const basePath = "/hangover-tales";
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-indigo-800">Hangover Tales</h1>
      
      <nav className="mb-8 border-b pb-4">
        <Link 
          to={basePath} 
          className={`mr-6 text-lg ${location.pathname === basePath ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-500'}`}
        >
          Home
        </Link>
        <Link 
          to={`${basePath}/create-post`} 
          className={`text-lg ${location.pathname === `${basePath}/create-post` ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-500'}`}
        >
          Share Your Tale
        </Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/posts/:postId" element={<Post />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </div>
  );
};

export default HangoverTales;
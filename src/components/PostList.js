

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// // Using a shared data source that can be imported by other components
// import { mockPosts as initialPosts } from '../data/MockData';

// const PostList = () => {
//   const [posts, setPosts] = useState(initialPosts);

//   const handleLike = (postId) => {
//     const updatedPosts = posts.map(post => 
//       post.id === postId ? { ...post, likes: post.likes + 1 } : post
//     );
//     setPosts(updatedPosts);
//   };

//   return (
//     <div>
//       {posts.map(post => (
//         <div key={post.id} className="border p-4 mb-4 rounded-lg shadow-lg">
//           <Link to={`/hangover-tales/posts/${post.id}`}>
//             <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
//           </Link>
//           <p className="text-lg">{post.content}</p>
//           <p className="text-gray-500 text-sm">Posted by {post.author}</p>
//           <div className="flex items-center space-x-2">
//             <button onClick={() => handleLike(post.id)} className="text-blue-500">Like</button>
//             <span>{post.likes} {post.likes === 1 ? 'like' : 'likes'}</span>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PostList;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { mockPosts as initialPosts } from '../data/mockData';

const PostList = () => {
  const [posts, setPosts] = useState(initialPosts);

  const handleLike = (postId) => {
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        // Toggle like status (simulating a current user with ID 'currentUser')
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

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="border p-4 mb-4 rounded-lg shadow-lg">
          <Link to={`/hangover-tales/posts/${post.id}`}>
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
          </Link>
          <p className="text-lg">{post.content}</p>
          <p className="text-gray-500 text-sm mb-3">Posted by {post.author}</p>
          <div className="flex items-center space-x-2">
            <button 
              onClick={() => handleLike(post.id)} 
              className="flex items-center focus:outline-none"
            >
              <Heart 
                size={20} 
                color={post.likedBy.includes('currentUser') ? "red" : "gray"} 
                fill={post.likedBy.includes('currentUser') ? "red" : "none"} 
              />
            </button>
            <span>{post.likes} {post.likes === 1 ? 'like' : 'likes'}</span>
          </div>
          <div className="mt-2 text-sm text-gray-500">
            {post.comments.length} {post.comments.length === 1 ? 'comment' : 'comments'}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
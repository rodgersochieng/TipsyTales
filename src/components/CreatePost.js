
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { mockPosts } from '../data/mockData';

// const CreatePost = () => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');
//   const [author, setAuthor] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Create a new post with default values
//     const newPost = { 
//       id: mockPosts.length + 1,
//       title, 
//       content, 
//       author: author || 'Anonymous',
//       likes: 0,
//       likedBy: [],
//       comments: []
//     };
    
//     // Simulate network delay
//     setTimeout(() => {
//       // Add to our mock data
//       mockPosts.push(newPost);
      
//       // Navigate to the new post
//       navigate(`/hangover-tales/posts/${newPost.id}`);
//     }, 1000);
//   };

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">Share Your Story</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
//           <input
//             type="text"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="Give your story a catchy title"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Your Story</label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
//             value={content}
//             onChange={(e) => setContent(e.target.value)}
//             placeholder="Tell us what happened..."
//             rows="6"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
//           <input
//             type="text"
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
//             value={author}
//             onChange={(e) => setAuthor(e.target.value)}
//             placeholder="Your name (optional)"
//           />
//         </div>
//         <button 
//           type="submit" 
//           className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
//           disabled={isSubmitting}
//         >
//           {isSubmitting ? 'Posting...' : 'Share Your Story'}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default CreatePost;


// File: src/components/CreatePost.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({ onAddPost }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const newPost = { 
      id: Date.now(), // Use a unique ID
      title, 
      content, 
      author: author || 'Anonymous',
      likes: 0,
      likedBy: [],
      comments: []
    };
    
    setTimeout(() => {
      onAddPost(newPost);
      navigate(`/hangover-tales/posts/${newPost.id}`);
    }, 1000);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Share Your Story</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give your story a catchy title"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Your Story</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Tell us what happened..."
            rows="6"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Your Name</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            placeholder="Your name (optional)"
          />
        </div>
        <button 
          type="submit" 
          className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Posting...' : 'Share Your Story'}
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
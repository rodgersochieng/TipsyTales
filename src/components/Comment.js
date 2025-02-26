
// import React, { useState } from 'react';

// const CommentSection = ({ comments, onAddComment }) => {
//   const [commentText, setCommentText] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (commentText.trim()) {
//       onAddComment({ author: 'Anonymous', text: commentText });
//       setCommentText('');
//     }
//   };

//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Comments</h2>
//       <ul className="space-y-4">
//         {comments.map((comment, index) => (
//           <li key={index} className="border p-2 rounded-lg shadow">
//             <p className="font-semibold">{comment.author}</p>
//             <p>{comment.text}</p>
//           </li>
//         ))}
//       </ul>
//       <form onSubmit={handleSubmit} className="mt-4">
//         <div className="mb-4">
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
//             value={commentText}
//             onChange={(e) => setCommentText(e.target.value)}
//             placeholder="Add a comment..."
//           />
//         </div>
//         <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Post Comment</button>
//       </form>
//     </div>
//   );
// };

// export default CommentSection;


import React, { useState } from 'react';
import CommentItem from './CommentItem';

const CommentSection = ({ comments, onAddComment, onAddReply }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onAddComment({
        id: Date.now(),
        author: 'You',
        text: commentText,
        timestamp: 'Just now',
        replies: []
      });
      setCommentText('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      
      <form onSubmit={handleSubmit} className="mb-6">
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          placeholder="Add a comment..."
          rows="3"
        />
        <button 
          type="submit" 
          className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-all"
        >
          Post Comment
        </button>
      </form>
      
      {comments.length === 0 ? (
        <p className="text-gray-500">No comments yet. Be the first to comment!</p>
      ) : (
        <div>
          {comments.map(comment => (
            <CommentItem 
              key={comment.id} 
              comment={comment} 
              onAddReply={onAddReply} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentSection;
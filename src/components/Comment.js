import React, { useState } from 'react';

const Comment = ({ comments, onAddComment }) => {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      onAddComment({ author: 'Anonymous', text: commentText });
      setCommentText('');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Comments</h2>
      <ul className="space-y-4">
        {comments.map((comment, index) => (
          <li key={index} className="border p-2 rounded-lg shadow">
            <p className="font-semibold">{comment.author}</p>
            <p>{comment.text}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Add a comment..."
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all">Post Comment</button>
      </form>
    </div>
  );
};

export default Comment;

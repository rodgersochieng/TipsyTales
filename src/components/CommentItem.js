import React, { useState } from 'react';
import { Heart } from 'lucide-react';

const CommentItem = ({ comment, onAddReply }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [showReplies, setShowReplies] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      onAddReply(comment.id, {
        id: Date.now(),
        author: 'You',
        text: replyText,
        timestamp: 'Just now'
      });
      setReplyText('');
      setShowReplyForm(false);
      setShowReplies(true);
    }
  };

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="border rounded-lg p-3 mb-3">
      <div className="flex justify-between items-start">
        <div>
          <p className="font-semibold">{comment.author}</p>
          <p className="text-gray-600 text-xs">{comment.timestamp}</p>
        </div>
        <button
          onClick={handleLike}
          className="focus:outline-none"
        >
          <Heart
            size={16}
            color={liked ? "red" : "gray"}
            fill={liked ? "red" : "none"}
          />
        </button>
      </div>
      
      <p className="my-2">{comment.text}</p>
      
      <div className="flex space-x-4 text-sm text-blue-500">
        <button onClick={() => setShowReplyForm(!showReplyForm)}>
          Reply
        </button>
        
        {comment.replies && comment.replies.length > 0 && (
          <button onClick={() => setShowReplies(!showReplies)}>
            {showReplies ? 'Hide replies' : `Show ${comment.replies.length} ${comment.replies.length === 1 ? 'reply' : 'replies'}`}
          </button>
        )}
      </div>
      
      {showReplyForm && (
        <form onSubmit={handleReplySubmit} className="mt-2">
          <textarea
            className="w-full border rounded p-2 text-sm"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Write a reply..."
            rows="2"
          />
          <div className="flex justify-end space-x-2 mt-1">
            <button 
              type="button" 
              onClick={() => setShowReplyForm(false)}
              className="px-3 py-1 text-sm text-gray-600"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="px-3 py-1 text-sm bg-blue-500 text-white rounded"
            >
              Reply
            </button>
          </div>
        </form>
      )}
      
      {showReplies && comment.replies && comment.replies.length > 0 && (
        <div className="ml-6 mt-2 border-l-2 border-gray-200 pl-3">
          {comment.replies.map(reply => (
            <div key={reply.id} className="mb-2">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-sm">{reply.author}</p>
                  <p className="text-gray-600 text-xs">{reply.timestamp}</p>
                </div>
                <button
                  onClick={() => {}}
                  className="focus:outline-none"
                >
                  <Heart
                    size={14}
                    color="gray"
                    fill="none"
                  />
                </button>
              </div>
              <p className="text-sm my-1">{reply.text}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CommentItem;
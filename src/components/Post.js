
// // File: src/components/Post.jsx
// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { Heart } from 'lucide-react';
// import CommentSection from './Comment';

// // Import shared data
// import { mockPosts } from '../data/mockData';

// const Post = () => {
//   const { postId } = useParams();
//   const [post, setPost] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [liked, setLiked] = useState(false);
//   const [likes, setLikes] = useState(0);
//   const [comments, setComments] = useState([]);

//   // Find the post after component mounts
//   useEffect(() => {
//     const foundPost = mockPosts.find(p => p.id === parseInt(postId, 10));
    
//     if (foundPost) {
//       setPost(foundPost);
//       setLiked(foundPost.likedBy.includes('currentUser'));
//       setLikes(foundPost.likes);
//       setComments(foundPost.comments);
//     }
    
//     setLoading(false);
//   }, [postId]);

//   const handleLike = () => {
//     if (!post) return;
    
//     const postIndex = mockPosts.findIndex(p => p.id === post.id);
//     if (postIndex === -1) return;

//     if (liked) {
//       setLikes(likes - 1);
//       mockPosts[postIndex].likes = likes - 1;
//       mockPosts[postIndex].likedBy = mockPosts[postIndex].likedBy.filter(id => id !== 'currentUser');
//     } else {
//       setLikes(likes + 1);
//       mockPosts[postIndex].likes = likes + 1;
//       mockPosts[postIndex].likedBy.push('currentUser');
//     }
//     setLiked(!liked);
//   };

//   const handleAddComment = (comment) => {
//     if (!post) return;
    
//     const postIndex = mockPosts.findIndex(p => p.id === post.id);
//     if (postIndex === -1) return;

//     const updatedComments = [...comments, comment];
//     setComments(updatedComments);
//     mockPosts[postIndex].comments = updatedComments;
//   };

//   const handleAddReply = (commentId, reply) => {
//     if (!post) return;
    
//     const postIndex = mockPosts.findIndex(p => p.id === post.id);
//     if (postIndex === -1) return;

//     const updatedComments = comments.map(comment => {
//       if (comment.id === commentId) {
//         return {
//           ...comment,
//           replies: [...(comment.replies || []), reply]
//         };
//       }
//       return comment;
//     });
    
//     setComments(updatedComments);
//     mockPosts[postIndex].comments = updatedComments;
//   };

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (!post) {
//     return <div>Post not found.</div>;
//   }

//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
//       <p className="text-lg mb-4">{post.content}</p>
//       <p className="text-gray-500 text-sm">Posted by {post.author}</p>
      
//       <div className="flex items-center space-x-2 my-4">
//         <button 
//           onClick={handleLike} 
//           className="flex items-center focus:outline-none"
//         >
//           <Heart 
//             size={24} 
//             color={liked ? "red" : "gray"} 
//             fill={liked ? "red" : "none"} 
//           />
//         </button>
//         <span>{likes} {likes === 1 ? 'like' : 'likes'}</span>
//       </div>
      
//       <hr className="my-6" />
      
//       <CommentSection 
//         comments={comments} 
//         onAddComment={handleAddComment} 
//         onAddReply={handleAddReply}
//       />
//     </div>
//   );
// };

// export default Post;




/// File: src/components/Post.jsx
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart } from 'lucide-react';
import CommentSection from './Comment';

const Post = ({ posts, onLikePost, onAddComment, onAddReply }) => {
  const { postId } = useParams();

  // Move useState hooks to the top
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);

  // Find the post after hooks are declared
  const post = posts.find(p => p.id === parseInt(postId, 10));

  // If post is not found, return early
  if (!post) return <div>Post not found.</div>;

  // Initialize state based on the post data
  if (likes !== post.likes) setLikes(post.likes);
  if (liked !== post.likedBy.includes('currentUser')) setLiked(post.likedBy.includes('currentUser'));
  if (comments !== post.comments) setComments(post.comments);

  const handleLike = () => {
    onLikePost(post.id);
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg mb-4">{post.content}</p>
      <p className="text-gray-500 text-sm">Posted by {post.author}</p>
      
      <div className="flex items-center space-x-2 my-4">
        <button 
          onClick={handleLike} 
          className="flex items-center focus:outline-none"
        >
          <Heart 
            size={24} 
            color={liked ? "red" : "gray"} 
            fill={liked ? "red" : "none"} 
          />
        </button>
        <span>{likes} {likes === 1 ? 'like' : 'likes'}</span>
      </div>
      
      <hr className="my-6" />
      
      <CommentSection 
        comments={comments} 
        onAddComment={(comment) => onAddComment(post.id, comment)} 
        onAddReply={(commentId, reply) => onAddReply(post.id, commentId, reply)} 
      />
    </div>
  );
};

export default Post;
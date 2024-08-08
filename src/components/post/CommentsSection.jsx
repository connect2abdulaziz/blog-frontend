import React, { useState } from 'react';
import { Link } from 'react-router-dom'

const CommentSection = () => {
  const [expandedCommentId, setExpandedCommentId] = useState(null);
  const [visibleComments, setVisibleComments] = useState(3); 

  const comments = [
    {
      count: 2,
      id: 1,
      user: { thumbnail: 'https://via.placeholder.com/40', firstname: 'John', lastname: 'Doe' },
      timeAgo: '10 min ago',
      content: 'This is a comment.',
      replies: [
        
      ],
    },
    {
      count: 2,
      id: 5,
      user: { thumbnail: 'https://via.placeholder.com/40', firstname: 'John', lastname: 'Doe' },
      timeAgo: '10 min ago',
      content: 'This is another comment.',
      replies: [
        {
          id: 2,
          user: { thumbnail: 'https://via.placeholder.com/40', firstname: 'Jane', lastname: 'Smith' },
          timeAgo: '5 min ago',
          content: 'This is a reply.',
        },
        {
          id: 3,
          user: { thumbnail: 'https://via.placeholder.com/40', firstname: 'Jane', lastname: 'Smith' },
          timeAgo: '5 min ago',
          content: 'This is a reply.',
        },
        {
          id: 4,
          user: { thumbnail: 'https://via.placeholder.com/40', firstname: 'Jane', lastname: 'Smith' },
          timeAgo: '5 min ago',
          content: 'This is a reply.',
        },
      ],
    },
    {
      count: 2,
      id: 8,
      user: { thumbnail: 'https://via.placeholder.com/40', firstname: 'John', lastname: 'Doe' },
      timeAgo: '10 min ago',
      content: 'This is another comment.',
      replies: [
        {
          id: 2,
          user: { thumbnail: 'https://via.placeholder.com/40', firstname: 'Jane', lastname: 'Smith' },
          timeAgo: '5 min ago',
          content: 'This is a reply.',
        },
        {
          id: 3,
          user: { thumbnail: 'https://via.placeholder.com/40', firstname: 'Jane', lastname: 'Smith' },
          timeAgo: '5 min ago',
          content: 'This is a reply.',
        },
        {
          id: 4,
          user: { thumbnail: 'https://via.placeholder.com/40', firstname: 'Jane', lastname: 'Smith' },
          timeAgo: '5 min ago',
          content: 'This is a reply.',
        },
      ],
    },
    {
      count: 2,
      id: 11,
      user: { thumbnail: 'https://via.placeholder.com/40', firstname: 'John', lastname: 'Doe' },
      timeAgo: '10 min ago',
      content: 'This is another comment.',
      replies: [
        {
          id: 2,
          user: { thumbnail: 'https://via.placeholder.com/40', firstname: 'Jane', lastname: 'Smith' },
          timeAgo: '5 min ago',
          content: 'This is a reply.',
        },
        {
          id: 3,
          user: { thumbnail: 'https://via.placeholder.com/40', firstname: 'Jane', lastname: 'Smith' },
          timeAgo: '5 min ago',
          content: 'This is a reply.',
        },
        {
          id: 4,
          user: { thumbnail: 'https://via.placeholder.com/40', firstname: 'Jane', lastname: 'Smith' },
          timeAgo: '5 min ago',
          content: 'This is a reply.',
        },
      ],
    },
  ];

  const toggleReplies = (id) => {
    setExpandedCommentId(expandedCommentId === id ? null : id);
  };

  const loadMoreComments = () => {
    setVisibleComments((prevVisible) => prevVisible + 3);
  };

  return (
    <div className="p-4">
      <div className="flex mb-4 text-3xl gap-5 font-semibold border-b py-8">
        <span className="text-gray-800">{`${comments[0].count} Comments .`}</span>
        <Link to= '/login'><p className="text-blue-500 hover:text-black transition-all duration-300">Sign in to comment</p></Link>
      </div>

      {comments.slice(0, visibleComments).map((comment) => (
        <div key={comment.id} className="border-gray-200 pt-4">
          <div className="flex items-start mb-4">
            <img
              src={comment.user.thumbnail}
              alt={comment.user.firstname}
              className="w-8 h-8 rounded-full mr-3"
            />
            <div>
              <div className="flex items-center mb-1">
                <span className="font-semibold text-gray-800">
                  {comment.user.firstname} {comment.user.lastname}
                </span>
                <span className="text-gray-500 text-sm ml-2">{comment.timeAgo}</span>
              </div>
              <p className="text-gray-700">{comment.content}</p>
              {comment.replies.length > 0 && (
                <div className="mt-2 pl-4">
                  <button
                    className="text-blue-500 hover:text-black"
                    onClick={() => toggleReplies(comment.id)}
                  >
                    {expandedCommentId === comment.id ? 'Hide replies' : `Show replies (${comment.replies.length})`}
                  </button>
                  {expandedCommentId === comment.id && (
                    <div className="mt-2 pl-4 border-l border-gray-300">
                      {comment.replies.map((reply) => (
                        <div key={reply.id} className="flex items-start mt-2">
                          <div className="flex items-start mr-4">
                          </div>
                          <div>
                            <div className="flex items-center mb-1">
                              <img
                                src={reply.user.thumbnail}
                                alt={reply.user.firstname}
                                className="w-8 h-8 rounded-full mr-2"
                              />
                              <span className="font-semibold text-gray-800">
                                {reply.user.firstname} {reply.user.lastname}
                              </span>
                              <span className="text-gray-500 text-sm ml-2">{reply.timeAgo}</span>
                            </div>
                            <p className="text-gray-700">{reply.content}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      {visibleComments < comments.length && (
        <button
          onClick={loadMoreComments}
          className="mt-4 ml-72 bg-white text-black border border-black py-2 px-4 rounded-full hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-colors duration-300"
        >
          Load More Comments
        </button>
      )}
    </div>
  );
};

export default CommentSection;

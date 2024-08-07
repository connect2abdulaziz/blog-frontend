// src/components/Post/PostsPage.jsx
import React, { useState } from 'react';
import Pagination from './Pagination';
import PostCard from './PostCard';

const PostsPage = ({ posts = [] }) => { 
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentPosts = Array.isArray(posts) ? posts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage) : [];

  return (
    <div className="p-4 md:pl-0">
      {currentPosts.length === 0 ? (
        <p className="text-center text-gray-500">No posts available</p>
      ) : (
        currentPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))
      )}
      {totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </div>
  );
};

export default PostsPage;
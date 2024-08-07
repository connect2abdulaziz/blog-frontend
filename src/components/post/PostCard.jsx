import React from "react";
import { FaRegClock, FaRegCalendarAlt } from "react-icons/fa";

const PostCard = ({ post }) => {
  return (
    <div className="flex flex-col md:flex-row items-start p-4 md:p-6 md:pl-0  gap-4 md:gap-8 w-full max-w-6xl md:ml-32">
      <div
        className="w-full md:w-[366px] h-[180px] bg-gray-300 rounded bg-cover bg-center"
        style={{ backgroundImage: `url(${post.thumbnail || 'placeholder-image-url'})` }} 
      ></div>
      <div className="flex flex-col justify-between space-y-2 w-full">
        <div>
          <div className="flex items-center justify-center w-12 h-5 bg-gray-200 rounded mb-2">
            <span className="text-xs text-gray-800">{post.category.tag}</span>
          </div>
          <h3 className="text-[24px] md:text-[32px] font-semibold leading-[32px] md:leading-[48px] text-left text-gray-900 line-clamp-2 overflow-hidden">
            {post.title}
          </h3>
        </div>
        <div className="flex items-center space-x-2 mt-2 text-xs text-gray-600">
          <img
            src={post.user.thumbnail || 'default-author-image-url'} // Fallback for null author image
            alt="Author"
            className="w-4 h-4 rounded-full"
          />
          <span>{`${post.user.firstName} ${post.user.lastName}`}</span>
          <span>|</span>
          <FaRegCalendarAlt className="w-3 h-3" />
          <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          <span>|</span>
          <FaRegClock className="w-3 h-3" />
          <span>{post.readTime} min read</span>
        </div>
        <div className="text-sm text-gray-700 line-clamp-2 overflow-hidden">
          {post.content}
        </div>
      </div>
    </div>
  );
};

export default PostCard;

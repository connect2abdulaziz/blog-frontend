// components/AuthorInfoSection.jsx
import React from 'react';
import { FaRegCalendarAlt } from "react-icons/fa";

const AuthorInfoSection = ({ author, date }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-[18px] h-[18px] bg-gray-300 rounded-full"></div>
      <span className="text-[12px] text-gray-500">{author}</span>
      <span className="text-[12px] text-gray-500">|</span>
      <FaRegCalendarAlt className="w-3 h-3 text-gray-500" />
      <span className="text-[12px] text-gray-500">{date}</span>
    </div>
  );
};

export default AuthorInfoSection;

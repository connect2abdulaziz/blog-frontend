// components/TagSection.jsx
import React from 'react';

const TagSection = ({ tag }) => {
  return (
      <div>
        <span className="bg-gray-200 p-2 rounded-md text-[12px] text-gray-600">{tag}</span>
      </div>
  );
};

export default TagSection;

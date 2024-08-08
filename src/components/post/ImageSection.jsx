// components/ImageSection.jsx
import React from 'react';

const ImageSection = ({ imageUrl }) => {
  return (
    <div className="w-[900px] h-[500px]">
      <img src={imageUrl} alt="Post Image" className="w-full h-full object-cover rounded-lg mx-auto" />
    </div>
  );
};

export default ImageSection;

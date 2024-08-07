import React from 'react';

const SubmitButton = ({ text }) => (
  <button
    type="submit"
    className="w-full text-2xl font-bold bg-black text-white py-3 px-4 rounded-full hover:bg-blue-600"
  >
    {text}
  </button>
);

export default SubmitButton;

import React from 'react';

const SubmitButton = ({ text , fill = false }) => (
  <button
    type="submit"
    className={`w-full ${fill? 'bg-white text-black ' : 'bg-black text-white'} text-3xl py-3 my-7 px-4 border rounded-full border-gray-700 hover:bg-blue-600 hover:text-white hover:border-blue-500`}
  >
    {text}
  </button>
);

export default SubmitButton;

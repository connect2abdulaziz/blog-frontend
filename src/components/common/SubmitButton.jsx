import React from 'react';

const SubmitButton = ({ text , fill = false }) => (
  <button
    type="submit"
    className={`w-full ${fill? 'bg-white text-black ' : 'bg-gray-900 text-white'} text-3xl py-3 my-7 px-4 border rounded-full border-gray-700 hover:bg-black hover:text-white hover:border-blue-500`}
  >
    {text}
  </button>
);

export default SubmitButton;

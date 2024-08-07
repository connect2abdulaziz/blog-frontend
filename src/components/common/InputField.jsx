import React from 'react';

const InputField = ({ label, error, ...rest }) => (
  <div className="">
    <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
    <input
      {...rest}
      className={`w-full px-3 py-3 border rounded-2xl ${error ? 'border-red-500' : 'border-gray-300'}`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default InputField;


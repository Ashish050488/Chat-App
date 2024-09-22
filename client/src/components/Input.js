import React from 'react';

const Input = ({
  label = '',
  name = '',
  type = 'text',
  className = '',
  isRequired = false,
  placeholder = '',
  value = '', // Ensure value is a non-null string
  onChange = () => {}
}) => {
  return (
    <div className="flex justify-center w-full">
      <div className="w-2/3 max-w-lg">
        <input
          type={type}
          name={name}
          className={`w-full p-1 text-center rounded-lg text-gray-500 text-md border-2 border-gray-400 focus:border-gray-600 focus:outline-none ${className}`}
          placeholder={placeholder}
          required={isRequired}
          value={value || ''} // Prevent undefined value
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default Input;

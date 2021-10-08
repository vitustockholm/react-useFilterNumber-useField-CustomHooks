import React, { useState, forwardRef } from 'react';

const TextInput = forwardRef(({ id, action }, ref) => {
  //Hooks
  // -- state
  const [inputValue, setInputValue] = useState('');
  //
  return (
    <input
      type='text'
      id={id}
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
        action(); // custom function for future management component
      }}
      ref={ref}
    ></input>
  );
});

export default TextInput;

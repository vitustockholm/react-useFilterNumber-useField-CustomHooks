import React, { useRef, useState } from 'react';

import Label from '../components/Label';
import TextInput from '../components/TextInput';

const useField = (label, inputId) => {
  //Hooks
  // --- state
  const [inputFieldValue, setInputFieldValue] = useState('');
  // -- refs
  const inputRef = useRef();
  //  Custom Functions
  const onChangeHandler = () => {
    setInputFieldValue(inputRef.current.value);
  };
  //
  const formField = (
    <>
      <div>
        <Label name={inputId} text={label} />
        <TextInput id={inputId} ref={inputRef} action={onChangeHandler} />
      </div>
    </>
  );

  return {
    inputFieldValue,
    formField,
  };
};

export default useField;

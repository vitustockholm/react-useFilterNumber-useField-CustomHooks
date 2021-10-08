import React from 'react';
import useFilterNumbers from '../hooks/useFilterNumbers';
//
import useField from '../hooks/useField';

const HomePage = () => {
  const { inputFieldValue: name, formField: nameField } = useField(
    'Name',
    'name'
  );
  //
  const { inputFieldValue: surname, formField: surnameField } = useField(
    'Surname',
    'surname'
  );
  //
  let arr = [1, 5, 'World', 74, 'Hello', { name: 'Alex' }];
  let arr1 = [true, 1, undefined, 'Car', 74, 'Hello', { id: 1 }];
  //test console
  const filtered1 = useFilterNumbers(arr);
  const filtered2 = useFilterNumbers(arr1);
  console.log(filtered1);
  console.log(filtered2);
  //
  return (
    <>
      <form>
        {nameField} {surnameField}
      </form>
      <p>
        {name} {surname}
      </p>
    </>
  );
};

export default HomePage;

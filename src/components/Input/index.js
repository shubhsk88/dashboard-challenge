import React from 'react';

import { useField } from 'formik';
import { StyledInput, Error } from './style';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label>
        {label}
        <StyledInput {...props} {...field} />
      </label>
      {meta.touched && meta.error ? <Error>{meta.error}</Error> : null}
    </>
  );
};

export default Input;

import React, { useState } from 'react';

import { useField } from 'formik';
import { StyledInput, Error, StyledContainer } from './style';

const Input = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const [didFocus, setDidFocus] = useState(false);
  const handleFocus = () => setDidFocus(true);
  const showFeedback = !!didFocus || meta.touched;

  return (
    <StyledContainer>
      <div className="label-container">
        <label htmlFor={props.id}>{label}</label>
        {showFeedback ? <Error>{meta.error}</Error> : '✔'}
      </div>
      <StyledInput {...props} {...field} onFocus={handleFocus} />
    </StyledContainer>
  );
};

export default Input;

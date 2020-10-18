import React from 'react';
import { StyledButton } from './style';

const Button = ({ onClick, name }) => {
  return <StyledButton onClick={onClick}>{name}</StyledButton>;
};

export default Button;

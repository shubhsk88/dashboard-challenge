import styled from 'styled-components';

export const StyledInput = styled.input`
  appearance: none;
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid gray;
  color: black;
  &::focus {
    outline: none;
    border: 2px solid green;
  }
`;

export const Error = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  max-width: 12rem;
  height: 4rem;
  border-radius: 5px;

  background: grey;
`;

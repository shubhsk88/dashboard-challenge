import styled from 'styled-components';

export const StyledInput = styled.input`
  appearance: none;
  padding: 1rem;
  border-radius: 5px;
  border: 2px solid gray;
  width: 100%;
  color: black;
  &::focus {
    outline: none;
    border: 2px solid green;
  }
`;

export const Error = styled.div`
  color: red;
  display: flex;

  border-radius: 5px;
`;

export const StyledContainer = styled.div`
  width: 40rem;
  .label-container {
    margin: 1rem 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

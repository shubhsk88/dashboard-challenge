import styled from 'styled-components';

export const StyledButton = styled.button`
  --black:rgba(255,255,255,0.2)
  padding: 1rem 2rem;
  color: white;
  background-color: purple;
  border-radius: 10px;
  font-size: 1.6rem;
  transition: all 0.2s;
  cursor: pointer;
  transform: translateY(-3px);
  box-shadow: 0 1rem 2rem var(---black);
  &:hover,
  &:active {
    background: green;
  }
  /* Will edit later */
  &:active,
  &:focus {
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem var(--black);
  }
`;

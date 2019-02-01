import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-family: sans-serif;
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 1em 1em;
  padding: 0.25em 1em;
`;

const StyledButton = props => {
  return <Button>Styled Component</Button>;
};

export default StyledButton;

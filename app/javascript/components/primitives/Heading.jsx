import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-family: Helvetica;
  font-size: 2rem;
  text-align: center;
`;

export default function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}

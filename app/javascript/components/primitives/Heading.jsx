import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.xl};
  text-align: center;
`;

export default function Heading({ children }) {
  return <StyledHeading>{children}</StyledHeading>;
}

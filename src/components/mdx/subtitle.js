import React from "react";
import styled from "styled-components";

const StyledSubtitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  pointer-events: none;
  white-space: wrap;
  overflow-wrap: normal;
`;

const Subtitle = ({ children }) => <StyledSubtitle>{children}</StyledSubtitle>;

export default Subtitle;

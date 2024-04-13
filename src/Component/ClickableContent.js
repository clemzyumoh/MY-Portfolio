import React from 'react';
import styled from 'styled-components';

const StyledClickableContent = styled.a`
  text-decoration: none;
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const ClickableContent = ({ url, children }) => {
  return (
    <StyledClickableContent href={url} target="_blank" rel="noopener noreferrer">
      {children}
    </StyledClickableContent>
  );
};

export default ClickableContent;


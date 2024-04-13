import styled from "styled-components";

const StyledText = styled.span`
  color: ${(props) => props.color || "white"};
  font-weight: ${(props) => props.fontWeight || "normal"};
  font-size: ${(props) => props.fontSize || "inherit"};
  line-height: ${(props) => props.$lineHeight || "inherit"};
  margin: ${(props) => props.$margin || "0px"};
`;

export default StyledText;

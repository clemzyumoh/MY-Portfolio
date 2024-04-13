import React from "react";
import styled from "styled-components";

const Circle = styled.div`
  width: 5px;
  height: 5px;
  background-color: #98faec;
  border-radius: 50%;
`;

const Line = styled.div`
  /* width: ${(props) => props.$length}px; */
  width: ${(props) => props.$length}${(props) => props.$widthUnit};
  height: 2px;
  flex: 1;
  background-color: #15dec2;
`;

const Connector = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

function UnderLine({ lineLength, widthUnit }) {
  return (
    <Connector>
      <Circle />
      {/* <Line $length={lineLength} /> */}
      <Line $length={lineLength} $widthUnit={widthUnit} />
      <Circle />
    </Connector>
  );
}

export default UnderLine;

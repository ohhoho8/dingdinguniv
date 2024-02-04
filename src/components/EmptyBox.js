import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: ${({ height }) => height || 0}px;
`;

const EmptyBox = ({ height }) => {
  return <Container height={height} />;
};

export default EmptyBox;

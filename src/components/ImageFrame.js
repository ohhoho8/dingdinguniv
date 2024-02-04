import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-family: "GmarketSansBold", sans-serif;
  font-size: 18px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 15px;
  margin-left: 25px;
`;
const FrameImage = styled.img`
  width: 399px;
  display: block;
  margin: 0 auto;
`;
const Content = styled.div`
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 12px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-top: 12px;
  margin-bottom: 18px;
  text-align: center;
`;

const ImageFrame = ({ imageframe }) => {
  return (
    <>
      <Title>{imageframe.title}</Title>
      <FrameImage src={imageframe.image_1} alt={imageframe.image_1} />
      <Content>{imageframe.content_1}</Content>
      <FrameImage src={imageframe.image_2} alt={imageframe.image_2} />
      <Content>{imageframe.content_2}</Content>
    </>
  );
};

export default ImageFrame;

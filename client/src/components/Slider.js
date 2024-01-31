import React, { useState } from "react";
import styled from "styled-components";

const SliderContainer = styled.div`
  overflow: hidden;
  width: 1630px;
  margin-left: 290px;
`;

const SlideContainer = styled.div`
  display: flex;
  transition: transform 0.5s ease;
`;

const Slide = styled.div`
  width: 1240.63px;
`;

const SlideImage = styled.img`
  width: 1240.63px;
`;
const SlideTitle = styled.div`
  margin-top: 10px;
  font-size: 16px;
  text-align: center;
`;
const SlideText = styled.div`
  margin-top: 10px;
  font-size: 16px;
`;

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <SliderContainer>
      <SlideContainer
        style={{ transform: `translateX(${-currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <Slide key={index}>
            <SlideTitle>{slide.title}</SlideTitle>
            <SlideImage src={slide.image} alt={`slide-${index}`} />
            <SlideText>{slide.text}</SlideText>
          </Slide>
        ))}
      </SlideContainer>
      <button onClick={prevSlide}>이전</button>
      <button onClick={nextSlide}>다음</button>
    </SliderContainer>
  );
};

export default Slider;

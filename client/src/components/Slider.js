import React, { useState, useEffect } from "react";
import styled from "styled-components";
import slide_dot_1 from "../assets/slide_dot_1.svg";
import slide_dot_2 from "../assets/slide_dot_2.svg";
import slide_dot_3 from "../assets/slide_dot_3.svg";
import slide_dot_4 from "../assets/slide_dot_4.svg";
import button_previous from "../assets/button_previous.svg";
import button_next from "../assets/button_next.svg";

const SliderContainer = styled.div`
  overflow: hidden;
  width: 1240.63px;
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
  margin-left: 20.1px;
  font-size: 30px;
`;
const SlideText = styled.div`
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 16px;
  letter-spacing: -0.02em;
  text-align: center;
`;
const HorizontalContainer = styled.div`
  display: flex;
`;

const Slider = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const dotImages = [slide_dot_1, slide_dot_2, slide_dot_3, slide_dot_4];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(intervalId);
  }, [nextSlide]);

  return (
    <SliderContainer>
      <SlideContainer
        style={{ transform: `translateX(${-currentSlide * 1240.63}px)` }}
      >
        {slides.map((slide, index) => (
          <Slide key={index}>
            <SlideTitle>{slide.title}</SlideTitle>
            <SlideImage src={slide.image} alt={`slide-${index}`} />
            <SlideText>{slide.text}</SlideText>
          </Slide>
        ))}
      </SlideContainer>
      <HorizontalContainer>
        <img
          src={dotImages[currentSlide]}
          alt={`slide_dot_${currentSlide}`}
          style={{ marginLeft: 604.9, marginTop: 50 }}
        />
        <img
          src={button_previous}
          alt={button_previous}
          onClick={prevSlide}
          style={{ marginLeft: 456, marginTop: 50 }}
        />
        <img
          src={button_next}
          alt={button_next}
          onClick={nextSlide}
          style={{ marginLeft: 10, marginTop: 50 }}
        />
      </HorizontalContainer>
    </SliderContainer>
  );
};

export default Slider;

import React from 'react';
import styled from 'styled-components';
import button_dingdingeye from "../assets/button_dingdingeye.svg"

const Title = styled.div`
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 95px;
  letter-spacing: -0.06em;
  color: #000000;
  margin-top: 232px;
  margin-left: 459px;
  white-space: pre-line;

  @media screen and (max-width: 665px) {
    font-size: 65px;
    margin-top: 221px;
    margin-left: 41px;
  }
`
const SubTitle = styled.div`
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 40px;
  letter-spacing: -0.06em;
  color: #000000;
  margin-top: 31px;
  margin-left: 462px;

  @media screen and (max-width: 665px) {
    font-size: 30px;
    margin-top: 13px;
    margin-left: 43px;
  }
`
const Content = styled.div`
  font-family: 'GmarketSansMedium', sans-serif;
  font-size: 23px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-top: 156px;
  margin-left: 462px;
  white-space: pre-line;
  margin-bottom: 13px;

  @media screen and (max-width: 665px) {
    font-size: 20px;
    margin-top: 87px;
    margin-left: 41px;
  }
`
const DingdingeyeButton = styled.img`
  margin-top: 143px;
  margin-left: 460px;

  @media screen and (max-width: 665px) {
    margin-top: 151px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`

const AI = () => {
  const isSmallScreen = window.innerWidth <= 665;

  return (
    <div id="ai">
      <Title>누구나 원하는{isSmallScreen ? <br /> : ' '}영상을 찾는 세상</Title>
      <SubTitle>비전 AI 솔루션, 딩딩아이</SubTitle>
      <Content>귀찮고, 힘들고, 오래 걸리는 프리뷰, 손 쉽게 해결해 보세요{"\n"}
      생성형 AI 기술을 활용한 비전 AI가 당신의 조연출이 되어 드립니다.</Content>
      <DingdingeyeButton src={button_dingdingeye} alt={button_dingdingeye} />
    </div>
  );
};

export default AI;

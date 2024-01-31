import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../contexts/Language";
import button_dingkok from "../assets/button_dingkok.svg";
import button_dingdingbrain from "../assets/button_dingdingbrain.svg";
import logo_dingkok from "../assets/logo_dingcok.svg";
import logo_dingdingbrain from "../assets/logo_dingdingbrain.svg";
import EmptyBox from "../components/EmptyBox";

const Title = styled.div`
  font-family: "GmarketSansBold", sans-serif;
  font-size: 95px;
  letter-spacing: -0.06em;
  color: #000000;
  margin-top: 31px;
  margin-left: 164px;
  white-space: pre-line;

  @media screen and (max-width: 665px) {
    font-size: 65px;
    margin-top: 221px;
    margin-left: 41px;
  }
`;
const SubTitle = styled.div`
  font-family: "GmarketSansBold", sans-serif;
  font-size: 40px;
  letter-spacing: -0.06em;
  color: #000000;
  margin-top: 448px;
  margin-left: 175px;

  @media screen and (max-width: 665px) {
    font-size: 30px;
    margin-top: 13px;
    margin-left: 43px;
  }
`;
const Content = styled.div`
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 23px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-top: 159px;
  margin-left: 175px;
  white-space: pre-line;
  margin-bottom: 13px;

  @media screen and (max-width: 665px) {
    font-size: 20px;
    margin-top: 87px;
    margin-left: 41px;
  }
`;
const DingdingeyeButton = styled.img`
  margin-top: 135px;
  margin-left: 175px;

  @media screen and (max-width: 665px) {
    margin-top: 151px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }
`;
const HorizontalContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 430px;
  margin-left: 71px;
  margin-right: 228px;

  @media screen and (max-width: 665px) {
    display: block;
    flex-dirction: column;
    align-items: flex-start;
    margin-top: 327px;
    margin-left: 50px;
    margin-right: 50px;
  }
`;
const VerticalContainer = styled.div`
  flex-direction: column;
  align-items: flex-start;
  margin-left: 43px;

  @media screen and (max-width: 665px) {
    margint-left: 0px;
  }
`;
const DingdingeyeContent = styled.div`
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 23px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 13px;
  margin-right: 285px;

  @media screen and (max-width: 665px) {
    margin-left: 2px;
    margin-right: 2px;
  }
`;
const FrameText = styled.div`
  font-family: "GmarketSansBold", sans-serif;
  font-size: 30px;
  margin-bottom: 21px;

  @media screen and (max-width: 665px) {
    margin-top: 66px;
  }
`;

const ContentsPage = () => {
  const { language } = useContext(LanguageContext);
  const isSmallScreen = window.innerWidth <= 665;

  return (
    <div id="contents">
      <SubTitle>
        {language === "ko"
          ? "옛 드라마로 기억을 되살려 보세요."
          : "Revive Memories with Classic Dramas."}
      </SubTitle>
      <Title>
        {language === "ko"
          ? "아카이브 회상 솔루션, 딩콕"
          : "Reminiscence Solution,\nDingDing Brain"}
      </Title>
      <Content>
        {language === "ko"
          ? "더이상 머리 아픈 치매 치료 문제는 그만,\n"
          : "Say farewell to the headache of dementia treatment.\n"}
        {language === "ko"
          ? "60년 역사의 방대한 MBC 아카이브로 만든 영상으로 인지를 자극합니다."
          : "Stimulate cognition with videos crafted from the extensive 60-year history of the MBC Archive."}
        {language === "ko"
          ? ""
          : "DingDing Brain - Transforming memory care with the power of nostalgia"}
      </Content>
      <DingdingeyeButton
        src={language === "ko" ? button_dingkok : button_dingdingbrain}
        alt={button_dingdingbrain}
      />
      <HorizontalContainer>
        <VerticalContainer>
          <img
            src={language === "ko" ? logo_dingkok : logo_dingdingbrain}
            alt="logo_dingding"
          />
          <EmptyBox height={isSmallScreen ? 80 : 68} />
          <DingdingeyeContent>
            {language === "ko"
              ? "60년 역사의 아카이브를 활용한"
              : "Journey through the Past,\nHeal for the Future\n"}
          </DingdingeyeContent>
          <DingdingeyeContent>
            {language === "ko"
              ? "회상 치료용 콘텐츠,\n\n"
              : "Our revolutionary solution, DingDing Brain,\nharnesses the therapeutic power of vintage\ndramas for dementia treatment."}
          </DingdingeyeContent>
          <DingdingeyeContent>
            {language === "ko"
              ? "비전 AI 기술을 활용해 과거 영상을"
              : "Embrace a new era of cognitive care with the\nnostalgic touch of timeless classics."}
          </DingdingeyeContent>
          <DingdingeyeContent>
            {language === "ko" ? "분석하고, 전문가 감수를 거쳐" : ""}
          </DingdingeyeContent>
          <DingdingeyeContent>
            {language === "ko" ? "효과적인 문제를 선보입니다." : ""}
          </DingdingeyeContent>
        </VerticalContainer>
        <VerticalContainer>
          <EmptyBox height={isSmallScreen ? 74 : 0} />
          <FrameText>
            {language === "ko"
              ? "드라마 인지 자극 프로그램"
              : "Drama-Stimulating\nCognitive Program"}
          </FrameText>
        </VerticalContainer>
        <VerticalContainer>
          <FrameText>
            {language === "ko"
              ? "치매안심센터 프로그램"
              : "Cognitive Remediation:\nTherapeutic Learning Materials"}
          </FrameText>
        </VerticalContainer>
      </HorizontalContainer>
    </div>
  );
};

export default ContentsPage;

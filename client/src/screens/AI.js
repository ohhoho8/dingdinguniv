import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../contexts/Language";
import Slider from "../components/Slider";
import logo_dingdingeye from "../assets/logo_dingdingeye.svg";
import button_contact from "../assets/button_contact.svg";
import button_contact_mobile from "../assets/button_contact_mobile.svg";
import slide_dingdingeye_1 from "../assets/slide_dingdingeye_1.svg";
import slide_dingdingeye_2 from "../assets/slide_dingdingeye_2.svg";
import EmptyBox from "../components/EmptyBox";
import ImageFrame from "../components/ImageFrame";

const Title = styled.div`
  font-family: "GmarketSansBold", sans-serif;
  font-size: 90px;
  letter-spacing: -0.06em;
  color: #000000;
  margin-left: 493px;

  @media screen and (max-width: 665px) {
    font-size: 40px;
    margin-left: 25px;
    margin-bottom: 9px;
    white-space: pre-line;
  }
`;
const SubTitle = styled.div`
  font-family: "GmarketSansBold", sans-serif;
  font-size: 35px;
  letter-spacing: -0.06em;
  color: #000000;
  margin-top: 11px;
  margin-left: 496px;
  margin-bottom: 46px;

  @media screen and (max-width: 665px) {
    font-size: 20px;
    margin-top: 14px;
    margin-left: 28px;
    margin-bottom: 23px;
  }
`;
const Content = styled.div`
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-top: 13px;
  margin-left: 496px;
  white-space: pre-line;

  @media screen and (max-width: 665px) {
    font-size: 12px;
    margin-top: 0px;
    margin-left: 28px;
    margin-bottom: 7px;
  }
`;
const DingdingeyeLogo = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 581px;
  margin-bottom: 47px;

  @media screen and (max-width: 665px) {
    width: 230px;
    margin-top: 555px;
    margin-bottom: 39px;
  }
`;
const DingdingeyeContent = styled.div`
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 16px;
  letter-spacing: -0.02em;
  color: #000000;
  text-align: center;
  margin-bottom: 13px;

  @media screen and (max-width: 665px) {
    font-size: 12px;
    margin-bottom: 7px;
  }
`;
const ContactButton = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 42px;
`;
const ContactButtonMobile = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: 39px;
  margin-bottom: 79px;
  width: 122px;
`;

const AI = () => {
  const { language } = useContext(LanguageContext);
  const isSmallScreen = window.innerWidth <= 665;

  const metadata = {
    title: "영상별 메타데이터",
    image_1: slide_dingdingeye_1,
    content_1: "1시간 짜리 영상도 10분 만에!",
    image_2: slide_dingdingeye_2,
    content_2: "월 2000시간까지 처리 가능",
  };
  const slides_dingdingeye = [
    {
      title: "영상별 메타데이터",
      image: slide_dingdingeye_1,
      text: "첫번째 슬라이드",
    },
    { title: " ", image: slide_dingdingeye_2, text: "두번째 슬라이드" },
  ];

  return (
    <div id="ai">
      <EmptyBox height={isSmallScreen ? 233 : 426.43} />
      {isSmallScreen ? (
        <>
          <Title>
            {language === "ko" ? "누구나 원하는" : "Automate Metadata,"}
          </Title>
          <Title>
            {language === "ko" ? "영상을 찾는 세상" : "Elevate Creation"}
          </Title>
        </>
      ) : (
        <Title>
          {language === "ko"
            ? "누구나 원하는 영상을 찾는 세상"
            : "Automate Metadata, Elevate Creation"}
        </Title>
      )}
      <SubTitle>
        {language === "ko"
          ? "비전 AI 솔루션, 딩딩아이"
          : "Vision AI solution, DingDing EYE"}
      </SubTitle>
      <Content>
        {language === "ko"
          ? "귀찮고, 힘들고, 오래 걸리는 프리뷰, 손 쉽게 해결해 보세요\n"
          : "No more preview, No more searching.\n"}
      </Content>
      <Content>
        {language === "ko"
          ? "생성형 AI 기술을 활용한 비전 AI가 당신의 조연출이 되어 드립니다."
          : "Let DingDingEYE be your video genie-instant, hassle-free discovery."}
      </Content>

      <DingdingeyeLogo src={logo_dingdingeye} alt="logo_dingdingeye" />
      <DingdingeyeContent>
        {language === "ko"
          ? "간편한 웹 서비스를 통해 만나는 신개념 AI 영상 분석 서비스.\n\n"
          : "No more previews, No more searching.\n"}
      </DingdingeyeContent>
      <DingdingeyeContent>
        {language === "ko"
          ? "방대한 양의 영상의 프리뷰, 딩딩아이로 분석해 드립니다."
          : "Let DingDingEYE be your video genie-instant, hassle-free discovery."}
      </DingdingeyeContent>
      {isSmallScreen ? (
        <ContactButtonMobile
          src={button_contact_mobile}
          alt={button_contact_mobile}
        />
      ) : (
        <ContactButton src={button_contact} alt={button_contact} />
      )}

      {window.innerWidth <= 665 ? (
        <ImageFrame imageframe={metadata} />
      ) : (
        <Slider slides={slides_dingdingeye} />
      )}
    </div>
  );
};

export default AI;

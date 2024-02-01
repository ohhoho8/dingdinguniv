import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../contexts/Language";
import Slider from "../components/Slider";
import logo_dingdingeye from "../assets/logo_dingdingeye.svg";
import button_contact from "../assets/button_contact.svg";
import button_contact_eng from "../assets/button_contact_eng.svg";
import button_contact_mobile from "../assets/button_contact_mobile.svg";
import slide_dingdingeye_1 from "../assets/slide_dingdingeye_1.svg";
import slide_dingdingeye_2 from "../assets/slide_dingdingeye_2.svg";
import slide_empty from "../assets/slide_empty.svg";
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
  margin-top: 525px;
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
  margin-bottom: 265.15px;
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

  const imageframe_metadata = {
    title:
      language === "ko"
        ? "영상별 메타데이터"
        : "Metadata Tailored for Every Video",
    image_1: slide_dingdingeye_1,
    content_1:
      language === "ko"
        ? "1시간 짜리 영상도 10분 만에!"
        : "Transfrom 1-hour videos in just 10 minutes!",
    image_2: slide_dingdingeye_2,
    content_2: "월 2000시간까지 처리 가능",
  };
  const imageframe_search = {
    title:
      language === "ko"
        ? "인물별, 대사별 영상 검색"
        : "Search Videos by Person and Dialogue",
    image_1: slide_empty,
    content_1:
      language === "ko"
        ? "Ai 인물 인식을 통한 장면 검색"
        : "Scene Search Through Ai Face Recognition",
    image_2: slide_empty,
    content_2:
      language === "ko"
        ? "대사와 자막까지 인식하는 생성형 Ai"
        : "Generate Ai with Dialogue and Subtitles",
  };
  const slides_dingdingeye = [
    {
      title:
        language === "ko"
          ? "영상별 메타데이터"
          : "Metadata Tailored for Every Video",
      image: slide_dingdingeye_1,
      text:
        language === "ko"
          ? "1시간 짜리 영상도 10분 만에!"
          : "Transfrom 1-hour videos in just 10 minutes!",
    },
    {
      title: "\u00A0",
      image: slide_dingdingeye_2,
      text:
        language === "ko" ? "\u00A0" : "Process up to 2000 hours per month!",
    },
    {
      title:
        language === "ko"
          ? "인물별, 대사별 영상 검색"
          : "Search Videos by Person and Dialogue",
      image: slide_empty,
      text:
        language === "ko"
          ? "Ai 인물 인식을 통한 장면 검색"
          : "Scene Search Through Ai Face Recognition",
    },
    {
      title: "\u00A0",
      image: slide_empty,
      text:
        language === "ko"
          ? "대사와 자막까지 인식하는 생성형 Ai"
          : "Generate Ai with Dialogue and Subtitles",
    },
  ];

  return (
    <div id="ai">
      <EmptyBox height={isSmallScreen ? 233 : 426.43} />
      {isSmallScreen || language === "en" ? (
        <>
          <Title>
            {language === "ko" ? "누구나 원하는" : "Automate Metadata,"}
          </Title>
          <Title>
            {language === "ko" ? "영상을 찾는 세상" : "Elevate Creation"}
          </Title>
        </>
      ) : (
        <Title>{language === "ko" && "누구나 원하는 영상을 찾는 세상"}</Title>
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
          src={language === "ko" ? button_contact_mobile : button_contact_eng}
          alt={button_contact_mobile}
        />
      ) : (
        <ContactButton
          src={language === "ko" ? button_contact : button_contact_eng}
          alt={button_contact}
        />
      )}
      {window.innerWidth <= 665 ? (
        <>
          {" "}
          <ImageFrame imageframe={imageframe_metadata} />{" "}
          <ImageFrame imageframe={imageframe_search} />
        </>
      ) : (
        <Slider slides={slides_dingdingeye} />
      )}
    </div>
  );
};

export default AI;

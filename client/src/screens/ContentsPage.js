import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../contexts/Language";
import logo_dingkok from "../assets/logo_dingcok.svg";
import EmptyBox from "../components/EmptyBox";
import button_contact from "../assets/button_contact.svg";
import button_contact_eng from "../assets/button_contact_eng.svg";
import ImageFrame from "../components/ImageFrame";
import Slider from "../components/Slider";
import slide_dingdingeye_1 from "../assets/slide_dingdingeye_1.svg";
import slide_empty from "../assets/slide_empty.svg";

const Title = styled.div`
  font-family: "GmarketSansBold", sans-serif;
  font-size: 95px;
  letter-spacing: -0.06em;
  color: #000000;
  margin-top: 25px;
  margin-left: 598px;
  margin-bottom: ${(props) => (props.language === "ko" ? 73 : 32)}px;
  white-space: pre-line;

  @media screen and (max-width: 665px) {
    font-size: 40px;
    margin-top: 23px;
    margin-left: 25px;
    margin-bottom: 14px;
  }
`;
const SubTitle = styled.div`
  font-family: "GmarketSansBold", sans-serif;
  font-size: 40px;
  letter-spacing: -0.06em;
  color: #000000;
  margin-top: ${(props) => (props.language === "ko" ? 585 : 535)}px;
  margin-left: 609px;

  @media screen and (max-width: 665px) {
    font-size: 20px;
    margin-top: 229px;
    margin-left: 28px;
  }
`;
const Content = styled.div`
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 23px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-left: 609px;
  white-space: pre-line;
  margin-bottom: 13px;

  @media screen and (max-width: 665px) {
    font-size: 12px;
    margin-left: 28px;
  }
`;
const DingcokLogo = styled.img`
  display: block;
  margin: 0 auto;
  margin-top: ${(props) => (props.language === "ko" ? 470 : 394)}px;

  @media screen and (max-width: 665px) {
    margin-top: 151px;
    margin-left: auto;
    margin-right: auto;
    display: block;
    width: 104px;
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
    margin-left: 2px;
    margin-right: 2px;
  }
`;
const ContactButton = styled.img`
  display: block;
  margin: 0 auto;
`;

const ContentsPage = () => {
  const { language } = useContext(LanguageContext);
  const isSmallScreen = window.innerWidth <= 665;

  const imageframe_contents = {
    title:
      language === "ko"
        ? "드라마 인지 자극 프로그램"
        : "Drama-Stimulating Cognitive Program",
    image_1: slide_empty,
    content_1:
      language === "ko"
        ? "7,80년대 명작드라마가 교재로 변신"
        : "Transforming Classic 70s and 80s Dramas into Educational Materials",
    image_2: slide_empty,
    content_2:
      language === "ko"
        ? "여의도 성모병원 뇌건강센터 감수"
        : "Supervised by the Brain Health Center at Yeouido St. Mary's Hospital",
  };
  const imageframe_care = {
    title:
      language === "ko"
        ? "치매안심센터 프로그램"
        : "Cognitive Remediation: Therapeutic Learning Materials",
    image_1: slide_empty,
    content_1:
      language === "ko"
        ? "과거 뉴스와 시사 교양 콘텐츠를 활용"
        : "Unlocking the Past: Utilizing Historical News and Cultural Content",
    image_2: slide_empty,
    content_2:
      language === "ko"
        ? "꼭 필요한 회상 요소만 뽑아 만든 12주 커리큘럼"
        : "Essential Nostalgia: Crafted 12-Week Curriculum",
  };
  const slides_contents = [
    {
      title:
        language === "ko"
          ? "드라마 인지 자극 프로그램"
          : "Drama-Stimulating Cognitive Program",
      image: slide_empty,
      text:
        language === "ko"
          ? "7,80년대 명작드라마가 교재로 변신"
          : "Transforming Classic 70s and 80s Dramas into Educational Materials",
    },
    {
      title: "\u00A0",
      image: slide_empty,
      text:
        language === "ko"
          ? "여의도 성모병원 뇌건강센터 감수"
          : "Supervised by the Brain Health Center at Yeouido St. Mary's Hospital",
    },
    {
      title:
        language === "ko"
          ? "치매안심센터 프로그램"
          : "Cognitive Remediation: Therapeutic Learning Materials",
      image: slide_empty,
      text:
        language === "ko"
          ? "과거 뉴스와 시사 교양 콘텐츠를 활용"
          : "Unlocking the Past: Utilizing Historical News and Cultural Content",
    },
    {
      title: "\u00A0",
      image: slide_empty,
      text:
        language === "ko"
          ? "꼭 필요한 회상 요소만 뽑아 만든 12주 커리큘럼"
          : "Essential Nostalgia: Crafted 12-Week Curriculum",
    },
  ];

  return (
    <div id="contents">
      <SubTitle>
        {language === "ko"
          ? "옛 드라마로 기억을 되살려 보세요."
          : "Revive Memories with Classic Dramas."}
      </SubTitle>
      <Title>
        {language === "ko"
          ? "아카이브 회상 솔루션,\n딩콕"
          : "Reminiscence Solution\nDing-Cog"}
      </Title>
      <Content>
        {language === "ko"
          ? "더이상 머리 아픈 치매 치료 문제는 그만,\n"
          : "Say farewell to the headache of dementia treatment.\n"}
      </Content>
      <Content>
        {language === "ko"
          ? "60년 역사의 방대한 MBC 아카이브로 만든 영상으로 인지를 자극합니다."
          : "Stimulate cognition with videos crafted from the extensive 60-year history of the MBC Archive."}
      </Content>
      <Content>
        {language === "ko"
          ? ""
          : "DingDing Brain - Transforming memory care with the power of nostalgia"}
      </Content>

      <DingcokLogo src={logo_dingkok} alt="logo_dingcok" />
      <EmptyBox height={isSmallScreen ? 80 : 47} />
      <DingdingeyeContent>
        {language === "ko"
          ? "60년 역사의 아카이브를 활용한 화상 치료용 콘텐츠,"
          : "Journey through the Past, Heal for the Future"}
      </DingdingeyeContent>
      <DingdingeyeContent>
        {language === "ko"
          ? " "
          : "Our revolutionary solution, DingDing Brain, harnesses the therapeutic power of vintage dramas for dementia treatment."}
      </DingdingeyeContent>
      <DingdingeyeContent>
        {language === "ko"
          ? "비전 AI 기술을 활용해 과거 영상을 분석하고,"
          : "Embrace a new era of cognitive care"}
      </DingdingeyeContent>
      <DingdingeyeContent>
        {language === "ko"
          ? "전문가 감수를 거쳐 효과적인 문제를 선보입니다."
          : "with the nostalgic touch of timeless classics."}
      </DingdingeyeContent>
      <EmptyBox height={isSmallScreen ? 74 : 38} />
      {language === "ko" && !isSmallScreen && <EmptyBox height={9} />}
      <ContactButton
        src={language === "ko" ? button_contact : button_contact_eng}
        alt={button_contact}
      />

      {isSmallScreen ? (
        <>
          <EmptyBox height={79} />
          <ImageFrame imageframe={imageframe_contents} />
          <EmptyBox height={47} />
          <ImageFrame imageframe={imageframe_care} />
        </>
      ) : (
        <>
          <EmptyBox height={308} />
          <Slider slides={slides_contents} />
        </>
      )}
    </div>
  );
};

export default ContentsPage;

import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../contexts/Language";
import EmptyBox from "../components/EmptyBox";
import text_dingdinguniv from "../assets/text_dingdinguniv.svg";
import text_dingdinguniv_eng from "../assets/text_dingdinguniv_eng.svg";
import logo_dingdingeye from "../assets/logo_dingdingeye.svg";
import logo_dingcok from "../assets/logo_dingcok.svg";

const Title = styled.div`
  font-family: "GmarketSansBold", sans-serif;
  font-size: ${(props) => (props.language === "ko" ? 95 : 65)}px;
  letter-spacing: -0.06em;
  color: #000000;
  margin-left: ${(props) => (props.language === "ko" ? 475 : 452)}px;
  white-space: pre-line;
  line-height: ${(props) => (props.language === "ko" ? 138.6 : 120.5)}%;

  @media screen and (max-width: 665px) {
    font-size: 45px;
    margin-top: 263.36px;
    margin-left: 49px;
  }
`;
const HorizontalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const Content = styled.div`
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 23px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-left: ${(props) => (props.language === "ko" ? 475 : 452)}px;
  white-space: pre-line;
  margin-bottom: 13px;

  @media screen and (max-width: 665px) {
    font-size: 20px;
    margin-top: 80px;
    margin-left: 49px;
  }
`;
const LocationInfo = styled.div`
  font-family: "GmarketSansBold", sans-serif;
  font-size: 40px;
  letter-spacing: -0.06em;
  color: #000000;
  margin-top: ${(props) => (props.language === "ko" ? 463 : 427)}px;
  margin-left: 292px;

  @media screen and (max-width: 665px) {
    font-size: 40px;
    margin-top: 279px;
    margin-left: 49px;
  }
`;
const Location = styled.div`
  font-family: "GmarketSansMedium", sans-serif;
  font-size: 23px;
  color: #000000;
  margin-top: 69px;
  margin-left: 292px;
  white-space: pre-line;
  margin-bottom: 13px;

  @media screen and (max-width: 665px) {
    font-size: 23px;
    margin-top: 75px;
    margin-left: 49px;
  }
`;

const Company = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div id="company">
      <EmptyBox height={429} />
      {language === "ko" ? (
        <>
          <HorizontalContainer>
            <div>
              <Title>MBC 사내벤처{"\u00A0"}</Title>
            </div>
            <div>
              <img
                src={text_dingdinguniv}
                alt={text_dingdinguniv}
                style={{ marginBottom: 10 }}
              />
            </div>
            <div>
              <Title style={{ marginLeft: 0 }}>은</Title>
            </div>
          </HorizontalContainer>
          <Title>공영방송의 아카이브를 활용해</Title>
          <Title>부가가치를 만들어 냅니다.</Title>
          <EmptyBox height={21} />
          <HorizontalContainer>
            <Content>
              AI 기술을 활용한 메타데이터 자동생성 솔루션{"\u00A0"}
            </Content>
            <img
              src={logo_dingdingeye}
              alt={logo_dingdingeye}
              style={{ width: 77, marginBottom: 20 }}
            />
          </HorizontalContainer>
          <HorizontalContainer>
            <Content>방송 아카이브를 활용한 치매 관리 콘텐츠{"\u00A0"}</Content>
            <img
              src={logo_dingcok}
              alt={logo_dingcok}
              style={{ width: 33, marginBottom: 20 }}
            />
            <Content style={{ marginLeft: 0 }}>
              , 지식 콘텐츠 등을 생산하고 있습니다.
            </Content>
          </HorizontalContainer>
        </>
      ) : (
        <>
          <Title>MBC's in-house venture,</Title>
          <img
            src={text_dingdinguniv_eng}
            alt={text_dingdinguniv_eng}
            style={{ marginLeft: 452 }}
          />
          <Title>creates value through the utilization</Title>
          <Title>of public broadcasting archives.</Title>
          <EmptyBox height={105} />
          <HorizontalContainer>
            <Content>
              We produce content such as the AI-driven automatic metadata
              generation solution{"\u00A0"}
            </Content>
            <img
              src={logo_dingdingeye}
              alt={logo_dingdingeye}
              style={{ width: 77, marginBottom: 20 }}
            />
          </HorizontalContainer>
          <HorizontalContainer>
            <Content>
              and dementia management content using broadcast archives{"\u00A0"}
            </Content>
            <img
              src={logo_dingcok}
              alt={logo_dingcok}
              style={{ width: 33, marginBottom: 20 }}
            />
          </HorizontalContainer>
          <Content>contributing to knowledge creation.</Content>
        </>
      )}

      <LocationInfo>
        {language === "ko" ? "찾아오시는 길" : "Contact"}
      </LocationInfo>
      <Location>
        {language === "ko"
          ? "서울시 마포구 성암로 267, MBC 신사옥 (상암동)\n02--789-2559 / dingding.univ@gmail.com"
          : "267, Seongam-ro, Mapo-gu, Seoul, MBC New Building (Sangam-dong)\n02-789-2559 / dingding.univ@gmail.com"}
      </Location>
      <EmptyBox height={100} />
    </div>
  );
};

export default Company;

import React, { useContext } from "react";
import styled from "styled-components";
import { LanguageContext } from "../contexts/Language";
import EmptyBox from "../components/EmptyBox";
import text_dingdinguniv from "../assets/text_dingdinguniv.svg";
import logo_dingdingeye from "../assets/logo_dingdingeye.svg";
import logo_dingcok from "../assets/logo_dingcok.svg";

const Title = styled.div`
  font-family: "GmarketSansBold", sans-serif;
  font-size: 95px;
  letter-spacing: -0.06em;
  color: #000000;
  margin-left: 475px;
  white-space: pre-line;
  line-height: 138.6%;

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
  margin-left: 475px;
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
  margin-top: 463px;
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
        ""
      )}

      <LocationInfo>찾아오시는 길</LocationInfo>
      <Location>
        서울시 마포구 성암로 267, MBC 신사옥 (상암동){"\n"}02--789-2559 /
        dingding.univ@gmail.com
      </Location>
      <EmptyBox height={100} />

      <Title>
        {language === "ko"
          ? "MBC 사내벤처 딩딩대학은"
          : "MBC's in-house venture,\nDingDing University,\ncreates value through the utilization\nof public broadcasting archives."}
      </Title>
      <Title>
        {language === "ko"
          ? "공영방송의 아카이브를 활용해"
          : "MBC's in-house venture,\nDingDing University,\ncreates value through the utilization\nof public broadcasting archives."}
      </Title>
      <Title>
        {language === "ko"
          ? "부가가치를 만들어 냅니다."
          : "MBC's in-house venture,\nDingDing University,\ncreates value through the utilization\nof public broadcasting archives."}
      </Title>
      <Content>
        {language === "ko"
          ? 'AI 기술을 활용한 메타데이터 자동생성 솔루션 &lt;딩딩아이&gt;,{"\n"}방송 아카이브를 활용한 치매 관리 콘텐츠, {isSmallScreen&&"\n"}지식 콘텐츠 등을 생산하고 있습니다.'
          : "We produce content such as the AI-driven automatic metadata generation solution, DingDingEye,\nand dementia management content using broadcast archives, contributing to knowledge creation."}
      </Content>
    </div>
  );
};

export default Company;

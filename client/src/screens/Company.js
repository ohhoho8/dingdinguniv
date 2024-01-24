import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const Title = styled.div`
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 95px;
  letter-spacing: -0.06em;
  color: #000000;
  margin-top: 562px;
  margin-left: 462px;
  white-space: pre-line;

  @media screen and (max-width: 665px) {
    font-size: 45px;
    margin-top: 263.36px;
    margin-left: 49px;
  }
`
const Content = styled.div`
  font-family: 'GmarketSansMedium', sans-serif;
  font-size: 23px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-top: 75px;
  margin-left: 462px;
  white-space: pre-line;
  margin-bottom: 13px;

  @media screen and (max-width: 665px) {
    font-size: 20px;
    margin-top: 80px;
    margin-left: 49px;
  }
`
const LocationInfo = styled.div`
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 40px;
  letter-spacing: -0.06em;
  color: #000000;
  margin-top: 664px;
  margin-left: 462px;

  @media screen and (max-width: 665px) {
    font-size: 40px;
    margin-top: 279px;
    margin-left: 49px;
  }
`
const Location = styled.div`
  font-family: 'GmarketSansMedium', sans-serif;
  font-size: 23px;
  color: #000000;
  margin-top: 75px;
  margin-left: 462px;
  white-space: pre-line;
  margin-bottom: 13px;

  @media screen and (max-width: 665px) {
    font-size: 23px;
    margin-top: 75px;
    margin-left: 49px;
  }
`

const Company = () => {
    const [language, setLanguage] = useState('ko');
    //const isSmallScreen = window.innerWidth <= 665;

    useEffect(() => {
        const userLanguage = navigator.language.toLocaleLowerCase();
        setLanguage(userLanguage.includes('ko')? 'ko':'en');
      }, [])

  return (
    <div id="company">
      <Title>{language==='ko'?'MBC 사내벤처 딩딩대학은\n공영방송의 아카이브를 활용해\n부가가치를 만들어 냅니다.':'MBC\'s in-house venture,\nDingDing University,\ncreates value through the utilization\nof public broadcasting archives.'}</Title>
      <Content>{language==='ko'?'AI 기술을 활용한 메타데이터 자동생성 솔루션 &lt;딩딩아이&gt;,{"\n"}방송 아카이브를 활용한 치매 관리 콘텐츠, {isSmallScreen&&"\n"}지식 콘텐츠 등을 생산하고 있습니다.':'We produce content such as the AI-driven automatic metadata generation solution, DingDingEye,\nand dementia management content using broadcast archives, contributing to knowledge creation.'}</Content>
      <LocationInfo>찾아오시는 길</LocationInfo>
      <Location>서울시 마포구 성암로 267, MBC 신사옥 (상암동){"\n"}02--789-2559 / dingding.univ@gmail.com</Location>
    </div>
  );
};

export default Company;

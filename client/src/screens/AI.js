import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import button_dingdingeye from "../assets/button_dingdingeye.svg"
import logo_dingdingeye from "../assets/logo_dingdingeye.svg"
import imageframe_metadata from "../assets/imageframe_metadata.svg"
import imageframe_metadata_eng from "../assets/imageframe_metadata_eng.svg"
import imageframe_search from "../assets/imageframe_search.svg"
import imageframe_search_eng from "../assets/imageframe_search_eng.svg"
import EmptyBox from '../components/EmptyBox';

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
`
const VerticalContainer = styled.div`
  flex-direction: column;
  align-items: flex-start;
  margin-left: 43px;

  @media screen and (max-width: 665px) {
    margint-left: 0px;
  }
`
const DingdingeyeContent = styled.div`
  font-family: 'GmarketSansMedium', sans-serif;
  font-size: 23px;
  letter-spacing: -0.02em;
  color: #000000;
  margin-bottom: 13px;
  margin-right: 285px;

  @media screen and (max-width: 665px) {
    margin-left: 2px;
    margin-right: 2px;
  }
`
const FrameText = styled.div`
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 30px;
  margin-bottom: 21px;

  @media screen and (max-width: 665px) {
    margin-top: 66px;
  }
`

const AI = () => {
  const [language, setLanguage] = useState('ko');
  const isSmallScreen = window.innerWidth <= 665;

  useEffect(() => {
    const userLanguage = navigator.language.toLocaleLowerCase();
    setLanguage(userLanguage.includes('ko')? 'ko':'en');
  }, [])

  return (
    <div id="ai">
      <Title>{language === 'ko'? '누구나 원하는':'Automate Metadata,'}{isSmallScreen||language!=='ko' ? "\n" : ' '}{language === 'ko'? '영상을 찾는 세상':'Elevate Creation'}</Title>
      <SubTitle>{language==='ko'? '비전 AI 솔루션, 딩딩아이':'Vision AI solution, DingDing EYE'}</SubTitle>
      <Content>
        {language === 'ko' ? '귀찮고, 힘들고, 오래 걸리는 프리뷰, 손 쉽게 해결해 보세요\n' : 'No more preview, No more searching.\n'}
        {language === 'ko' ? '생성형 AI 기술을 활용한 비전 AI가 당신의 조연출이 되어 드립니다.' : 'Let DingDingEYE be your video genie-instant, hassle-free discovery.'}
      </Content>
      <DingdingeyeButton src={button_dingdingeye} alt={button_dingdingeye} />
      <HorizontalContainer>
        <VerticalContainer>
            <img src={logo_dingdingeye} alt='logo_dingdingeye' />
            <EmptyBox height={isSmallScreen?80:68} />
            <DingdingeyeContent>{language==='ko'? '간편한 웹 서비스를 통해 만나는' : 'Experience the Future:\nAI Video Analysis\n'}</DingdingeyeContent>
            <DingdingeyeContent>{language==='ko'? '신개념 AI 영상 분석 서비스\n\n':'Unlock a new era of AI video analysis\nthrough our user-friendly web service.\n'}</DingdingeyeContent>
            <DingdingeyeContent>{language==='ko'? '방대한 양의 영상의 프리뷰' : 'Say goodbye to endless video previews.\nDingDingEye analyzes vast amounts of footage for you'}</DingdingeyeContent>
            <DingdingeyeContent>{language==='ko'?'딩딩아이로 분석해 드립니다.':''}</DingdingeyeContent>
        </VerticalContainer>
        <VerticalContainer>
            <EmptyBox height={isSmallScreen?74:0} />
            <FrameText>{language==='ko'?'영상별 메타데이터':'Metadata Tailored for\nEvery Video'}</FrameText>
            <img src={language==='ko'?imageframe_metadata:imageframe_metadata_eng} alt='imageframe_metadata' />
        </VerticalContainer>
        <VerticalContainer>
            <FrameText>{language==='ko'?'인물별, 대사별 영상 검색':'Search Videos by\nPerson and Dialogue'}</FrameText>
            <img src={language==='ko'?imageframe_search:imageframe_search_eng} alt='imageframe_search' />
        </VerticalContainer>
      </HorizontalContainer>
    </div>
  );
};

export default AI;

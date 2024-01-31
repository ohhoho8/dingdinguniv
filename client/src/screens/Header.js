import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {Link} from 'react-scroll';
import {FaBars} from 'react-icons/fa';
import logo_dindinguniv from '../assets/logo_dingdinguniv.svg'
import { LanguageContext } from '../contexts/Language';
import EmptyBox from '../components/EmptyBox';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  position: relative;
  margin-left: 288px;

  .menuToggleBtn{
    display: none;
  }

  @media screen and (max-width: 665px) {
    margin-left: 25px;
    align-items: center;
    .menuToggleBtn {
      display: block;
      position: absolute;
      right: 40px;
    }
  }
`
const Nav=styled.ul`
  @media screen and (max-width: 665px) {
    display: ${(props)=> (props.isToggleOpen ? "block" : "none")};
    width: 100%;
    position: fixed;
    top: 70px;
    right: 25px;
  }
`
const MenuList = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 500px;
  margin-right: 122px;

  @media screen and (max-width: 665px) {
    flex-direction: column;
    align-items: flex-end;
    margin-top: 70px;
    margin-left: auto;
    margin-right: 25px;
    gap:30px;
  }
`
const Menu=styled.div`
  font-family: 'GmarketSansMedium', sans-serif;
  font-size: 14px;
  color: #878787;
  margin-right: 62px;

  @media screen and (max-width: 665px) {
    margin-right: 0px;
  }
`
const MenuLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`
const Language=styled.div`
  cursor: pointer;
  font-family: 'GmarketSansMedium', sans-serif;
  font-size: 14px;
  color: #878787;
`
const LanguageBold=styled.div`
  cursor: pointer;
  font-family: 'GmarketSansBold', sans-serif;
  font-size: 14px;
  color: #878787;
`
const LanguageBox=styled.div`
  display: flex;
  position: fixed;
  right: 292px;
  gap: 15px;

  @media screen and (max-width: 666px) {
    position: fixed;
    right: 72px;
  }
`
;


const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  }

  return (
    <>  
        <EmptyBox height={100} />
        <StyledHeader>
          <img src={logo_dindinguniv} alt={logo_dindinguniv} />
          <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
          <Nav isToggleOpen={isToggleOpen} onClick={handleToggleOpen}>
            <MenuList>
              <Menu>
                <MenuLink to="ai" smooth={true} duration={500}>AI Solution</MenuLink>
              </Menu>
              <Menu>
                <MenuLink to="contents" smooth={true} duration={500}>Contents Product</MenuLink>
              </Menu>
              <Menu>
                <MenuLink to="company" smooth={true} duration={500}>Company</MenuLink>
              </Menu>
            </MenuList>
          </Nav>
          {language === 'ko' ? (
            <LanguageBox>
              <LanguageBold>Kor</LanguageBold>
              <Language>|</Language>
              <Language onClick={toggleLanguage}>Eng</Language>
            </LanguageBox>
          ) : (
            <LanguageBox>
              <Language onClick={toggleLanguage}>Kor</Language>
              <Language>|</Language>
              <LanguageBold>Eng</LanguageBold>
            </LanguageBox>
          )}
        </StyledHeader>
    </>
  );
}

export default Header;

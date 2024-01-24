import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import {Link} from 'react-scroll';
import {FaBars} from 'react-icons/fa';
import EmptyBox from '../components/EmptyBox';
import logo_dindinguniv from '../assets/logo_dingdinguniv.svg'
import { LanguageContext } from '../contexts/Language';

const StyledButton = styled.button`
  padding: 10px 20px;
  font-family: 'GmarketSansMedium', sans-serif;
  font-size: 14px;
  color: #878787
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 10px;
  margin-left: auto;

  &:focus {
    outline: none;
  }
`
const StyledHeader = styled.header`
  display: flex;
  align-items: flex-start;
  position: relative;

  .menuToggleBtn{
    display: none;
  }

  @media screen and (max-width: 665px) {
    align-items: center;
    .menuToggleBtn {
      display: block;
      position: absolute;
      right: 40px;
    }
  }
`
const DingdingunivImage = styled.img`
  margin-left: 46px;

  @media screen and (min-width: 666px) {
    margin-left: 115px;
  }
`;
const Nav=styled.ul`
  @media screen and (max-width: 665px) {
    display: ${(props)=> (props.isToggleOpen ? "block" : "none")};
    width: 100%;
    position: fixed;
    top: 70px;
    right: 53.33px;
  }
`
const MenuList = styled.div`
  display: flex;
  gap: 62px;
  align-items: flex-end;
  justify-content: flex-end;
  

  @media screen and (max-width: 665px) {
    flex-direction: column;
    align-items: flex-end;
    margin-top: 70px;
    gap:30px;
  }
`
const Menu=styled.div`
  font-family: 'GmarketSansMedium', sans-serif;
  font-size: 14px;
  color: #878787;
`
const MenuLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
`;


const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const handleToggleOpen = () => {
    setIsToggleOpen(!isToggleOpen);
  }

  return (
    <>
        <StyledButton onClick={toggleLanguage}>언어 변경 (현재 언어:{language})</StyledButton>
        <StyledHeader>
          <DingdingunivImage src={logo_dindinguniv} alt={logo_dindinguniv} />
          <FaBars className="menuToggleBtn" onClick={handleToggleOpen} />
          <Nav isToggleOpen={isToggleOpen}>
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
        </StyledHeader>
    </>
  );
}

export default Header;

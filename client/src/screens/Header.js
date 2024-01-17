import React from 'react';
import EmptyBox from '../components/EmptyBox';
import logo_dindinguniv from '../assets/logo_dingdinguniv.svg'

const Header = () => {
  return (
    <header>
      <EmptyBox height={80} />
      <img src={logo_dindinguniv} alt={logo_dindinguniv} />
    </header>
  );
}

export default Header;

import React from 'react';
import {
  leftContainer,
  rightContainer,
  centerContainer,
  BackImage,
  TopBlock,
  TopText,
  HeaderContainer,
} from '../../styles/Header';

function Header() {
  return (
    <HeaderContainer>
      <leftContainer>
        <BackImage />
      </leftContainer>
      <centerContainer />
      <rightContainer />
    </HeaderContainer>
  );
}

export default Header;

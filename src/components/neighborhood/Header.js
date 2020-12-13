import React from 'react';
import { Link } from 'react-router-dom';
import * as Styled from '../common/neighbor/Header';

const Header = () => {
  return (
    <Styled.Wrapper>
      <Link to="/">
        <Styled.ArrowBackIcon />
      </Link>
      <Styled.SearchBarWrapper>
        <Styled.SearchIcon />
        <Styled.Input placeholder="동명(읍, 면)으로 검색 (ex. 서초동)" />
        <Styled.CloseIcon />
        <Styled.Underline />
      </Styled.SearchBarWrapper>
    </Styled.Wrapper>
  );
};

export default Header;

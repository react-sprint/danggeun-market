import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '../../images/ico/ico_back_home_arrow.png';
import { ReactComponent as SearchIcon } from '../../icon/search.svg';
import { ReactComponent as CloseIcon } from '../../icon/close.svg';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 92px;
  width: 100%;
`;

const StyledArrowBackIcon = styled.img`
  width: 19.33px;
  cursor: pointer;
`;

const StyledSearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  width: 315px;
  height: 37px;
  flex-flow: wrap;
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 17px;
  height: 17px;
  fill: #98979c;
`;

const StyledInput = styled.input`
  width: 254px;
  height: 19px;
  border: none;
  outline: none;
`;

const StyledCloseIcon = styled(CloseIcon)`
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

const StyledUnderline = styled.div`
  width: 334px;
  height: 2px;
  background-color: #ebebed;
`;

const Header = () => {
  return (
    <StyledWrapper>
      <Link to="/">
        <StyledArrowBackIcon src={ArrowBackIcon} />
      </Link>
      <StyledSearchBarWrapper>
        <StyledSearchIcon />
        <StyledInput placeholder="동명(읍, 면)으로 검색 (ex. 서초동)" />
        <StyledCloseIcon />
        <StyledUnderline />
      </StyledSearchBarWrapper>
    </StyledWrapper>
  );
};

export default Header;
export { StyledUnderline };

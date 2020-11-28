import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowBackIcon } from '../../icon/arrow-back.svg';
import { ReactComponent as SearchIcon } from '../../icon/search.svg';
import { ReactComponent as CloseIcon } from '../../icon/close.svg';

const StyledWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 92px;
  width: 100%;
`;

const StyledArrowBackIcon = styled(ArrowBackIcon)`
  width: 29px;
  height: 29px;
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
      <StyledArrowBackIcon />
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

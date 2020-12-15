import styled from 'styled-components';
import { ReactComponent as SearchSvg } from '../../../icon/search.svg';
import { ReactComponent as CloseSvg } from '../../../icon/close.svg';
import ArrowBackImg from '../../../images/ico/ico_back_home_arrow.png';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 92px;
  width: 100%;
`;

export const ArrowBackIcon = styled.img.attrs({
  src: ArrowBackImg,
})`
  width: 19.33px;
  cursor: pointer;
`;

export const SearchBarWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: space-between;
  width: 315px;
  height: 37px;
  flex-flow: wrap;
`;

export const SearchIcon = styled(SearchSvg)`
  width: 17px;
  height: 17px;
  fill: #98979c;
`;

export const Input = styled.input`
  width: 254px;
  height: 19px;
  border: none;
  outline: none;
`;

export const CloseIcon = styled(CloseSvg)`
  width: 17px;
  height: 17px;
  cursor: pointer;
`;

export const Underline = styled.div`
  width: 334px;
  height: 2px;
  background-color: #ebebed;
`;

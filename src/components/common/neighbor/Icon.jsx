import styled from 'styled-components'
import ArrowBackImg from '../../../images/ico/ico_back_home_arrow.png';
import { ReactComponent as SearchSvg } from '../../../icon/search.svg';
import { ReactComponent as CloseSvg } from '../../../icon/close.svg';

export const ArrowBack = styled.img.attrs({
    src: ArrowBackImg,
  })`
    width: 19.33px;
    cursor: pointer;
  `;

export const Search = styled(SearchSvg)`
width: 17px;
height: 17px;
fill: #98979c;
`;

export const Close = styled(CloseSvg)`
  width: 17px;
  height: 17px;
  cursor: pointer;
`;
import styled from 'styled-components';
import ArrowBackImg from '../../../images/ico/ico_back_home_arrow.png';
import { ReactComponent as SearchSvg } from '../../../icon/search.svg';
import { ReactComponent as CloseSvg } from '../../../icon/close.svg';
import CircleUncheck from '../../../images/ico/circle_uncheck.png';
import CircleCheck from '../../../images/ico/circle_check.png';

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

export const FilterOn = styled.img.attrs({
  src: CircleCheck,
})`
  width: 24px;
`;

export const FilterOff = styled.img.attrs({
  src: CircleUncheck,
})`
  width: 24px;
`;

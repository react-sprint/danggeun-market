import styled from 'styled-components';
import x from '../images/ico/ic_window_close_outline_18.png';

export const HeaderContainer = styled.div`
  padding: 24px 0;
`;

export const leftContainer = styled.div``;
export const centerContainer = styled.div``;

export const rightContainer = styled.div``;

export const BackImage = styled.div`
  display: flex;

  left: 23.21px;
  top: 38.21px;

  width: 14.58px;
  height: 14.58px;

  background-image: url(${x});
  background-size: cover;
`;

export const TopBlock = styled.div`
  display: flex;

  width: 412px;
  height: 0px;

  border: 1px solid #c9c9c9;
`;

export const TopText = styled.p`
  width: 94px;
  height: 17px;

  color: #000000;

  font-size: 18px;
  font-weight: 500;

  font-family: Roboto;
  font-style: normal;
  line-height: 21px;
  text-align: center;
`;

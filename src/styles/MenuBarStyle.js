import styled from 'styled-components';
import home from '../images/ico/ico_tab_home_n.png';
import write from '../images/ico/ico_write_btn.png';
import near from '../images/ico/ico_tab_near_by_n.png';
import mydanggeun from '../images/ico/ico_tab_mydanggeun_n.png';

export const NavBottomBlock = styled.div`
  position: fixed;
  left: 0px;
  bottom: 0px;

  width: 100%;
  height: 60px;

  border-top: 1px solid #ff8a3d;
  border-left: none;
  border-right: none;
  border-bottom: none;

  font-size: 10px;
  font-weight: 400;

  background-color: white;
`;

export const LayOutBlock = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  padding-top: 10px;
`;

export const NavHomeBlock = styled.div`
  width: 35px;
  height: 35px;

  background-image: url(${home});
  background-size: cover;
`;

export const NavWrtieBlock = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${write});
  background-size: cover;
`;

export const NavNearBlock = styled.div`
  width: 35px;
  height: 35px;

  background-image: url(${near});
  background-size: cover;
`;

export const NavMyCarrotBlock = styled.div`
  width: 35px;
  height: 35px;

  background-image: url(${mydanggeun});
  background-size: cover;
`;

import styled from 'styled-components';
import home from '../images/ico/ico_tab_home_n.png';
import write from '../images/ico/ico_write_btn.png';
import near from '../images/ico/ico_tab_near_by_n.png';
import mydanggeun from '../images/ico/ico_tab_mydanggeun_n.png';
import back from '../images/ico/ico_back_home_arrow.png';

export const BottomBlock = styled.div`
  display: flex;

  width: 100%;
  height: 40px;

  border: 1px solid #ff8a3d;

  font-size: 10px;
  font-weight: 400;

  text-align: center;
  justify-content: space-between;
`;

export const NavHomeBlock = styled.div`
  display: flex;
  justify-content: center;
  top: 3px;
  left: 38px;

  width: 40px;
  height: 40px;

  background-image: url(${home});
  background-size: cover;

  p {
    top: 28px;
  }
`;

export const NavWrtieBlock = styled.div`
  display: flex;
  justify-content: center;
  top: 7px;
  left: 120px;

  width: 30px;
  height: 30px;

  background-image: url(${write});
  background-size: cover;

  p {
    top: 25px;
  }
`;

export const NavNearBlock = styled.div`
  display: flex;
  justify-content: center;
  top: 6px;
  left: 194px;

  width: 30px;
  height: 30px;

  background-image: url(${near});
  background-size: cover;

  p {
    top: 25px;
  }
`;

export const NavMyDaangnBlock = styled.div`
  display: flex;
  justify-content: center;
  top: 5px;
  left: 267px;

  width: 40px;
  height: 30px;

  background-image: url(${mydanggeun});
  background-size: cover;

  p {
    top: 25px;
  }
`;

export const NavBackBlock = styled.div`
  display: flex;
  justify-content: center;
  top: 7px;
  left: 348px;

  width: 30px;
  height: 30px;

  background-image: url(${back});
  background-size: cover;

  p {
    top: 25px;
  }
`;

import styled from 'styled-components';
import home from '../images/ico/ico_tab_home_n.png';
import write from '../images/ico/ico_write_btn.png';
import near from '../images/ico/ico_tab_near_by_n.png';
import mydanggeun from '../images/ico/ico_tab_mydanggeun_n.png';

export const BottomBlock = styled.div`
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

export const NavHomeBlock = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  top: 3px;
  left: 60px;

  width: 40px;
  height: 40px;

  background-image: url(${home});
  background-size: cover;

  p {
    position: absolute;
    top: 28px;
  }
`;

export const NavWrtieBlock = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  top: 7px;
  left: 150px;

  width: 30px;
  height: 30px;

  background-image: url(${write});
  background-size: cover;

  p {
    position: absolute;
    top: 25px;
  }
`;

export const NavNearBlock = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  top: 6px;
  left: 230px;

  width: 30px;
  height: 30px;

  background-image: url(${near});
  background-size: cover;

  p {
    position: absolute;
    top: 25px;
  }
`;

export const NavMyDaangnBlock = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  top: 5px;
  left: 300px;

  width: 40px;
  height: 30px;

  background-image: url(${mydanggeun});
  background-size: cover;

  p {
    position: absolute;
    top: 25px;
  }
`;

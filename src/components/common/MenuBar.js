import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  NavHomeBlock,
  NavWrtieBlock,
  NavNearBlock,
  NavBackBlock,
  NavMyDaangnBlock,
  BottomBlock,
} from '../../styles/BottomNavStyle';

const MenuBar = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  return (
    <BottomBlock>
      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <NavHomeBlock>
          <p>홈</p>
        </NavHomeBlock>
      </Link>

      <Link to="/write" style={{ textDecoration: 'none', color: 'black' }}>
        <NavWrtieBlock>
          <p>글쓰기</p>
        </NavWrtieBlock>
      </Link>

      <Link to="/gps" style={{ textDecoration: 'none', color: 'black' }}>
        <NavNearBlock>
          <p>내 근처</p>
        </NavNearBlock>
      </Link>

      <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}>
        <NavMyDaangnBlock>
          <p>나의 당근</p>
        </NavMyDaangnBlock>
      </Link>

      <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
        <NavBackBlock onClick={goBack}>
          <p>튀어</p>
        </NavBackBlock>
      </Link>
    </BottomBlock>
  );
};

export default MenuBar;

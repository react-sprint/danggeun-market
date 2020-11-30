import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavHomeBlock,
  NavWrtieBlock,
  NavNearBlock,
  NavMyDaangnBlock,
  BottomBlock,
} from '../../styles/MenuBarStyle';

const MenuBar = () => {
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

      <Link to="/mydanggeun" style={{ textDecoration: 'none', color: 'black' }}>
        <NavMyDaangnBlock>
          <p>나의 당근</p>
        </NavMyDaangnBlock>
      </Link>
    </BottomBlock>
  );
};

export default MenuBar;

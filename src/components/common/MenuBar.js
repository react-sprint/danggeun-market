import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavHomeBlock,
  NavWrtieBlock,
  NavNearBlock,
  NavMyDaangnBlock,
  BottomBlock,
} from '../../styles/MenuBarStyle';
import { LinkStyle } from '../../styles/LinkStyle';

const MenuBar = () => (
  <BottomBlock>
    <LinkStyle>
      <Link to="/">
        <NavHomeBlock>
          <p>홈</p>
        </NavHomeBlock>
      </Link>

      <Link to="/write">
        <NavWrtieBlock />
      </Link>

      <Link to="/gps">
        <NavNearBlock />
      </Link>

      <Link to="/mydanggeun">
        <NavMyDaangnBlock />
      </Link>
    </LinkStyle>
  </BottomBlock>
);

export default MenuBar;

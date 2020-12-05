import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavHomeBlock,
  NavWrtieBlock,
  NavNearBlock,
  NavMyCarrotBlock,
  NavBottomBlock,
} from '../../styles/MenuBarStyle';
import { LinkStyle } from '../../styles/LinkStyle';

const MenuBar = () => {
  return (
    <NavBottomBlock>
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
          <NavMyCarrotBlock />
        </Link>
      </LinkStyle>
    </NavBottomBlock>
  );
};

export default MenuBar;

import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavHomeBlock,
  NavWrtieBlock,
  NavNearBlock,
  NavMyCarrotBlock,
  NavBottomBlock,
  LayOutBlock,
} from '../../styles/MenuBarStyle';

const MenuBar = () => {
  return (
    <NavBottomBlock>
      <LayOutBlock>
        <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
          <NavHomeBlock />
        </Link>

        <Link to="/write" style={{ textDecoration: 'none', color: 'black' }}>
          <NavWrtieBlock />
        </Link>

        <Link to="/gps" style={{ textDecoration: 'none', color: 'black' }}>
          <NavNearBlock />
        </Link>

        <Link
          to="/mydanggeun"
          style={{ textDecoration: 'none', color: 'black' }}
        >
          <NavMyCarrotBlock />
        </Link>
      </LayOutBlock>
    </NavBottomBlock>
  );
};

export default MenuBar;

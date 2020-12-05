import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavHomeBlock,
  NavWrtieBlock,
  NavNearBlock,
  NavMyCarrotBlock,
  NavBottomBlock,
  LayOutBlock,
  LinkStyle,
} from '../../styles/MenuBarStyle';

const MenuBar = () => {
  return (
    <LinkStyle>
      <NavBottomBlock>
        <LayOutBlock>
          <Link to="/">
            <NavHomeBlock>
              <p>홈</p>
            </NavHomeBlock>
          </Link>

          <Link to="/write">
            <NavWrtieBlock>
              <p>글쓰기</p>
            </NavWrtieBlock>
          </Link>

          <Link to="/gps">
            <NavNearBlock>
              <p>위치</p>
            </NavNearBlock>
          </Link>

          <Link to="/mydanggeun">
            <NavMyCarrotBlock>
              <p>나의당근</p>
            </NavMyCarrotBlock>
          </Link>
        </LayOutBlock>
      </NavBottomBlock>
    </LinkStyle>
  );
};

export default MenuBar;

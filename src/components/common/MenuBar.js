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
  DefaultBlock,
} from '../layout/MenuBarStyle';

const MenuBar = () => {
  return (
    <LinkStyle>
      <NavBottomBlock>
        <LayOutBlock>
          <Link to="/">
            <NavHomeBlock>
              <DefaultBlock>
                <p>홈</p>
              </DefaultBlock>
            </NavHomeBlock>
          </Link>

          <Link to="/write-new-stuff">
            <NavWrtieBlock>
              <DefaultBlock>
                <p>글쓰기</p>
              </DefaultBlock>
            </NavWrtieBlock>
          </Link>

          <Link to="/gps">
            <NavNearBlock>
              <DefaultBlock>
                <p>위치</p>
              </DefaultBlock>
            </NavNearBlock>
          </Link>

          <Link to="/mydanggeun">
            <NavMyCarrotBlock>
              <DefaultBlock>
                <p>나의당근</p>
              </DefaultBlock>
            </NavMyCarrotBlock>
          </Link>
        </LayOutBlock>
      </NavBottomBlock>
    </LinkStyle>
  );
};

export default MenuBar;

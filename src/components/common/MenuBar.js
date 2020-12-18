import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavList, NavBottomBlock, NavItem } from '../layout/MenuBarStyle';
import homeOff from '../../images/ico/ico_tab_home_n.png';
import homeOn from '../../images/ico/ico_tab_home_p.png';
import nearOff from '../../images/ico/ico_tab_near_by_n.png';
import nearOn from '../../images/ico/ico_tab_near_by_p.png';
import mydanggeunOff from '../../images/ico/ico_tab_mydanggeun_n.png';
import mydanggeunOn from '../../images/ico/ico_tab_mydanggeun_p.png';
import { Inner } from '../layout/Inner';

const MenuBar = () => {
  const location = useLocation();
  const { pathname } = location;
  return (
    <NavBottomBlock>
      <Inner>
        <NavList>
          <NavItem>
            <Link to="/">
              <img src={pathname === '/' ? homeOn : homeOff} alt="home" />
              <span>홈</span>
            </Link>
          </NavItem>

          <NavItem>
            <Link to="/gps">
              <img src={pathname === '/gps' ? nearOn : nearOff} alt="near" />
              <span>내 근처</span>
            </Link>
          </NavItem>

          <NavItem>
            <Link to="/mydanggeun">
              <img src={pathname === '/mydanggeun' ? mydanggeunOn : mydanggeunOff} alt="profile" />
              <span>나의 당근</span>
            </Link>
          </NavItem>
        </NavList>
      </Inner>
    </NavBottomBlock>
  );
};

export default MenuBar;

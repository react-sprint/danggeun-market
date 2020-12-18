import styled from 'styled-components';

export const NavBottomBlock = styled.nav`
  position: fixed;
  left: 0px;
  bottom: 0px;

  width: 100%;
  height: 60px;

  border-top: 1px solid #d7d7d7;
  border-left: none;
  border-right: none;
  border-bottom: none;

  font-size: 10px;
  font-weight: 400;

  background-color: white;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 8px 0;
`;

export const NavItem = styled.li`
  width: 25%;
  a {
    display: block;
    text-align: center;
  }
  img {
    width: 30px;
  }
  span {
    display: block;
    color: #666;
  }
`;

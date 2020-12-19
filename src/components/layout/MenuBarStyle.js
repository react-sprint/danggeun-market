import styled from 'styled-components';

export const NavBottomBlock = styled.nav`
  position: fixed;
  left: 0px;
  bottom: 0px;

  width: 100%;
  height: 60px;

  border-top: 1px solid #ff8a3d;

  font-size: 10px;
  font-weight: 400;

  background-color: white;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;

  margin-top: 8px;
`;

export const DefaultBlock = styled.div`
  width: 36.8px;
  height: 35px;

  p {
    display: flex;
    justify-content: space-around;
  }
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

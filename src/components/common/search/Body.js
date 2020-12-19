import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 91%;
  height: 100%;
`;

export const TextBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 12.17%;
`;

export const TextBold = styled.p`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`;

export const TextLight = styled.p`
  font-size: 13px;
  color: #868e96;
  padding-top: 8%;
`;

export const CategoryBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 35%;
`;

export const LinkBox = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  width: 25%;
`;

export const LinkWrapper = styled.div`
  height: 100%;
`;

export const CategoryIcon = styled.button`
  width: 52px;
  height: 52px;
  border-radius: 26px;
  background: #f8f9fb url(${(props) => props.category}) center center/55% no-repeat;
`;

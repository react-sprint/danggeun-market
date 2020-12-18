import styled from 'styled-components';
import { Underline } from './Header';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 379px;
  height: 40px;
  border-radius: 4px;
  outline: none;
  color: white;
  background-color: #ff8a3d;
`;

export const Span = styled.span`
  display: flex;
  align-items: center;
  height: 65px;
  font-size: 13px;
  font-weight: bold;
`;

export const Border = styled(Underline)`
  width: 379px;
`;

export const NeighborList = styled.div`
  display: flex;
  align-items: center;
  height: 47px;
`;

export const SpanButton = styled.button`
  font-size: 18px;
`;

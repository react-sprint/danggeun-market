import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #ebebed;
`;

export const SearchBarBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-content: center;
  background-color: #f2f2f4;
  border-radius: 10px;
  width: 80%;
  height: 45%;
  flex-flow: wrap;
`;

export const SearchBarInner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
`;

export const Input = styled.input`
  width: 85%;
  height: 100%;
  border: none;
  outline: none;
  background-color: #f2f2f4;
`;

export const Dummy = styled.div`
  width: 19.33px;
  height: 17.17px;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 91%;
  height: 100%;
`;

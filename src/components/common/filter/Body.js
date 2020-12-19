import styled from 'styled-components';

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
  width: 85.5%;
  height: 100%;
`;

export const CheckList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 23.3%;
`;

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 76.27%;
  height: 25.86%;
`;

export const TextBold = styled.p`
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`;

export const TextLight = styled.p`
  font-size: 15px;
  color: #868e96;
  padding-bottom: 8%;
`;

export const Text = styled.span`
  margin: 0px 0px 0px 10px;
`;

export const Dummy = styled.div`
  width: 19.33px;
  height: 17.17px;
`;

export const CheckWrapper = styled.div`
  display: flex;
  width: 50%;
  font-size: 16px;
`;

export const CheckButton = styled.button`
  display: flex;
  align-items: center;
`;

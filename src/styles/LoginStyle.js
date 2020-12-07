import styled from 'styled-components';

export const BackImage = styled.div`
  display: flex;

  width: 14.58px;
  height: 14.58px;

  background-image: url(${x});
  background-size: cover;
`;

export const TopBlock = styled.div`
  display: flex;

  width: 412px;
  height: 0px;

  border: 1px solid #c9c9c9;
`;

export const TopText = styled.p`
  width: 94px;
  height: 17px;

  color: #000000;

  font-size: 18px;
  font-weight: 500;

  font-family: Roboto;
  font-style: normal;
  line-height: 21px;
  text-align: center;
`;

export const IdContainer = styled.div`
  padding-top: 27px;
`;

export const IdText = styled.p`
  height: 17px;
  margin-bottom: 11px;
  font-size: 18px;
  font-weight: 400;

  line-height: 17px;

  color: #8e8e8e;
`;

export const IdBlock = styled.input`
  height: 53px;
  width: 100%;
  margin-bottom: 11px;
  border: 1.5px solid #d6d5da;
  box-sizing: border-box;
  border-radius: 6px;

  font-size: 20px;

  background: #ffffff;
`;

export const PasswordText = styled.p`
  height: 17px;
  margin-bottom: 11px;
  font-weight: 400;
  font-size: 18px;

  color: #ffffff;
  cursor: pointer;
`;

export const PasswordBlock = styled.input`
  height: 53px;
  width: 100%;
  margin-bottom: 11px;
  border: 1.5px solid #d6d5da;
  box-sizing: border-box;
  border-radius: 6px;

  font-size: 20px;

  background: #ffffff;
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 53px;

  border: none;
  border-radius: 6px;

  background: #ff8a3d;

  line-height: 21px;
`;

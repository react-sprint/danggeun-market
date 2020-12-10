import styled from 'styled-components';

export const PasswordConfirmText = styled.p`
  display: flex;
  margin-top: 50px;

  font-weight: 400;
  font-size: 16px;

  color: #8e8e8e;

  div {
    margin-left: 6%;
    color: black;
  }
`;

export const PasswordConfirmBlock = styled.input`
  width: 100%;
  height: 53px;

  border: 1.5px solid #d6d5da;
  box-sizing: border-box;
  border-radius: 6px;

  font-size: 18px;
  cursor: pointer;

  background: #ffffff;
`;

export const RegisterButton = styled.button`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 53px;

  margin-top: 50px;

  border: none;
  border-radius: 6px;

  color: white;
  font-size: 17px;

  font-weight: 400;
  font-size: 18px;

  line-height: 53px;

  cursor: pointer;

  background: #495058;
`;

import styled from 'styled-components';
import x from '../../images/ico/ico_window_close_outline_18.png';
import { SortBlock } from '../common/SortBlock';

export const TopBlock = styled.div`
  display: flex;

  p {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    margin-top: 15px;
    margin-right: 30px;

    color: #000000;
    font-size: 18px;
    font-weight: 500;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

export const BackImage = styled.div`
  width: 14.58px;
  height: 14.58px;

  margin-top: 20px;
  margin-left: 40px;

  background-image: url(${x});
  background-size: cover;
`;

export const EmailandPasswordText = styled.p`
  margin-top: 50px;
  margin-left: 10%;

  font-size: 16px;
  font-weight: 400;

  line-height: 17px;

  color: #8e8e8e;

  & span {
    display: block;
    padding: 5px 0;
    font-size: 0.775rem;
    color: #ff8a3d;
  }
`;

export const EmailandPasswordBlock = styled.input`
  width: 80%;
  height: 53px;

  margin-top: 10px;

  border: 1.5px solid #d6d5da;
  box-sizing: border-box;
  border-radius: 6px;

  font-size: 18px;
  cursor: pointer;

  background: #ffffff;
`;

export const LoginButton = styled.button`
  width: 80%;
  height: 53px;

  margin-top: 120px;

  border: none;
  border-radius: 6px;

  background: #ff8a3d;

  font-weight: 400;
  font-size: 18px;

  color: #ffffff;
  cursor: pointer;
`;

export const RegisterButton = styled.button`
  display: block;
  width: 100%;
  height: 53px;

  margin: 0 auto;

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

export const SignUpBtn = styled(SortBlock)`
  width: 80%;
  margin: 0 auto;
  padding-top: 40px;
`;

export const StyledForm = styled.form`
  padding-bottom: 100px;
`;
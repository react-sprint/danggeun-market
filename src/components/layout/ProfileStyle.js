import styled from 'styled-components';
import danggeun from '../../images/ico/ico_logo_48x48.png';
import profile from '../../images/ico/ico_profile_placeholder.png';
import back from '../../images/ico/ico_back_home_arrow.png';
import menu from '../../images/ico/ico_more.png';

export const BackArrow = styled.div`
  width: 17px;
  height: 17px;

  margin-left: 40px;

  cursor: pointer;

  background-image: url(${back});
  background-size: cover;
`;

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 30px;
`;

export const Profile = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

export const MenuBlock = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;

  cursor: pointer;

  background-image: url(${menu});
  background-size: cover;
`;

export const ProfileImage = styled.div`
  width: 69px;
  height: 69px;
  margin-left: 40px;

  cursor: pointer;

  background-image: url(${profile});
  background-size: cover;
`;

export const ProfileName = styled.p`
  display: flex;
  margin-left: 40px;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
`;

export const MannerBlock = styled.p`
  display: flex;

  padding-right: 30px;

  text-decoration: underline;
  font-size: 12px;

  cursor: pointer;
`;

// 수정 필요
// ProfilePage 48Line ~ 53Line
export const Temperature = styled.div`
  display: flex;
  justify-content: center;

  width: 100%;
  height: 50px;

  p {
    margin-right: 5px;
    font-size: 12px;
  }
`;

export const GrayHr = styled.hr`
  width: 50%;
  height: 10px;
  margin-top: 2px;

  border-radius: 20px;
  border: none;

  background: #f0f0f0;
`;

export const Response = styled.p`
  width: 100px;
  height: 10px;
  margin-left: 25px;
  font-size: 12px;
  font-weight: 400;
`;

export const Heart = styled.div`
  width: 25px;
  height: 25px;

  background-image: url(${danggeun});
  background-size: cover;
`;
export const ChatBlock = styled.div`
  width: 25px;
  height: 25px;

  margin-left: 100px;

  background-image: url(${danggeun});
  background-size: cover;
`;

export const TextMargintop = styled.p`
  margin-top: 20px;
  font-size: 11px;
  font-weight: 300;
`;

export const ListLine = styled.div`
  display: flex;
  height: 80px;

  background: #f0f0f0;
  p {
    display: flex;
    align-items: center;
    margin-left: 40px;
    font-size: 11px;
    font-weight: 400;
  }
`;

export const ListBlock = styled.div`
  display: flex;

  height: 50px;

  margin-top: 30px;
  margin-left: 40px;

  cursor: pointer;

  p {
    font-size: 14px;
  }
`;

export const EmptyBlock = styled.div`
  width: 100%;
  height: 60px;
`;

export const Line = styled.div`
  border-bottom: 1px solid #f0f0f0;
`;

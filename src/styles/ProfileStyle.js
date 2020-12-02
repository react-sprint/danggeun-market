import styled from 'styled-components';
import danggeun from '../images/ico/ico_logo_48x48.png';
import profile from '../images/ico/ico_profile_placeholder.png';
import back from '../images/ico/ico_back_home_arrow.png';
import arrow from '../images/ico/ico_profile_arrow.png';
import share from '../images/ico/ico_mydaangn_share_outline_24.png';
import menu from '../images/ico/ico_more.png';

export const BackArrow = styled.div`
  display: flex;
  position: absolute;
  top: 26px;
  left: 22px;

  width: 17px;
  height: 17px;

  cursor: pointer;

  background-image: url(${back});
  background-size: cover;
`;

export const Profile = styled.p`
  position: absolute;
  top: 7px;
  left: 60px;

  font-weight: 500;
  font-size: 18px;
`;

export const ShareBlock = styled.div`
  position: absolute;
  top: 23px;
  right: 60px;

  width: 25px;
  height: 25px;

  cursor: pointer;

  background-image: url(${share});
  background-size: cover;
`;

export const MenuBlock = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  background-image: url(${menu});
  background-size: cover;
`;

export const TopBlock = styled.div`
  width: 100%;

  margin-top: 65px;

  border: 1px solid #f0f0f0;
`;

export const ProfileImage = styled.div`
  display: flex;

  position: absolute;
  top: 91px;
  left: 17px;

  width: 69px;
  height: 69px;

  cursor: pointer;

  background-image: url(${profile});
  background-size: cover;
`;

export const ProfileName = styled.p`
  display: flex;

  position: absolute;
  top: 100px;
  left: 110px;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;
`;

export const MannerBlock = styled.p`
  display: flex;

  position: absolute;
  top: 160px;
  left: 20px;

  font-size: 15px;
  text-decoration: underline;

  cursor: pointer;
`;

export const MannerImage = styled.div`
  display: flex;

  position: absolute;
  top: 172px;
  left: 73px;

  width: 25px;
  height: 25px;

  background-image: url(${danggeun});
  background-size: cover;
`;

export const Temperature = styled.div`
  display: flex;
  justify-content: center;

  position: absolute;
  top: 220px;
  left: 0px;

  width: 100%;
  height: 70px;

  p {
    position: absolute;
    top: -30px;
    left: 120px;

    width: 100px;
    height: 10px;

    font-size: 12px;
  }

  hr {
    position: absolute;
    top: 0px;
    width: 380px;
    height: 10px;

    border-radius: 20px;
    border: none;

    background: #f0f0f0;
  }
`;

export const BlueHr = styled.hr`
  position: absolute;
  top: 220px;
  left: 17px;

  width: 150px;
  height: 10px;

  border-radius: 20px;
  border: none;

  background: #1565c0;
`;

export const Heart = styled.div`
  position: absolute;

  top: 260px;
  left: 17px;

  width: 25px;
  height: 25px;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    position: absolute;
    top: -5px;
    left: 25px;

    width: 100px;
    height: 10px;

    font-size: 12px;
    font-weight: 400;
  }
`;

export const HeartText = styled.p`
  position: absolute;
  top: 275px;
  left: 42px;

  width: 200px;

  font-size: 11px;
  font-weight: 300;
`;

export const ChatBlock = styled.div`
  position: absolute;
  top: 260px;
  left: 220px;
  width: 25px;
  height: 25px;

  background-image: url(${danggeun});
  background-size: cover;
  p {
    position: absolute;
    top: -5px;
    left: 25px;

    width: 60px;
    height: 10px;

    font-size: 12px;
    font-weight: 400;
  }
`;

export const ChatText = styled.p`
  position: absolute;
  top: 275px;
  left: 245px;

  width: 130px;

  font-size: 11px;
  font-weight: 300;
`;

export const TemperatureImage = styled.div`
  position: absolute;
  top: 185px;
  left: 365px;

  width: 40px;
  height: 40px;

  background-image: url(${danggeun});
  background-size: cover;
  p {
    position: absolute;
    top: -1px;
    right: 30px;

    width: 50px;

    font-size: 16px;
  }
`;

export const ListLine = styled.div`
  display: flex;

  position: absolute;
  top: 320px;
  left: 0px;

  width: 100%;
  height: 80px;

  background: #f0f0f0;

  p {
    position: absolute;
    top: 10px;
    left: 20px;

    font-size: 11px;
    font-weight: 400;
  }
`;

export const BadgeBlock = styled.div`
  display: flex;

  position: absolute;
  top: 400px;
  left: 0px;

  width: 100%;
  height: 70px;

  border-bottom: 1px solid #f0f0f0;
  border-top: none;
  border-left: none;
  border-right: none;

  cursor: pointer;

  p {
    position: absolute;
    top: 13px;
    left: 20px;

    font-size: 14px;
  }
`;

export const BadgeArrow = styled.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 30px;

  width: 9px;
  height: 17px;

  background-image: url(${arrow});
  background-size: cover;
`;

export const SaleBlock = styled.div`
  display: flex;

  position: absolute;
  top: 470px;
  left: 0px;

  width: 100%;
  height: 70px;

  border-bottom: 1px solid #f0f0f0;
  border-top: none;
  border-left: none;
  border-right: none;

  cursor: pointer;

  p {
    position: absolute;
    top: 13px;
    left: 20px;

    font-size: 14px;
  }
`;

export const SaleArrow = styled.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 30px;

  width: 9px;
  height: 17px;

  background-image: url(${arrow});
  background-size: cover;
`;

export const TownBlock = styled.div`
  display: flex;

  position: absolute;
  top: 540px;
  left: 0px;

  width: 100%;
  height: 70px;

  border-bottom: 1px solid #f0f0f0;
  border-top: none;
  border-left: none;
  border-right: none;

  cursor: pointer;

  p {
    position: absolute;
    top: 13px;
    left: 20px;

    font-size: 14px;
  }
`;

export const TownArrow = styled.div`
  display: flex;
  position: absolute;
  top: 26px;
  right: 30px;

  width: 9px;
  height: 17px;

  background-image: url(${arrow});
  background-size: cover;
`;

export const Manner = styled.div`
  display: flex;
  position: absolute;
  top: 610px;
  left: 0px;

  width: 100%;
  height: 100px;

  border-bottom: 1px solid #f0f0f0;
  border-top: none;
  border-left: none;
  border-right: none;

  cursor: pointer;

  p {
    position: absolute;
    top: 10px;
    left: 20px;

    font-size: 14px;
  }
`;

export const MannerText = styled.p`
  position: absolute;
  top: 660px;
  left: 20px;

  font-size: 13px;
  font-weight: 300;
`;

export const MannerArrow = styled.div`
  position: absolute;
  top: 25px;
  left: 375px;

  width: 9px;
  height: 17px;

  background-image: url(${arrow});
  background-size: cover;
`;

export const ReviewBlock = styled.div`
  display: flex;
  position: absolute;
  top: 710px;
  left: 0px;

  width: 100%;
  height: 100px;

  padding-bottom: 60px;

  border-bottom: 1px solid #f0f0f0;
  border-top: none;
  border-left: none;
  border-right: none;

  cursor: pointer;

  p {
    position: absolute;
    top: 10px;
    left: 20px;

    font-size: 14px;
  }
`;

export const ReviewArrow = styled.div`
  position: absolute;
  top: 25px;
  right: 30px;

  width: 9px;
  height: 17px;

  background-image: url(${arrow});
  background-size: cover;
`;
export const ReviewText = styled.p`
  display: flex;

  position: absolute;
  top: 760px;
  left: 20px;

  width: 120px;
  height: 10px;

  font-size: 13px;
  font-weight: 300;
`;

import styled from 'styled-components';
import danggeun from '../images/ico/ico_logo_48x48.png';
import profile from '../images/ico/ico_profile_placeholder.png';
import camera from '../images/ico/ico_profile_camera.png';
import sale from '../images/ico/ico_sales.png';
import purchase from '../images/ico/ico_purchase.png';
import watch from '../images/ico/ico_watch.png';

export const MyDanggeunBlock = styled.p`
  display: flex;

  position: absolute;
  top: 7px;
  left: 18px;

  font-weight: 500;
  font-size: 18px;
`;

export const TopImageBlock = styled.div`
  display: flex;

  position: absolute;
  top: 20px;
  left: 357px;
  right: 15px;

  width: 32px;
  height: 32px;

  background-image: url(${danggeun});
  background-size: cover;
`;

export const ProfileBlock = styled.div`
  display: flex;

  position: absolute;
  top: 91px;
  left: 17px;

  width: 69px;
  height: 69px;

  background-image: url(${profile});
  background-size: cover;

  cursor: pointer;
`;

export const CameraBlock = styled.div`
  position: absolute;
  top: 135px;
  left: 60px;

  width: 26px;
  height: 26px;

  background-image: url(${camera});
  background-size: cover;
`;

export const ProfileName = styled.p`
  display: flex;

  position: absolute;
  top: 85px;
  left: 100px;

  font-size: 16px;
  font-weight: 600;
`;

export const ProfileAddress = styled.p`
  display: flex;

  position: absolute;
  top: 120px;
  left: 100px;

  font-size: 12px;

  color: #c9c9c9;
`;

export const ProfileUrl = styled.button`
  display: flex;
  justify-content: center;

  position: absolute;
  top: 110px;
  right: 30px;

  width: 92px;
  height: 36px;

  border: 2px solid #f0f0f0;
  border-radius: 5px;

  text-align: center;
  line-height: 33px;

  font-size: 14px;
  font-weight: 500;

  background-color: #ffffff;
`;

export const ProfileLine = styled.div`
  display: flex;

  position: absolute;
  top: 190px;
  left: 0px;

  width: 412px;
  height: 0px;

  border: 1px solid #f0f0f0;
`;

export const SaleBlock = styled.div`
  display: flex;

  position: absolute;
  top: 210px;
  left: 45px;

  width: 61px;
  height: 61px;

  cursor: pointer;

  background-image: url(${sale});
  background-size: cover;
`;

export const PurchaseBlock = styled.div`
  display: flex;

  position: absolute;
  top: 210px;
  left: 175px;

  width: 61px;
  height: 61px;

  cursor: pointer;

  background-image: url(${purchase});
  background-size: cover;
`;

export const WatchBlock = styled.div`
  display: flex;

  position: absolute;
  top: 210px;
  left: 305px;

  width: 61px;
  height: 61px;

  cursor: pointer;

  background-image: url(${watch});
  background-size: cover;
`;

export const SaleText = styled.p`
  display: flex;
  position: absolute;

  top: 265px;
  left: 50px;

  width: 61px;
  height: 10px;

  font-size: 14px;
  font-weight: 300;
  text-align: center;
`;

export const PurchaseText = styled.p`
  display: flex;
  position: absolute;

  top: 265px;
  left: 180px;

  width: 61px;
  height: 10px;

  font-size: 14px;
  font-weight: 300;
  text-align: center;
`;

export const WatchText = styled.p`
  display: flex;
  position: absolute;

  top: 265px;
  left: 310px;

  width: 61px;
  height: 10px;

  font-size: 14px;
  font-weight: 300;
  text-align: center;
`;

export const ListLine = styled.div`
  display: flex;

  position: absolute;
  top: 320px;
  left: 0px;

  width: 413px;
  height: 9px;

  border: none;
  background: #f0f0f0;
`;

export const MyAddressBlock = styled.div`
  display: flex;

  position: absolute;
  top: 350px;
  left: 30px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    position: absolute;
    top: -10px;
    left: 40px;

    width: 300px;

    font-size: 14px;
    font-weight: 300;
  }
`;
export const AddressAuthBlock = styled.div`
  display: flex;

  position: absolute;
  top: 410px;
  left: 30px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    position: absolute;
    top: -10px;
    left: 40px;

    width: 300px;

    font-size: 14px;
    font-weight: 300;
  }
`;
export const KeywordBlock = styled.div`
  display: flex;

  position: absolute;
  top: 470px;
  left: 30px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    position: absolute;
    top: -10px;
    left: 40px;

    width: 300px;

    font-size: 14px;
    font-weight: 300;
  }
`;
export const CollectBlock = styled.div`
  display: flex;

  position: absolute;
  top: 530px;
  left: 30px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    position: absolute;
    top: -10px;
    left: 40px;

    width: 300px;

    font-size: 14px;
    font-weight: 300;
  }
`;

export const ListLineTwo = styled.div`
  display: flex;

  position: absolute;
  top: 580px;
  left: 0px;

  width: 413px;
  height: 9px;

  border: none;
  background: #f0f0f0;
`;

export const TownWrite = styled.div`
  display: flex;

  position: absolute;
  top: 610px;
  left: 30px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    position: absolute;
    top: -10px;
    left: 40px;

    width: 300px;

    font-size: 14px;
    font-weight: 300;
  }
`;

export const TownComment = styled.div`
  display: flex;

  position: absolute;
  top: 670px;
  left: 30px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    position: absolute;
    top: -10px;
    left: 40px;

    width: 300px;

    font-size: 14px;
    font-weight: 300;
  }
`;

export const TownTheme = styled.div`
  display: flex;

  position: absolute;
  top: 730px;
  left: 30px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    position: absolute;
    top: -10px;
    left: 40px;

    width: 300px;

    font-size: 14px;
    font-weight: 300;
  }
`;

export const ListLineThree = styled.div`
  display: flex;

  position: absolute;
  top: 780px;
  left: 0px;

  width: 413px;
  height: 9px;

  border: none;
  background: #f0f0f0;
`;

export const CeoMenu = styled.div`
  display: flex;

  position: absolute;
  top: 810px;
  left: 30px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    position: absolute;
    top: -10px;
    left: 40px;

    width: 300px;

    font-size: 14px;
    font-weight: 300;
  }
`;

export const ListLineFour = styled.div`
  display: flex;

  position: absolute;
  top: 860px;
  left: 0px;

  width: 413px;
  height: 9px;

  cursor: pointer;

  border: none;
  background: #f0f0f0;
`;

export const FriendBlock = styled.div`
  display: flex;

  position: absolute;
  top: 890px;
  left: 30px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    position: absolute;
    top: -10px;
    left: 40px;

    width: 300px;

    font-size: 14px;
    font-weight: 300;
  }
`;

export const DanggeunShare = styled.div`
  display: flex;

  position: absolute;
  top: 950px;
  left: 30px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    position: absolute;
    top: -10px;
    left: 40px;

    width: 300px;

    font-size: 14px;
    font-weight: 300;
  }
`;
export const NoticeBlock = styled.div`
  display: flex;

  position: absolute;
  top: 1010px;
  left: 30px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    position: absolute;
    top: -10px;
    left: 40px;

    width: 300px;

    font-size: 14px;
    font-weight: 300;
  }
`;

export const QnABlock = styled.div`
  display: flex;

  position: absolute;
  top: 1070px;
  left: 30px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    position: absolute;
    top: -10px;
    left: 40px;

    width: 300px;

    font-size: 14px;
    font-weight: 300;
  }
`;
export const AppSet = styled.div`
  display: flex;

  position: absolute;
  top: 1130px;
  left: 30px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    position: absolute;
    top: -10px;
    left: 40px;

    width: 300px;
    padding-bottom: 80px;

    font-size: 14px;
    font-weight: 300;
  }
`;

export const LogoutLine = styled.div`
  display: flex;

  position: absolute;
  top: 1180px;
  left: 0px;

  width: 413px;
  height: 9px;

  cursor: pointer;

  border: none;
  background: #f0f0f0;
`;

export const LogOutButton = styled.div`
  display: flex;

  position: absolute;
  top: 1200px;
  left: 30px;

  width: 30px;
  height: 30px;

  cursor: pointer;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    position: absolute;
    top: -7px;
    left: 40px;

    width: 300px;
    padding-bottom: 80px;

    font-size: 14px;
    font-weight: 300;
  }
`;

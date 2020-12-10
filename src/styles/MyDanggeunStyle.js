import styled from 'styled-components';
import danggeun from '../images/ico/ico_logo_48x48.png';
import profile from '../images/ico/ico_profile_placeholder.png';
import sale from '../images/ico/ico_sales.png';
import purchase from '../images/ico/ico_purchase.png';
import watch from '../images/ico/ico_watch.png';

export const MyDanggeunBlock = styled.p`
  font-weight: 500;
  font-size: 18px;
`;

export const TopImageBlock = styled.div`
  display: flex;
`;

export const ProfileImage = styled.div`
  width: 69px;
  height: 69px;

  background-image: url(${profile});
  background-size: cover;

  cursor: pointer;
`;

export const ProfileName = styled.p`
  margin-left: 15px;
  font-size: 16px;
  font-weight: 600;

  span {
    margin-top: 3px;
    margin-left: 20px;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const ProfileUrl = styled.button`
  width: 92px;
  height: 36px;

  margin-left: 70%;

  border: 2px solid #f0f0f0;
  border-radius: 5px;

  text-align: center;
  line-height: 33px;

  font-size: 14px;
  font-weight: 500;

  background-color: #ffffff;
`;

export const ProfileLine = styled.div`
  border: 1px solid #f0f0f0;
`;

export const Block = styled.div`
  display: flex;
  justify-content: space-around;

  margin-top: 20px;
`;

export const TextBlock = styled.div`
  display: flex;
  justify-content: space-around;

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const SaleBlock = styled.div`
  display: flex;

  width: 61px;
  height: 61px;

  cursor: pointer;

  background-image: url(${sale});
  background-size: cover;
`;

export const PurchaseBlock = styled.div`
  display: flex;

  width: 61px;
  height: 61px;

  cursor: pointer;

  background-image: url(${purchase});
  background-size: cover;
`;

export const WatchBlock = styled.div`
  display: flex;

  width: 61px;
  height: 61px;

  cursor: pointer;

  background-image: url(${watch});
  background-size: cover;
`;

export const ListLine = styled.div`
  display: flex;

  height: 9px;

  border: none;
  background: #f0f0f0;
`;

export const ListBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 30px;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const MyAddressBlock = styled.div`
  display: flex;

  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const AddressAuthBlock = styled.div`
  display: flex;

  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const KeywordBlock = styled.div`
  display: flex;

  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const CollectBlock = styled.div`
  display: flex;

  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const ListLineTwo = styled.div`
  display: flex;

  height: 9px;

  border: none;
  background: #f0f0f0;
`;

export const TownWrite = styled.div`
  display: flex;

  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const TownComment = styled.div`
  display: flex;

  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const TownTheme = styled.div`
  display: flex;

  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const ListLineThree = styled.div`
  display: flex;

  height: 9px;

  border: none;
  background: #f0f0f0;
`;

export const CeoMenu = styled.div`
  display: flex;

  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const ListLineFour = styled.div`
  display: flex;

  height: 9px;

  border: none;
  background: #f0f0f0;
`;

export const FriendBlock = styled.div`
  display: flex;

  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const DanggeunShare = styled.div`
  display: flex;

  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;
export const NoticeBlock = styled.div`
  display: flex;

  cursor: pointer;

  background-image: url(${danggeun});
  background-size: cover;

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const QnABlock = styled.div`
  display: flex;

  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;
export const AppSet = styled.div`
  display: flex;

  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const LogoutLine = styled.div`
  display: flex;

  height: 9px;

  cursor: pointer;

  border: none;
  background: #f0f0f0;
`;

export const LogOut = styled.div`
  display: flex;

  border: none;
  background: white;

  cursor: pointer;

  p {
    font-size: 14px;
    font-weight: 300;
  }
`;

export const EmptyBlock = styled.div`
  display: flex;
  height: 60px;
`;

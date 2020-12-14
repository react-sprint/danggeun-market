import styled from 'styled-components';
import profile from '../../images/ico/ico_profile_placeholder.png';
import sale from '../../images/ico/ico_sales.png';
import purchase from '../../images/ico/ico_purchase.png';
import watch from '../../images/ico/ico_watch.png';

export const TopDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const MyDanggeunBlock = styled.p`
  margin-top: 30px;
  margin-left: 10px;

  font-weight: 500;
  font-size: 18px;
`;

export const ProfileImage = styled.div`
  width: 69px;
  height: 69px;

  margin-top: 60px;
  margin-left: 40px;

  background-image: url(${profile});
  background-size: cover;

  cursor: pointer;
`;

export const ProfileName = styled.p`
  margin-left: 40px;
  font-size: 16px;
  font-weight: 600;

  div {
    margin-top: 3px;
    font-size: 12px;
    font-weight: 400;
  }
`;

export const ProfileUrl = styled.button`
  width: 100px;
  height: 35px;

  margin-top: 40px;

  border: 2px solid #f0f0f0;
  border-radius: 5px;

  text-align: center;

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
`;

export const DefaultBlock = styled.div`
  display: flex;

  width: 61px;
  height: 61px;

  cursor: pointer;
`;

export const SaleBlock = styled.div`
  width: 61px;
  background-image: url(${sale});
  background-size: cover;
`;

export const PurchaseBlock = styled.div`
  width: 61px;
  background-image: url(${purchase});
  background-size: cover;
`;

export const WatchBlock = styled.div`
  width: 61px;
  background-image: url(${watch});
  background-size: cover;
`;

export const ListBlock = styled.div`
  display: flex;
  flex-direction: column;

  margin-top: 10px;
  margin-left: 40px;

  a {
    text-decoration: none;
    color: black;
  }
`;

export const Ptag = styled.p`
  font-size: 14px;
  font-weight: 300;
`;

export const TownBlock = styled.div`
  display: flex;

  margin-top: 20px;
  margin-bottom: 30px;
  cursor: pointer;
`;

export const Line = styled.div`
  display: flex;

  height: 9px;

  border: none;
  background: #f0f0f0;
`;

export const LogOut = styled.div`
  display: flex;

  margin-top: 20px;

  border: none;
  background: white;

  cursor: pointer;
`;

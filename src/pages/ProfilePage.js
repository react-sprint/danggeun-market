// 나의당근 -> 프로필 화면

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuBar from '../components/common/MenuBar';
import {
  TopBlock,
  ProfileImage,
  BackArrow,
  Profile,
  ShareBlock,
  MenuBlock,
  ProfileName,
  MannerBlock,
  MannerImage,
  ListLine,
  BadgeBlock,
  BadgeArrow,
  SaleBlock,
  SaleArrow,
  TownBlock,
  TownArrow,
  Manner,
  MannerArrow,
  MannerText,
  Temperature,
  TemperatureImage,
  BlueHr,
  Heart,
  ReviewBlock,
  ReviewArrow,
  ReviewText,
  HeartText,
  ChatBlock,
  ChatText,
} from '../styles/ProfileStyle';

const ProfilePage = () => {
  const { name } = useSelector(({ profilename }) => ({
    name: profilename.name,
  }));

  return (
    <>
      <Link to="/mydanggeun">
        <BackArrow />
      </Link>
      <TopBlock />
      <Profile>프로필</Profile>
      <ShareBlock />
      <Link to="/profileedit">
        <MenuBlock />
      </Link>

      <ProfileImage />
      <ProfileName>{name}</ProfileName>
      <MannerBlock>매너온도</MannerBlock>
      <MannerImage />

      <Temperature>
        <p>첫 온도 36.5 C</p>
        <hr />
      </Temperature>
      <BlueHr />
      <TemperatureImage>
        <p>36.5 C</p>
      </TemperatureImage>
      <Heart>
        <p>재거래희망률 -%</p>
      </Heart>
      <HeartText>표시될 만큼 충분히 대화하지 않았어요</HeartText>

      <ChatBlock>
        <p>응답률 33%</p>
      </ChatBlock>
      <ChatText>보통 1시간 내에 응답</ChatText>

      <ListLine>
        <p>
          안양6동 9회 인증
          <br />
          <br />
          2020년 11월30일 가입 (최근 3일 이내 활동)
        </p>
      </ListLine>

      <BadgeBlock>
        <p>활동 배지2개</p>
        <BadgeArrow />
      </BadgeBlock>

      <SaleBlock>
        <p>판매상품1개</p>
        <SaleArrow />
      </SaleBlock>

      <TownBlock>
        <p>동네생활</p>
        <TownArrow />
      </TownBlock>

      <Manner>
        <p>받은 매너 평가</p>
        <MannerArrow />
      </Manner>
      <MannerText>받은 매너 칭찬이 없습니다</MannerText>

      <ReviewBlock>
        <p>받은 거래 후기(0)</p>
        <ReviewArrow />
      </ReviewBlock>
      <ReviewText>받은 후기가 없습니다.</ReviewText>
      <MenuBar />
    </>
  );
};

export default ProfilePage;

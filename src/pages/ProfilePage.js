// 나의당근 -> 프로필 화면

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MenuBar from '../components/common/MenuBar';
import {
  ProfileImage,
  BackArrow,
  Profile,
  MenuBlock,
  ProfileName,
  MannerBlock,
  ListLine,
  GrayHr,
  Temperature,
  Heart,
  TextMargintop,
  ChatBlock,
  Response,
  ListBlock,
  TopDiv,
  Line,
  EmptyBlock,
} from '../components/layout/ProfileStyle';
import { SortBlock } from '../components/common/SortBlock';

const ProfilePage = () => {
  const { name } = useSelector(({ profilename }) => ({
    name: profilename.name,
  }));

  return (
    <>
      <TopDiv>
        <Link to="/mydanggeun">
          <BackArrow />
        </Link>

        <Profile>프로필</Profile>
        <Link to="/profileedit">
          <MenuBlock />
        </Link>
      </TopDiv>

      <ProfileImage />
      <ProfileName>{name}</ProfileName>

      <Temperature>
        <MannerBlock>매너온도</MannerBlock>
        <p>첫 온도 0.0 C</p>

        <GrayHr />
      </Temperature>

      <SortBlock>
        <Heart>
          <Response>재거래희망률 -%</Response>
        </Heart>
        <TextMargintop>표시될 만큼 충분히 대화하지 않았어요</TextMargintop>

        <ChatBlock>
          <Response>응답률 33%</Response>
        </ChatBlock>
        <TextMargintop>보통 1시간 내에 응답</TextMargintop>
      </SortBlock>

      <ListLine>
        <p>
          안양6동 9회 인증
          <br />
          <br />
          2020년 11월30일 가입 (최근 3일 이내 활동)
        </p>
      </ListLine>

      <ListBlock>
        <p>활동 배지2개</p>
      </ListBlock>
      <Line />

      <ListBlock>
        <p>판매상품1개</p>
      </ListBlock>
      <Line />

      <ListBlock>
        <p>동네생활</p>
      </ListBlock>
      <Line />

      <ListBlock>
        <p>받은 매너 평가</p>
      </ListBlock>
      <Line />

      <ListBlock>
        <p>받은 거래 후기(0)</p>
      </ListBlock>
      <Line />

      <EmptyBlock />
      <MenuBar />
    </>
  );
};

export default ProfilePage;

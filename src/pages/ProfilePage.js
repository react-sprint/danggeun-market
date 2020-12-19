import React from 'react';
import { useSelector } from 'react-redux';
import MenuBar from '../components/common/MenuBar';
import {
  ListLine,
  Heart,
  TextMargintop,
  ChatBlock,
  Response,
  ListBlock,
  Line,
  ProfileInner,
} from '../components/layout/profile/ProfileStyle';
import { SortBlock } from '../components/common/SortBlock';
import ProfileHeader from '../components/layout/profile/ProfileHeader';
import { Inner } from '../components/layout/Inner';
import ProfileDetail from '../components/layout/profile/ProfileDetail';

const ProfilePage = () => {
  const { name } = useSelector(({ profilename }) => ({
    name: profilename.name,
  }));

  return (
    <>
      <ProfileHeader />
      <Inner>
        <ProfileDetail userName={name} />

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
      </Inner>
      <ListLine>
        <Inner>
          <p>
            안양6동 9회 인증
            <br />
            <br />
            2020년 11월30일 가입 (최근 3일 이내 활동)
          </p>
        </Inner>
      </ListLine>
      <ProfileInner>
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
      </ProfileInner>
      <MenuBar />
    </>
  );
};

export default ProfilePage;

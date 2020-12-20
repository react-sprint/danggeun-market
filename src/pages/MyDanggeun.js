import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { LogOut, ListBlock, Ptag, DanggeunWrap, DanggeunInner } from '../components/layout/dangeun/MyDanggeunStyle';
import firebase from '../utils/api/fbInstance';
import MenuBar from '../components/common/MenuBar';
import { EmptyBlock } from '../components/common/EmptyBlock';
import DanggeunHeader from '../components/layout/dangeun/DangguenHeader';
import ProfileWrap from '../components/layout/dangeun/ProfileWrap';
import getLocation from '../components/layout/neighborhood/getLocation';

const MyDanggeun = () => {
  const [nearRegion, setNearRegion] = useState([]);
  const { name } = useSelector(({ profilename }) => ({
    name: profilename.name,
  }));

  const regex = /...[동읍면리]/g;
  const regionRegex = regex.exec(nearRegion);

  useEffect(() => {
    getLocation().then((passedAddressSet) => {
      setNearRegion(Array.from(passedAddressSet));
    });
  }, []);

  const Logout = async () => {
    try {
      await firebase.auth().signOut();
      alert('로그아웃 되었습니다.');
    } catch (error) {
      // error
    }
  };

  return (
    <DanggeunWrap>
      <DanggeunHeader />
      <ProfileWrap name={name} addr={regionRegex} />
      <DanggeunInner>
        <ListBlock>
          <Link to="/login">
            <LogOut onClick={Logout}>
              <Ptag>로그아웃</Ptag>
            </LogOut>
          </Link>
          <EmptyBlock />
        </ListBlock>
      </DanggeunInner>
      <MenuBar />
    </DanggeunWrap>
  );
};

export default MyDanggeun;

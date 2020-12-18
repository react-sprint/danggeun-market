import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as Styled from '../common/neighbor/Body';
import NeighborList from './List';
import { setSearchAddress } from '../../modules/neighbor';

const SearchListLoop = ({ address }) => {
  const dispatch = useDispatch();
  const onSetSearchAddress = (address, isTyped) =>
    dispatch(setSearchAddress(address, isTyped));

  const history = useHistory();
  const mainPage = () => history.push('/');

  return (
    <>
      <Styled.NeighborList>
        <Styled.SpanButton
          type="submit"
          onClick={() => {
            onSetSearchAddress(address.value, false);
            mainPage();
          }}
        >
          {address.value}
        </Styled.SpanButton>
      </Styled.NeighborList>
      <Styled.Border />
    </>
  );
};

const SearchList = () => {
  const { searchAddress } = useSelector((state) => ({
    searchAddress: state.neighbor.searchAddress,
  }));

  const keys = Object.keys(searchAddress);

  let addressObjArray = [];

  for (let i = 0; i < keys.length; i += 1) {
    const obj = { key: i, value: searchAddress[i] };
    addressObjArray.push(obj);
  }

  return (
    <div>
      {addressObjArray.map((address) => (
        <SearchListLoop address={address} key={address.key} />
      ))}
    </div>
  );
};

const List = () => {
  let { isTyped } = useSelector((state) => ({
    isTyped: state.neighbor.isTyped,
  }));

  if (isTyped) {
    return <SearchList />;
  }
  return <NeighborList />;
};

const Body = () => {
  return (
    <Styled.Wrapper>
      <List />
    </Styled.Wrapper>
  );
};

export default Body;

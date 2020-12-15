import React from 'react';
import { useSelector } from 'react-redux';
import * as Styled from '../common/neighbor/Body';
import NeighborList from './List';

const AddressSearched = () => {
  let { searchAddress } = useSelector((state) => ({
    searchAddress: state.neighbor.searchAddress,
  }));

  return <h1>{searchAddress}</h1>;
};

const List = () => {
  let { isTyped } = useSelector((state) => ({
    isTyped: state.neighbor.isTyped,
  }));

  if (isTyped) {
    return <AddressSearched />;
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

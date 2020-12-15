import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getLocation from './getLocation';
import * as StyledList from '../common/neighbor/List';
import * as StyledBody from '../common/neighbor/Body';
import { setNeighbor } from '../../modules/neighbor';
// import { Search } from './Header';

const Neighbor = ({ neighbor }) => {
  const dispatch = useDispatch();
  const onSetNeighbor = (address) => dispatch(setNeighbor(address));

  return (
    <>
      <StyledList.NeighborList>
        <StyledList.Button
          type="submit"
          onClick={() => onSetNeighbor(neighbor.value)}
        >
          {neighbor.value}
        </StyledList.Button>
      </StyledList.NeighborList>
      <StyledList.LongUnderline />
    </>
  );
};

const AddressArray = ({ addressObj }) => {
  let addressObjElements = { ...addressObj };
  let addressObjectArray = [];
  const keys = Object.keys(addressObjElements);

  for (let i = 0; i < keys.length; i += 1) {
    const obj = { key: i, value: addressObjElements[i] };
    addressObjectArray.push(obj);
  }

  return (
    <div>
      {addressObjectArray.map((neighbor) => (
        <Neighbor neighbor={neighbor} key={neighbor.key} />
      ))}
    </div>
  );
};

const AddressObject = () => {
  const [addressObj, setAddressObj] = useState([]);

  useEffect(() => {
    getLocation().then((passedAddressSet) => {
      setAddressObj(Array.from(passedAddressSet));
    });
  }, []);

  return (
    <>
      <AddressArray addressObj={addressObj} />
    </>
  );
};

const List = () => {
  return (
    <>
      <StyledBody.Button>현재위치로 찾기</StyledBody.Button>
      <StyledBody.Span>근처 동네</StyledBody.Span>
      <AddressObject />
    </>
  );
};

export default List;

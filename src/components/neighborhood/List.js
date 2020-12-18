import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import getLocation from './getLocation';
import * as Styled from '../common/neighbor/Body';
import { setNeighbor } from '../../modules/neighbor';

const Neighbor = ({ neighbor }) => {
  const dispatch = useDispatch();
  const onSetNeighbor = (address) => dispatch(setNeighbor(address));

  const history = useHistory();
  const mainPage = () => history.push('/');

  return (
    <>
      <Styled.NeighborList>
        <Styled.SpanButton
          type="submit"
          onClick={() => {
            onSetNeighbor(neighbor.value);
            mainPage();
          }}
        >
          {neighbor.value}
        </Styled.SpanButton>
      </Styled.NeighborList>
      <Styled.Border />
    </>
  );
};

const AddressArray = ({ addressObj }) => {
  let addressObjElements = { ...addressObj };
  let addressObjArray = [];
  const keys = Object.keys(addressObjElements);

  for (let i = 0; i < keys.length; i += 1) {
    const obj = { key: i, value: addressObjElements[i] };
    addressObjArray.push(obj);
  }

  return (
    <div>
      {addressObjArray.map((neighbor) => (
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
      <Styled.Button>현재위치로 찾기</Styled.Button>
      <Styled.Span>근처 동네</Styled.Span>
      <AddressObject />
    </>
  );
};

export default List;

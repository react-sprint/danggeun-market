import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import getLocation from './getLocation';
import * as Styled from '../common/neighbor/List';
import { setNeighbor } from '../../modules/neighbor';

const Neighbor = ({ neighbor }) => {
  useSelector((state) => ({
    neighbor: state.neighbor,
  }));

  const dispatch = useDispatch();
  const onSetNeighbor = (address) => dispatch(setNeighbor(address));

  return (
    <>
      <Styled.NeighborList>
        <Styled.Button
          type="submit"
          onClick={() => onSetNeighbor(neighbor.value)}
        >
          {neighbor.value}
        </Styled.Button>
      </Styled.NeighborList>
      <Styled.LongUnderline />
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
  return <AddressObject />;
};

export default List;

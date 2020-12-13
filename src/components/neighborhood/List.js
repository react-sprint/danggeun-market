import React, { useEffect, useState } from 'react';
import getLocation from './getLocation';
import * as Styled from '../common/neighbor/List';

const Neighbor = ({ neighbor }) => {
  return (
    <>
      <Styled.NeighborList>
        <Styled.Button type="submit" onClick={() => console.log(neighbor.key)}>
          {neighbor.value}
        </Styled.Button>
      </Styled.NeighborList>
      <Styled.LongUnderline />
    </>
  );
};

const AddressArray = ({ address }) => {
  let addressObject = { ...address };
  let addressObjectArray = [];
  const keys = Object.keys(addressObject);

  for (let i = 0; i < keys.length; i += 1) {
    const obj = { key: i, value: addressObject[i] };
    addressObjectArray.push(obj);
  }

  return (
    <div>
      {addressObjectArray.map((address) => (
        <Neighbor neighbor={address} key={address.key} />
      ))}
    </div>
  );
};

const List = () => {
  const [address, setAddress] = useState([]);
  useEffect(() => {
    getLocation().then((value) => {
      setAddress(Array.from(value));
    });
  }, []);

  return (
    <>
      <AddressArray address={address} />
    </>
  );
};

export default List;

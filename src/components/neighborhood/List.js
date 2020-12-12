import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getLocation from './getLocation';
import { StyledUnderline } from './Header';

const StyledLongUnderline = styled(StyledUnderline)`
  width: 379px;
`;

const StyledNeighborList = styled.div`
  display: flex;
  align-items: center;
  height: 47px;
`;

const StyledButton = styled.button`
  font-size: 18px;
`;

const Neighbor = ({ neighbor }) => {
  return (
    <>
      <StyledNeighborList>
        <StyledButton type="submit" onClick={console.log(neighbor.key)}>
          {neighbor.value}
        </StyledButton>
      </StyledNeighborList>
      <StyledLongUnderline />
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
        <Neighbor address={address} key={address.key} />
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

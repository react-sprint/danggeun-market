import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import getLocation from './actions';
import { StyledUnderline } from './Header';

const StyledLongUnderline = styled(StyledUnderline)`
  width: 379px;
`;

const StyledAddressList = styled.div`
  display: flex;
  align-items: center;
  height: 47px;
`;

const StyledButton = styled.button`
  font-size: 18px;
`;

const Address = ({ address }) => {
  return (
    <>
      <StyledAddressList>
        <StyledButton type="submit">{address.value}</StyledButton>
      </StyledAddressList>
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
        <Address address={address} key={address.key} />
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
  console.log(address);

  return (
    <>
      <AddressArray address={address} />
    </>
  );
};

export default List;

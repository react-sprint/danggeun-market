import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Styled from '../common/neighbor/Header';
import searchLocation from './searchLocation';
import { inputAddress } from '../../modules/neighbor';

const Header = () => {
  const [searchAddress, setSearchAddress] = useState('empty');

  const dispatch = useDispatch();
  const onSearchAddress = (address, isSearched) =>
    dispatch(inputAddress(address, isSearched));

  useEffect(() => {
    searchLocation(searchAddress).then((passedAddress) => {
      let address = passedAddress.documents;
      if (address.length > 0) {
        onSearchAddress(address[0].address_name, true);
        let searchAddressArray = [];
        address.forEach((i) => searchAddressArray.push(i.address_name));
        onSearchAddress(searchAddressArray, true);
      }
    });
  });

  const onChangeAddress = (e) => {
    if (e.target.value === '') {
      setSearchAddress('empty');
      onSearchAddress('', false);
    } else setSearchAddress(e.target.value);
  };

  return (
    <Styled.Wrapper>
      <Link to="/">
        <Styled.ArrowBackIcon />
      </Link>
      <Styled.SearchBarWrapper>
        <Styled.SearchIcon />
        <Styled.Input
          placeholder="동명(읍, 면)으로 검색 (ex. 서초동)"
          onChange={onChangeAddress}
        />
        <Styled.CloseIcon />
        <Styled.Underline />
      </Styled.SearchBarWrapper>
    </Styled.Wrapper>
  );
};

export default Header;

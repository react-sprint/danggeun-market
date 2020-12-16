import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Styled from '../common/neighbor/Header';
import searchLocation from './searchLocation';
import { inputAddress } from '../../modules/neighbor';

const Header = () => {
  const [inputText, setInputText] = useState('');
  const [searchAddress, setSearchAddress] = useState('empty');

  const dispatch = useDispatch();
  const onSearchAddress = (address, isSearched) =>
    dispatch(inputAddress(address, isSearched));

  useEffect(() => {
    searchLocation(searchAddress).then((passedAddress) => {
      const address = passedAddress.documents;
      if (address.length > 0) {
        const addressArray = address.map((address) => address.address_name);
        const addressObj = { ...addressArray };
        onSearchAddress(addressObj, true);
      }
    });
  });

  const onChangeAddress = (event) => {
    setInputText(event.target.value);
    if (event.target.value.trim() === '') {
      setSearchAddress('empty');
      onSearchAddress('', false);
    } else setSearchAddress(event.target.value);
  };

  const onReset = () => {
    setInputText('');
    setSearchAddress('empty');
    onSearchAddress('', false);
  };

  return (
    <Styled.Wrapper>
      <Link to="/">
        <Styled.ArrowBackIcon />
      </Link>
      <Styled.SearchBarWrapper>
        <Styled.SearchIcon />
        <Styled.Input
          value={inputText}
          placeholder="동명(읍, 면)으로 검색 (ex. 서초동)"
          onChange={onChangeAddress}
        />
        <Styled.CloseIcon onClick={onReset} />
        <Styled.Underline />
      </Styled.SearchBarWrapper>
    </Styled.Wrapper>
  );
};

export default Header;

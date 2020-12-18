import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { checkFilter } from '../modules/filter';
import { ReactComponent as CircleUncheckSvg } from '../icon/circle_uncheck.svg';
import { ReactComponent as CircleCheckSvg } from '../icon/circle_check.svg';
import filterArray from '../utils/filterArray';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FilterButton = styled.button`
  display: flex;
  align-items: center;
`;

const FilterOn = styled(CircleCheckSvg)``;

const FilterOff = styled(CircleUncheckSvg)``;

const FilterIcon = ({ status }) => {
  if (status) {
    return <FilterOn />;
  }
  return <FilterOff />;
};

const FilterList = () => {
  const status = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const onCheckFilter = (filter) => dispatch(checkFilter(filter));

  return (
    <>
      {filterArray.map((filter) => (
        <FilterButton
          value={filter.value}
          onClick={() => onCheckFilter(filter.value)}
        >
          <FilterIcon status={status[filter.value]} />
          {filter.text}
        </FilterButton>
      ))}
    </>
  );
};

const Filter = () => {
  return <FilterList />;
};

export default Filter;

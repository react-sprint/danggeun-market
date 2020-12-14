import React from 'react';
import styled from 'styled-components';
import { WriteInputWrap } from './WriteInputWrap';
import selectArrow from '../../../images/ico/ico_arrow_down_s.png';

const Category = styled.select`
  position: relative;
  padding: 0 10px;
  border: 0;
  width: 100%;
  font-size: 18px;
  background-color: transparent;
  z-index: 1;
`;

const SelectWrap = styled(WriteInputWrap)`
  position: relative;
  &::after {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    right: 10px;
    width: 10px;
    height: 10px;
    background: url(${selectArrow}) center center/contain no-repeat;
    transform: translateY(-50%) rotate(-90deg);
  }
`;

function SelectCategory({ onCategory }) {
  const category = [
    {
      id: 1,
      listName: '디지털/가전',
    },
    {
      id: 2,
      listName: '가구/인테리어',
    },
    {
      id: 3,
      listName: '생활/가공식품',
    },
    {
      id: 4,
      listName: '게임/취미',
    },
    {
      id: 5,
      listName: '뷰티/미용',
    },
    {
      id: 6,
      listName: '삽니다',
    },
  ];
  return (
    <SelectWrap>
      <Category onChange={onCategory}>
        {category.map((category) => {
          const { id, listName } = category;
          return (
            <option key={id} value={id}>
              {listName}
            </option>
          );
        })}
      </Category>
    </SelectWrap>
  );
}

export default SelectCategory;

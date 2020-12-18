import React from 'react';
import styled from 'styled-components';
import { WriteInputWrap } from './WriteInputWrap';
import selectArrow from '../../../images/ico/ico_arrow_down_s.png';
import { categoryList } from './commonFunc';

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
  const category = categoryList();
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

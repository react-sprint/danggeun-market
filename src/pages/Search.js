/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';
import categoryArray from '../utils/filterArray';
import CategoryResult from './Category';

const CategoryButton = styled.button`
  display: flex;
  align-items: center;
`;

const CategoryList = () => {
  const history = useHistory();
  const categoryPage = () => history.push('/category');

  return (
    <>
      <h1>카테고리</h1>
      {categoryArray.map((category, id) => (
        <Link to={`/category/${category.value}`}>
          <CategoryButton key={id}>{category.text}</CategoryButton>
        </Link>
      ))}
    </>
  );
};

const Search = () => {
  return <CategoryList />;
};

export default Search;

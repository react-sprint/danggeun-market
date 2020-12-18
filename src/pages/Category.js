import React from 'react';

const Category = ({ match }) => {
  const { category } = match.params;
  return <h1>{category}</h1>;
};

export default Category;

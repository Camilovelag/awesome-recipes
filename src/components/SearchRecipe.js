import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { getRecipes } from '../redux/recipes/recipesSlice';

const SearchRecipe = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRecipes(search.title));
    e.target.reset();
  };

  return (
    <div>
      <h2>What are you looking for...</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="title" onChange={handleChange} placeholder="Search recipe" required />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchRecipe;

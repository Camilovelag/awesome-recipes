import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RecipePreview from '../components/recipePreview';

import { getRecipes } from '../redux/recipes/recipesSlice';

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipesReducer.recipes);
  if (recipes.length === 0) {
    dispatch(getRecipes());
  }

  const recipesList = recipes.map((recipe) => (
    <RecipePreview
      key={recipe.id}
      id={recipe.id}
      title={recipe.title}
      image={recipe.image}
    />
  ));

  return (
    <div>
      <h1>Home</h1>
      {recipesList}
    </div>
  );
};

export default Home;

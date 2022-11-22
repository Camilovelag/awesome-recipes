import React from 'react';
import { useSelector } from 'react-redux';

import RecipePreview from '../components/RecipePreview';
import SearchRecipe from '../components/SearchRecipe';

const Home = () => {
  const recipes = useSelector((state) => state.recipesReducer.recipes);

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
      <SearchRecipe />
      {recipesList}
    </div>
  );
};

export default Home;

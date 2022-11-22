import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import RecipePreview from '../components/RecipePreview';
import SearchRecipe from '../components/SearchRecipe';

const Home = () => {
  const recipes = useSelector((state) => state.recipesReducer.recipes);

  const recipesList = recipes.map((recipe) => (
    <Link to={`/recipes/${recipe.id}`} key={recipe.id}>
      <RecipePreview
        id={recipe.id}
        title={recipe.title}
        image={recipe.image}
        description={recipe.description}
      />
    </Link>
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

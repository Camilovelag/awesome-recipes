import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Recipe from '../components/Recipe';

const Recipes = () => {
  const recipesList = useSelector((state) => state.persistedReducer.recipes);
  const { id } = useParams();
  const recipeItem = recipesList.find((recipe) => recipe.id === parseInt(id, 10));

  return (
    <div>
      <Recipe
        title={recipeItem.title}
        image={recipeItem.image}
        description={recipeItem.description}
        userRatings={recipeItem.user_ratings}
        yields={recipeItem.yields}
        instructions={recipeItem.instructions}
      />
      <Link to="/" className="back">Back</Link>
    </div>
  );
};

export default Recipes;

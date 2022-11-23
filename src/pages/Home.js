import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import RecipePreview from '../components/RecipePreview';
import SearchRecipe from '../components/SearchRecipe';

const Home = () => {
  const recipes = useSelector((state) => state.persistedReducer.recipes);
  console.log(recipes);

  const recipesList = recipes.map((recipe) => (
    <Row key={recipe.id}>
      { recipe.user_ratings && recipe.instructions && (
      <Link to={`/recipes/${recipe.id}`}>
        <RecipePreview
          id={recipe.id}
          title={recipe.title}
          image={recipe.image}
          userRatings={recipe.user_ratings}
        />
      </Link>
      )}
    </Row>
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

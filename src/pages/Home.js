import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import {
  sortByPositive, sortByScore, sortByTitle, viewByAll, viewByPositive, viewByScore,
} from '../redux/recipes/recipesSlice';
import RecipePreview from '../components/RecipePreview';
import SearchRecipe from '../components/SearchRecipe';

const Home = () => {
  const recipes = useSelector((state) => state.persistedReducer.recipes);
  const dispatch = useDispatch();
  console.log(recipes);

  const recipesList = recipes.map((recipe) => (
    <Row key={recipe.id}>
      <Link to={`/recipes/${recipe.id}`}>
        <RecipePreview
          id={recipe.id}
          title={recipe.title}
          image={recipe.image}
          userRatings={recipe.user_ratings}
        />
      </Link>
    </Row>
  ));

  return (
    <div>
      <h1>Home</h1>
      <SearchRecipe />
      <p>Sort:</p>
      <button type="button" onClick={() => dispatch(sortByTitle())}>A-Z</button>
      <button type="button" onClick={() => dispatch(sortByScore())}>Higher score</button>
      <button type="button" onClick={() => dispatch(sortByPositive())}>Most popular</button>
      <p>View:</p>
      <button type="button" onClick={() => dispatch(viewByAll())}>All</button>
      <button type="button" onClick={() => dispatch(viewByScore())}>Score</button>
      <button type="button" onClick={() => dispatch(viewByPositive())}>Rating</button>
      {recipesList}
    </div>
  );
};

export default Home;

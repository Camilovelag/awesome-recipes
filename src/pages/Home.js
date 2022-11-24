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
  const { recipes, noResults, loading } = useSelector((state) => state.persistedReducer);
  const dispatch = useDispatch();

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
      <SearchRecipe />
      {recipes.length > 0 && loading === false && (
        <div className="info">
          <div className="sort-buttons">
            <p>Sort by: </p>
            <button type="button" onClick={() => dispatch(sortByTitle())}>A-Z</button>
            <button type="button" onClick={() => dispatch(sortByScore())}>Higher score</button>
            <button type="button" onClick={() => dispatch(sortByPositive())}>Most popular</button>
          </div>
          <div className="view-buttons">
            <p>View stats: </p>
            <button type="button" onClick={() => dispatch(viewByAll())}>All</button>
            <button type="button" onClick={() => dispatch(viewByScore())}>Score</button>
            <button type="button" onClick={() => dispatch(viewByPositive())}>Rating</button>
          </div>
        </div>
      )}
      <div>{loading && (<span>Loading, please wait...</span>)}</div>
      <div>{noResults && loading === false && (<span>No results found!</span>)}</div>
      <div className="recipes-list">
        {recipesList}
      </div>
    </div>
  );
};

export default Home;

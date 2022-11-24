import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

import {
  sortByPositive, sortByScore, sortByTitle, viewByAll, viewByPositive, viewByScore, updateSort,
} from '../redux/recipes/recipesSlice';
import RecipePreview from '../components/RecipePreview';
import SearchRecipe from '../components/SearchRecipe';

const Home = () => {
  const {
    recipes, noResults, loading, view, sort,
  } = useSelector((state) => state.persistedReducer);
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

  const handleSort = (e) => {
    switch (e.target.name) {
      case 'positive':
        dispatch(sortByPositive());
        dispatch(updateSort('positive'));
        break;
      case 'score':
        dispatch(sortByScore());
        dispatch(updateSort('score'));
        break;
      case 'title':
        dispatch(sortByTitle());
        dispatch(updateSort('title'));
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <SearchRecipe />
      {recipes.length > 0 && loading === false && (
        <Row className="bg-fuchsia p-3 border border-light rounded">
          <Col sm={6} className="sort-buttons">
            <p>Sort by: </p>
            <Button variant={sort === 'title' ? 'dark' : 'light'} type="button" name="title" onClick={handleSort}>A-Z</Button>
            <Button variant={sort === 'score' ? 'dark' : 'light'} type="button" name="score" onClick={handleSort}>Higher score</Button>
            <Button variant={sort === 'positive' ? 'dark' : 'light'} type="button" name="positive" onClick={handleSort}>Most popular</Button>
          </Col>
          <Col sm={6} className="">
            <p>View stats: </p>
            <Button variant={view === 'all' ? 'dark' : 'light'} type="button" onClick={() => dispatch(viewByAll())}>All</Button>
            <Button variant={view === 'score' ? 'dark' : 'light'} type="button" onClick={() => dispatch(viewByScore())}>Score</Button>
            <Button variant={view === 'positive' ? 'dark' : 'light'} type="button" onClick={() => dispatch(viewByPositive())}>Rating</Button>
          </Col>
        </Row>
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

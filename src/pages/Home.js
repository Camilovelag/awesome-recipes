import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Row, Col, Button, CardGroup, Container, Spinner,
} from 'react-bootstrap';

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
    <Link key={recipe.id} to={`/recipes/${recipe.id}`}>
      <RecipePreview
        id={recipe.id}
        title={recipe.title}
        image={recipe.image}
        userRatings={recipe.user_ratings}
      />
    </Link>
  ));

  const handleSort = (e) => {
    switch (e.target.name) {
      case 'positive':
        dispatch(sortByPositive());
        break;
      case 'score':
        dispatch(sortByScore());
        break;
      case 'title':
        dispatch(sortByTitle());
        break;
      default:
        break;
    }
    dispatch(updateSort(e.target.name));
  };

  return (
    <Container fluid>
      <Row>
        <SearchRecipe />
      </Row>
      {recipes.length > 0 && loading === false && (
        <Row className="bg-fuchsia p-2">
          <Col sm={6} className="center gap-1 mb-2">
            <p>Sort by: </p>
            <Button size="sm" variant={sort === 'title' ? 'dark' : 'light'} type="button" name="title" onClick={handleSort}>A-Z</Button>
            <Button size="sm" variant={sort === 'score' ? 'dark' : 'light'} type="button" name="score" onClick={handleSort}>High score</Button>
            <Button size="sm" variant={sort === 'positive' ? 'dark' : 'light'} type="button" name="positive" onClick={handleSort}>Most popular</Button>
          </Col>
          <Col sm={6} className="center gap-1">
            <p>View stats: </p>
            <Button size="sm" variant={view === 'all' ? 'dark' : 'light'} type="button" onClick={() => dispatch(viewByAll())}>All</Button>
            <Button size="sm" variant={view === 'score' ? 'dark' : 'light'} type="button" onClick={() => dispatch(viewByScore())}>Score</Button>
            <Button size="sm" variant={view === 'positive' ? 'dark' : 'light'} type="button" onClick={() => dispatch(viewByPositive())}>Likes</Button>
          </Col>
        </Row>
      )}
      <Row className="center mt-5">
        {loading && (
        <Spinner animation="border" role="status" />
        )}
      </Row>
      <Row>{noResults && loading === false && (<span className="center">No results found!</span>)}</Row>
      <Row className="bg-dark">
        {loading === false && (
          <CardGroup className="center">
            {recipesList}
          </CardGroup>
        )}
      </Row>
    </Container>
  );
};

export default Home;

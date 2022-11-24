import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IoIosArrowBack } from 'react-icons/io';

import { Col, Container, Row } from 'react-bootstrap';
import Recipe from '../components/Recipe';

const Recipes = () => {
  const recipesList = useSelector((state) => state.persistedReducer.recipes);
  const { id } = useParams();
  const recipeItem = recipesList.find((recipe) => recipe.id === parseInt(id, 10));

  return (
    <Container className="mx-5 my-4" fluid>
      <Row>
        <Col>
          <Recipe
            title={recipeItem.title}
            image={recipeItem.image}
            description={recipeItem.description}
            userRatings={recipeItem.user_ratings}
            yields={recipeItem.yields}
            instructions={recipeItem.instructions}
          />
          <Link to="/" className="back">
            <IoIosArrowBack />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Recipes;

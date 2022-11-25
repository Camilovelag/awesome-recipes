import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form, Button, Col, Row,
} from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { getRecipes } from '../redux/recipes/recipesSlice';

const SearchRecipe = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getRecipes(search.title));
    e.target.reset();
  };

  return (
    <Form className="bg-fuchsia-2 px-4 py-2" onSubmit={handleSubmit}>
      <p className="mb-1">Today I&apos;m tempted to taste...</p>
      <Form.Group>
        <Row>
          <Col className="offset-1" xs={8} md={7} lg={6}>
            <Form.Control
              type="text"
              name="title"
              onChange={handleChange}
              placeholder="type a dish name (e.g. burritos)"
              aria-label="search bar"
              required
            />
          </Col>
          <Col>
            <Button id="submit-btn" type="submit" variant="light">
              <BiSearch />
            </Button>
          </Col>
        </Row>
      </Form.Group>
    </Form>
  );
};

export default SearchRecipe;

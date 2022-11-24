import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form, Button, Col, Row, Container,
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
    <Container className="search-bar bg-fuchsia pb-3">
      <p>Today I&apos;m tempted for...</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Row className="justify-content-start">
            <Col xs={9}>
              <Form.Control
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="Search recipe"
                required
              />
            </Col>
            <Col>
              <Button type="submit" variant="light">
                <BiSearch />
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default SearchRecipe;

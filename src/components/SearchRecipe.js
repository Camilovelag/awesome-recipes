import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Form, Button, Col, Row,
} from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';
import { getRecipes, updateSort } from '../redux/recipes/recipesSlice';

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
    dispatch(updateSort(''));
    e.target.reset();
  };

  return (
    <div className="search-bar bg-fuchsia-2 p-3">
      <p>Today I&apos;m tempted for...</p>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Row className="justify-content-start">
            <Col xs={9} md={8} lg={7}>
              <Form.Control
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="Today I&apos;m tempted for..."
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
    </div>
  );
};

export default SearchRecipe;

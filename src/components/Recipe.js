import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import {
  Card, Container, Col, Row,
} from 'react-bootstrap';
import { BiLike, BiDislike } from 'react-icons/bi';
import { BsStar } from 'react-icons/bs';

const Recipe = (props) => {
  const {
    title, image, description, userRatings, yields, instructions,
  } = props;

  Recipe.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    userRatings: PropTypes.objectOf(PropTypes.number).isRequired,
    yields: PropTypes.string.isRequired,
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  const { count_positive: positive, count_negative: negative, score } = userRatings;
  const parsedDescription = parse(description);
  const instructionList = instructions.map((instruction) => (
    <li key={instruction.id}>{instruction.display_text}</li>
  ));

  // return (
  //   <div>
  //     <img src={image} alt={title} style={{ width: 250 }} />
  //     <h1>{title}</h1>
  //     <span>
  //       {yields}
  //     </span>
  //     <p>
  //       {'(+): '}
  //       { positive }
  //       {' (-): '}
  //       { negative }
  //       {' Score: '}
  //       { (score * 10).toFixed(1) }
  //       /10
  //     </p>
  //     <p>{parsedDescription}</p>
  //     <h3>Instructions</h3>
  //     <ul>
  //       {instructionList}
  //     </ul>
  //   </div>
  // );
  return (
    <Card bg="dark" text="light" style={{ width: '80vw' }}>
      <Row>
        <Col xs={12} md={6}>
          <Card.Img variant="top" src={image} style={{ objectFit: 'cover' }} />
        </Col>
        <Col xs={12} md={6}>
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <Container fluid className="justify-content-center">
                <span className="d-flex align-items-center gap-2">
                  <BiLike />
                  {positive}
                  <BiDislike />
                  {negative}
                  <BsStar />
                  { (score * 10).toFixed(1) }
                  /10
                </span>
                <span>
                  {yields}
                </span>
                <p>{parsedDescription}</p>
              </Container>
              <h3>Instructions</h3>
              <ol>
                {instructionList}
              </ol>
            </Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default Recipe;

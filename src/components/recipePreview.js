import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Card } from 'react-bootstrap';
import { BiLike, BiDislike } from 'react-icons/bi';
import { BsStar } from 'react-icons/bs';

const RecipePreview = (props) => {
  const {
    id, title, image, userRatings,
  } = props;

  const view = useSelector((state) => state.persistedReducer.view);

  RecipePreview.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    userRatings: PropTypes.objectOf(PropTypes.number).isRequired,
  };

  const { count_positive: positive, count_negative: negative, score } = userRatings;

  return (
    <Card id={id} bg="dark" text="light" style={{ width: '18rem', height: '20rem' }}>
      <Card.Img variant="top" src={image} style={{ width: '18rem', height: '12rem', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          <div>
            {(view === 'positive' || view === 'all') && (
              <span className="d-flex align-items-center gap-2">
                <BiLike />
                {positive}
                <BiDislike />
                {negative}
              </span>
            )}
            {(view === 'score' || view === 'all') && (
              <span className="d-flex align-items-center gap-2">
                <BsStar />
                { (score * 10).toFixed(1) }
                /10
              </span>
            )}
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default RecipePreview;

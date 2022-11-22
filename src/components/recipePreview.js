import React from 'react';
import PropTypes from 'prop-types';

const RecipePreview = (props) => {
  const {
    id, title, image, userRatings,
  } = props;

  RecipePreview.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    userRatings: PropTypes.objectOf(PropTypes.number).isRequired,
  };

  const { count_positive: positive, count_negative: negative, score } = userRatings;

  return (
    <div id={id} className="recipe-preview">
      <img src={image} alt={title} style={{ width: 250 }} />
      <h1>{title}</h1>
      <p>
        {'(+): '}
        { positive }
        {' (-): '}
        { negative }
        {' Score: '}
        { (score * 10).toFixed(1) }
        /10
      </p>
    </div>
  );
};

export default RecipePreview;

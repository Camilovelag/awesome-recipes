import React from 'react';
import PropTypes from 'prop-types';

const RecipePreview = (props) => {
  const {
    id, title, image, description,
  } = props;

  RecipePreview.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  };

  return (
    <div id={id} className="recipe-preview">
      <img src={image} alt={title} style={{ width: 250 }} />
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  );
};

export default RecipePreview;

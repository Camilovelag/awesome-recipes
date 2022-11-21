import React from 'react';
import PropTypes from 'prop-types';

const RecipePreview = (props) => {
  const {
    id, title, image,
  } = props;

  RecipePreview.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  };

  return (
    <div id={id} className="recipe-preview">
      <img src={image} alt={title} style={{ width: 250 }} />
      <h1>{title}</h1>
    </div>
  );
};

export default RecipePreview;

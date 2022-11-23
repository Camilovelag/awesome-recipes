import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

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
    <div id={id} className="recipe-preview">
      <img src={image} alt={title} style={{ width: 250 }} />
      <h1>{title}</h1>
      <div>
        <div>
          {
          (view === 'positive' || view === 'all') && (
            <span className="rating">
              Likes:
              {positive}
              Dislikes:
              {negative}
            </span>
          )
        }
        </div>
        <div>
          {
          (view === 'score' || view === 'all') && (
            <span className="score">
              Score:
              { (score * 10).toFixed(1) }
              /10
            </span>
          )
        }
        </div>
      </div>
    </div>
  );
};

export default RecipePreview;

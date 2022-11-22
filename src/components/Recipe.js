import React from 'react';
import PropTypes from 'prop-types';

const Recipe = (props) => {
  const {
    title, image, description, userRatings, yields, instructions,
  } = props;

  Recipe.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    userRatings: PropTypes.isRequired,
    yields: PropTypes.arrayOf(PropTypes.number).isRequired,
    instructions: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

  console.log(userRatings, yields, instructions);

  const { count_positive: positive, count_negative: negative, score } = userRatings;
  const instructionList = instructions.map((instruction) => (
    <li key={instruction.id}>{instruction.display_text}</li>
  ));

  return (
    <div className="recipe-preview">
      <img src={image} alt={title} style={{ width: 250 }} />
      <h1>{title}</h1>
      <span>
        {yields}
      </span>
      <p>
        {'(+): '}
        { positive }
        {' (-): '}
        { negative }
        {' Score: '}
        { (score * 10).toFixed(1) }
        /10
      </p>
      <p>{description}</p>
      <h3>Instructions</h3>
      <ul>
        {instructionList}
      </ul>
    </div>
  );
};

export default Recipe;

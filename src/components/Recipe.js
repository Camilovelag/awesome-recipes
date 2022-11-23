import React from 'react';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';

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

  return (
    <div>
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
      <p>{parsedDescription}</p>
      <h3>Instructions</h3>
      <ul>
        {instructionList}
      </ul>
    </div>
  );
};

export default Recipe;

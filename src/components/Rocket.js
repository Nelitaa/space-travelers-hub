import React from 'react';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const { name, description, image } = props;
  return (
    <li>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
      <button type="button">Reserve Rocket</button>
    </li>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;

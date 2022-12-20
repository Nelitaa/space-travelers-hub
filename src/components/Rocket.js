import React from 'react';
import PropTypes from 'prop-types';

const Rocket = (props) => {
  const { name, description, image } = props;
  return (
    <li className="rocket-container">
      <img className="rocket-image" src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p className="rocket-description">{description}</p>
        <button className="rocket-button" type="button">Reserve Rocket</button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Rocket;

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../redux/rockets/rockets';

const Rocket = (props) => {
  const {
    id, name, description, image, reserved,
  } = props;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(reserveRocket(id));
  };

  return (
    <li className="rocket-container">
      <img className="rocket-image" src={image} alt={name} />
      <div>
        <h2>{name}</h2>
        <p className="rocket-description">
          <span className="rocket-reserved">{reserved ? 'Reserved' : 'Not Reserved'}</span>
          {description}
        </p>
        <button className="rocket-button" type="button" onClick={handleClick}>Reserve Rocket</button>
      </div>
    </li>
  );
};

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default Rocket;

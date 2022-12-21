import React from 'react';
import { useSelector } from 'react-redux';
import Rocket from '../components/Rocket';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets.rockets);
  const listRockets = rockets.map((rocket) => (
    <Rocket
      key={rocket.rocket_id}
      id={rocket.rocket_id}
      name={rocket.rocket_name}
      description={rocket.rocket_description}
      image={rocket.rocket_image}
      reserved={rocket.rocket_reserved}
    />
  ));

  return (
    <section>
      <ul className="rockets-container">
        {listRockets}
      </ul>
    </section>
  );
};

export default Rockets;

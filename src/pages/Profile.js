import React from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <div className="profile-container">
      <section>
        <h1>My Rockets</h1>
        <ul>
          {rockets.filter((rocket) => rocket.rocket_reserved).map((rocket) => (
            <li key={rocket.rocket_id}>
              {rocket.rocket_name}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Profile;

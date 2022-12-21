import React from 'react';
import { useSelector } from 'react-redux';
import MyMissions from '../components/MyMissions';

const Profile = () => {
  const rockets = useSelector((state) => state.rockets.rockets);

  return (
    <div className="profile-container">
      <section className="my-rockets-container">
        <h1>My Rockets</h1>
        <ul className="rocket-reserved-container">
          {rockets.filter((rocket) => rocket.rocket_reserved).map((rocket) => (
            <li key={rocket.rocket_id} className="rockets-reserved">
              {rocket.rocket_name}
            </li>
          ))}
        </ul>
      </section>
      <MyMissions />
    </div>
  );
};

export default Profile;

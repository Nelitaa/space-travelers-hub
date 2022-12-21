import React from 'react';
import { useSelector } from 'react-redux';

const MyMissions = () => {
  const missions = useSelector((state) => state.missions);
  const myMissions = missions.filter((mission) => mission.reserved);
  return (
    <section className="my-rockets-container">
      <h1>My Missions</h1>
      <ul className="rocket-reserved-container">
        {
          myMissions.map((mission) => (
            <li key={mission.mission_id} className="rockets-reserved">
              {mission.mission_name}
            </li>
          ))
        }

      </ul>
    </section>
  );
};

export default MyMissions;

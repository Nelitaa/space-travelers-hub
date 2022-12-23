import React from 'react';
import { useSelector } from 'react-redux';
import Mission from './Mission';

const MissionsList = () => {
  const missions = useSelector((state) => state.missions);

  return (
    <div className="missions-content">
      <table className="table-missions">
        <thead>
          <tr className="table-header">
            <th className="table-title">Mission</th>
            <th className="table-title">Description</th>
            <th className="table-title">Status</th>
            <th className="table-title">Actions</th>
          </tr>
        </thead>
        <tbody>
          {missions.map((mission) => (
            <Mission data={mission} key={mission.mission_id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsList;

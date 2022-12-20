import React from 'react';
import { useSelector } from 'react-redux';

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
            <tr className="table-row" key={mission.mission_id} id={mission.mission_id}>
              <td className="table-cell">
                {mission.mission_name}
              </td>
              <td className="table-cell">
                {mission.description}
              </td>
              <td>
                <p className="table-badge">Active Member</p>
              </td>
              <td>
                <button type="button" className="table-button">Join Mission</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MissionsList;

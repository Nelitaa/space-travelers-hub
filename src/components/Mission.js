import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission } from '../redux/Missions/Missions';

const Mission = ({ data }) => {
  const {
    description,
    mission_id: id,
    mission_name: name,
    reserved,
  } = data;
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(joinMission(id));
  };
  return (
    <tr className="table-row" key={id} id={id}>
      <td className="table-cell">
        {name}
      </td>
      <td className="table-cell">
        {description}
      </td>
      <td className="table-cell">
        {
          reserved
            ? <p className="table-badge badge-blue">Active Member</p>
            : <p className="table-badge">NOT A MEMBER</p>
        }
      </td>
      <td className="table-cell">
        <button type="button" className={reserved ? 'mission-button button-cancel' : 'mission-button'} onClick={handleClick}>
          { reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

Mission.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Mission;

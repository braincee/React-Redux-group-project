import React from 'react';
import PropTypes from 'prop-types';

const MissionCard = (props) => {
  const { mission } = props;
  return (
    <tr>
      <th>
        <h5>{mission.mission_name}</h5>
      </th>
      <th>
        <p>{mission.mission_description}</p>
      </th>
    </tr>
  );
};

MissionCard.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    mission_description: PropTypes.string,
    wikipedia: PropTypes.string,
    isJoined: PropTypes.bool,
  }).isRequired,
};

export default MissionCard;

import React from 'react';
import PropTypes from 'prop-types';
import Badge from 'react-bootstrap/Badge';
import JoinMission from './JoinMission';

const MissionCard = (props) => {
  const { mission } = props;
  const switchBadge = () => {
    if (mission.isJoined) {
      return <Badge variant="success">Active Member</Badge>;
    }
    return <Badge variant="danger">Not A Member</Badge>;
  };

  return (
    <tr>
      <th>
        <h5>{mission.mission_name}</h5>
      </th>
      <th>
        <p>{mission.mission_description}</p>
      </th>
      <th>
        <th>{switchBadge()}</th>
        <JoinMission
          isJoined={mission.isJoined}
          id={mission.mission_id}
        />
      </th>
    </tr>
  );
};

MissionCard.propTypes = {
  mission: PropTypes.shape({
    mission_id: PropTypes.string,
    mission_name: PropTypes.string,
    mission_description: PropTypes.string,
    isJoined: PropTypes.bool,
  }).isRequired,
};

export default MissionCard;

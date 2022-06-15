import React from 'react';
import { bool, string } from 'prop-types';
import { useDispatch } from 'react-redux';
import { joinMission, leaveMission } from '../../redux/missions/missions';

const JoinMission = (props) => {
  const { isJoined, id } = props;
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!isJoined) {
      dispatch(leaveMission(id));
    } else {
      dispatch(joinMission(id));
    }
  };

  return (
    <button
      type="button"
      variant={isJoined ? 'danger' : 'secondary'}
      onClick={handleClick}
    >
      { isJoined ? 'Leave' : 'Join' }
      Mission
    </button>
  );
};

JoinMission.propTypes = { isJoined: bool.isRequired, id: string.isRequired };

export default JoinMission;

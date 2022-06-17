import { useSelector } from 'react-redux';
import JoinMission from './JoinMission';

const MissionProfiles = () => {
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((mission) => mission.isJoined);

  const displayJoinedMissions = () => {
    if (joinedMissions.length > 0) {
      return joinedMissions.map((mission) => (
        <ul key={mission.mission_id} className="joined">
          <li>
            <h5>{ mission.mission_name }</h5>
            <JoinMission isJoined={mission.isJoined} id={mission.mission_id} />
          </li>
        </ul>
      ));
    }
    return <p>No missions joined</p>;
  };
  return (
    <div className="joined-1">
      <h5 className="mission-profile">MY MISSIONS</h5>
      <ul className="joined-2">
        <li>{displayJoinedMissions()}</li>
      </ul>
    </div>
  );
};

export default MissionProfiles;

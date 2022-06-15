import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { getMissions } from '../../redux/missions/missions';
import MissionCard from './MissionCard';

const MissionsContainer = () => {
  const dispatch = useDispatch();
  const missionsCard = useSelector((state) => state.missions);
  useEffect(() => {
    dispatch(getMissions());
  }, [dispatch]);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {(missionsCard || []).map((mission) => (
          <MissionCard key={mission.mission_id} mission={mission} />
        ))}
      </tbody>
    </Table>
  );
};

export default MissionsContainer;

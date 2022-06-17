import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cancel } from '../../redux/rocket/Rocket';

const RocketProfiles = () => {
  const list = useSelector((state) => state.rocket);
  const filteredRockets = list.filter((each) => each.reserved === 'true');
  const dispatch = useDispatch();
  const leave = (id) => {
    dispatch(cancel(list, id));
  };

  return (

    <div className="rockets">
      <h2>My Rockets</h2>
      <ul className="profile-lists">
        {filteredRockets.map((reserved) => (
          <li key={reserved.id} className="list">

            <h3 className="name">{reserved.rocketName}</h3>
            <button type="submit" className="btn " onClick={() => leave(reserved.id)}>Cancel</button>
          </li>
        ))}
      </ul>
      {(!filteredRockets.length >= 1)
        ? <h3 className="no-mission">Please Reserve a Rocket </h3>
        : null}
    </div>

  );
};

export default RocketProfiles;

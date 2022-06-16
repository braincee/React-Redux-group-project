import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPI } from '../../redux/rocket/Rocket';

const Rocket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAPI());
  }, []);

  const list = useSelector((state) => state.rocket);
  return (
    <>
      <h1>
        Rockets
      </h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.description}</li>
        ))}
      </ul>
    </>
  );
};

export default Rocket;

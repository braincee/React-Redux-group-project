import { React, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAPI, reserve, cancel } from '../../redux/rocket/Rocket';
import SingleRocket from '../../redux/rocket/SingleRocket';

const Rocket = () => {
  const dispatch = useDispatch();
  /*useEffect(() => {
    dispatch(fetchAPI());
  }, []);*/
  const list = useSelector((state) => state.rocket);

  const reserveRocket = (id) => (
    (list[id - 1].reserved && list[id - 1].reserved === 'true')
      ? dispatch(cancel(list, id))
      : dispatch(reserve(list, id))
  );

  return (
    <>
      <ul>
        {list.map((each) => (
          <SingleRocket
            key={each.id}
            name={each.rocketName}
            description={each.description}
            image={each.flickrImages}
            id={each.id}
            reserve={reserveRocket}
            rocket={each}
          />
        ))}
      </ul>
    </>
  );
};

export default Rocket;

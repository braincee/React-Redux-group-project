import { NavLink } from 'react-router-dom';

const Header = () => {
  const navlinks = [
    {
      id: 1,
      path: '/rocket',
      text: 'Rocekt',
    },
    {
      id: 2,
      path: '/missions',
      text: 'Missions',
    },
    {
      id: 3,
      path: '/dragons',
      text: 'Dragons',
    },
    {
      id: 4,
      path: '/profile',
      text: 'My profile',
    },
  ];
  return (
    <div className="nav_bar">
      <div className="logo"> Logo</div>
      <div className="nav_link">
        <ul>
          {navlinks.map((item) => (
            <li key={item.id}>
              {' '}
              <NavLink to={item.path}>{item.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
};

export default Header;

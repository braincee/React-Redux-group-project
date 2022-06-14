import { NavLink } from 'react-router-dom';
import './Navbar.css';
import logoImage from './SpaceLogo.png';

const Navbar = () => {
  const navlinks = [
    {
      id: 1,
      path: '/rocket',
      text: 'Rockets',
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
    <nav className="nav_bar">
      <div className="logo">
        <img className="logo-image" src={logoImage} alt="" />
        <h2 className="title">Space Travellers Hub</h2>
      </div>
      <ul className="nav-links">
        {navlinks.map((item) => (
          <li className="nav-link" key={item.id}>
            <NavLink to={item.path}>{item.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../images/planet.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: 'Rockets',
      to: '/',
    },
    {
      id: 2,
      title: 'Missions',
      to: '/missions',
    },
    {
      id: 3,
      title: 'My Profile',
      to: '/profile',
    },
  ];
  const location = useLocation();

  return (
    <header className="header-container">
      <Link to="/" className="brand-container">
        <img src={logo} alt="Space Travel Logo" className="logo" />
        <p className="logo-text">Space Travelers&apos; Hub</p>
      </Link>
      <nav className="nav-container">
        <ul className="links-list">
          {links.length > 0
          && links.map((link) => (
            <li className={`link-item ${link.to === location.pathname ? 'link-item-active' : ''}`} key={link.id}>
              <NavLink to={link.to}>
                {link.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

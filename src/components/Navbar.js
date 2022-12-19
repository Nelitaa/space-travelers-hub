import { Link, NavLink } from 'react-router-dom';
import logo from '../images/planet.png';

const Navbar = () => {
  const links = [
    {
      id: 1,
      title: 'My Profile',
      to: '/profile',
    },
  ];
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
            <li className="link-item" key={link.id}>
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

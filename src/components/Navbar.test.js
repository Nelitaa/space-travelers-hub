import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navbar from './Navbar';

test('renders Navbar component', () => {
  const { asFragment } = render(<Router><Navbar /></Router>);
  expect(asFragment()).toMatchSnapshot();
});

test('render Navbar component with links', () => {
  const { getByText } = render(<Router><Navbar /></Router>);
  const rocketsLink = getByText(/Rockets/i);
  const missionsLink = getByText(/Missions/i);
  const profileLink = getByText(/My Profile/i);
  expect(rocketsLink).toHaveAttribute('href', '/');
  expect(missionsLink).toHaveAttribute('href', '/missions');
  expect(profileLink).toHaveAttribute('href', '/profile');
});

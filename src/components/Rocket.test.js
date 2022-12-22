/* eslint-disable react/jsx-props-no-spreading */
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Rocket from './Rocket';
import store from '../redux/configureStore';

test('renders Rocket component', () => {
  const rocket = {
    id: 1,
    name: 'Falcon 1',
    description: 'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009',
    image: 'https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png',
    reserved: false,
  };
  render(
    <Provider store={store}>
      <Rocket {...rocket} />
    </Provider>,
  );
  const rocketName = document.querySelector('h2');
  expect(rocketName.textContent).toBe('Falcon 1');
});

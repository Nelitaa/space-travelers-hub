import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MyMissions from './MyMissions';
import store from '../redux/configureStore';

it('Render My Missions', () => {
  render(
    <Provider store={store}>
      <MyMissions />
    </Provider>,
  );
  const myMissions = document.querySelector('ul');
  expect(myMissions).toBeTruthy();
});

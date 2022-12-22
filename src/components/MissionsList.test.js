import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import MissionsList from './MissionsList';
import store from '../redux/configureStore';

describe('Render Mission Row', () => {
  it('Render Mission Row', () => {
    render(
      <Provider store={store}>
        <MissionsList />
      </Provider>,
    );

    const mission = document.querySelector('tr');
    expect(mission).toBeTruthy();
  });
  it('Lenght of titles to be 4', () => {
    render(
      <Provider store={store}>
        <MissionsList />
      </Provider>,
    );
    const titles = document.querySelectorAll('th');
    expect(titles.length).toBe(4);
  });
});

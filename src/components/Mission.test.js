import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Mission from './Mission';
import store from '../redux/configureStore';

const data = {
  description: 'New description',
  mission_id: '1',
  mission_name: 'New Name',
  reserved: true,
};

describe('Render Mission Row', () => {
  it('Render Mission Row', () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <Mission data={data} />
          </tbody>
        </table>
      </Provider>,
    );
    const mission = document.querySelector('tr');
    const title = document.querySelector('td');
    expect(mission).toBeTruthy();
    expect(title.textContent).toBe('New Name');
  });
  it('Name for first cell to be New Name', () => {
    render(
      <Provider store={store}>
        <table>
          <tbody>
            <Mission data={data} />
          </tbody>
        </table>
      </Provider>,
    );
    const title = document.querySelector('td');
    expect(title.textContent).toBe('New Name');
  });
});

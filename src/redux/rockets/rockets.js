import { createAsyncThunk } from '@reduxjs/toolkit';
import RocketService from '../../services/RocketService';

const initialState = {
  rockets: [],
};

const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const response = await RocketService.getAll();
  const rockets = response.data.map((item) => (
    {
      rocket_id: item.id,
      rocket_name: item.rocket_name,
      rocket_description: item.description,
      rocket_image: item.flickr_images[0],
      rocket_reserved: item.active,
    }
  ));
  return rockets;
});

const reserveRocket = (id) => ({
  type: 'rockets/reserveRocket',
  payload: id,
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'rockets/fetchRockets/fulfilled':
      return {
        ...state,
        rockets: action.payload,
      };
    case 'rockets/reserveRocket':
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.rocket_id === action.payload) {
            return {
              ...rocket,
              rocket_reserved: !rocket.rocket_reserved,
            };
          }
          return rocket;
        }),
      };
    default:
      return state;
  }
};

export { fetchRockets, reserveRocket };
export default rocketsReducer;

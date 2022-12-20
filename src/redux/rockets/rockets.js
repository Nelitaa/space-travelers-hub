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
    }
  ));
  return rockets;
});

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'rockets/fetchRockets/fulfilled':
      return {
        ...state,
        rockets: action.payload,
      };
    default:
      return state;
  }
};

export { fetchRockets };
export default rocketsReducer;

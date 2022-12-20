import { createAsyncThunk } from '@reduxjs/toolkit';
import RocketService from '../../services/RocketService';

const initialState = {
  rockets: [],
};

const fetchRockets = createAsyncThunk('rockets/fetchRockets', async () => {
  const rockets = await RocketService.getAll();
  return rockets.data;
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

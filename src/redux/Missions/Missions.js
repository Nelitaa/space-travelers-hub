import { createAsyncThunk } from '@reduxjs/toolkit';
import MissionService from '../../services/MissionService';

const GET = 'spacetravelers/missions/GET';
const GET_FULFILLED = 'spacetravelers/missions/GET/fulfilled';
const JOIN = 'spacetravelers/missions/JOIN';

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_FULFILLED:
      return [...action.payload];
    case JOIN:
      return (
        state.map((mission) => {
          if (mission.mission_id === action.payload) {
            return {
              ...mission,
              reserved: !mission.reserved,
            };
          }
          return mission;
        })
      );
    default:
      return state;
  }
}

export const getMissions = (payload) => ({
  type: GET,
  payload,
});

export const getMissionsAPI = createAsyncThunk(
  GET,
  async (_, thunkAPI) => {
    const res = await MissionService.getAll();
    await thunkAPI.dispatch(getMissions(res.data));
    const missions = res.data.map((item) => (
      {
        mission_id: item.mission_id,
        mission_name: item.mission_name,
        description: item.description,
        reserved: false,
      }
    ));
    return missions;
  },
);

export const joinMission = (id) => ({
  type: JOIN,
  payload: id,
});

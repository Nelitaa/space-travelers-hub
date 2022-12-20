import { configureStore, combineReducers } from '@reduxjs/toolkit';
import missions from './Missions/Missions';

const rootReducer = combineReducers({
  missions,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

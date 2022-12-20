import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';
import missions from './Missions/Missions';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions,
  },
},
applyMiddleware(thunk));

export default store;

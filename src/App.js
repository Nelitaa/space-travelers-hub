
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMissionsAPI } from './redux/Missions/Missions';
import './App.css';
import Navbar from './components/Navbar';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';
import { fetchRockets } from './redux/rockets/rockets';

function App() {
  const dispatch = useDispatch();


  React.useEffect(() => {
    dispatch(fetchRockets());
    dispatch(getMissionsAPI());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getMissionsAPI } from './redux/Missions/Missions';
import './App.css';
import Navbar from './components/Navbar';
import Missions from './pages/Missions';
import Profile from './pages/Profile';
import Rockets from './pages/Rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissionsAPI());
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/missions" element={<Missions />} />
      </Routes>
    </>
  );
}

export default App;

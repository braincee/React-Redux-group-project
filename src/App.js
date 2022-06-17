import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/pages/Navbar';
import Dragon from './components/pages/Dragon';
import Mission from './components/pages/Mission';
import MyProfile from './components/pages/MyProfile';
import Rocket from './components/pages/Rocket';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Rocket />} />
        <Route path="/missions" element={<Mission />} />
        <Route path="/dragons" element={<Dragon />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;

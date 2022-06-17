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
        <Route path="/rocket" element={<Rocket />} exact />
        <Route path="/missions" element={<Mission />} exact />
        <Route path="/dragons" element={<Dragon />} exact />
        <Route path="/profile" element={<MyProfile />} exact />
      </Routes>
    </div>
  );
}

export default App;

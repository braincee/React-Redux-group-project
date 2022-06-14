import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Dragon from './components/pages/Dragon';
import Mission from './components/pages/Mission';
import MyProfile from './components/pages/MyProfile';
import Rocket from './components/pages/Rocket';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="rocket" element={<Rocket />} exact="true" />
        <Route path="/missons" element={<Mission />} />
        <Route path="/dragons" element={<Dragon />} />
        <Route path="/profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;

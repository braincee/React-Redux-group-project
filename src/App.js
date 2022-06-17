import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Navbar from './components/pages/Navbar';
import Dragon from './components/pages/Dragon';
import Mission from './components/pages/Mission';
import MyProfile from './components/pages/MyProfile';
import Rocket from './components/pages/Rocket';
import { getDragons } from './redux/dragons/Dragons';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDragons());
  }, []);
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

import './App.css';
import { Routes, Route } from 'react-router-dom'

import StarshipList from './pages/StarshipList/StarshipList';
import StarshipDetails from './pages/StarshipPage/StarshipDetails'

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<StarshipList />}/>
        <Route path="starship" element={<StarshipDetails />}/>
      </Routes>
    </>
  );
}

export default App;

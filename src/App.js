import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import GameBoard from './components/GameBoard';
import SuccessScreen from './components/SuccessScreen';
import LoginPage from './components/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/game_start" element={<GameBoard />}/>
        <Route path="/game_result" element={<SuccessScreen/>}/>
      </Routes>
    </Router>
  );
}

export default App;
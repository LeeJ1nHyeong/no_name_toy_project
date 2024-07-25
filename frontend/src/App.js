import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AppBar from './components/appbar/AppBar';
import HomePage from './pages/HomePage';
import StrategyPage from './pages/StrategyPage';
import CharacterInfoSearchPage from './pages/CharacterInfoSearchPage';
import Error404Page from './pages/Error404Page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/strategy" element={<StrategyPage />} />
          <Route path="/character-info-search" element={<CharacterInfoSearchPage />} />
          <Route path="*" element={<Error404Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

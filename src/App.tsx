// src/App.tsx

import './App.css';
import SignupPage from './pages/Signup';
import SigninPage from './pages/Signin';
import NewsFeedPage from './pages/NewsFeedPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/news-feed" element={<NewsFeedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

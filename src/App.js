import React from 'react';
import './styles/style.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Error404 from './pages/Error404';

function App() {
  return (
    <Router>
      <div>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

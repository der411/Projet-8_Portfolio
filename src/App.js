import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/style.css';

// Importation dynamique des pages
const Home = React.lazy(() => import('./pages/Home'));
const Error404 = React.lazy(() => import('./pages/Error404'));

function App() {
  return (
    <Router>
      <div>
        <main>
          {/* Suspense affiche un fallback pendant le chargement des composants */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </Router>
  );
}

export default App;

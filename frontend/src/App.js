// src/App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Navigation from './components/Navigation';
import AppRoutes from './components/AppRoutes';
import Footer from './components/Footer';

const App = () => {
  return (
    
      <Router>
        <div className="app">
          <Navigation />
          <main className="main-content">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </Router>
  );
};

export default App;
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="home">
        <Header />
        <Home />
      </div>
    </Router>
  );
}

export default App;

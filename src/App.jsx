// src/App.js
import React from 'react';
import Navbar from '../components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
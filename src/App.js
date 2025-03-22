import React from 'react';
import Header from './components/Header';
import Skills from './components/Skills';
import CareerJourney from './components/CareerJourney';
import Education from './components/Education';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <CareerJourney />
        <Education />
        <Skills />
      </main>
    </div>
  );
}

export default App;

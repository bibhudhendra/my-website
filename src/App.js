import React from 'react';
import './App.css';
import Header from './components/Header';
import CareerJourney from './components/CareerJourney';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Education from './components/Education';
import NavigationPane from './components/NavigationPane';
import Thoughts from './components/Thoughts';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <NavigationPane />
        <main className="main-content">
          <Header />
          <Thoughts />
          <Skills />
          <CareerJourney />
          <Achievements />
          <Education />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;

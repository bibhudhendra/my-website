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
import Publications from './components/Publications';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <NavigationPane />
        <main className="main-content">
          <Header />
          <section id="thoughts">
            <Thoughts />
          </section>
          <section id="career">
            <CareerJourney />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="achievements">
            <Achievements />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="publications">
            <Publications/>
          </section>
          <section id="contact">
            <Contact />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;

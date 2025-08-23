import React from 'react';
import './App.css';
import Header from './components/Header';
import TimelineGraph from './components/TimelineGraph';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
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
          <section id="timeline">
            <TimelineGraph />
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="achievements">
            <Achievements />
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

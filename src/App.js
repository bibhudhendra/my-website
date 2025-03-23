import React from 'react';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import CareerJourney from './components/CareerJourney';
import Education from './components/Education';
import NavigationPane from './components/NavigationPane';
import Contact from './components/Contact';
import Publications from './components/Publications';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <NavigationPane />
        <main className="main-content">
          <Header />
          <section id="thoughts" className="thoughts-section">
            <div className="thoughts-content">
              <h2>Thoughts</h2>
              <p>
                I believe software has the power to reshape the way we live. Over the past 20-25 years, we've witnessed its transformative potential — but this is just the beginning. The exponential growth of the industry is yet to unfold.
              </p>
            </div>
          </section>
          <section id="skills">
            <Skills />
          </section>
          <section id="career">
            <CareerJourney />
          </section>
          <section id="education">
            <Education />
          </section>
          <section id="publications">
            <Publications />
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

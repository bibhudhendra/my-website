import React from 'react';
import './App.css';
import Header from './components/Header';
import Skills from './components/Skills';
import CareerJourney from './components/CareerJourney';
import Education from './components/Education';
import NavigationPane from './components/NavigationPane';

function App() {
  return (
    <div className="App">
      <NavigationPane />
      <Header />
      <main>
        <section id="about" className="about-section">
          <div className="about-content">
            <h2>About Me</h2>
            <p>
              I am a passionate software engineer with expertise in building scalable web applications.
              With a strong foundation in computer science and years of industry experience,
              I specialize in creating efficient, maintainable, and user-friendly solutions.
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
      </main>
    </div>
  );
}

export default App;

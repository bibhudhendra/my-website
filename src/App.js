import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Welcome to My Website</h1>
        <p>A modern React application</p>
      </header>
      
      <main className="main-content">
        <section className="card">
          <h2>Getting Started</h2>
          <p>This is a basic React application template. You can start building your website by modifying the components.</p>
        </section>

        <section className="card">
          <h2>Features</h2>
          <ul>
            <li>Modern React setup</li>
            <li>Clean and responsive design</li>
            <li>Easy to customize</li>
          </ul>
        </section>

        <section className="card">
          <h2>Next Steps</h2>
          <p>Start adding your own components and content to make this website unique!</p>
        </section>
      </main>
    </div>
  );
}

export default App;

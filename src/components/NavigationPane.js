import React from 'react';
import './NavigationPane.css';

const NavigationPane = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation-pane">
      <ul>
        <li onClick={() => scrollToSection('thoughts')}>
          <span className="nav-item">Thoughts</span>
        </li>
        <li onClick={() => scrollToSection('skills')}>
          <span className="nav-item">Skills</span>
        </li>
        <li onClick={() => scrollToSection('career')}>
          <span className="nav-item">Career Journey</span>
        </li>
        <li onClick={() => scrollToSection('education')}>
          <span className="nav-item">Education</span>
        </li>
        <li onClick={() => scrollToSection('publications')}>
          <span className="nav-item">Publications</span>
        </li>
        <li onClick={() => scrollToSection('contact')}>
          <span className="nav-item">Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationPane; 
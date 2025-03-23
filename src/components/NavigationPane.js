import React from 'react';
import './NavigationPane.css';

const NavigationPane = () => {
  const navLinks = [
    { id: 'thoughts', label: 'Thoughts' },
    { id: 'skills', label: 'Skills' },
    { id: 'career', label: 'Career' },
    { id: 'achievements', label: 'Key Achievements' },
    { id: 'education', label: 'Education' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navigation-pane">
      <ul>
        {navLinks.map((link) => (
          <li key={link.id} onClick={() => scrollToSection(link.id)}>
            <span className="nav-item">{link.label}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationPane; 
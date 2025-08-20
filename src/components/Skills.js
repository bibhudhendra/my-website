import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      emoji: '🤖',
      title: 'Building AI Agents',
      description: 'Developing intelligent conversational agents and automation systems'
    },
    {
      emoji: '💻',
      title: 'Backend Software Development',
      description: 'Scalable microservices and distributed systems architecture'
    },
    {
      emoji: '🎨',
      title: 'Frontend Software Development',
      description: 'Modern web applications and user interfaces'
    },
    {
      emoji: '☁️',
      title: 'AWS Cloud Technology',
      description: 'Cloud-native solutions and infrastructure management'
    }
  ];

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-category">
            <h3>
              <span className="skill-emoji">{skill.emoji}</span>
              {skill.title}
            </h3>
            <p className="skill-description">{skill.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

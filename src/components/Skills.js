import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'TypeScript']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Python', 'Java', 'SQL', 'MongoDB']
    },
    {
      category: 'Tools & Others',
      items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile']
    }
  ];

  return (
    <section className="skills-section">
      <h2>Key Skills</h2>
      <div className="skills-grid">
        {skills.map((skillGroup, index) => (
          <div key={index} className="skill-category">
            <h3>{skillGroup.category}</h3>
            <div className="skill-items">
              {skillGroup.items.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills; 
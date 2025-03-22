import React from 'react';
import amazonLogo from '../assets/logos/amazon-logo.png';
import olaLogo from '../assets/logos/olacabs-logo.png';
import './CareerJourney.css';

const CareerJourney = () => {
  const experiences = [
    {
      year: 'Oct 2023 - Present',
      title: 'Software Dev Engineer-II',
      company: 'Amazon',
      location: 'Hyderabad, India',
      description: 'Leading development of key features and mentoring junior developers.',
      technologies: ['React', 'Node.js', 'AWS'],
      logo: amazonLogo
    },
    {
      year: 'Jun 2021 - Sep 2023',
      title: 'Software Dev Engineer-I',
      company: 'Amazon',
      location: 'Hyderabad, India',
      description: 'Developed and maintained multiple web applications.',
      technologies: ['JavaScript', 'Python', 'MongoDB'],
      logo: amazonLogo
    },
    {
      year: 'Sep 2020 - Jun 2021',
      title: 'Software Dev Engineer-I',
      company: 'OlaFoods',
      location: 'Bangalore, India',
      description: 'Started career in software development.',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      logo: olaLogo
    },
    {
      year: 'May 2019 - Jul 2019',
      title: 'Software Developer Intern',
      company: 'OlaCabs',
      location: 'Bangalore, India',
      logo: olaLogo,
      description: 'Started career in software development.',
      technologies: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <section className="career-journey">
      <h2>Career Journey</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <div className="year">{exp.year}</div>
              <div className="company-header">
                {exp.logo && (
                  <div className="company-logo">
                    <img src={exp.logo} alt={`${exp.company} logo`} />
                  </div>
                )}
                <div className="company-info">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <div className="location">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <p>{exp.description}</p>
              <div className="technologies">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerJourney; 
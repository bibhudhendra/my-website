import React from 'react';
import './Education.css';

const Education = () => {
  const education = [
    {
      year: '2016 - 2020',
      institution: 'NIT Jamshedpur',
      degree: 'Computer Science and Engineering',
      type: 'college'
    },
    {
      year: '2014 - 2016',
      institution: 'Einstein Science College, Salipur',
      degree: 'Science',
      type: 'college'
    },
    {
      year: '2011 - 2014',
      institution: 'Palei High School, Palei',
      type: 'school'
    },
    {
      year: '2003 - 2011',
      institution: 'Saraswati Vidya Mandir, Barada',
      type: 'school'
    }
  ];

  return (
    <section className="education-section">
      <h2>Education</h2>
      <div className="education-timeline">
        {education.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-content">
              <div className="year">{edu.year}</div>
              <div className="institution-info">
                <h3>{edu.institution}</h3>
                {edu.degree && <p className="degree">{edu.degree}</p>}
              </div>
              <div className="education-type">
                <i className={`fas ${edu.type === 'college' ? 'fa-university' : 'fa-school'}`}></i>
                <span>{edu.type.charAt(0).toUpperCase() + edu.type.slice(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education; 
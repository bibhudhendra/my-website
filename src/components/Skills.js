import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = {
    'Frontend Development': {
      'Languages': [
        'HTML5',
        'CSS3',
        'JavaScript',
        'TypeScript'
      ],
      'Frameworks': [
        'Knockout.js'
      ]
    },
    'Backend Development': {
      'Languages': [
        'Java'
      ],
      'Technologies': [
        'RESTful APIs',
        'RPC',
        'Microservices',
        'WebSockets'
      ]
    },
    'Database': {
      'SQL': [
        'MySQL',
        'PostgreSQL'
      ],
      'NoSQL': [
        'Redis',
        'DynamoDB',
        'Cassandra',
        'Redshift'
      ]
    },
    'AWS': {
      'Compute': [
        'EC2',
        'Lambda',
        'ECS'
      ],
      'Storage': [
        'S3',
        'Redshift',
        'RDS'
      ],
      'Others': [
        'VPC',
        'Route 53',
        'API Gateway',
        'IAM'
      ]
    },
    'DSA': {
      'Programming Sites': [
        <a href="https://codeforces.com/profile/bibhudhendra" target="_blank" rel="noopener noreferrer">Codeforces</a>,
        <a href="https://www.codechef.com/users/bibhudhendra" target="_blank" rel="noopener noreferrer">CodeChef</a>,
        <a href="https://leetcode.com/u/bibhudhendra/" target="_blank" rel="noopener noreferrer">LeetCode</a>
      ]
    },
    'DevOps & Tools': [
      'Git',
      'Docker',
      'Kubernetes',
      'Jenkins',
      'CI/CD',
      'AWS'
    ]
  };

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-grid">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="skill-category">
            <h3>{category}</h3>
            {Array.isArray(items) ? (
              <ul>
                {items.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            ) : (
              <div className="subcategories">
                {Object.entries(items).map(([subcategory, subItems]) => (
                  <div key={subcategory} className="subcategory">
                    <h4>{subcategory}</h4>
                    <ul className="skills-list">
                      {subItems.map((skill) => (
                        <li key={typeof skill === 'string' ? skill : skill.props.href}>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills; 
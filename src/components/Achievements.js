import React from 'react';
import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: "Amazon Spotlight Award Winner",
      count: "4 times",
      period: "2021-2024",
      description: "Acknowledged for exceptional performance and significant contributions in the org at Amazon."
    },
    {
      title: "ACM ICPC Regionalist",
      count: "3 times",
      period: "2018-2019",
      description: "Qualified for ACM ICPC regional competitions"
    },
    {
      title: "Amazon VASTech Hackathon",
      count: "2nd Runners Up",
      period: "2024",
      description: "Secured third position in Amazon's VASTech hackathon"
    }
  ];

  return (
    <div className="achievements-container">
      <h2>Key Achievements</h2>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div key={index} className="achievement-card">
            <div className="achievement-header">
              <h3>{achievement.title}</h3>
              <span className="achievement-count">{achievement.count}</span>
            </div>
            <div className="achievement-period">{achievement.period}</div>
            <p className="achievement-description">{achievement.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements; 
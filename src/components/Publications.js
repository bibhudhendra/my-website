import React from 'react';
import './Publications.css';

const Publications = () => {
  const researchPublications = [
    {
      title: "Bell Pepper Leaf Disease Classification Using CNN",
      journal: "IEEE",
      year: "2020",
      link: "https://ieeexplore.ieee.org/document/9170728"
    }
  ];

  const articlePublications = [
    {
      title: "Modular multiplicative inverse from 1 to n",
      platform: "GeeksforGeeks",
      date: "2019",
      link: "https://www.geeksforgeeks.org/modular-multiplicative-inverse-1-n/"
    }
  ];

  return (
    <div className="publications-container">
      <h2>Publications</h2>
      
      <div className="publications-section">
        <h3>Research Publications</h3>
        <div className="publications-list">
          {researchPublications.map((pub, index) => (
            <div key={index} className="publication-item">
              <h4>{pub.title}</h4>
              <p className="authors">{pub.authors}</p>
              <p className="journal">{pub.journal}, {pub.year}</p>
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-link">
                Read Paper
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="publications-section">
        <h3>Article Publications</h3>
        <div className="publications-list">
          {articlePublications.map((article, index) => (
            <div key={index} className="publication-item">
              <h4>{article.title}</h4>
              <p className="platform">{article.platform}, {article.date}</p>
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="publication-link">
                Read Article
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publications; 
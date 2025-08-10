import React from 'react';
import profileImage from '../assets/photos/bibhudh-seattle-photo.png';
import './Header.css';

const Header = () => {
  const socialLinks = [
    // { name: 'GitHub', url: 'https://github.com/bibhudhendra', icon: 'fab fa-github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bibhu-pati-b05a0b150/', icon: 'fab fa-linkedin' }
  ];

  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-section">
          <div className="profile-image">
            <img src={profileImage} alt="Bibhu Pati" />
          </div>
          <div className="profile-info">
            <h1>Bibhu Pati</h1>
            <p className="title">Software Dev Engineer</p>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <i className={link.icon}></i>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

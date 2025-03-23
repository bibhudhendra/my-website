import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'patibibhudhendra@gmail.com';

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-info">
          <a href={`mailto:${email}`} className="contact-email">
            {email}
          </a>
          <button 
            onClick={copyToClipboard} 
            className="copy-button"
            aria-label="Copy email to clipboard"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
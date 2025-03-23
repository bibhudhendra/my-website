import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const email = 'patibibhudhendra@gmail.com';
  const phone = '+91-8083138399';

  const copyToClipboard = async (text, setCopied) => {
    try {
      await navigator.clipboard.writeText(text);
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
          <div className="contact-item">
            <a href={`mailto:${email}`} className="contact-email">
              {email}
            </a>
            <button 
              onClick={() => copyToClipboard(email, setCopiedEmail)} 
              className="copy-button"
              aria-label="Copy email to clipboard"
            >
              {copiedEmail ? 'Copied!' : 'Copy'}
            </button>
          </div>
          <div className="contact-item">
            <a href={`tel:${phone}`} className="contact-phone">
              {phone}
            </a>
            <button 
              onClick={() => copyToClipboard(phone, setCopiedPhone)} 
              className="copy-button"
              aria-label="Copy phone number to clipboard"
            >
              {copiedPhone ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 
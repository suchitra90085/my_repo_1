import React from 'react';
import './css/Contact.css'; // Import the CSS file

const Contact = () => {
  const handlePhoneClick = () => {
    // You can add any additional functionality here if needed
    window.location.href = 'tel:+1234567890';
  };

  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact</h2>
      <div className="contact-icons">
        {/* Phone Icon */}
        <a onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
          <img src="https://img.icons8.com/ios-filled/50/phone.png" alt="Phone" />
          <span className="tooltip">63....10</span>
        </a>

        {/* Mail Icon */}
        <a onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
          <img src="https://img.icons8.com/ios-filled/50/email.png" alt="Mail" />
          <span className="tooltip">suchitram2113@gmail.com</span>
        </a>

        {/* Twitter Icon */}
        <a onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
          <img src="https://img.icons8.com/ios-filled/50/twitter.png" alt="Twitter" />
          <span className="tooltip">@suchitra</span>
        </a>

        {/* LinkedIn Icon */}
        <a onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
          <img src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="LinkedIn" />
          <span className="tooltip">https://www.linkedin.com/in/suchitra-</span>
        </a>

        {/* Instagram Icon */}
        <a onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
          <img src="https://img.icons8.com/ios-filled/50/instagram-new.png" alt="Instagram" />
          <span className="tooltip">_suchitra_m_21</span>
        </a>

        {/* Snapchat Icon */}
        <a onClick={handlePhoneClick} style={{ cursor: 'pointer' }}>
          <img src="https://img.icons8.com/ios-filled/50/snapchat.png" alt="Snapchat" />
          <span className="tooltip">suchitra242034</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;

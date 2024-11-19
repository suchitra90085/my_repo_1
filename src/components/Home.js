import React from 'react';
import './css/Home.css';
import aboutImage from './suchi.jpeg'; // Importing your image

const Home = () => {
  return (
    <div className="container">
      <img src={aboutImage} alt="background" className="about-image" />
      <div className="about-text">
        <h2>Suchitra M</h2>
        <p>
          <h4>Front End Developer.</h4>
        </p>
      </div>
    </div>
  );
};

export default Home;










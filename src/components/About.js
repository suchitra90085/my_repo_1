import React from 'react';
import './css/About.css';

const About = () => {
    return (
        <div className="app-container">
            {/* Heading at the top of the container */}
            <h2 className="title">About</h2>
            
            <div className="content-container">
            <h3 className="title">About Myself</h3>
                <p className="description">
                Web development student at Rani Channamma University Belagavi, passionate about creating clean, creative, and user-friendly interfaces that make a difference.
                </p>
                <hr />
                
                <div className="skills-container">
                    <ul className="skills-list">
                        <li>Web design</li>
                        <li>User experience</li>
                        <li>Inclusive design</li>
                    </ul>
                    <ul className="skills-list">
                        <li>Focus group testing</li>
                        <li>Mobile user interfaces</li>
                        <li>Graphic design</li>
                    </ul>
                </div>
                <hr />
                <p className="passion">
                    I'm passionate about solving problems in new creative ways to drive innovation. By leveraging my Front End Application experience, I continually look for new and better ways to make user experiences more intuitive and engaging.
                </p>
            </div>
        </div>
    );
};

export default About;

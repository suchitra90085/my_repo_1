import React from 'react';
import './css/Portfolio.css';

const Portfolio = () => {
    return (
        <div className="portfolio">
            {/* <nav className="nav">
                <a className="nav-link" href="#">Home</a>
                <a className="nav-link" href="#">About</a>
                <a className="nav-link" href="#">Portfolio</a>
                <a className="nav-link" href="#">Contact</a>
            </nav> */}
            <div className="text-center mb-6"><br></br>
                <h2 className="title">Portfolio</h2>
            </div>
            <div className="image-container">
                {/* <img 
                    alt="A desk with a keyboard, notebook, and various office supplies" 
                    className="portfolio-image"  */}
                    {/* src="https://storage.googleapis.com/a1aa/image/JEArLkDcozYqFNxog8y6C6C6bpXtXOvuYjBMsh9JnhI7uU8E.jpg"  */}
                
            </div>
            <div className="grid">
                <div className="card">
                    <h2 className="card-title">Hand Gesture Sign Language Recognition System </h2>
                    <p>A real-time system that uses a laptop camera to capture the hand gesture,converting them into text to enable clear communication for people who are hard of hearing.</p>
                </div>
                <div className="card">
                    <h2 className="card-title">Parking Management System</h2>
                    <p>The system enable the users to book a Parking slot online and temporarily block it until they entire the facility,ensuring that the reserved spot remains available when they arrive.</p>
                </div>
                <div className="card">
                    <h2 className="card-title">Web Development Internship</h2>
                    <p>completed hands-on training in web development at Infynow Software Solutions LLP.Gained expertise in designing functional and responsive websites.</p>
                </div>
                <div className="card">
                    <h2 className="card-title">Resume Website</h2>
                    <p>Designed and developed a personalresume website using HTML,CSS, and JavaScript. Showcases projects,skills,and accomplishments effectively</p>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;

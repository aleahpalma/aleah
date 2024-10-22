import React, { useState } from 'react';
import './App.css'; // The CSS file
import backgroundGif from './assets/background.gif'; // gif background
import myPicture from './assets/grad.jpg'; // about pic
import logo from './assets/logo.png'; // logo 
import project1 from './assets/Project1.png'; // project image 1
import project2 from './assets/Project2.png'; // project image 2
import project3 from './assets/Projet2.png'; // project image 3
import igLogo from './assets/iglogo.png'; // Import Instagram logo
import emailLogo from './assets/emaillogo.png'; // Import Email log

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="container">
      {/* Home Page Section with Background GIF */}
      <div className="home-page">
        <header className="header">
          <img src={logo} alt="logo" className="logo" />
          <div>
            <button onClick={() => setActiveSection('home')}>Home</button>
            <button onClick={() => setActiveSection('about')}>About</button>
            <button onClick={() => setActiveSection('projects')}>Projects</button>
            <button onClick={() => setActiveSection('contact')}>Contact</button>
          </div>
        </header>

        {activeSection === 'home' && (
          <div className="centered-text">
            <h1>Hello, I'm Aleah</h1>
            <p>Welcome to my portfolio website. Here you can find my projects and learn more about me.</p>
            <button className="contact-button" onClick={() => setActiveSection('contact')}>Contact</button>
          </div>
        )}

        {/* About Section */}
        {activeSection === 'about' && (
          <section className="about-section">
            <div className="about-content">
              <img src={myPicture} alt="My Picture" className="about-picture" />
              <div className="about-text">
                <h2>Aleah Mae Palma</h2>
                <p>Currently a student with a passion for design. I’m always looking for ways to improve my skills and explore new techniques in design. I’m enthusiastic about creating unique and engaging user experiences as I continue to learn and grow in this field.</p>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && (
          <section className="projects-section">
            <div className="projects-grid">
              <div className="project-item">
                <img src={project1} alt="Project 1" className="project-image" />
                <p className="project-description">Project 1:Log In Page Design </p>
              </div>

              <div className="project-item">
                <img src={project2} alt="Project 2" className="project-image" />
                <p className="project-description">Project 2:  School App Figma Design</p>
             
              </div>

              <div className="project-item">
                <img src={project3} alt="Project 3" className="project-image" />
                <p className="project-description">Project 3: School App Figma Design</p>
              </div>
            </div>
          </section>
        )}

      {/* Contact Section */}
      {activeSection === 'contact' && (
        <section className="contact-section">
          <h2>Contact Me</h2>
          <p>You can reach me via Instagram or Email:</p>

          <div className="contact-item">
            <a href="https://www.instagram.com/alliyyy.m/" target="_blank" rel="noopener noreferrer">
              <img src={igLogo} alt="Instagram Logo" className="contact-logo" />
            </a>
            <p>Follow me on Instagram</p>
          </div>

          <div className="contact-item">
            <a href="mailto:haelaeampalma21@gmail.com">
              <img src={emailLogo} alt="Email Logo" className="contact-logo" />
            </a>
            <p>Send me an Email</p>
          </div>
        </section>
      )}
      </div>
    </div>
  );
}

export default App;
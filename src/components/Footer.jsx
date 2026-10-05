import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/LENSMATCHNEW.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-columns">
          {/* LEFT */}
          <div className="footer-col footer-col-brand">
            <Link to="/" className="footer-logo">
              <img src={logoImage} alt="LensMatch Logo" className="footer-logo-img" />
            </Link>
            <p className="footer-desc">
              AI-powered eyewear recommendation and augmented reality frame preview system developed for Franselle Optical Clinic.
            </p>
          </div>

          {/* MIDDLE */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/download">Download</Link></li>
              <li><Link to="/guide">Guide</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* RIGHT */}
          <div className="footer-col">
            <h4 className="footer-heading">Information</h4>
            <ul className="footer-links">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/dev">Dev</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>&copy; 2026 LensMatch</p>
          <p>Developed for Franselle Optical Clinic</p>
          <p className="footer-tag">BSIT Capstone Project</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


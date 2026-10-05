import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download, Sun, Moon } from 'lucide-react';
import logoImage from '../assets/LENSMATCHNEW.png';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('lensmatch-theme') || 'light';
  });
  const location = useLocation();

  // Sync theme with html data-theme attribute
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('lensmatch-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Close menu automatically whenever the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="navbar-wrapper">
      <nav className="navbar" aria-label="Main Navigation">
        <div className="navbar-container container">
          <NavLink to="/" className="navbar-logo" onClick={closeMenu} aria-label="LensMatch Home">
            <img src={logoImage} alt="LensMatch" className="navbar-logo-img" />
          </NavLink>

          {/* Navigation Menu (Desktop inline, Mobile full solid drawer) */}
          <div 
            id="primary-nav-menu"
            className={`nav-menu-wrapper ${isOpen ? 'open' : ''}`}
          >
            <ul className="nav-menu">
              <li className="nav-item">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/download" 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Download
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/guide" 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Guide
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/dev" 
                  className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
                  onClick={closeMenu}
                >
                  Dev
                </NavLink>
              </li>
            </ul>

            <div className="nav-cta-wrapper">
              <NavLink 
                to="/download" 
                className="btn btn-primary nav-cta-btn"
                onClick={closeMenu}
              >
                <Download size={18} /> Get App (APK)
              </NavLink>
              <div className="nav-drawer-footer">
                <span>LensMatch AR • Franselle Optical Clinic</span>
              </div>
            </div>
          </div>

          {/* Header Action Controls */}
          <div className="navbar-controls">
            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Orange Mode'}
              title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Orange Mode'}
            >
              {theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}
            </button>

            <button
              type="button"
              className="nav-toggle-btn"
              onClick={toggleMenu}
              aria-expanded={isOpen}
              aria-controls="primary-nav-menu"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

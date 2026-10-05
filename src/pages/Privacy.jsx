import React from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import './Legal.css';

const Privacy = () => {
  const sections = [
    { id: 'sec-1', title: '1. Information We Collect' },
    { id: 'sec-2', title: '2. Authentication' },
    { id: 'sec-3', title: '3. Face Shape Analysis' },
    { id: 'sec-4', title: '4. AI-Powered Recommendations' },
    { id: 'sec-5', title: '5. Augmented Reality Frame Preview' },
    { id: 'sec-6', title: '6. Reservations' },
    { id: 'sec-7', title: '7. Storage and Security' },
    { id: 'sec-8', title: '8. Third-Party Services' },
    { id: 'sec-9', title: '9. Data Retention and Account Deletion' },
    { id: 'sec-10', title: '10. Your Privacy Rights' },
    { id: 'sec-11', title: '11. Children\'s Privacy' },
    { id: 'sec-12', title: '12. Changes to This Privacy Policy' }
  ];

  const sectionIds = sections.map((s) => s.id);
  const { activeId, tocRef, scrollToSection } = useScrollSpy(sectionIds, 135);

  return (
    <div className="legal-container container animate-fade-in">
      {/* Header */}
      <header className="legal-header">
        <h1 className="legal-title">Privacy Policy</h1>
        <p className="legal-subtitle">
          This Privacy Policy explains how LensMatch collects, uses, processes, and protects your information when you use our mobile application and services for Franselle Optical Clinic.
        </p>
        <div className="legal-meta">
          <span>Last Updated: September 2026</span>
          <span>•</span>
          <span>Privacy Version 1.0</span>
        </div>
      </header>

      {/* Main Grid */}
      <div className="legal-content-wrapper">
        {/* Desktop Sticky Sidebar TOC */}
        <aside className="legal-toc-desktop" ref={tocRef} aria-label="Table of contents">
          <h3 className="legal-toc-title">On this page</h3>
          <ul className="legal-toc-list">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a 
                  href={`#${sec.id}`}
                  data-section={sec.id}
                  className={`legal-toc-link ${activeId === sec.id ? 'active' : ''}`}
                  onClick={(e) => scrollToSection(e, sec.id)}
                >
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Mobile Collapsible TOC */}
        <details className="legal-toc-mobile">
          <summary>
            <span>On this page</span>
            <span className="legal-toc-mobile-badge">
              {sections.find((s) => s.id === activeId)?.title.split('.')[0] || 'TOC'}
            </span>
          </summary>
          <ul className="legal-toc-mobile-list">
            {sections.map((sec) => (
              <li key={sec.id}>
                <a 
                  href={`#${sec.id}`}
                  className={activeId === sec.id ? 'active' : ''}
                  onClick={(e) => scrollToSection(e, sec.id)}
                >
                  {sec.title}
                </a>
              </li>
            ))}
          </ul>
        </details>

        {/* Legal Content Body */}
        <article className="legal-article">
          <section id="sec-1" className="legal-section">
            <h2>1. Information We Collect</h2>
            <p>
              LensMatch collects specific information necessary to provide AI-powered eyewear recommendations, perform face shape analysis, enable AR previews, and process clinic reservations.
            </p>
            <ul>
              <li><strong>Account Information:</strong> Name, email address, password hash, and contact details provided during user registration.</li>
              <li><strong>Facial Geometry Data:</strong> Facial landmark coordinates calculated during the camera scanning process to determine face shape proportions.</li>
              <li><strong>Preferences & Reservation Data:</strong> Saved eyewear styles, AI recommendation logs, and reservation requests submitted for Franselle Optical Clinic.</li>
              <li><strong>Device Information:</strong> Operating system version, app diagnostic logs, and device model used to optimize recommendation and AR performance.</li>
            </ul>
          </section>

          <section id="sec-2" className="legal-section">
            <h2>2. Authentication</h2>
            <p>
              User account creation and authentication are required to save frame preferences, access personalized AI eyewear recommendations, and manage reservation requests.
            </p>
            <p>
              Authentication tokens and user credentials are managed securely to safeguard your active session and profile information.
            </p>
          </section>

          <section id="sec-3" className="legal-section">
            <h2>3. Face Shape Analysis</h2>
            <p>
              LensMatch uses real-time computer vision to perform facial landmark detection, measuring facial proportions such as jawline width, cheekbone distance, and forehead height.
            </p>
            <p>
              These calculated landmark metrics are used strictly to classify your face shape (such as Oval, Round, Square, Heart, or Diamond) as the foundation for customized frame recommendations. Camera streams processed during face scanning are evaluated transiently on device and are not stored as public photo files.
            </p>
          </section>

          <section id="sec-4" className="legal-section">
            <h2>4. AI-Powered Recommendations</h2>
            <p>
              Calculated face shape parameters are processed through our Google Gemini-powered recommendation model to identify optimal frame shapes, rim styles, and proportions.
            </p>
            <p>
              Recommendation queries utilize anonymized metric parameters to generate frame matches and do not transmit personally identifiable biometric files to external generative services.
            </p>
          </section>

          <section id="sec-5" className="legal-section">
            <h2>5. Augmented Reality Frame Preview</h2>
            <p>
              Our Unity-based Augmented Reality engine projects 3D digital eyewear models onto your live camera view, allowing you to preview how recommended frames look in real-time.
            </p>
            <p>
              AR camera rendering operates strictly live on your device display. AR camera feeds are not recorded, stored, captured, or transmitted to external servers.
            </p>
          </section>

          <section id="sec-6" className="legal-section">
            <h2>6. Reservations</h2>
            <p>
              When you reserve an eyewear frame through LensMatch, your selected frame ID, account contact information, and preferred reservation timestamp are transmitted to Franselle Optical Clinic.
            </p>
            <p>
              Clinic personnel use this reservation information strictly to confirm frame inventory and prepare your selected frames for your scheduled clinic consultation.
            </p>
          </section>

          <section id="sec-7" className="legal-section">
            <h2>7. Storage and Security</h2>
            <p>
              We implement industry-standard administrative, technical, and physical safeguards to protect your account information and reservation data against unauthorized access, disclosure, or loss.
            </p>
            <p>
              All network communications between the mobile application and backend services are secured using HTTPS/TLS encryption. Access to stored reservation data is restricted strictly to authorized staff supporting Franselle Optical Clinic.
            </p>
          </section>

          <section id="sec-8" className="legal-section">
            <h2>8. Third-Party Services</h2>
            <p>
              LensMatch integrates Google Gemini AI APIs for recommendation intelligence and Unity engine technologies for Augmented Reality rendering.
            </p>
            <p>
              These integrated service providers process operational data solely to support app functionality in compliance with applicable confidentiality and data protection standards.
            </p>
          </section>

          <section id="sec-9" className="legal-section">
            <h2>9. Data Retention and Account Deletion</h2>
            <p>
              Personal account data and reservation records are retained for as long as your account remains active or as required to fulfill clinic reservations.
            </p>
            <p>
              You have the right to request account deletion at any time in-app or by contacting support. Upon account deletion, your profile credentials, saved preferences, and personal reservation history are permanently removed.
            </p>
          </section>

          <section id="sec-10" className="legal-section">
            <h2>10. Your Privacy Rights</h2>
            <p>You maintain full control over your personal information:</p>
            <ul>
              <li><strong>Access & Correction:</strong> You may view and update your profile information within your account settings.</li>
              <li><strong>Deletion:</strong> You may request complete erasure of your account and personal history.</li>
              <li><strong>Consent Revocation:</strong> You may withdraw camera permissions through your mobile device settings, which disables live face shape scanning and AR preview features.</li>
            </ul>
          </section>

          <section id="sec-11" className="legal-section">
            <h2>11. Children's Privacy</h2>
            <p>
              LensMatch is intended for general consumer use and does not knowingly collect personal information from children under the age of 13 without verifiable parental or guardian consent.
            </p>
          </section>

          <section id="sec-12" className="legal-section">
            <h2>12. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect system updates or legal compliance changes. Modified policies will be published on this page with an updated revision date and version number.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Privacy;

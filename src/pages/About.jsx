import React from 'react';
import './About.css';
import { 
  Sparkles, 
  ScanFace, 
  Box, 
  MoveRight, 
  CheckCircle2, 
  Building2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container container animate-fade-in">
      <div className="about-hero">
        <span className="about-badge">BSIT Capstone Project • TIP Manila</span>
        <h1 className="about-title">About LensMatch</h1>
        <p className="about-subtitle">
          An AI-Powered Eyewear Recommendation and Augmented Reality Frame Preview System Based on Face Shape Analysis developed for <strong>Franselle Optical Clinic</strong> in Quiapo, Manila.
        </p>
      </div>

      {/* General Objective Banner */}
      <div className="general-objective-card">
        <div className="gen-badge">General Objective</div>
        <h2>Project Purpose</h2>
        <p>
          To develop <strong>LensMatch</strong>, an Android-based eyewear recommendation application that combines face shape analysis, artificial intelligence, and augmented reality technologies to improve the eyewear selection experience of customers at Franselle Optical Clinic.
        </p>
      </div>

      {/* Three Specific Objectives Grid */}
      <div className="objectives-header">
        <span className="section-badge">Manuscript Alignment</span>
        <h2>Specific Project Objectives</h2>
        <p>The system was designed and evaluated according to three core technical objectives:</p>
      </div>

      <div className="about-grid">
        {/* Objective 1 */}
        <div className="about-card">
          <div className="card-top-row">
            <ScanFace size={34} className="about-icon" />
            <span className="objective-number">Objective 1</span>
          </div>
          <h3>Face Shape Analysis (MediaPipe Face Mesh)</h3>
          <p>
            To develop a face shape analysis feature using <strong>MediaPipe Face Mesh</strong> that identifies and classifies the user's face shape through facial landmark detection into six distinct categories: <strong>Oval, Round, Square, Heart, Oblong, and Diamond</strong>.
          </p>
          <div className="card-tech-footer">
            <span>Tech: MediaPipe 468 Face Mesh</span>
          </div>
        </div>

        {/* Objective 2 */}
        <div className="about-card">
          <div className="card-top-row">
            <Sparkles size={34} className="about-icon" />
            <span className="objective-number">Objective 2</span>
          </div>
          <h3>AI Eyewear Recommendation (Gemini API)</h3>
          <p>
            To integrate an AI-powered eyewear recommendation feature using the <strong>Gemini API</strong> that generates personalized frame suggestions based on the user's identified face shape, aesthetic contrast, and optical fit compatibility.
          </p>
          <div className="card-tech-footer">
            <span>Tech: Google Gemini API & Prompt Engineering</span>
          </div>
        </div>

        {/* Objective 3 */}
        <div className="about-card">
          <div className="card-top-row">
            <Box size={34} className="about-icon" />
            <span className="objective-number">Objective 3</span>
          </div>
          <h3>Augmented Reality Frame Preview (Unity 3D)</h3>
          <p>
            To implement an Augmented Reality (AR) frame preview feature using <strong>Unity 3D</strong> that enables users to realistically visualize different eyewear frame styles overlaid on their face via the device camera before making a selection.
          </p>
          <div className="card-tech-footer">
            <span>Tech: Unity 3D Engine & Real-Time Camera Projection</span>
          </div>
        </div>
      </div>

      {/* Dual System Ecosystem: Mobile App & Staff Web Portal */}
      <div className="ecosystem-section">
        <h2>Two Components of the LensMatch Platform</h2>
        <div className="ecosystem-grid">
          <div className="ecosystem-card">
            <div className="eco-icon-box">
              <ScanFace size={26} />
            </div>
            <h3>1. LensMatch Mobile Application</h3>
            <p>
              The customer-facing Android app enabling users to capture facial scans, receive Gemini-powered frame recommendations, preview frames in real-time Unity AR, browse catalog frames, and submit frame reservations.
            </p>
          </div>
          <div className="ecosystem-card card-portal">
            <div className="eco-icon-box eco-icon-portal">
              <Building2 size={26} />
            </div>
            <h3>2. LensMatch Staff Web Portal</h3>
            <p>
              The centralized administrative web portal for authorized personnel at Franselle Optical Clinic to manage customer records, update frame catalog availability, and process frame reservations in real-time.
            </p>
          </div>
        </div>
      </div>

      {/* Significance & Beneficiaries Section */}
      <div className="significance-section">
        <h2>Value Proposition & Significance</h2>
        <div className="significance-grid">
          <div className="significance-item">
            <CheckCircle2 size={20} className="check-icon" />
            <div>
              <h4>For Customers</h4>
              <p>Eliminates guesswork and manual trial-and-error fitting by providing data-backed face shape classifications and real-time AR frame visualization.</p>
            </div>
          </div>
          <div className="significance-item">
            <CheckCircle2 size={20} className="check-icon" />
            <div>
              <h4>For Franselle Optical Clinic</h4>
              <p>Modernizes optical consultation, expedites frame selection consultations, and manages reservations efficiently through Firebase Cloud Firestore synchronization.</p>
            </div>
          </div>
          <div className="significance-item">
            <CheckCircle2 size={20} className="check-icon" />
            <div>
              <h4>For Optical Retail & IT Research</h4>
              <p>Serves as a pioneering Philippine case study integrating computer vision, large language models, and mobile augmented reality in clinical retail.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-cta">
        <h2>Ready to Experience LensMatch?</h2>
        <p>Download the official Android companion application or explore the user guide.</p>
        <div className="about-cta-buttons">
          <button type="button" className="btn btn-primary" onClick={() => navigate('/download')}>
            Download Application <MoveRight size={18} />
          </button>
          <button type="button" className="btn btn-outline" onClick={() => navigate('/guide')}>
            View Step-by-Step Guide
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;

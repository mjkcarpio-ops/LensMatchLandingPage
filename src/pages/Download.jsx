import React, { useState } from 'react';
import { 
  Download as DownloadIcon, 
  ShieldCheck, 
  CheckCircle2, 
  Smartphone, 
  Eye, 
  Info
} from 'lucide-react';
import eyeglass1 from '../assets/eyeglass1.webp';
import eyeglass2 from '../assets/eyeglass2.webp';
import eyeglass3 from '../assets/eyeglass3.png';
import logoImage from '../assets/LENSMATCHNEW.png';
import './Download.css';

const frames = [
  {
    id: 'aviator',
    name: 'Aviator Frame',
    category: 'Double Bridge Aviator',
    tag: 'Clinic Classic',
    shape: 'Teardrop Aviator',
    material: 'Aerospace Grade Titanium',
    bestFor: ['Square', 'Heart', 'Oval'],
    color: 'Silver (#D1D1CF) / Gold (#D4AF37)',
    weight: '14g',
    dimensions: '54 - 18 - 140 mm',
    image: eyeglass1,
    arBadge: 'Unity 3D AR Frame Preview',
    desc: 'Lightweight titanium frame with dual-bridge geometry, suited for oval and square facial structures.'
  },
  {
    id: 'wayfarer',
    name: 'Wayfarer Frame',
    category: 'Soft Rectangular Wayfarer',
    tag: 'Staff Choice',
    shape: 'Soft Wayfarer',
    material: 'Organic Handcrafted Acetate',
    bestFor: ['Round', 'Oval', 'Diamond'],
    color: 'Deep Black (#171717)',
    weight: '19g',
    dimensions: '52 - 19 - 145 mm',
    image: eyeglass2,
    arBadge: 'Unity 3D AR Frame Preview',
    desc: 'Classic acetate silhouette with steel core reinforcement, ideal for round and diamond face shapes.'
  },
  {
    id: 'geometric',
    name: 'Geometric Frame',
    category: 'Hexagonal Contemporary',
    tag: 'New Release',
    shape: 'Hexagonal Geometric',
    material: 'Flexible Beta-Memory Alloy',
    bestFor: ['Oval', 'Round', 'Oblong'],
    color: 'Satin Gold (#D4AF37)',
    weight: '12g',
    dimensions: '50 - 20 - 142 mm',
    image: eyeglass3,
    arBadge: 'Unity 3D AR Frame Preview',
    desc: 'Contemporary polygonal outline crafted from memory beta-metal that flexes effortlessly without losing shape.'
  }
];

const Download = () => {
  const [activeFrameIndex, setActiveFrameIndex] = useState(0);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const activeFrame = frames[activeFrameIndex];

  const handleDownloadClick = () => {
    setDownloadModalOpen(true);
  };

  return (
    <div className="download-page animate-fade-in">
      <div className="container">
        {/* Header Hero Section Aligned with Manuscript Title */}
        <header className="download-hero">
          <div className="download-badge">
            <Smartphone size={15} />
            <span>Official Android APK • Franselle Optical Clinic</span>
          </div>
          <h1 className="download-main-title">
            Download the <span className="highlight-text">LensMatch</span> Android Application
          </h1>
          <p className="download-main-subtitle">
            An AI-Powered Eyewear Recommendation and Augmented Reality Frame Preview System Based on Face Shape Analysis for Franselle Optical Clinic.
          </p>
        </header>

        {/* Primary 2-Column Responsive Workspace Grid */}
        <div className="download-workspace-grid">
          {/* Column 1: App Specifications & Download Hub */}
          <div className="download-hub-card">
            <div className="app-card-header">
              <div className="app-logo-badge">
                <img src={logoImage} alt="LensMatch Logo" className="app-badge-logo-img" />
              </div>
              <div className="app-card-title-group">
                <h3>LensMatch Android Client</h3>
                <span className="app-release-tag">v1.0.0-rc2 • Built for Franselle Optical Clinic</span>
              </div>
            </div>

            {/* App Specs Grid Aligned with Technical Architecture */}
            <div className="app-specs-grid">
              <div className="spec-tile">
                <span className="spec-label">Face Shape Analyzer</span>
                <span className="spec-val">MediaPipe Face Mesh</span>
              </div>
              <div className="spec-tile">
                <span className="spec-label">AI Recommendation</span>
                <span className="spec-val">Google Gemini API</span>
              </div>
              <div className="spec-tile">
                <span className="spec-label">Frame Preview Engine</span>
                <span className="spec-val">Unity 3D Engine</span>
              </div>
              <div className="spec-tile">
                <span className="spec-label">Face Classifications</span>
                <span className="spec-val">7 Shapes (including Triangle)</span>
              </div>
              <div className="spec-tile">
                <span className="spec-label">Backend & Storage</span>
                <span className="spec-val">Firebase & Cloud Firestore</span>
              </div>
              <div className="spec-tile">
                <span className="spec-label">Partner Clinic</span>
                <span className="spec-val">Franselle Optical (Quiapo)</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="download-actions-row">
              <button 
                type="button" 
                className="btn btn-primary download-primary-btn" 
                onClick={handleDownloadClick}
              >
                <DownloadIcon size={20} />
                <span>Download LensMatch APK (68.4 MB)</span>
              </button>
            </div>

            {/* Security Guarantee */}
            <div className="security-notice">
              <ShieldCheck size={18} className="shield-icon" />
              <span>Verified Safe APK • MediaPipe Landmark Processing • Firebase Synced</span>
            </div>

            {/* 3-Step Quick Install Instructions */}
            <div className="install-steps-wrapper">
              <h4 className="install-steps-title">
                <Info size={16} /> Quick 3-Step Installation Guide
              </h4>
              <div className="install-steps-grid">
                <div className="install-step-card">
                  <div className="step-number">1</div>
                  <div className="step-text">
                    <strong>Download APK</strong>
                    <p>Tap download to save the APK file onto your Android device (Android 8.0+).</p>
                  </div>
                </div>
                <div className="install-step-card">
                  <div className="step-number">2</div>
                  <div className="step-text">
                    <strong>Allow Installation</strong>
                    <p>In Android Settings &gt; Security, enable 'Install from this source' for your browser.</p>
                  </div>
                </div>
                <div className="install-step-card">
                  <div className="step-number">3</div>
                  <div className="step-text">
                    <strong>Open & Preview</strong>
                    <p>Tap the APK, install, scan your face shape, and preview frames with Unity 3D AR.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Interactive AR Frame Preview Studio (Unity 3D) */}
          <div className="tryon-studio-card preview-studio-card">
            <div className="studio-header">
              <div className="studio-header-left">
                <span className="pulse-indicator"></span>
                <span className="studio-heading">Unity 3D AR Frame Preview Studio</span>
              </div>
              <span className="studio-frame-tag">{activeFrame.tag}</span>
            </div>

            {/* Display Area for Active Frame */}
            <div className="studio-display-stage">
              <div className="studio-badge-overlay">
                <span className="ar-badge-pill">
                  <Eye size={14} /> {activeFrame.arBadge}
                </span>
              </div>

              <div className="active-frame-image-wrapper">
                <img 
                  key={activeFrame.id}
                  src={activeFrame.image} 
                  alt={activeFrame.name} 
                  className="active-frame-img animate-fade-in" 
                />
              </div>

              <div className="active-frame-details">
                <div className="frame-meta-header">
                  <h3 className="frame-name">{activeFrame.name}</h3>
                  <span className="frame-category">{activeFrame.category}</span>
                </div>
                <p className="frame-description">{activeFrame.desc}</p>

                {/* Measurements & Specs */}
                <div className="frame-specs-matrix">
                  <div className="matrix-item">
                    <span className="matrix-label">Dimensions</span>
                    <span className="matrix-value">{activeFrame.dimensions}</span>
                  </div>
                  <div className="matrix-item">
                    <span className="matrix-label">Weight</span>
                    <span className="matrix-value">{activeFrame.weight}</span>
                  </div>
                  <div className="matrix-item">
                    <span className="matrix-label">Material</span>
                    <span className="matrix-value">{activeFrame.material}</span>
                  </div>
                  <div className="matrix-item">
                    <span className="matrix-label">Color Finish</span>
                    <span className="matrix-value">{activeFrame.color}</span>
                  </div>
                </div>

                {/* Face Fit Badges */}
                <div className="fit-recommendations">
                  <span className="fit-title">Compatible Face Shapes:</span>
                  <div className="fit-chips">
                    {activeFrame.bestFor.map((shape) => (
                      <span key={shape} className="fit-chip">
                        <CheckCircle2 size={13} /> {shape} Face
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Frame Selector Chips */}
            <div className="studio-selector-section">
              <span className="selector-title">Select Frame to Preview in Catalog:</span>
              <div className="frame-selector-row">
                {frames.map((frame, index) => (
                  <button
                    key={frame.id}
                    type="button"
                    className={`frame-thumb-btn ${index === activeFrameIndex ? 'active' : ''}`}
                    onClick={() => setActiveFrameIndex(index)}
                    aria-label={`Preview ${frame.name}`}
                  >
                    <img src={frame.image} alt={frame.name} className="thumb-preview-img" />
                    <span className="thumb-name">{frame.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Download Release Notification Modal */}
        {downloadModalOpen && (
          <div className="download-modal-overlay" onClick={() => setDownloadModalOpen(false)}>
            <div className="download-modal-content animate-fade-in" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-icon-badge">
                  <DownloadIcon size={26} />
                </div>
                <h3>LensMatch Android Application APK</h3>
              </div>
              <div className="modal-body">
                <p>
                  Download <strong>lensmatch-v1.0.0.apk (68.4 MB)</strong> with MediaPipe Face Mesh, Gemini AI, and Unity 3D AR Frame Preview.
                </p>
                <div className="modal-info-box">
                  <div className="info-row">
                    <span>Package:</span>
                    <span>com.franselle.lensmatch</span>
                  </div>
                  <div className="info-row">
                    <span>Status:</span>
                    <span className="status-live">Ready for Installation</span>
                  </div>
                  <div className="info-row">
                    <span>Target:</span>
                    <span>Android 8.0+ (ARM64 / x86_64)</span>
                  </div>
                </div>
                <p className="modal-helper-text">
                  After downloading, open your device's Downloads folder and tap the APK to install the LensMatch application.
                </p>
              </div>
              <div className="modal-actions">
                <button 
                  type="button" 
                  className="btn btn-outline" 
                  onClick={() => setDownloadModalOpen(false)}
                >
                  Close
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => {
                    alert("LensMatch APK download initiated! (File: lensmatch-v1.0.0.apk)");
                    setDownloadModalOpen(false);
                  }}
                >
                  Confirm Download
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Download;

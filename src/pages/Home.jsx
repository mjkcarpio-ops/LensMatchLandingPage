import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Download, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  MapPin
} from 'lucide-react';
import eyeglass1 from '../assets/eyeglass1.webp';
import eyeglass2 from '../assets/eyeglass2.webp';
import eyeglass3 from '../assets/eyeglass3.png';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-page animate-fade-in">
      {/* Hero Section */}
      <section className="hero-section container">
        <div className="hero-grid">
          {/* Left: Text & Action Column */}
          <div className="hero-text-content">
            <div className="hero-badge">
              <Sparkles size={14} className="hero-badge-icon" />
              <span>Face Shape Analysis • Gemini AI • Unity 3D AR</span>
            </div>

            <h1 className="hero-title">
              An AI-Powered Eyewear Recommendation and <span className="highlight-text">Augmented Reality Frame Preview</span> System Based on Face Shape Analysis
            </h1>

            <p className="hero-subtitle">
              LensMatch combines MediaPipe Face Mesh face shape analysis, Google Gemini AI recommendations, and Unity 3D Augmented Reality (AR) frame preview into an Android application developed for <strong>Franselle Optical Clinic</strong> in Quiapo, Manila.
            </p>

            <div className="hero-actions">
              <button 
                type="button"
                className="btn btn-primary hero-btn" 
                onClick={() => navigate('/download')}
              >
                <Download size={19} />
                <span>Download App (APK)</span>
              </button>
              <button 
                type="button"
                className="btn btn-outline hero-secondary-btn" 
                onClick={() => navigate('/guide')}
              >
                <span>How it Works</span>
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Quick Metrics Strip */}
            <div className="hero-metrics-strip">
              <div className="metric-pill">
                <span className="metric-num">MediaPipe</span>
                <span className="metric-desc">7 Face Shapes Detected</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-pill">
                <span className="metric-num metric-num-green">Gemini API</span>
                <span className="metric-desc">AI Frame Matching</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-pill">
                <span className="metric-num">Unity 3D</span>
                <span className="metric-desc">AR Frame Preview</span>
              </div>
            </div>

            <div className="hero-trust">
              <CheckCircle2 size={16} className="trust-icon" />
              <span>Developed for Franselle Optical Clinic • BSIT Capstone Project (TIP Manila)</span>
            </div>
          </div>

          {/* Right: Visual AR Eyewear Terminal Showcase */}
          <div className="hero-visual">
            <div className="visual-card">
              <div className="visual-header">
                <div className="visual-dots-group">
                  <span className="visual-dot"></span>
                  <span className="visual-dot"></span>
                  <span className="visual-dot"></span>
                </div>
                <span className="visual-title">Eyewear Catalog • Unity AR Frame Preview</span>
                <span className="visual-live-badge">AR Ready</span>
              </div>

              <div className="glasses-showcase">
                {/* Frame Row 1 */}
                <div className="showcase-frame-card" onClick={() => navigate('/download')}>
                  <div className="frame-card-info">
                    <span className="frame-type-tag">Aviator Frame</span>
                    <span className="frame-fit-badge">Best: Square & Oval</span>
                  </div>
                  <div className="frame-img-box">
                    <img src={eyeglass1} alt="Aviator Frame" className="glasses-image" />
                  </div>
                  <div className="frame-spec-pill">Unity 3D Mesh • Gold / Silver / Black</div>
                </div>

                {/* Frame Row 2 */}
                <div className="showcase-frame-card" onClick={() => navigate('/download')}>
                  <div className="frame-card-info">
                    <span className="frame-type-tag">Wayfarer Frame</span>
                    <span className="frame-fit-badge">Best: Round & Oval</span>
                  </div>
                  <div className="frame-img-box">
                    <img src={eyeglass2} alt="Wayfarer Frame" className="glasses-image" />
                  </div>
                  <div className="frame-spec-pill">Classic Acetate • Deep Black</div>
                </div>

                {/* Frame Row 3 */}
                <div className="showcase-frame-card" onClick={() => navigate('/download')}>
                  <div className="frame-card-info">
                    <span className="frame-type-tag">Geometric Frame</span>
                    <span className="frame-fit-badge">Best: Oval & Heart</span>
                  </div>
                  <div className="frame-img-box">
                    <img src={eyeglass3} alt="Geometric Frame" className="glasses-image" />
                  </div>
                  <div className="frame-spec-pill">Hexagonal Alloy • Satin Gold</div>
                </div>
              </div>

              <div className="visual-card-footer">
                <div className="ar-status-left">
                  <span className="pulse-dot"></span>
                  <span>Unity 3D Engine • Real-Time AR Frame Preview Ready</span>
                </div>
                <button 
                  type="button" 
                  className="ar-try-link"
                  onClick={() => navigate('/download')}
                >
                  <span>Frame Preview</span>
                  <ChevronRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* In-Clinic Optical Consultation Callout */}
      <section className="home-cta-section container">
        <div className="home-cta-card">
          <div className="cta-content-left">
            <div className="cta-badge">
              <MapPin size={14} />
              <span>Quiapo, Manila</span>
            </div>
            <h2>Visit Franselle Optical Clinic</h2>
            <p>
              Get your comprehensive eye checkup, try on catalog frames in person with registered optometrists, and experience LensMatch AR frame fitting right at the clinic.
            </p>
          </div>
          <div className="cta-content-right">
            <button 
              type="button" 
              className="btn btn-primary cta-primary-btn" 
              onClick={() => navigate('/contact')}
            >
              <MapPin size={18} />
              <span>Clinic Location & Hours</span>
            </button>
            <button 
              type="button" 
              className="btn btn-outline cta-secondary-btn" 
              onClick={() => navigate('/guide')}
            >
              <span>User Guide</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

import React from 'react';
import { useScrollSpy } from '../hooks/useScrollSpy';
import './Legal.css';

const Terms = () => {
  const sections = [
    { id: 'sec-1', title: '1. About LensMatch' },
    { id: 'sec-2', title: '2. Account and Eligibility' },
    { id: 'sec-3', title: '3. Face Shape Analysis' },
    { id: 'sec-4', title: '4. AI Recommendations' },
    { id: 'sec-5', title: '5. AR Frame Preview' },
    { id: 'sec-6', title: '6. Frame Catalog and Availability' },
    { id: 'sec-7', title: '7. Reservations' },
    { id: 'sec-8', title: '8. Accuracy of Information' },
    { id: 'sec-9', title: '9. Prohibited Use' },
    { id: 'sec-10', title: '10. Intellectual Property' },
    { id: 'sec-11', title: '11. Third-Party Services' },
    { id: 'sec-12', title: '12. Application Availability' },
    { id: 'sec-13', title: '13. Account Deletion' },
    { id: 'sec-14', title: '14. Disclaimer' },
    { id: 'sec-15', title: '15. Privacy' },
    { id: 'sec-16', title: '16. Changes to These Terms' },
    { id: 'sec-17', title: '17. Governing Law' }
  ];

  const sectionIds = sections.map((s) => s.id);
  const { activeId, tocRef, scrollToSection } = useScrollSpy(sectionIds, 135);

  return (
    <div className="legal-container container animate-fade-in">
      {/* Header */}
      <header className="legal-header">
        <h1 className="legal-title">Terms & Conditions</h1>
        <p className="legal-subtitle">
          These Terms & Conditions govern your access to and use of the LensMatch mobile application, AI frame recommendation system, AR preview engine, and clinic reservation services for Franselle Optical Clinic.
        </p>
        <div className="legal-meta">
          <span>Last Updated: September 2026</span>
          <span>•</span>
          <span>Terms Version 1.0</span>
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
            <h2>1. About LensMatch</h2>
            <p>
              LensMatch is an AI-powered eyewear recommendation and Augmented Reality frame preview system developed for Franselle Optical Clinic.
            </p>
            <p>
              The system assists users in discovering eyewear frames that complement their facial shape, trying on frames virtually using AR technology, and submitting frame reservation requests prior to visiting the clinic.
            </p>
          </section>

          <section id="sec-2" className="legal-section">
            <h2>2. Account and Eligibility</h2>
            <p>
              To access personalized recommendations, save frame choices, and place clinic reservations, you must create a user account.
            </p>
            <p>
              You agree to provide accurate registration information and maintain the confidentiality of your account credentials. You are responsible for all activity conducted under your account.
            </p>
          </section>

          <section id="sec-3" className="legal-section">
            <h2>3. Face Shape Analysis</h2>
            <p>
              Face shape analysis functionality detects facial landmark metrics to classify facial geometry parameters (such as Oval, Round, Square, Heart, Diamond, or Triangle).
            </p>
            <p>
              Face shape metrics serve advisory recommendation purposes to guide frame selection and complement professional optometric evaluation.
            </p>
          </section>

          <section id="sec-4" className="legal-section">
            <h2>4. AI Recommendations</h2>
            <p>
              Frame recommendations generated by our Google Gemini-powered model suggest styles calculated to balance detected face shape features.
            </p>
            <p>
              Recommendations are generated based on mathematical shape matching logic. Final style decisions remain at your sole discretion during personal fitting.
            </p>
          </section>

          <section id="sec-5" className="legal-section">
            <h2>5. AR Frame Preview</h2>
            <p>
              The Unity-based Augmented Reality preview feature renders digital 3D eyewear models over live camera streams to visualize frame proportions.
            </p>
            <p>
              AR visual previews are intended as realistic digital approximations. Actual frame textures, colors, and physical fit may vary slightly when evaluated in person at Franselle Optical Clinic.
            </p>
          </section>

          <section id="sec-6" className="legal-section">
            <h2>6. Frame Catalog and Availability</h2>
            <p>
              LensMatch displays a digital catalog of available eyewear frames offered at Franselle Optical Clinic.
            </p>
            <p>
              We strive to keep catalog listings updated; however, frame inventory, rim color availability, and clinic pricing remain subject to change without prior notice.
            </p>
          </section>

          <section id="sec-7" className="legal-section">
            <h2>7. Reservations</h2>
            <p>
              Submitting a reservation request through LensMatch asks Franselle Optical Clinic to set aside selected frames for your scheduled consultation.
            </p>
            <p>
              Reservations are requests subject to physical stock confirmation by clinic staff. A submitted reservation request does not constitute a guaranteed commercial sale until confirmed at the clinic.
            </p>
          </section>

          <section id="sec-8" className="legal-section">
            <h2>8. Accuracy of Information</h2>
            <p>
              You agree that all information provided during account creation and reservation submission is true, accurate, and current.
            </p>
          </section>

          <section id="sec-9" className="legal-section">
            <h2>9. Prohibited Use</h2>
            <p>You agree not to engage in any prohibited activity, including:</p>
            <ul>
              <li>Decompiling, reverse engineering, or extracting source code from the mobile app or algorithms.</li>
              <li>Attempting unauthorized access to backend API infrastructure or clinic databases.</li>
              <li>Submitting fraudulent frame reservation requests or misleading account profile data.</li>
              <li>Using automated bots or scrapers to copy catalog content or imagery.</li>
            </ul>
          </section>

          <section id="sec-10" className="legal-section">
            <h2>10. Intellectual Property</h2>
            <p>
              All software, algorithms, user interface designs, visual graphics, logos, and catalog assets comprising LensMatch are the exclusive intellectual property of the LensMatch development team and Franselle Optical Clinic.
            </p>
          </section>

          <section id="sec-11" className="legal-section">
            <h2>11. Third-Party Services</h2>
            <p>
              LensMatch integrates Google Gemini AI for recommendation computational logic and Unity AR technology. Usage of third-party features is subject to respective service terms.
            </p>
          </section>

          <section id="sec-12" className="legal-section">
            <h2>12. Application Availability</h2>
            <p>
              While we aim for continuous uptime, LensMatch does not warrant uninterrupted or error-free service availability. App features may be updated or temporarily restricted for technical maintenance.
            </p>
          </section>

          <section id="sec-13" className="legal-section">
            <h2>13. Account Deletion</h2>
            <p>
              You may terminate your account at any time. We reserve the right to suspend or terminate accounts that breach these Terms or engage in unauthorized system misuse.
            </p>
          </section>

          <section id="sec-14" className="legal-section">
            <h2>14. Disclaimer</h2>
            <p>
              LensMatch provides AI recommendations and AR previews "as is" without warranties of any kind. LensMatch does not perform optical diagnostic exams or issue ophthalmic prescriptions; vision prescription evaluation must be conducted by licensed optometrists at Franselle Optical Clinic.
            </p>
          </section>

          <section id="sec-15" className="legal-section">
            <h2>15. Privacy</h2>
            <p>
              Your use of LensMatch is governed by our Privacy Policy, which details our data practices and handling of account and facial geometry parameters.
            </p>
          </section>

          <section id="sec-16" className="legal-section">
            <h2>16. Changes to These Terms</h2>
            <p>
              We reserve the right to revise these Terms & Conditions at any time. Continued use of the LensMatch application or website after revised Terms are published signifies your acceptance.
            </p>
          </section>

          <section id="sec-17" className="legal-section">
            <h2>17. Governing Law</h2>
            <p>
              These Terms & Conditions are governed by and interpreted in accordance with the laws of the Republic of the Philippines.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default Terms;

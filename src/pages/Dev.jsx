import React from 'react';
import './Dev.css';
import { User, Mail } from 'lucide-react';
import joshImg from '../assets/josh.jpg';
import morcImg from '../assets/Morc.jpg';

const GithubIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Dev = () => {
  const developers = [
    {
      name: 'Fritz C. Arrogante',
      role: 'Mobile App Developer',
      email: 'mfarrogante@tip.edu.ph',
      description: 'Led Android application development, implementing MediaPipe Face Mesh face shape analysis (6 face shapes) and Google Gemini API personalized frame recommendations.',
      image: null,
      github: 'https://github.com/FCAHub',
      linkedin: 'https://linkedin.com'
    },
    {
      name: 'Josh Kenneth R. Carpio',
      role: 'Web Developer',
      email: 'mjkcarpio@tip.edu.ph',
      description: 'Architected and built the LensMatch landing web platform and the clinic staff web management portal for Franselle Optical Clinic, synchronized via Firebase Firestore.',
      image: joshImg,
      github: 'https://github.com/josh1245633',
      linkedin: 'https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fjosh-kenneth-carpio-b229b2181%3Futm_source%3Dshare_via%26utm_content%3Dprofile%26utm_medium%3Dmember_android%26fbclid%3DIwZXh0bgNhZW0CMTAAcGRvZgVicmlkETEwRnAyYXdBanhHYXlrMjhOc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHis7Zmo5NDu0SE3VO6Ud3kzeJWGpiKhvET3sv0YiwP4AzKBmD2zZUS2YCNKd_aem_Dzd7QkDDT9mX0hARjYJfsA&h=AUDqE9wou7SaCoz3Hv_22dpsK5Y223IYr2PphgqYb54lLF6rR9izTq5VRMzJym2R6wv6MAKq9pyPBWmsRqUGXdm8SuawNqS16829ukxR6ggESI83D3g04yj0ygNW2Ac'
    },
    {
      name: 'Marc Lorenz M. Santiago',
      role: 'AR Developer / Project Manager',
      email: 'mmlsantiago@tip.edu.ph',
      description: 'Serves as the Project Manager coordinating team workflows, task milestones, and deliverables to keep the team united and working together smoothly, while developing the Unity 3D Augmented Reality (AR) frame preview engine, 3D eyewear model optimization, and real-time facial camera overlay functionality.',
      image: morcImg,
      github: 'https://github.com/MarcSantiagoPH',
      linkedin: 'https://linkedin.com'
    }
  ];

  return (
    <div className="dev-container container animate-fade-in">
      <div className="dev-hero">
        <h1 className="dev-title">Meet the Developers</h1>
        <p className="dev-subtitle">
          We are a team of 4th year Bachelor of Science in Information Technology (BSIT) students from the Technological Institute of the Philippines – Manila Campus who developed LensMatch as our capstone project for Franselle Optical Clinic.
        </p>
      </div>

      <div className="dev-grid">
        {developers.map((dev, index) => (
          <div className="dev-card" key={index}>
            <div className="dev-card-top">
              <div className="dev-photo-wrapper">
                {dev.image ? (
                  <img src={dev.image} alt={dev.name} className="dev-photo" />
                ) : (
                  <div className="dev-photo-placeholder" aria-label={`Photo placeholder for ${dev.name}`}>
                    <User size={44} className="dev-photo-icon" />
                  </div>
                )}
              </div>

              <h3 className="dev-name">{dev.name}</h3>
              <span className="dev-role-badge">{dev.role}</span>

              <a href={`mailto:${dev.email}`} className="dev-email-link">
                <Mail size={14} className="dev-email-icon" />
                <span>{dev.email}</span>
              </a>

              <p className="dev-description">{dev.description}</p>
            </div>

            <div className="dev-socials">
              <a href={dev.github} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label={`${dev.name} GitHub`}>
                <GithubIcon size={16} />
              </a>
              <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon-btn" aria-label={`${dev.name} LinkedIn`}>
                <LinkedinIcon size={16} />
              </a>
              <a href={`mailto:${dev.email}`} className="social-icon-btn" aria-label={`Email ${dev.name}`}>
                <Mail size={16} />
              </a>
            </div>
          </div>
        ))}
      </div>

      <p className="dev-closing-tag">Built with technology and design in mind.</p>
    </div>
  );
};

export default Dev;


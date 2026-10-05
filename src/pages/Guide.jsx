import React from 'react';
import './Guide.css';
import { 
  Smartphone, 
  UserCheck, 
  ScanFace, 
  Cpu, 
  Sparkles, 
  Glasses, 
  Eye, 
  Search, 
  CalendarCheck 
} from 'lucide-react';

const Guide = () => {
  const steps = [
    {
      number: 1,
      icon: <Smartphone size={28} />,
      title: 'Open the LensMatch Mobile Application',
      description: 'Launch the LensMatch app on your mobile device to get started.'
    },
    {
      number: 2,
      icon: <UserCheck size={28} />,
      title: 'Sign Up or Log In',
      description: 'Create a new user account or log into your existing profile.'
    },
    {
      number: 3,
      icon: <ScanFace size={28} />,
      title: 'Perform Face Scanning',
      description: 'Follow on-screen prompts to capture and scan your facial landmarks.'
    },
    {
      number: 4,
      icon: <Cpu size={28} />,
      title: 'Face Shape Analysis (MediaPipe)',
      description: 'MediaPipe Face Mesh detects facial landmarks and classifies your face shape into Oval, Round, Square, Heart, Oblong, or Diamond.'
    },
    {
      number: 5,
      icon: <Sparkles size={28} />,
      title: 'AI Eyewear Recommendations (Gemini API)',
      description: 'Receive personalized frame suggestions tailored specifically to your facial geometry generated via the Gemini API.'
    },
    {
      number: 6,
      icon: <Glasses size={28} />,
      title: 'View Recommended Styles',
      description: 'Explore curated frame styles recommended for your unique look.'
    },
    {
      number: 7,
      icon: <Eye size={28} />,
      title: 'AR Frame Preview (Unity 3D)',
      description: 'Use Unity 3D Augmented Reality (AR) to realistically preview and visualize selected frames overlaid on your face.'
    },
    {
      number: 8,
      icon: <Search size={28} />,
      title: 'Browse Available Frames',
      description: 'Explore the full catalog of eyeglasses available at Franselle Optical Clinic.'
    },
    {
      number: 9,
      icon: <CalendarCheck size={28} />,
      title: 'Reserve Preferred Frame',
      description: 'Reserve your favorite frame in-app for personalized assistance during your clinic visit.'
    }
  ];

  return (
    <div className="guide-container container animate-fade-in">
      <div className="guide-hero">
        <h1 className="guide-title">How to Use LensMatch</h1>
        <p className="guide-subtitle">
          Follow this step-by-step guide to navigate the LensMatch mobile application, discover personalized Gemini AI recommendations, preview frames with Unity 3D AR, and reserve your eyewear for Franselle Optical Clinic.
        </p>
      </div>

      <div className="guide-steps-grid">
        {steps.map((step) => (
          <div className="guide-step-card" key={step.number}>
            <div className="guide-step-header">
              <div className="guide-step-badge">{step.number}</div>
              <div className="guide-step-icon">{step.icon}</div>
            </div>
            <h3 className="guide-step-title">{step.title}</h3>
            <p className="guide-step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guide;

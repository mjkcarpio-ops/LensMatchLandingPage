# LensMatch Landing Page

An AI-Powered Eyewear Recommendation and Augmented Reality Frame Preview System Based on Face Shape Analysis developed for **Franselle Optical Clinic** in Quiapo, Manila.

## Project Overview

**LensMatch** is an Android-based eyewear recommendation system that leverages facial landmark detection, artificial intelligence, and mobile augmented reality to personalize and modernize the eyewear selection experience:

- **Face Shape Analysis**: MediaPipe 468 Face Mesh facial landmark detection classifying face shapes into six categories (*Oval, Round, Square, Heart, Oblong, Diamond*).
- **AI Recommendation Engine**: Google Gemini API integration generating tailored frame suggestions based on facial geometry and optical compatibility.
- **Augmented Reality Frame Preview**: Real-time 3D eyewear overlay powered by Unity 3D for virtual try-on before physical consultation.
- **In-Clinic Integration**: Full reservation and catalog synchronization with Franselle Optical Clinic.

## Tech Stack

- **Framework**: React 19 + Vite
- **Routing**: React Router v7
- **Icons**: Lucide React
- **Linter**: Oxlint
- **Styling**: Modern CSS3 (Variables, Flexbox, CSS Grid, Responsive Design)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/MarcSantiagoPH/LensMatchLandingPage.git

# Navigate to the project directory
cd LensMatchLandingPage

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

### Linting

```bash
npm run lint
```

## Partner Clinic & Institution

- **Partner Clinic**: Franselle Optical Clinic (Quiapo, Manila)
- **Institution**: Technological Institute of the Philippines (T.I.P. Manila) — BSIT Capstone Project

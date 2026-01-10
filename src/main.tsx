import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import App from './App.tsx'
import LandingDemo from './LandingDemo.tsx'

import { Buffer } from 'buffer';
(window as any).Buffer = Buffer;

// Switch between demos: 'docs' or 'landing'
const DEMO_MODE = (new URLSearchParams(window.location.search).get('demo') || 'docs') as 'docs' | 'landing';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {DEMO_MODE === 'landing' ? <LandingDemo /> : <App />}
  </StrictMode>,
)

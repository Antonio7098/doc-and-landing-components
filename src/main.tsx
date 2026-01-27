import { Buffer } from 'buffer';
(globalThis as any).Buffer = Buffer;

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/index.css'
import App from './App.tsx'
import LandingDemo from './LandingDemo.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/docs/*" element={<App />} />
        <Route path="/landing" element={<LandingDemo />} />
        <Route path="/*" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

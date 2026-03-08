import { BrowserRouter } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { Preload, View } from '@react-three/drei';

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  BloomingNightGarden,
} from './components';
import { useState, useRef, MouseEvent, useEffect } from 'react';
import { config } from './constants/config';

const App = () => {
  const [glowX, setGlowX] = useState(50);
  const [glowY, setGlowY] = useState(50);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const glowXPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const glowYPercent = ((e.clientY - rect.top) / rect.height) * 100;

    setGlowX(glowXPercent);
    setGlowY(glowYPercent);
  };

  const handleMouseLeave = () => {
    setGlowX(50);
    setGlowY(50);
  };

  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div
        className="bg-primary relative z-0"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <div
            className="pointer-events-none absolute inset-0 opacity-30 transition-all duration-300"
            style={{
              background: `radial-gradient(600px circle at ${glowX}% ${glowY}%, #ffffff6d, transparent 40%)`,
            }}
          ></div>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
        <BloomingNightGarden />
        <Canvas
          // This Canvas will act as the global portal for all Views.
          // It's fixed to the viewport and allows other components to render into it.
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 10, // Higher z-index to ensure it's on top of sections
          }}
          eventSource={cardRef as React.MutableRefObject<HTMLElement>}
          shadows
          dpr={[1, 2]}
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ antialias: true, alpha: true }}
        >
          <View.Port />
          <Preload all />
        </Canvas>
      </div>
    </BrowserRouter>
  );
};

export default App;

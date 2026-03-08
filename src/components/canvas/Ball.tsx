import React, { Suspense, useRef, useState, useEffect } from 'react';
import { Decal, Float, OrbitControls, useTexture, View } from '@react-three/drei';
import { useInView } from 'framer-motion';
import CanvasLoader from '../layout/Loader';

const Ball = (props: { imgUrl: string }) => {
  // Add a safety check for imgUrl to prevent "Cannot read properties of null (reading 'trim')"
  const [decal] = useTexture([props.imgUrl || ""]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 0, 0.05]} intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
        {props.imgUrl && (
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            // @ts-expect-error
            flatShading
          />
        )}
      </mesh>
    </Float>
  );
};

const BallCanvas: React.FC<{ icon: string }> = ({ icon }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: '200px' });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div ref={containerRef} className="h-full w-full flex items-center justify-center">
      {isMounted && isInView ? (
        <View track={containerRef as React.MutableRefObject<HTMLElement>} className="h-full w-full">
          <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enablePan={false} enableZoom={false} />
            <Ball imgUrl={icon} />
          </Suspense>
        </View>
      ) : (
        // Fallback: Show a 2D icon when out of view or still loading
        <div className="flex h-full w-full items-center justify-center rounded-full bg-white/10">
          <img src={icon} alt="tech-icon" className="h-16 w-16 object-contain" />
        </div>
      )}
    </div>
  );
};

export default BallCanvas;

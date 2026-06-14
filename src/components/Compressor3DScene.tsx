'use client';

import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Decal, useTexture, Float } from '@react-three/drei';
import * as THREE from 'three';

import { useGLTF, Center } from '@react-three/drei';

// Real GLB Compressor Model
function CompressorModel(props: any) {
  // Load the actual GLB file downloaded by the user
  const { scene } = useGLTF('/booklet/compressor_model.glb');
  
  // Load Logo Texture
  const logoTexture = useTexture('/booklet/logo.png');

  return (
    <group {...props} dispose={null}>
      <Float speed={2} rotationIntensity={0.1} floatIntensity={0.2}>
        {/* The Real Compressor Model */}
        <Center position={[0, -0.5, 0]}>
          <primitive object={scene} scale={2.4} />
        </Center>

        {/* AEC Floating Logo Plate */}
        <mesh position={[0, 3.0, 0]} rotation={[0, Math.PI, 0]} castShadow>
          <planeGeometry args={[1.5, 1.5]} />
          <meshStandardMaterial map={logoTexture} transparent={true} alphaTest={0.5} side={THREE.DoubleSide} />
        </mesh>
      </Float>
    </group>
  );
}

// Preload to prevent loading stutters
useGLTF.preload('/booklet/compressor_model.glb');

export default function Compressor3DScene() {
  return (
    <div className="w-full h-full relative cursor-grab active:cursor-grabbing">
      <Canvas shadows camera={{ position: [6, 3, 7], fov: 40 }}>
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2} castShadow shadow-mapSize={2048} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />
        
        <React.Suspense fallback={null}>
          {/* High quality environment map for reflections */}
          <Environment preset="city" />

          {/* Model */}
          <CompressorModel />
        </React.Suspense>

        {/* Controls */}
        <OrbitControls 
          enablePan={false} 
          minDistance={4} 
          maxDistance={12} 
          maxPolarAngle={Math.PI / 2 + 0.1} // Prevent looking completely underneath
          autoRotate
          autoRotateSpeed={1.0}
        />
        
        {/* Shadows on the floor */}
        <ContactShadows position={[0, -0.4, 0]} opacity={0.6} scale={15} blur={2.5} far={4} />
      </Canvas>
    </div>
  );
}

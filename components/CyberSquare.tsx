import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Environment, Float, Html } from '@react-three/drei';
import * as THREE from 'three';

const SquareShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      // Gentle rotation based on time & mouse
      const t = state.clock.getElapsedTime();
      meshRef.current.rotation.x = Math.cos(t / 4) / 2;
      meshRef.current.rotation.y = Math.sin(t / 4) / 2;
      meshRef.current.rotation.z = Math.sin(t / 1.5) / 2;
      
      // Parallax effect with mouse
      meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, state.mouse.x * 0.5, 0.05);
      meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, state.mouse.y * 0.5, 0.05);
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef}>
        <boxGeometry args={[2, 2, 2]} />
        {/* We use MeshDistortMaterial but minimal distortion so it looks metallic and sharp yet dynamic */}
        <MeshDistortMaterial
          color="#06b6d4" // brand-primary
          envMapIntensity={2}
          clearcoat={1}
          clearcoatRoughness={0}
          metalness={0.9}
          roughness={0.1}
          distort={0.1}
          speed={2}
        />
        
        {/* Inner wireframe for technical feel */}
        <mesh>
          <boxGeometry args={[2.01, 2.01, 2.01]} />
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.15} />
        </mesh>
      </mesh>
    </Float>
  );
};

const CyberSquare: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1.5} />
        <directionalLight position={[-10, -10, -5]} color="#06b6d4" intensity={2} />
        <Environment preset="studio" />
        <SquareShape />
      </Canvas>
    </div>
  );
};

export default CyberSquare;

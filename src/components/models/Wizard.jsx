"use client";
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Wizard = React.memo(function Wizard(props) {
  const { scene } = useGLTF("/models/wizard.glb");
  const modelRef = useRef();

  const baseY = -1.5; // Pulls the model lower on the screen

  // Floating animation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = baseY + Math.sin(state.clock.elapsedTime) * 0.15;
    }
  });

  return (
    <group
      ref={modelRef}
      {...props}
      dispose={null}
      position={[0, baseY, 0]} // initial position matches baseY
      scale={[0.003, 0.003, 0.003]}
      rotation={[0.2, 0, 0]}
    >
      <primitive object={scene} />
    </group>
  );
});

export default Wizard;
useGLTF.preload("/models/wizard.glb");

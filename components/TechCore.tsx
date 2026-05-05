"use client";
import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, OrbitControls, Float } from "@react-three/drei";
import * as THREE from "three";

function AnimatedShape() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHover] = useState(false);

  // This rotates the shape and makes it "float"
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.2;
    meshRef.current.rotation.y = time * 0.3;
  });

  return (
    <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        scale={hovered ? 1.2 : 1}
        transition-all
      >
        {/* The "Icosahedron" is a very tech-looking geometry */}
        <icosahedronGeometry args={[1, 15]} />
        <MeshDistortMaterial
          color={hovered ? "#6366f1" : "#4338ca"}
          speed={3}
          distort={0.4}
          radius={1}
        />
      </mesh>
    </Float>
  );
}

export default function TechCore() {
  return (
    <div className="h-[400px] w-full cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        
        <AnimatedShape />
        
        {/* Allows users to rotate the shape with their mouse */}
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
}
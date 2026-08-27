"use client";

import { Line, OrbitControls, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

type Point = [number, number, number];

const satellites: { position: Point; color: string; shape: "box" | "sphere" | "cylinder" | "octa" }[] = [
  { position: [-2.3, 1.35, -.35], color: "#8b5cf6", shape: "box" },
  { position: [2.45, 1.15, -.25], color: "#b9ff66", shape: "sphere" },
  { position: [-2.15, -1.45, .2], color: "#b9ff66", shape: "cylinder" },
  { position: [2.2, -1.4, .35], color: "#8b5cf6", shape: "octa" },
];

function Satellite({ position, color, shape, index }: (typeof satellites)[number] & { index: number }) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * (.16 + index * .025);
    ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * .55 + index) * .055;
  });
  return (
    <group ref={ref} position={position}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[.43, .035, 10, 48]} />
        <meshStandardMaterial color="#aeb2bd" metalness={.95} roughness={.2} />
      </mesh>
      <mesh position={[0, -.07, 0]}>
        <cylinderGeometry args={[.35, .46, .14, 36]} />
        <meshStandardMaterial color="#0b0c10" metalness={.9} roughness={.23} />
      </mesh>
      {shape === "box" && <mesh><boxGeometry args={[.42, .42, .42]} /><meshPhysicalMaterial color="#161823" metalness={.55} roughness={.08} transmission={.35} thickness={.8} /></mesh>}
      {shape === "sphere" && <mesh><sphereGeometry args={[.25, 24, 24]} /><meshPhysicalMaterial color="#151721" metalness={.7} roughness={.1} transmission={.25} clearcoat={1} /></mesh>}
      {shape === "cylinder" && <mesh><cylinderGeometry args={[.18, .26, .46, 24]} /><meshStandardMaterial color="#13151b" metalness={.95} roughness={.15} /></mesh>}
      {shape === "octa" && <mesh><octahedronGeometry args={[.3, 0]} /><meshStandardMaterial color="#171923" metalness={.9} roughness={.12} /></mesh>}
      <pointLight color={color} intensity={1.25} distance={2.2} />
      <mesh position={[0, .31, .04]}><sphereGeometry args={[.045, 12, 12]} /><meshBasicMaterial color={color} /></mesh>
    </group>
  );
}

function CoreWorld() {
  const core = useRef<THREE.Group>(null);
  const orbit = useRef<THREE.Group>(null);
  useFrame((state, delta) => {
    if (core.current) {
      core.current.rotation.y += delta * .1;
      core.current.rotation.x = THREE.MathUtils.lerp(core.current.rotation.x, state.pointer.y * .12, .035);
      core.current.rotation.z = THREE.MathUtils.lerp(core.current.rotation.z, -state.pointer.x * .08, .035);
    }
    if (orbit.current) orbit.current.rotation.z -= delta * .035;
  });
  return (
    <group rotation={[.08, -.08, -.03]}>
      {satellites.map((satellite, index) => <Line key={index} points={[[0, 0, 0], satellite.position]} color={satellite.color} lineWidth={.65} transparent opacity={.55} />)}
      <group ref={core}>
        <mesh>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshPhysicalMaterial color="#0b0d13" metalness={.92} roughness={.13} clearcoat={1} clearcoatRoughness={.08} />
        </mesh>
        <mesh scale={1.012}>
          <icosahedronGeometry args={[1.05, 1]} />
          <meshBasicMaterial color="#afb2bd" wireframe transparent opacity={.7} />
        </mesh>
      </group>
      <group ref={orbit}>
        <mesh rotation={[Math.PI / 2.35, 0, 0]}><torusGeometry args={[1.42, .024, 10, 120]} /><meshStandardMaterial color="#d9dce7" metalness={.9} roughness={.15} transparent opacity={.75} /></mesh>
        <mesh rotation={[Math.PI / 1.85, .25, .65]}><torusGeometry args={[1.66, .014, 8, 120]} /><meshBasicMaterial color="#8b5cf6" transparent opacity={.65} /></mesh>
        <mesh rotation={[1.08, -.5, .15]}><torusGeometry args={[1.87, .008, 8, 120]} /><meshBasicMaterial color="#aeb2bd" transparent opacity={.25} /></mesh>
        {[0, 1, 2, 3, 4, 5].map((index) => {
          const angle = index / 6 * Math.PI * 2;
          return <mesh key={index} position={[Math.cos(angle) * 1.65, Math.sin(angle) * 1.65, .12]}><sphereGeometry args={[index % 2 ? .045 : .07, 12, 12]} /><meshBasicMaterial color={index % 3 ? "#8b5cf6" : "#b9ff66"} /></mesh>;
        })}
      </group>
      {satellites.map((satellite, index) => <Satellite key={index} {...satellite} index={index} />)}
      <Sparkles count={28} scale={[6.4, 4.8, 2]} size={1.4} speed={.16} color="#b9b5c9" opacity={.45} />
    </group>
  );
}

export default function SystemCore({ active }: { active: boolean }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      frameloop={active ? "always" : "never"}
      camera={{ position: [0, 0, 7.2], fov: 43, near: .1, far: 50 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={.42} />
      <directionalLight position={[3, 5, 5]} intensity={3.2} color="#e8e9f0" />
      <pointLight position={[-3, 1, 3]} intensity={7} distance={9} color="#6f4bd8" />
      <pointLight position={[3, -2, 3]} intensity={4} distance={8} color="#b9ff66" />
      <CoreWorld />
      <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.5} maxPolarAngle={Math.PI / 1.65} autoRotate autoRotateSpeed={.28} enableDamping dampingFactor={.05} />
    </Canvas>
  );
}

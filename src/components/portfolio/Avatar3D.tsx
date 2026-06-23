import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Environment, MeshDistortMaterial, Sphere } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const Developer = () => {
  const group = useRef<THREE.Group>(null);
  const head = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
    if (head.current) {
      head.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.2;
      head.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.6) * 0.08;
    }
  });

  return (
    <group ref={group} position={[0, -1, 0]}>
      {/* Head */}
      <mesh ref={head} position={[0, 1.6, 0]} castShadow>
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshStandardMaterial color="#f5c9a6" roughness={0.5} metalness={0.05} />
      </mesh>

      {/* Hair cap */}
      <mesh position={[0, 1.85, -0.05]}>
        <sphereGeometry args={[0.57, 64, 64, 0, Math.PI * 2, 0, Math.PI / 2.2]} />
        <meshStandardMaterial color="#1a1a1a" roughness={0.7} />
      </mesh>

      {/* Eyes */}
      <mesh position={[-0.18, 1.62, 0.48]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>
      <mesh position={[0.18, 1.62, 0.48]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#0a0a0a" />
      </mesh>

      {/* Smile */}
      <mesh position={[0, 1.42, 0.5]} rotation={[0, 0, 0]}>
        <torusGeometry args={[0.08, 0.012, 16, 32, Math.PI]} />
        <meshStandardMaterial color="#7a2a1a" />
      </mesh>

      {/* Neck */}
      <mesh position={[0, 1.05, 0]}>
        <cylinderGeometry args={[0.18, 0.22, 0.3, 32]} />
        <meshStandardMaterial color="#f5c9a6" />
      </mesh>

      {/* Body / hoodie */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <capsuleGeometry args={[0.55, 0.9, 16, 32]} />
        <MeshDistortMaterial
          color="hsl(217, 91%, 60%)"
          speed={1.5}
          distort={0.15}
          roughness={0.4}
        />
      </mesh>

      {/* Laptop */}
      <group position={[0, 0.1, 0.55]} rotation={[-0.3, 0, 0]}>
        <mesh>
          <boxGeometry args={[0.9, 0.04, 0.6]} />
          <meshStandardMaterial color="#2a2a2a" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.3, -0.28]} rotation={[-0.4, 0, 0]}>
          <boxGeometry args={[0.9, 0.6, 0.03]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.8} roughness={0.3} />
        </mesh>
        <mesh position={[0, 0.3, -0.26]} rotation={[-0.4, 0, 0]}>
          <planeGeometry args={[0.82, 0.52]} />
          <meshStandardMaterial
            color="hsl(217, 91%, 60%)"
            emissive="hsl(217, 91%, 60%)"
            emissiveIntensity={0.6}
          />
        </mesh>
      </group>
    </group>
  );
};

const FloatingCode = () => {
  const items = [
    { pos: [-2.5, 1.5, -1] as [number, number, number], color: "#3b82f6" },
    { pos: [2.4, 1.8, -0.5] as [number, number, number], color: "#a855f7" },
    { pos: [-2.2, -0.5, -0.8] as [number, number, number], color: "#10b981" },
    { pos: [2.6, -0.2, -1.2] as [number, number, number], color: "#f59e0b" },
  ];
  return (
    <>
      {items.map((it, i) => (
        <Float key={i} speed={2 + i * 0.3} rotationIntensity={1} floatIntensity={2}>
          <Sphere position={it.pos} args={[0.18, 32, 32]}>
            <meshStandardMaterial
              color={it.color}
              emissive={it.color}
              emissiveIntensity={0.4}
              roughness={0.2}
            />
          </Sphere>
        </Float>
      ))}
    </>
  );
};

export const Avatar3D = () => {
  return (
    <Canvas
      camera={{ position: [0, 0.5, 4.2], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[3, 5, 3]} intensity={1.2} castShadow />
        <pointLight position={[-3, 2, -2]} intensity={0.8} color="hsl(217, 91%, 60%)" />
        <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
          <Developer />
        </Float>
        <FloatingCode />
        <Environment preset="city" />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 1.8}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Suspense>
    </Canvas>
  );
};

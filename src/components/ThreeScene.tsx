import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, useTexture } from '@react-three/drei';
import * as THREE from 'three';

function DeveloperLogoObject() {
  const group = useRef<THREE.Group>(null);
  const { mouse } = useThree();
  const logoTexture = useTexture('/assets/logo/alhabashy-logo.svg');

  logoTexture.colorSpace = THREE.SRGBColorSpace;
  logoTexture.anisotropy = 8;

  useFrame((_, delta) => {
    if (!group.current) return;

    group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, mouse.y * 0.14, 0.05);
    group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, -mouse.x * 0.06, 0.05);
    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, mouse.x * 0.28, 0.05);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, mouse.y * 0.16, 0.05);
  });

  return (
    <group ref={group}>
      <Float speed={1.55} rotationIntensity={0.22} floatIntensity={0.45}>
        <group rotation={[0.18, -0.28, 0.08]}>
          <mesh position={[0, 0, -0.08]}>
            <boxGeometry args={[2.62, 2.62, 0.16]} />
            <meshStandardMaterial
              color="#f6f6f6"
              metalness={0.08}
              roughness={0.2}
              emissive="#ffffff"
              emissiveIntensity={0.03}
            />
          </mesh>

          <mesh position={[0, 0, 0.02]} scale={1.035}>
            <boxGeometry args={[2.62, 2.62, 0.05]} />
            <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.22} />
          </mesh>

          <mesh position={[0, 0, 0.04]}>
            <planeGeometry args={[1.9, 1.9]} />
            <meshBasicMaterial map={logoTexture} transparent toneMapped={false} />
          </mesh>

          <mesh position={[0, 0, -0.18]} scale={1.18}>
            <planeGeometry args={[2.85, 2.85]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.055} />
          </mesh>

          <mesh position={[1.25, -1.2, 0.18]}>
            <sphereGeometry args={[0.14, 24, 24]} />
            <meshStandardMaterial color="#ffffff" roughness={0.18} metalness={0.15} />
          </mesh>

          <mesh position={[-1.28, 1.18, 0.12]}>
            <sphereGeometry args={[0.09, 24, 24]} />
            <meshBasicMaterial color="#ffffff" transparent opacity={0.72} />
          </mesh>
        </group>
      </Float>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="pointer-events-none h-[340px] w-full sm:h-[430px] lg:h-[520px]">
      <Canvas dpr={[1, 1.55]} camera={{ position: [0, 0, 6], fov: 42 }} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.85} />
          <directionalLight position={[4, 6, 4]} intensity={1.45} />
          <pointLight position={[-4, -3, 5]} intensity={0.85} color="#ffffff" />
          <DeveloperLogoObject />
        </Suspense>
      </Canvas>
    </div>
  );
}

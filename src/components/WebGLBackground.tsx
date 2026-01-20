import { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// Traffic Light Component
const TrafficLight = ({ phase }: { phase: 'red' | 'orange' | 'green' }) => {
  return (
    <group position={[3, 1.5, 0]}>
      {/* Pole */}
      <mesh position={[0, -1, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 2, 8]} />
        <meshStandardMaterial color="#444" />
      </mesh>
      
      {/* Housing */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[0.3, 1, 0.2]} />
        <meshStandardMaterial color="#1a1a1a" />
      </mesh>
      
      {/* Red Light */}
      <mesh position={[0, 0.8, 0.11]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial 
          color={phase === 'red' ? '#ff3333' : '#331111'} 
          emissive={phase === 'red' ? '#ff0000' : '#000000'}
          emissiveIntensity={phase === 'red' ? 2 : 0}
        />
      </mesh>
      
      {/* Orange Light */}
      <mesh position={[0, 0.5, 0.11]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial 
          color={phase === 'orange' ? '#ffaa00' : '#332200'} 
          emissive={phase === 'orange' ? '#ff8800' : '#000000'}
          emissiveIntensity={phase === 'orange' ? 2 : 0}
        />
      </mesh>
      
      {/* Green Light */}
      <mesh position={[0, 0.2, 0.11]}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshStandardMaterial 
          color={phase === 'green' ? '#33ff33' : '#113311'} 
          emissive={phase === 'green' ? '#00ff00' : '#000000'}
          emissiveIntensity={phase === 'green' ? 2 : 0}
        />
      </mesh>
    </group>
  );
};

// Car Component
const Car = ({ phase }: { phase: 'red' | 'orange' | 'green' }) => {
  const carRef = useRef<THREE.Group>(null);
  const targetPosition = useRef(-8);
  const currentSpeed = useRef(0);
  
  useFrame((_, delta) => {
    if (!carRef.current) return;
    
    const stopPosition = 1.5;
    const maxSpeed = 4;
    
    if (phase === 'red') {
      // Slow down and stop
      if (carRef.current.position.x < stopPosition) {
        currentSpeed.current = Math.max(0, currentSpeed.current - delta * 3);
      } else {
        currentSpeed.current = Math.max(0, currentSpeed.current - delta * 5);
      }
    } else if (phase === 'orange') {
      // Prepare - slight movement
      currentSpeed.current = Math.min(0.5, currentSpeed.current + delta * 2);
    } else {
      // Green - accelerate
      currentSpeed.current = Math.min(maxSpeed, currentSpeed.current + delta * 3);
    }
    
    carRef.current.position.x += currentSpeed.current * delta;
    
    // Reset position when car goes off screen
    if (carRef.current.position.x > 10) {
      carRef.current.position.x = -8;
      currentSpeed.current = phase === 'green' ? maxSpeed : 0;
    }
  });
  
  return (
    <group ref={carRef} position={[-8, 0.3, 0]}>
      {/* Car Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.2, 0.35, 0.6]} />
        <meshStandardMaterial color="#1e88e5" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Car Top */}
      <mesh position={[0.1, 0.3, 0]}>
        <boxGeometry args={[0.6, 0.25, 0.55]} />
        <meshStandardMaterial color="#1565c0" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Windows */}
      <mesh position={[0.1, 0.3, 0.28]}>
        <boxGeometry args={[0.55, 0.2, 0.01]} />
        <meshStandardMaterial color="#87ceeb" metalness={0.5} roughness={0.1} transparent opacity={0.7} />
      </mesh>
      <mesh position={[0.1, 0.3, -0.28]}>
        <boxGeometry args={[0.55, 0.2, 0.01]} />
        <meshStandardMaterial color="#87ceeb" metalness={0.5} roughness={0.1} transparent opacity={0.7} />
      </mesh>
      
      {/* Wheels */}
      {[[-0.35, -0.15, 0.35], [-0.35, -0.15, -0.35], [0.35, -0.15, 0.35], [0.35, -0.15, -0.35]].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.12, 0.12, 0.08, 16]} />
          <meshStandardMaterial color="#222" />
        </mesh>
      ))}
      
      {/* Headlights */}
      <mesh position={[0.61, 0, 0.2]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#ffff99" emissive="#ffff00" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.61, 0, -0.2]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial color="#ffff99" emissive="#ffff00" emissiveIntensity={0.5} />
      </mesh>
      
      {/* Tail lights */}
      <mesh position={[-0.61, 0, 0.2]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#ff3333" emissive="#ff0000" emissiveIntensity={0.3} />
      </mesh>
      <mesh position={[-0.61, 0, -0.2]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshStandardMaterial color="#ff3333" emissive="#ff0000" emissiveIntensity={0.3} />
      </mesh>
    </group>
  );
};

// Road Component
const Road = () => {
  const stripeTexture = useMemo(() => {
    const canvas = document.createElement('canvas');
    canvas.width = 512;
    canvas.height = 64;
    const ctx = canvas.getContext('2d')!;
    
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, 512, 64);
    
    // Road markings
    ctx.fillStyle = '#fff';
    for (let i = 0; i < 8; i++) {
      ctx.fillRect(i * 70 + 10, 28, 40, 8);
    }
    
    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.x = 3;
    return texture;
  }, []);

  return (
    <group>
      {/* Road surface */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[20, 2]} />
        <meshStandardMaterial map={stripeTexture} />
      </mesh>
      
      {/* Sidewalk */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 1.2]}>
        <planeGeometry args={[20, 0.5]} />
        <meshStandardMaterial color="#555" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, -1.2]}>
        <planeGeometry args={[20, 0.5]} />
        <meshStandardMaterial color="#555" />
      </mesh>
    </group>
  );
};

// Scene Component
const Scene = () => {
  const [phase, setPhase] = useState<'red' | 'orange' | 'green'>('red');
  
  useEffect(() => {
    const cycle = () => {
      setPhase('red');
      setTimeout(() => setPhase('orange'), 3000);
      setTimeout(() => setPhase('green'), 4000);
      setTimeout(() => setPhase('orange'), 7000);
    };
    
    cycle();
    const interval = setInterval(cycle, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
      <pointLight position={[3, 3, 0]} intensity={0.5} color="#4488ff" />
      
      <Road />
      <Car phase={phase} />
      <TrafficLight phase={phase} />
      
      {/* Ground */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 3]}>
        <planeGeometry args={[20, 4]} />
        <meshStandardMaterial color="#1a3d1a" />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -3]}>
        <planeGeometry args={[20, 4]} />
        <meshStandardMaterial color="#1a3d1a" />
      </mesh>
      
      {/* Sky gradient */}
      <mesh position={[0, 5, -8]}>
        <planeGeometry args={[30, 15]} />
        <meshBasicMaterial color="#0a1628" />
      </mesh>
      
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        maxPolarAngle={Math.PI / 2.5}
        minPolarAngle={Math.PI / 4}
        autoRotate
        autoRotateSpeed={0.3}
      />
    </>
  );
};

export const WebGLBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 opacity-60">
      <Canvas 
        camera={{ position: [0, 3, 8], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
};

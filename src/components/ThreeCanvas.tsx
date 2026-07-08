"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// 3D Terrain Grid representing Site Topography
function TerrainGrid({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Grid size and subdivisions
  const width = 80;
  const height = 80;
  const segments = 40;

  // Generate height offsets representing hills and valleys (undulating terrain)
  const positionAttr = useMemo(() => {
    const geometry = new THREE.PlaneGeometry(width, height, segments, segments);
    const pos = geometry.attributes.position;
    
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      // Construct a mathematical wave terrain
      const z = Math.sin(x * 0.15) * Math.cos(y * 0.15) * 1.5 + 
                Math.sin(x * 0.05) * Math.sin(y * 0.05) * 3.0;
      pos.setZ(i, z);
    }
    
    geometry.computeVertexNormals();
    return geometry;
  }, []);

  // Animate the terrain waves subtly like moving groundwater or shifting landscapes
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime() * 0.15;
    const geom = meshRef.current.geometry;
    const pos = geom.attributes.position;
    
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const y = pos.getY(i);
      const z = Math.sin(x * 0.15 + time) * Math.cos(y * 0.15 + time) * 1.2 + 
                Math.sin(x * 0.05 + time * 0.5) * Math.sin(y * 0.05) * 2.8;
      pos.setZ(i, z);
    }
    pos.needsUpdate = true;
    geom.computeVertexNormals();
  });

  const lineColor = isDark ? "#4E6E81" : "#16324F";

  return (
    <mesh ref={meshRef} geometry={positionAttr} rotation={[-Math.PI / 2.3, 0, 0]} position={[0, -8, -10]}>
      <meshBasicMaterial 
        color={lineColor} 
        wireframe 
        transparent 
        opacity={isDark ? 0.18 : 0.08} 
      />
    </mesh>
  );
}

// 3D Truss Structure representing Structural Engineering
function StructuralTruss({ isDark }: { isDark: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  // Define nodes for a space truss bridge structure
  const { points, indices } = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    const idxs: number[] = [];
    const length = 20;
    const segments = 10;
    const height = 2.5;
    const width = 2.5;

    // Build upper and lower chords
    for (let i = 0; i <= segments; i++) {
      const x = (i - segments / 2) * (length / segments);
      // Lower chord points
      pts.push(new THREE.Vector3(x, 0, -width / 2)); // 0, 4, 8...
      pts.push(new THREE.Vector3(x, 0, width / 2));  // 1, 5, 9...
      // Upper chord points
      pts.push(new THREE.Vector3(x, height, -width / 2)); // 2, 6, 10...
      pts.push(new THREE.Vector3(x, height, width / 2));  // 3, 7, 11...
    }

    // Connect them with truss members
    for (let i = 0; i < segments; i++) {
      const base0 = i * 4;
      const base1 = (i + 1) * 4;

      // Longitudinal chords
      idxs.push(base0, base1);     // Lower Left
      idxs.push(base0 + 1, base1 + 1); // Lower Right
      idxs.push(base0 + 2, base1 + 2); // Upper Left
      idxs.push(base0 + 3, base1 + 3); // Upper Right

      // Verticals
      idxs.push(base0, base0 + 2);
      idxs.push(base0 + 1, base0 + 3);

      // Transverse beams
      idxs.push(base0, base0 + 1);
      idxs.push(base0 + 2, base0 + 3);

      // Diagonals (Warren Truss layout)
      idxs.push(base0, base1 + 2);     // Left side diagonal
      idxs.push(base0 + 1, base1 + 3); // Right side diagonal
      idxs.push(base0, base1 + 1);     // Bottom diagonal
      idxs.push(base0 + 2, base1 + 3); // Top diagonal
    }

    // Add vertical and cross connections for the last segment
    const lastBase = segments * 4;
    idxs.push(lastBase, lastBase + 2);
    idxs.push(lastBase + 1, lastBase + 3);
    idxs.push(lastBase, lastBase + 1);
    idxs.push(lastBase + 2, lastBase + 3);

    return { points: pts, indices: idxs };
  }, []);

  // Convert indices to a LineSegments-friendly float array
  const lineGeometry = useMemo(() => {
    const geom = new THREE.BufferGeometry();
    const positions: number[] = [];
    for (let i = 0; i < indices.length; i++) {
      const pt = points[indices[i]];
      positions.push(pt.x, pt.y, pt.z);
    }
    geom.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
    return geom;
  }, [points, indices]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    // Slow rotational simulation
    groupRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    groupRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.05;
  });

  const trussColor = isDark ? "#4CAF50" : "#16324F";

  return (
    <group ref={groupRef} position={[0, 4, -8]}>
      {/* Node joints as tiny spheres */}
      {points.map((pt, i) => (
        <mesh key={i} position={pt}>
          <sphereGeometry args={[0.08, 8, 8]} />
          <meshBasicMaterial color={trussColor} transparent opacity={0.6} />
        </mesh>
      ))}
      
      {/* Structural frames as line segments */}
      <lineSegments geometry={lineGeometry}>
        <lineBasicMaterial 
          color={trussColor} 
          linewidth={2} 
          transparent 
          opacity={isDark ? 0.35 : 0.15} 
        />
      </lineSegments>
    </group>
  );
}

interface ThreeCanvasProps {
  theme: "light" | "dark";
}

export default function ThreeCanvas({ theme }: ThreeCanvasProps) {
  const isDark = theme === "dark";

  return (
    <div className="absolute inset-0 -z-10 w-full h-full overflow-hidden select-none pointer-events-none">
      <Canvas
        camera={{ position: [0, 5, 18], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={isDark ? 0.5 : 1.0} />
        <directionalLight position={[10, 10, 5]} intensity={isDark ? 0.3 : 0.8} />
        
        <TerrainGrid isDark={isDark} />
        <StructuralTruss isDark={isDark} />
        
        {/* Soft interactive rotation controls */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          enableRotate={true}
          autoRotate={false}
          rotateSpeed={0.3}
        />
      </Canvas>
    </div>
  );
}

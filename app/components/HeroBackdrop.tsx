"use client";

import { Canvas } from "@react-three/fiber";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import gsap from "gsap";

function AnimatedObjects() {
  const outerRef = useRef<THREE.LineSegments>(null);
  const innerRef = useRef<THREE.LineSegments>(null);

  // Create professional architectural geometries
  const { outerGeometry, innerGeometry } = useMemo(() => {
    // A geodesic dome structure gives a strong engineering/architectural vibe
    const outerIco = new THREE.IcosahedronGeometry(3.5, 2);
    const innerIco = new THREE.IcosahedronGeometry(2.5, 1);
    
    // Using EdgesGeometry creates clean, sharp lines without the diagonal clutter of standard wireframes
    const outer = new THREE.EdgesGeometry(outerIco);
    const inner = new THREE.EdgesGeometry(innerIco);
    
    return { outerGeometry: outer, innerGeometry: inner };
  }, []);

  useEffect(() => {
    if (!outerRef.current || !innerRef.current) return;
    
    // Very slow, deliberate, premium rotation
    gsap.to(outerRef.current.rotation, {
      y: Math.PI * 2,
      x: Math.PI * 0.5,
      duration: 60,
      repeat: -1,
      ease: "none",
    });

    gsap.to(innerRef.current.rotation, {
      y: -Math.PI * 2,
      z: Math.PI * 0.5,
      duration: 45,
      repeat: -1,
      ease: "none",
    });
    
    // Subtle breathing/floating effect
    gsap.to([outerRef.current.position, innerRef.current.position], {
      y: 0.15,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 0.5,
    });
  }, []);

  return (
    <group position={[0, -0.5, -2]}>
      {/* Outer Structure */}
      <lineSegments ref={outerRef} geometry={outerGeometry}>
        <lineBasicMaterial 
          color="#ffffff" // White lines for dark blue background
          transparent={true} 
          opacity={0.15} 
          linewidth={1}
        />
      </lineSegments>

      {/* Inner Structure */}
      <lineSegments ref={innerRef} geometry={innerGeometry}>
        <lineBasicMaterial 
          color="#ffffff"
          transparent={true} 
          opacity={0.25} 
          linewidth={1}
        />
      </lineSegments>
    </group>
  );
}

export default function HeroBackdrop() {
  const [enabled, setEnabled] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  const attach = useCallback((node: HTMLDivElement | null) => {
    observer.current?.disconnect();
    observer.current = null;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    if (!("IntersectionObserver" in window)) {
      setEnabled(true);
      return;
    }

    const io = new IntersectionObserver(([entry]) => setEnabled(entry.isIntersecting), {
      rootMargin: "200px",
    });
    io.observe(node);
    observer.current = io;
  }, []);

  useEffect(() => () => observer.current?.disconnect(), []);

  return (
    <div ref={attach} aria-hidden data-hero-backdrop className="absolute inset-0">
      {enabled && (
        <Canvas
          className="!absolute inset-0"
          dpr={[1, 1.75]}
          gl={{ antialias: true, alpha: true }}
          camera={{ position: [0, 0, 6], fov: 50 }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedObjects />
        </Canvas>
      )}
    </div>
  );
}

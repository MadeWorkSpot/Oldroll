"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import * as THREE from "three";
import gsap from "gsap";

// Matches the group offset in AnimatedObjects, so camera distance is measured
// from the object rather than from the origin.
const OBJECT_Z = -2;

// Camera-to-object distance of the shipped desktop framing (camera z = 6). Held
// as a floor so this change only ever pulls the camera back, never pushes it
// closer than the current look. Vertical framing is deliberately left alone —
// it already works, and it is the horizontal axis that collapses in portrait.
const FRAMING_DISTANCE = 6 - OBJECT_Z;

// Slack on the fitted axis, covering the y offset and the slow float.
const FIT_RADIUS = 3.5;
const FIT_MARGIN = 1.2;

// Keeps the structure fully in frame on any aspect ratio. R3F syncs
// camera.aspect on resize but never repositions the camera, so a fixed
// position plus a fixed vertical FOV collapses the horizontal frustum on
// portrait screens — the object ends up wider than the viewport and only its
// empty centre is visible.
function FitCamera() {
  const camera = useThree((state) => state.camera) as THREE.PerspectiveCamera;
  const width = useThree((state) => state.size.width);
  const height = useThree((state) => state.size.height);

  useEffect(() => {
    if (!width || !height) return;

    // Derive the aspect from the measured size instead of camera.aspect, since
    // R3F writes that on its own resize pass and can land after this effect.
    const aspect = width / height;
    const vFov = THREE.MathUtils.degToRad(camera.fov);

    // Horizontal FOV follows from the vertical one and the aspect ratio, so a
    // portrait viewport gets a much narrower horizontal field than the same
    // geometry on a wide one. Solve for the distance that fits the bounding
    // sphere across that narrower axis.
    const hFov = 2 * Math.atan(Math.tan(vFov / 2) * aspect);
    const fitHorizontally = (FIT_RADIUS * FIT_MARGIN) / Math.sin(hFov / 2);

    // Wide viewports already fit within the existing framing and are left
    // untouched; narrow ones back the camera off until the whole object shows.
    const distance = Math.max(FRAMING_DISTANCE, fitHorizontally);

    camera.position.set(0, 0, distance + OBJECT_Z);
    camera.updateProjectionMatrix();
  }, [camera, width, height]);

  return null;
}

function AnimatedObjects({ animate = true }: { animate?: boolean }) {
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
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    // Reduced motion still gets the structure, just held at a fixed pose — an
    // empty hero reads as broken, whereas a still frame reads as intentional.
    if (!animate) {
      outer.rotation.set(0.22, 0.7, 0);
      inner.rotation.set(-0.14, -0.9, 0.3);
      return;
    }

    // Very slow, deliberate, premium rotation
    gsap.to(outer.rotation, {
      y: Math.PI * 2,
      x: Math.PI * 0.5,
      duration: 60,
      repeat: -1,
      ease: "none",
    });

    gsap.to(inner.rotation, {
      y: -Math.PI * 2,
      z: Math.PI * 0.5,
      duration: 45,
      repeat: -1,
      ease: "none",
    });
    
    // Subtle breathing/floating effect
    gsap.to([outer.position, inner.position], {
      y: 0.15,
      duration: 4,
      yoyo: true,
      repeat: -1,
      ease: "sine.inOut",
      stagger: 0.5,
    });

    // The preference can change mid-session, so stop cleanly when it does
    // rather than leaving tweens running against a frozen frame.
    return () => {
      gsap.killTweensOf([outer.rotation, inner.rotation, outer.position, inner.position]);
    };
  }, [animate]);

  return (
    <group position={[0, -0.5, OBJECT_Z]}>
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
  const [reduceMotion, setReduceMotion] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  // Track the preference rather than reading it once at attach time. Systems
  // that enable reduced motion by default (Windows "Animation effects", macOS
  // Reduce Motion, several Linux desktops) previously skipped the canvas
  // entirely, leaving the hero empty.
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const attach = useCallback((node: HTMLDivElement | null) => {
    observer.current?.disconnect();
    observer.current = null;
    if (!node) return;

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
          // Render nothing rather than throwing where WebGL is unavailable.
          fallback={null}
          camera={{ position: [0, 0, 6], fov: 50 }}
        >
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <FitCamera />
          <AnimatedObjects animate={!reduceMotion} />
        </Canvas>
      )}
    </div>
  );
}

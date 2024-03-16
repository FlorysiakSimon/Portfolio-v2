"use client";
import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import type { Mesh } from "three";

interface BoxProps {
  position: [number, number, number];
  rotation: [number, number, number];
}

function Box(props: Readonly<BoxProps>) {
  const ref = useRef<Mesh>(null);
  useFrame((state, delta) => {
    if (ref.current) ref.current.rotation.x += 0.003; // Check if ref.current exists before accessing it
  });
  return (
    <mesh {...props} ref={ref}>
      <torusGeometry args={[12, 2, 100, 100]} />
      <meshStandardMaterial color={"#7389F4"} />
    </mesh>
  );
}

export default function Torus() {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        height: "100%",
        width: "100%",
        marginTop: "1em",
      }}
    >
      <ambientLight intensity={5} />
      <spotLight
        position={[-1, 3, 1]}
        angle={2}
        intensity={400}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight position={[-10, -10, -10]} />
      <Box
        position={[0, 0, -18]}
        rotation={[-Math.PI * 0.2, Math.PI * 0.75, 0]}
      />
    </Canvas>
  );
}

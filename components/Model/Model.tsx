"use client";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/Addons.js";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function Load() {
  const gltf = useLoader(GLTFLoader, "./Simon_3D_caractere.gltf");

  //rotate
  const myMesh = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    const a = clock.getElapsedTime();
    if (myMesh.current) {
      myMesh.current.rotation.y = a;
    }
  });

  return (
    <mesh ref={myMesh}>
      <primitive object={gltf.scene} scale={0.1} />
    </mesh>
  );
}

export default function Model() {
  return (
    <Canvas
      style={{
        height: "600px",
        width: "90%",
        marginLeft: "3em",
        marginTop: "-120px",
        marginBottom: "-200px",
      }}
      camera={{ position: [1.5, 1.5, 0.5] }}
    >
      <Suspense fallback={null}>
        <Load />
        <pointLight position={[5, 55, 10]} />
        <ambientLight intensity={8} />
      </Suspense>
    </Canvas>
  );
}

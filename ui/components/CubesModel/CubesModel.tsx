"use client";
import React, { Suspense, useRef } from "react";
import { useLoader, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { Environment, OrbitControls,CameraControls } from "@react-three/drei";
function CubesModel() {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, "cubes.glb");
  return <primitive ref={ref} object={gltf.scene} />;
}

function CubesScene() {
  return (
    <div className="h-72 w-96">
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback="loading...">
          <CubesModel />
          <CameraControls />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default CubesScene;

"use client";
import { CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
{
  /* <rect x="27.1304" y="27.1305" width="20.8696" height="20.8696" fill="white"/> */
}
{
  /* <rect y="27.1305" width="20.8696" height="20.8696" fill="white"/> */
}
{
  /* <rect width="20.8696" height="20.8696" fill="white"/> */
}
// </svg>

function CubesScene() {
  // create a scene with 3 cubes and a camera arranged like in the svg logo
  // metalic cubes
  return (
    <div className="h-72 w-96">
      <Canvas>
        <ambientLight />
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="black" />
        </mesh>
        <CameraControls />
      </Canvas>
    </div>
  );
}

export default CubesScene;

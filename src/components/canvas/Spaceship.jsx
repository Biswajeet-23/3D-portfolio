import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Spaceship = () => {
  const spaceship = useGLTF(
    "./spaceship/Intergalactic_Spaceships_Version_2.gltf"
  );

  return (
    <primitive
      object={spaceship.scene}
      scale={0.5}
      position-y={1}
      position-x={-2}
      rotation-y={0}
    />
  );
};

const SpaceshipCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <ambientLight intensity={10} />

        <Spaceship />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default SpaceshipCanvas;

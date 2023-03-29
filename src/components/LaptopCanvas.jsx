import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";

const Laptop = () => {
   const laptop = useGLTF("./laptop/scene.gltf");

   return (
      <mesh>
         <hemisphereLight intensity={0.5} groundColor="black" />
         <spotLight
            position={[-20, 50, 10]}
            angle={0.12}
            penumbra={1}
            castShadow
            shadow-mapSize={720}
            intensity={1}
         />
         <pointLight intensity={1} />
         <primitive
            object={laptop.scene}
            scale={3.75}
            position={[0, -8.25, -1]}
            rotation={[-0.01, -0.8, -0.02]}
         />
      </mesh>
   );
};

const LaptopCanvas = () => {
   return (
      <Canvas
         frameloop="demand"
         shadows
         dpr={[1, 2]}
         camera={{ position: [20, 3, 5], fov: 25 }}
         gl={{ preserveDrawingBuffer: true }}
      >
         <Suspense fallback="loading..">
            <OrbitControls
               enableZoom={false}
               maxPolarAngle={Math.PI / 2}
               minPolarAngle={Math.PI / 2}
            />
            <Laptop />
         </Suspense>

         <Preload all />
      </Canvas>
   );
};

export default LaptopCanvas;

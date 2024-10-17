/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Barrier2(props) {
  const { nodes, materials } = useGLTF("./models/Barrier.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[49, 1.5, -75]}
      scale={2}
      rotation={[0, Math.PI / 2, 0]}
    >
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.Cube.geometry}
      material={materials.Barrier}
    />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube_1.geometry}
        material={materials.Stone}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={materials.Barrier}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001_1.geometry}
        material={materials.Stone}
      />
    </group>
  );
}

useGLTF.preload("./models/Barrier.glb");

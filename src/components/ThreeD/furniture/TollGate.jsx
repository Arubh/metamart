/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function TollGate(props) {
  const { nodes, materials } = useGLTF("./models/tollGate.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[47.2, 1.6, 55]}
      scale={4.5}
      rotation={[0, Math.PI/2, 0]}
    >
      <group position={[-4.877, 1.186, -0.009]} scale={[2, 0.113, 0.113]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002.geometry}
          material={materials["CrossRoad Rail Traffic Light Label"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder002_1.geometry}
          material={materials["CrossRoad Rail Traffic Light Bolt"]}
        />
      </group>
      <group scale={[2, 0.113, 0.113]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials["CrossRoad Rail Traffic Light Metal"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_1.geometry}
          material={materials["CrossRoad Rail Traffic Light Plastic Cover"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_2.geometry}
          material={materials["CrossRoad Rail Traffic Light Bolt"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004_3.geometry}
          material={materials["CrossRoad Rail Traffic Light Label"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/tollGate.glb");

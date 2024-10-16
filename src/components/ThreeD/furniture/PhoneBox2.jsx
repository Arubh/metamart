/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PhoneBox2(props) {
  const { nodes, materials } = useGLTF("./models/phoneBox2.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[-23.5, 5.7, -20]}
      rotation={[0, 0, 0]}
      scale={10}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Box-Top"]}
        scale={1.107}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        scale={1.107}
      />
    </group>
  );
}

useGLTF.preload("./models/phoneBox2.glb");

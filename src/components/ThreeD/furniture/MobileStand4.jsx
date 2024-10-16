/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function MobileStand4(props) {
  const { nodes, materials } = useGLTF("./models/mobileStand.glb");
  return (
    <group
      {...props}
      dispose={null}
      position={[-31, 5.7, -16]}
      scale={[1.2, 1.2, 1.2]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bottom_holder.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.middle_body.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nurb.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.nurb_1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.phone_holder.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stand_foams_1.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stand_foams_2.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.stand_frame.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.002}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.top_holder.geometry}
        material={materials["default"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.002}
      />
    </group>
  );
}

useGLTF.preload("./models/mobileStand.glb");

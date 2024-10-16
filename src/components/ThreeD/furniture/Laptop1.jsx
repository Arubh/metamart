import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { CircleGeometry, MeshStandardMaterial } from "three";

export function Laptop1(props) {
  const { nodes, materials } = useGLTF("./models/laptop1.glb");
  const [hovered, setHovered] = useState(false);
  const groupRef = useRef();
  const outlineRef = useRef();

  const handlePointerOver = () => {
    setHovered(true);
    if (groupRef.current) {
      groupRef.current.position.y += 0.5;
    }
  };

  const handlePointerOut = () => {
    setHovered(false);
    if (groupRef.current) {
      groupRef.current.position.y -= 0.5;
    }
  };

  const handleClick = (event) => {
    event.stopPropagation();
    props.onClick(); 
  };

  return (
    <group
      {...props}
      ref={groupRef}
      dispose={null}
      scale={[12, 12, 12]}
      position={[2, 5, -16]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onClick={handleClick}
    >
      <group rotation={[Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005.geometry}
          material={materials["Laptop.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_1.geometry}
          material={materials["_Spaeaker_Laptop_.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_2.geometry}
          material={materials["Keyboard.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_3.geometry}
          material={materials["Track_Pad.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_4.geometry}
          material={materials["Feet.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_5.geometry}
          material={materials["Screen_Grey.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_7.geometry}
          material={materials["Image.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_8.geometry}
          material={materials["Black_Gloss.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Laptop_Open_Plane005_9.geometry}
          material={materials["Keys.009"]}
        />

        {/* Outline Mesh */}
        <mesh
          ref={outlineRef}
          geometry={new CircleGeometry(0.25, 32)} // Adjust size accordingly
          position={[0, -0.01, 0.02]} // Slightly offset to be behind the laptop
          rotation={[0, 0, Math.PI / 2]}
          material={
            new MeshStandardMaterial({
              color: hovered ? "blue" : "transparent",
              transparent: true,
              visible: hovered ? true : false,
              opacity: 0.5,
              side: 2, // Double-side rendering to make sure it's visible from all angles
            })
          }
        />
      </group>
    </group>
  );
}

useGLTF.preload("./models/laptop1.glb");

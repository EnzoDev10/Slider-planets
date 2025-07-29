import * as THREE from "three";

import React from "react";
import { useGLTF } from "@react-three/drei";
import type { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
    nodes: {
        Curve007_1: THREE.Mesh;
        Curve007_2: THREE.Mesh;
    };
    materials: {
        ["Material.001"]: THREE.MeshStandardMaterial;
        ["Material.002"]: THREE.MeshStandardMaterial;
    };
};

export const TestModel = (props: React.JSX.IntrinsicElements["group"]) => {
    const { nodes, materials } = useGLTF(
        "/Poimandres-transformed.glb"
    ) as unknown as GLTFResult;

    return (
        <group {...props} dispose={null} scale={0.4}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve007_1.geometry}
                material={materials["Material.001"]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Curve007_2.geometry}
                material={materials["Material.002"]}
            />
        </group>
    );
};

useGLTF.preload("/Poimandres-transformed.glb");

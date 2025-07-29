import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Mesh } from "three";

export const Cube = () => {
    const textures = useTexture({
        map: "Onyx011_1K-JPG_Color.jpg",
        displacementMap: "Onyx011_1K-JPG_Displacement.jpg",
        normalMap: "Onyx011_1K-JPG_NormalGL.jpg",
        roughnessMap: "Onyx011_1K-JPG_Roughness.jpg",
    });

    const myMesh = useRef<Mesh>(null);

    useFrame(({ clock }) => {
        if (myMesh.current) {
            myMesh.current.rotation.x = clock.elapsedTime;
        }
    });

    return (
        <>
            <ambientLight intensity={0.3} />
            <directionalLight />
            <mesh ref={myMesh}>
                <boxGeometry />
                <meshStandardMaterial displacementScale={0} {...textures} />
            </mesh>
        </>
    );
};

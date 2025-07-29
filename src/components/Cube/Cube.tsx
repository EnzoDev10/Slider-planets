import { useTexture } from "@react-three/drei";

export const Cube = () => {
    const textures = useTexture({
        map: "Onyx011_1K-JPG_Color.jpg",
        displacementMap: "Onyx011_1K-JPG_Displacement.jpg",
        normalMap: "Onyx011_1K-JPG_NormalGL.jpg",
        roughnessMap: "Onyx011_1K-JPG_Roughness.jpg",
    });

    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight />
            <mesh castShadow receiveShadow>
                <boxGeometry />
                <meshStandardMaterial {...textures} />
            </mesh>
            <ambientLight args={[0xff0000]} intensity={0.1} />
            <directionalLight position={[0, 0, 5]} intensity={0.6} />
        </>
    );
};

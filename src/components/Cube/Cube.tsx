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
            <ambientLight intensity={0.3} />
            <directionalLight />
            <mesh>
                <boxGeometry />
                <meshStandardMaterial displacementScale={0} {...textures} />
            </mesh>
        </>
    );
};

export const Cube = () => {
    return (
        <>
            <mesh>
                <boxGeometry />
                <meshPhongMaterial color={"#ff0000"} />
            </mesh>
            <ambientLight args={[0xff0000]} intensity={0.1} />
            <directionalLight position={[0, 0, 5]} intensity={0.6} />
        </>
    );
};

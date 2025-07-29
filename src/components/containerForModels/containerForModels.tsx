import { Canvas } from "@react-three/fiber";

import "./3dStyles.css";
import { Suspense, type PropsWithChildren } from "react";

import {
    Environment,
    OrbitControls,
    Html,
    useProgress,
} from "@react-three/drei";

function Loader() {
    const { progress } = useProgress();

    return <Html center>{progress} % loaded </Html>;
}

export const ModelsContainer = ({ children }: PropsWithChildren) => {
    return (
        <div className='canvas-container'>
            <Canvas>
                <Suspense fallback={<Loader />}>
                    {children}
                    <OrbitControls />
                    <Environment preset='sunset' background />
                </Suspense>
            </Canvas>
        </div>
    );
};

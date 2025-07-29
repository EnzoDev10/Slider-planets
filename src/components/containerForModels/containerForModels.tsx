import { Canvas } from "@react-three/fiber";

import "./3dStyles.css";
import { Suspense, type PropsWithChildren } from "react";

import { Environment, OrbitControls } from "@react-three/drei";

export const ModelsContainer = ({ children }: PropsWithChildren) => {
    return (
        <div className='canvas-container'>
            <Canvas>
                <Suspense fallback={null}>
                    {children}
                    <OrbitControls />
                    <Environment preset='sunset' background />
                </Suspense>
            </Canvas>
        </div>
    );
};

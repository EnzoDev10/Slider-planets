import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";

import { Suspense, type PropsWithChildren } from "react";
import "./3dStyles.css";

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
                </Suspense>
            </Canvas>
        </div>
    );
};

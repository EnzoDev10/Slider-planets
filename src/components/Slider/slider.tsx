import { useEffect, useRef, useState } from "react";
import Core from "smooothy";
import type { CoreConfig } from "smooothy";
import gsap from "gsap";

import "./slider.css";

function useSmooothy(config: Partial<CoreConfig> = {}) {
    const sliderRef = useRef<HTMLElement | null>(null);
    const [slider, setSlider] = useState<Core | null>(null);

    const refCallback = (node: HTMLElement | null) => {
        if (node && !slider) {
            const instance = new Core(node, config);
            gsap.ticker.add(instance.update.bind(instance));
            setSlider(instance);
        }
        sliderRef.current = node;
    };

    useEffect(() => {
        return () => {
            if (slider) {
                gsap.ticker.remove(slider.update.bind(slider));
                slider.destroy();
            }
        };
    }, [slider]);

    return { ref: refCallback, slider };
}

export const ReactSlider = () => {
    const { ref, slider } = useSmooothy();

    function goNext() {
        slider?.goToNext();
    }

    function goPrev() {
        slider?.goToPrev();
    }

    const slides = Array.from({ length: 10 }, (_, i) => i);
    return (
        <section>
            <div ref={ref} className='slider-root'>
                {slides.map((_, i) => (
                    <div key={i} className='slider-container'>
                        <div className='slider-inner'>
                            <div className='slider-outline' />
                            <p className='slider-index'>{i}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='btns-container'>
                <button onClick={() => goPrev()}>Anterior</button>
                <button onClick={() => goNext()}>Siguiente</button>
            </div>
        </section>
    );
};

import { useRecoilValue } from "recoil";
import { backgroundColor, constellation } from "../../stateManagement/recoil";
import { useCallback, useMemo } from 'react'
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";

export const Particlesjs = () => {

    const bgColor = useRecoilValue(backgroundColor);
    const asterisms = useRecoilValue(constellation);

    const particlesInit = useCallback(engine => {
        loadSlim(engine);
    }, []);
    const particlesLoaded = useCallback(container => {
        console.log(container);
    }, []);


    const particlesOptions = useMemo(() => ({
        fullScreen: true,
        background: {
            color: {
                value: bgColor,
            },
        },
        fpsLimit: 60, // Lowering fpsLimit to a more standard value
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "push",
                },
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: asterisms,
            },
            links: {
                color: asterisms,
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 6,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 3, max: 6 },
            },
        },
        detectRetina: true,
    }), [bgColor, asterisms]);


    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={particlesOptions}
        />
    )
}

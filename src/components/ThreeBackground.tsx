"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeBackground() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // 1. Setup Scene, Camera, Renderer
        const scene = new THREE.Scene();
        // Set background to a very dark purple/black to match the aesthetic
        scene.background = new THREE.Color(0x09040f);

        const getDimensions = () => {
            if (!mount) return { width: window.innerWidth, height: window.innerHeight };
            return {
                width: mount.offsetWidth || window.innerWidth,
                height: mount.offsetHeight || window.innerHeight
            };
        };

        // FOG: This is crucial. Fog makes the grid fade out smoothly into the center/horizon.
        scene.fog = new THREE.FogExp2(0x09040f, 0.04);

        const { width, height } = getDimensions();

        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
        camera.position.z = 20;
        camera.position.y = 0;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setSize(width, height);
        // Batasi pixel ratio max 2 agar GPU HP tidak jebol (crashes WebGL context)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mount.appendChild(renderer.domElement);

        // 2. Create GridHelper (Floor and Ceiling)
        const gridSize = 200;
        const gridDivisions = 60;
        const gridColor = new THREE.Color(0x2b2bf4);
        gridColor.multiplyScalar(0.3);

        const gridMaterial = new THREE.LineBasicMaterial({
            color: gridColor,
            transparent: true,
            opacity: 0.2,
        });

        const gridBottom = new THREE.GridHelper(gridSize, gridDivisions, gridColor, gridColor);
        gridBottom.position.y = -6;
        (gridBottom.material as THREE.Material).transparent = true;
        (gridBottom.material as THREE.Material).opacity = 0.80;
        scene.add(gridBottom);

        const gridTop = new THREE.GridHelper(gridSize, gridDivisions, gridColor, gridColor);
        gridTop.position.y = 6;
        (gridTop.material as THREE.Material).transparent = true;
        (gridTop.material as THREE.Material).opacity = 0.80;
        scene.add(gridTop);

        const spaceBetweenLines = gridSize / gridDivisions;
        let animationFrameId: number;
        let speed = 0.05;

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            gridBottom.position.z += speed;
            gridTop.position.z += speed;

            if (gridBottom.position.z > spaceBetweenLines) {
                gridBottom.position.z = 0;
                gridTop.position.z = 0;
            }
            renderer.render(scene, camera);
        };
        animate();

        // 4. Handle Resize safely
        const handleResize = () => {
            const { width, height } = getDimensions();
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
            if (mount && mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
            gridTop.dispose();
            gridBottom.dispose();
            renderer.dispose();
            renderer.forceContextLoss();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 0,
            }}
        />
    );
}

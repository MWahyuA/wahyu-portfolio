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

        // FOG: This is crucial. Fog makes the grid fade out smoothly into the center/horizon.
        scene.fog = new THREE.FogExp2(0x09040f, 0.04);

        const camera = new THREE.PerspectiveCamera(
            75,
            mount.clientWidth / mount.clientHeight,
            0.1,
            1000
        );
        camera.position.z = 20;
        // Raise camera slightly to look down the infinite tunnel
        camera.position.y = 0;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mount.appendChild(renderer.domElement);

        // 2. Create GridHelper (Floor and Ceiling)
        const gridSize = 200;
        const gridDivisions = 60; // How dense the grid is
        // Primary Blue Color
        const gridColor = new THREE.Color(0x2b2bf4);

        // Fade lines a bit so it's not too harsh, making it "lebih redup"
        gridColor.multiplyScalar(0.3); // Sangat redup

        // Buat material grid menjadi transparan (opsional tapi membantu)
        const gridMaterial = new THREE.LineBasicMaterial({
            color: gridColor,
            transparent: true,
            opacity: 0.2, // Mengurangi opasitas agar jauh lebih redup
        });

        // -- FLOOR GRID --
        const gridBottom = new THREE.GridHelper(gridSize, gridDivisions, gridColor, gridColor);
        gridBottom.position.y = -6; // push it down
        (gridBottom.material as THREE.Material).transparent = true;
        (gridBottom.material as THREE.Material).opacity = 0.80; // Set to very dim
        scene.add(gridBottom);

        // -- CEILING GRID --
        const gridTop = new THREE.GridHelper(gridSize, gridDivisions, gridColor, gridColor);
        gridTop.position.y = 6; // push it up
        (gridTop.material as THREE.Material).transparent = true;
        (gridTop.material as THREE.Material).opacity = 0.80; // Set to very dim
        scene.add(gridTop);

        // Space between lines (needed for seamless endless animation)
        const spaceBetweenLines = gridSize / gridDivisions;

        let animationFrameId: number;
        // 3. Animation Loop
        let speed = 0.05; // Animation speed for movement

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            // Move both grids towards the camera to create infinite moving effect
            gridBottom.position.z += speed;
            gridTop.position.z += speed;

            // Reset grid position once it shifts by 1 exact grid-cell
            // This creates a perfectly seamless infinite loop
            if (gridBottom.position.z > spaceBetweenLines) {
                gridBottom.position.z = 0;
                gridTop.position.z = 0;
            }

            renderer.render(scene, camera);
        };
        animate();

        // 4. Handle Resize
        const handleResize = () => {
            if (!mount) return;
            camera.aspect = mount.clientWidth / mount.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mount.clientWidth, mount.clientHeight);
        };
        window.addEventListener("resize", handleResize);

        // Cleanup
        return () => {
            window.removeEventListener("resize", handleResize);
            cancelAnimationFrame(animationFrameId);
            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
            gridTop.dispose();
            gridBottom.dispose();
            renderer.dispose();
            renderer.forceContextLoss(); // Force memory clear to avoid WebGL limits
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="absolute inset-0 z-0 pointer-events-none"
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

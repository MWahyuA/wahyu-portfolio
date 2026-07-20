"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ExperienceParticles() {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;

        // Scene setup
        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, mount.clientWidth / mount.clientHeight, 0.1, 1000);
        camera.position.z = 30;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mount.clientWidth, mount.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mount.appendChild(renderer.domElement);

        // Glow circle texture (radial gradient for light emission effect)
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        if (ctx) {
            const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
            gradient.addColorStop(0, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.15, 'rgba(255,255,255,0.8)');
            gradient.addColorStop(0.4, 'rgba(255,255,255,0.3)');
            gradient.addColorStop(1, 'rgba(255,255,255,0)');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, 64, 64);
        }
        const texture = new THREE.CanvasTexture(canvas);

        const particleCount = 200;
        const geometry = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const sizes = new Float32Array(particleCount);

        const color1 = new THREE.Color("#2b2bf4"); // Primary (blue)
        const color2 = new THREE.Color("#ebb146"); // Secondary (yellow)

        for (let i = 0; i < particleCount; i++) {
            // Random position in a large cube/sphere area
            positions[i * 3] = (Math.random() - 0.5) * 80; // x
            positions[i * 3 + 1] = (Math.random() - 0.5) * 80; // y
            positions[i * 3 + 2] = (Math.random() - 0.5) * 50; // z

            // Random color selection
            const color = Math.random() > 0.5 ? color1 : color2;
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;

            // Smaller random size
            sizes[i] = Math.random() * 0.8 + 0.2;
        }

        geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const material = new THREE.PointsMaterial({
            size: 0.4,
            vertexColors: true,
            map: texture,
            transparent: true,
            opacity: 0.85,
            alphaTest: 0.001,
            sizeAttenuation: true,
            blending: THREE.AdditiveBlending,
            depthWrite: false
        });

        const particles = new THREE.Points(geometry, material);
        scene.add(particles);

        // Interaction state
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const onMouseMove = (event: MouseEvent) => {
            mouseX = (event.clientX / window.innerWidth) * 2 - 1;
            mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        };

        const handleResize = () => {
            if (!mountRef.current) return;
            const w = mountRef.current.clientWidth;
            const h = mountRef.current.clientHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
        };
        window.addEventListener("resize", handleResize);

        let animationFrameId: number;
        let isVisible = false;
        const startTime = performance.now();

        const animate = () => {
            if (!isVisible) return;
            const time = (performance.now() - startTime) / 1000;
            animationFrameId = requestAnimationFrame(animate);

            // Interpolate target rotation based on mouse
            targetX = mouseX * 0.5;
            targetY = mouseY * 0.5;

            // Natural rotation
            particles.rotation.y += 0.0015;
            particles.rotation.x += 0.0005;

            // Mouse parallax effect
            particles.rotation.y += 0.02 * (targetX - particles.rotation.y);
            particles.rotation.x += 0.02 * (targetY - particles.rotation.x);

            // Gentle overall float to replace CPU-heavy per-particle calculation
            particles.position.y = Math.sin(time * 1.5) * 0.2;

            renderer.render(scene, camera);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    if (!isVisible) {
                        isVisible = true;
                        window.addEventListener("mousemove", onMouseMove, { passive: true });
                        animate();
                    }
                } else {
                    if (isVisible) {
                        isVisible = false;
                        window.removeEventListener("mousemove", onMouseMove);
                        cancelAnimationFrame(animationFrameId);
                    }
                }
            });
        }, { threshold: 0.01 });

        observer.observe(mount);

        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", onMouseMove);
            observer.disconnect();
            cancelAnimationFrame(animationFrameId);
            if (mount.contains(renderer.domElement)) {
                mount.removeChild(renderer.domElement);
            }
            geometry.dispose();
            material.dispose();
            texture.dispose();
            renderer.dispose();
            renderer.forceContextLoss();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                pointerEvents: "none",
                opacity: 0.8
            }}
        />
    );
}

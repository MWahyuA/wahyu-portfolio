"use client";
import { useEffect, useRef, ReactNode, CSSProperties } from "react";

export default function Reveal({
    children,
    className = "",
    delay = 0,
    style
}: {
    children: ReactNode;
    className?: string;
    delay?: number;
    style?: CSSProperties;
}) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const currentRef = ref.current;
        if (!currentRef) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.15,
                rootMargin: "0px 0px -30px 0px"
            }
        );

        observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`reveal ${className}`}
            style={{ transitionDelay: `${delay}s`, ...style }}
        >
            {children}
        </div>
    );
}

"use client";
import { profile } from "@/data/portfolio";
import dynamic from "next/dynamic";
import Typewriter from "./Typewriter";
import Reveal from "./Reveal";

const ThreeBackground = dynamic(() => import("./ThreeBackground"), { ssr: false });

export default function Hero() {
    // Mengekstrak tagline (misal: "UI/UX Designer & Web Developer" => ["UI/UX Designer", "Web Developer"])
    const rolesArray = profile.tagline.split(" & ");

    return (
        <section className="hero" id="hero">
            <ThreeBackground />
            <div className="container relative z-10">
                <Reveal className="hero-content">
                    <p className="hero-greeting">👋 Hello, I&apos;m</p>
                    <h1 className="hero-name">{profile.name}</h1>
                    <p className="hero-role">
                        <Typewriter texts={rolesArray} delay={3000} />
                    </p>
                    <p className="hero-desc">{profile.heroSubtitle}</p>
                    <div className="hero-buttons">
                        <a
                            href="#projects"
                            className="btn btn-primary"
                            onClick={(e) => {
                                e.preventDefault();
                                const section = document.getElementById("projects");
                                if (section) {
                                    const y = section.getBoundingClientRect().top + window.scrollY - 80;
                                    window.scrollTo({ top: y, behavior: "smooth" });
                                }
                            }}
                        >
                            View Projects
                        </a>
                        <a
                            href={profile.cvUrl}
                            className="btn btn-outline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            📄 Download CV
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={0.2} className="hero-photo-container" style={{ flexShrink: 0 }}>
                    <div className="hero-photo-wrapper">
                        <img src={profile.photo} alt={profile.name} />

                        {/* Floating Badges */}
                        <div className="hero-floating-badge badge-tl animate-float animate-delay-1">
                            <span className="icon">✨</span>
                            <span>UI/UX Designer</span>
                        </div>

                        <div className="hero-floating-badge badge-br animate-float animate-delay-3">
                            <span className="icon">💻</span>
                            <span>Web Developer</span>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

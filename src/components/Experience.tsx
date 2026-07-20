"use client";
import { useState } from "react";
import { experiences } from "@/data/portfolio";
import Reveal from "./Reveal";
import dynamic from "next/dynamic";

const ExperienceParticles = dynamic(() => import("./ExperienceParticles"), { ssr: false });

export default function Experience() {
    const [currentPage, setCurrentPage] = useState(0);
    const ITEMS_PER_PAGE = 3;
    const totalPages = Math.ceil(experiences.length / ITEMS_PER_PAGE);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
        setTimeout(() => {
            const section = document.getElementById("experience");
            if (section) {
                const y = section.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 10);
    };

    const visibleExperiences = experiences.slice(
        currentPage * ITEMS_PER_PAGE,
        (currentPage + 1) * ITEMS_PER_PAGE
    );

    return (
        <section className="experience" id="experience" style={{ position: "relative", overflow: "hidden" }}>
            <ExperienceParticles />
            <Reveal style={{ position: "relative", zIndex: 10 }}>
                <div className="container" style={{ position: "relative", zIndex: 10 }}>
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">
                        My career journey and professional experience.
                    </p>

                    <div className="timeline">
                        {visibleExperiences.map((exp) => {
                            const isPresent =
                                exp.period.toLowerCase().includes("present") ||
                                exp.period.toLowerCase().includes("sekarang");

                            const cardContent = (
                                <>
                                    <div className="timeline-header">
                                        <div>
                                            <p className="timeline-position">{exp.position}</p>
                                            <p className="timeline-company">
                                                {exp.company}
                                                <span className="timeline-separator"></span>
                                                {exp.workType}
                                            </p>
                                        </div>
                                        <span
                                            className={`timeline-period ${isPresent ? "active" : ""}`}
                                        >
                                            {exp.period}
                                        </span>
                                    </div>
                                    <ul className="timeline-points">
                                        {exp.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </>
                            );

                            if (exp.link) {
                                return (
                                    <a
                                        key={exp.id}
                                        href={exp.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="timeline-item glass"
                                        style={{ textDecoration: "none", color: "inherit", display: "block", cursor: "pointer" }}
                                    >
                                        {cardContent}
                                    </a>
                                );
                            }

                            return (
                                <div key={exp.id} className="timeline-item glass">
                                    {cardContent}
                                </div>
                            );
                        })}
                    </div>

                    {totalPages > 1 && (
                        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "40px", position: "relative", zIndex: 50 }}>
                            <button
                                className="btn btn-outline"
                                onClick={() => handlePageChange(Math.max(currentPage - 1, 0))}
                                disabled={currentPage === 0}
                                style={{
                                    padding: "8px 24px",
                                    opacity: currentPage === 0 ? 0.5 : 1,
                                    cursor: currentPage === 0 ? "not-allowed" : "pointer"
                                }}
                            >
                                &larr; Prev
                            </button>
                            <button
                                className="btn btn-outline"
                                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages - 1))}
                                disabled={currentPage === totalPages - 1}
                                style={{
                                    padding: "8px 24px",
                                    opacity: currentPage === totalPages - 1 ? 0.5 : 1,
                                    cursor: currentPage === totalPages - 1 ? "not-allowed" : "pointer"
                                }}
                            >
                                Next &rarr;
                            </button>
                        </div>
                    )}
                </div>
            </Reveal>
        </section>
    );
}

"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Project } from "@/data/portfolio";

export default function RelatedProjects({ items }: { items: Project[] }) {
    const [currentPage, setCurrentPage] = useState(0);
    const ITEMS_PER_PAGE = 3;

    if (!items || items.length === 0) return null;

    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);
    const currentItems = items.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE);

    const handlePrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
    };

    return (
        <div className="related-projects" style={{ borderTop: "1px solid var(--border-glass)", paddingTop: "60px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "32px", flexWrap: "wrap", gap: "16px" }}>
                <h3 className="section-title" style={{ fontSize: "1.6rem", marginBottom: 0 }}>Other Related Projects</h3>

                {totalPages > 1 && (
                    <div style={{ display: "flex", gap: "12px" }}>
                        <button
                            className="btn btn-outline"
                            onClick={handlePrev}
                            disabled={currentPage === 0}
                            style={{
                                padding: "8px 16px",
                                opacity: currentPage === 0 ? 0.5 : 1,
                                cursor: currentPage === 0 ? "not-allowed" : "pointer"
                            }}
                        >
                            &larr; Prev
                        </button>
                        <button
                            className="btn btn-outline"
                            onClick={handleNext}
                            disabled={currentPage === totalPages - 1}
                            style={{
                                padding: "8px 16px",
                                opacity: currentPage === totalPages - 1 ? 0.5 : 1,
                                cursor: currentPage === totalPages - 1 ? "not-allowed" : "pointer"
                            }}
                        >
                            Next &rarr;
                        </button>
                    </div>
                )}
            </div>

            <div className="projects-grid">
                {currentItems.map((rp) => (
                    <Link
                        href={`/project/${rp.slug}`}
                        key={rp.id}
                        className="project-card glass"
                        style={{ textDecoration: "none" }}
                    >
                        <div className="project-card-img">
                            <img src={rp.thumbnail} alt={rp.title} />
                            <div className="project-categories-wrapper">
                                {rp.category.map((cat) => (
                                    <span
                                        key={cat}
                                        className={`project-card-category cat-${cat.replace('/', '')}`}
                                        style={{ position: "relative", top: "auto", left: "auto" }}
                                    >
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="project-card-body">
                            <h3 className="project-card-title">{rp.title}</h3>
                            <div className="project-card-tech">
                                {rp.techStack.slice(0, 3).map((t) => (
                                    <span key={t}>{t}</span>
                                ))}
                                {rp.techStack.length > 3 && (
                                    <span style={{
                                        background: "rgba(255,255,255,0.1)",
                                        color: "#fff"
                                    }}>
                                        +{rp.techStack.length - 3}
                                    </span>
                                )}
                            </div>
                            <span className="project-card-link">
                                Read More →
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

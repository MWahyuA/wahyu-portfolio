"use client";
import { useState } from "react";
import Link from "next/link";
import { projects, categoryFilters } from "@/data/portfolio";
import Reveal from "./Reveal";

const ITEMS_PER_PAGE = 6;

export default function Projects() {
    const [filter, setFilter] = useState<string>("all");
    const [currentPage, setCurrentPage] = useState<number>(1);

    const filtered =
        filter === "all"
            ? projects
            : projects.filter((p) => p.category.includes(filter as any));

    const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);

    // Get current page items
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedProjects = filtered.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handleFilter = (val: string) => {
        setFilter(val);
        setCurrentPage(1); // Reset to page 1 on filter change
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setTimeout(() => {
            const section = document.getElementById("projects");
            if (section) {
                const y = section.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 10);
    };

    return (
        <section className="projects" id="projects" style={{ position: "relative", zIndex: 20 }}>
            <Reveal>
                <div className="container">
                    <h2 className="section-title">Projects</h2>
                    <p className="section-subtitle">
                        A collection of my best projects.
                    </p>

                    {/* Filter Chips */}
                    <div className="filter-chips">
                        {categoryFilters.map((cat) => (
                            <button
                                key={cat.value}
                                className={`chip${filter === cat.value ? " active" : ""}`}
                                onClick={() => handleFilter(cat.value)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Project Grid */}
                    <div className="projects-grid">
                        {paginatedProjects.map((project) => (
                            <Link
                                href={`/project/${project.slug}`}
                                key={project.id}
                                className="project-card glass"
                                style={{ textDecoration: "none" }}
                            >
                                <div className="project-card-img">
                                    <img src={project.thumbnail} alt={project.title} />
                                    <div className="project-categories-wrapper">
                                        {project.category.map((cat) => (
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
                                    <h3 className="project-card-title">{project.title}</h3>
                                    <div className="project-card-tech">
                                        {project.techStack.slice(0, 3).map((t) => (
                                            <span key={t}>{t}</span>
                                        ))}
                                        {project.techStack.length > 3 && (
                                            <span className="tech-more">
                                                +{project.techStack.length - 3}
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

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="pagination" style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "40px", position: "relative", zIndex: 50 }}>
                            <button
                                className="btn btn-outline"
                                disabled={currentPage === 1}
                                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                                style={{ padding: "8px 16px", minWidth: "80px", opacity: currentPage === 1 ? 0.5 : 1 }}
                            >
                                &larr; Prev
                            </button>

                            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                {Array.from({ length: totalPages }).map((_, idx) => {
                                    const page = idx + 1;
                                    return (
                                        <button
                                            key={page}
                                            onClick={() => handlePageChange(page)}
                                            className={`chip ${currentPage === page ? "active" : ""}`}
                                            style={{ width: "40px", height: "40px", padding: 0, display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "50%" }}
                                        >
                                            {page}
                                        </button>
                                    );
                                })}
                            </div>

                            <button
                                className="btn btn-outline"
                                disabled={currentPage === totalPages}
                                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                                style={{ padding: "8px 16px", minWidth: "80px", opacity: currentPage === totalPages ? 0.5 : 1 }}
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

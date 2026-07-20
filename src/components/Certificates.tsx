"use client";
import { useState } from "react";
import { certificates } from "@/data/portfolio";
import Reveal from "./Reveal";

const ITEMS_PER_PAGE = 6;

export default function Certificates() {
    const [currentPage, setCurrentPage] = useState<number>(1);

    const totalPages = Math.ceil(certificates.length / ITEMS_PER_PAGE);

    // Get current page items
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const paginatedCerts = certificates.slice(startIndex, startIndex + ITEMS_PER_PAGE);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        setTimeout(() => {
            const section = document.getElementById("certificates");
            if (section) {
                const y = section.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }
        }, 10);
    };

    return (
        <section className="certificates" id="certificates">
            <Reveal>
                <div className="container">
                    <h2 className="section-title">Certificates</h2>
                    <p className="section-subtitle">
                        My certifications and professional achievements.
                    </p>

                    <div className="certs-grid">
                        {paginatedCerts.map((cert) => (
                            <div key={cert.id} className="cert-card glass">
                                <div className="cert-card-img">
                                    <img src={cert.image} alt={cert.title} />
                                </div>
                                <div className="cert-card-body">
                                    <h3 className="cert-card-title">{cert.title}</h3>
                                    <p className="cert-card-issuer">{cert.issuer}</p>
                                    {cert.credentialUrl && (
                                        <a
                                            href={cert.credentialUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="cert-card-link"
                                        >
                                            View Credential →
                                        </a>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Controls */}
                    {totalPages > 1 && (
                        <div className="pagination" style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "40px" }}>
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

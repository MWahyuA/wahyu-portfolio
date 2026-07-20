"use client";
import React, { useState } from "react";

interface LinkItem {
    label: string;
    url: string;
}

export default function ProjectLinksAction({ links }: { links?: LinkItem[] }) {
    const [isOpen, setIsOpen] = useState(false);

    if (!links || links.length === 0) {
        return (
            <button
                className="btn btn-primary"
                disabled
                style={{ opacity: 0.5, cursor: "not-allowed" }}
                title="Link is protected under NDA"
            >
                🔗 View Project
            </button>
        );
    }

    if (links.length === 1) {
        return (
            <a
                href={links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
            >
                🔗 View Project
            </a>
        );
    }

    // Multiple links scenario - show styled modal popup
    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="btn btn-primary"
            >
                🔗 View Project
            </button>

            {isOpen && (
                <div style={{
                    position: "fixed",
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: "rgba(0, 0, 0, 0.6)",
                    backdropFilter: "blur(4px)",
                    WebkitBackdropFilter: "blur(4px)",
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }} onClick={() => setIsOpen(false)}>
                    <div style={{
                        background: "rgba(20, 20, 32, 0.95)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        borderRadius: "16px",
                        padding: "24px",
                        minWidth: "300px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "16px",
                        boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
                    }} onClick={(e) => e.stopPropagation()}>
                        <h3 style={{ margin: 0, fontSize: "1.2rem", fontWeight: 600, textAlign: "center", color: "#fff" }}>
                            Choose Link
                        </h3>
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginTop: "8px" }}>
                            {links.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-outline"
                                    style={{ justifyContent: "center", width: "100%", padding: "12px 20px" }}
                                    onClick={() => setIsOpen(false)}
                                >
                                    ↗ {link.label}
                                </a>
                            ))}
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                marginTop: "8px",
                                background: "none",
                                color: "var(--text-secondary)",
                                border: "none",
                                cursor: "pointer",
                                fontSize: "0.95rem",
                                fontWeight: 500
                            }}
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

"use client";
import { useState } from "react";

const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Certificates", href: "#certificates" },
];

export default function Navbar({ isDetailPage = false }: { isDetailPage?: boolean }) {
    const [open, setOpen] = useState(false);

    const getHref = (href: string) => isDetailPage ? `/${href}` : href;

    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        if (!isDetailPage && targetId.startsWith("#")) {
            e.preventDefault();
            const section = document.getElementById(targetId.substring(1));
            if (section) {
                const y = section.getBoundingClientRect().top + window.scrollY - 80;
                window.scrollTo({ top: y, behavior: "smooth" });
                setOpen(false);
            }
        } else {
            setOpen(false);
        }
    };

    return (
        <nav className="navbar" id="navbar" style={{ backdropFilter: 'blur(32px) saturate(200%)', WebkitBackdropFilter: 'blur(32px) saturate(200%)' }}>
            <div className="container">
                <a href={getHref("#hero")} className="navbar-logo" onClick={(e) => handleScroll(e, "#hero")}>
                    <span className="gradient-text">MWahyuA</span>
                </a>

                <div className={`navbar-links${open ? " open" : ""}`}>
                    {links.map((l) => (
                        <a key={l.href} href={getHref(l.href)} onClick={(e) => handleScroll(e, l.href)}>
                            {l.label}
                        </a>
                    ))}
                </div>

                <button
                    className="hamburger"
                    aria-label="Toggle menu"
                    onClick={() => setOpen(!open)}
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </nav>
    );
}

import { projects } from "@/data/portfolio";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ProjectLinksAction from "@/components/ProjectLinksAction";
import RelatedProjects from "@/components/RelatedProjects";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) return { title: "Project Not Found" };
    return {
        title: `${project.title} | Wahyu Portfolio`,
        description: project.description,
    };
}

export default async function ProjectDetailPage({ params }: PageProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);
    if (!project) notFound();

    return (
        <>
            {/* Navbar */}
            <Navbar isDetailPage />

            <section className="project-detail">
                <div className="container">
                    <Link href="/#projects" className="back-link">
                        ← Back to Projects
                    </Link>

                    {/* Banner */}
                    <div className="project-detail-banner glass">
                        <img src={project.thumbnail} alt={project.title} />
                    </div>

                    {/* Title + Category */}
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px", flexWrap: "wrap" }}>
                        <h1 className="project-detail-title" style={{ marginBottom: 0 }}>{project.title}</h1>
                        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                            {project.category.map((cat) => (
                                <Link
                                    key={cat}
                                    href={`/#projects`}
                                    className={`project-card-category cat-${cat.replace('/', '')}`}
                                    style={{ fontSize: "0.85rem", padding: "8px 24px", position: "relative", top: "auto", left: "auto", textDecoration: "none" }}
                                    title={`Kembali ke daftar project ${cat}`}
                                >
                                    {cat}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Meta */}
                    <div className="project-detail-meta">
                        <span>👤 {project.role}</span>
                        <span>📅 {project.period}</span>
                    </div>

                    {/* Description */}
                    <p className="project-detail-desc" style={{ marginBottom: project.points?.length ? "16px" : "40px" }}>
                        {project.description}
                    </p>

                    {/* Bullet Points */}
                    {project.points && project.points.length > 0 && (
                        <ul className="timeline-points" style={{ marginBottom: "40px", marginTop: "16px", fontSize: "1rem" }}>
                            {project.points.map((point, idx) => (
                                <li key={idx} style={{ lineHeight: 1.6 }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                    )}

                    {/* Tech Stack */}
                    <div className="project-detail-techstack">
                        <h3>Tech Stack</h3>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                            {project.techStack.map((tech) => (
                                <span
                                    key={tech}
                                    style={{
                                        padding: "8px 18px",
                                        borderRadius: "var(--radius-full)",
                                        background: "var(--bg-glass)",
                                        border: "1px solid var(--border-glass)",
                                        color: "var(--text-secondary)",
                                        fontSize: "0.85rem",
                                        fontWeight: 500
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Action */}
                    <div className="project-detail-actions" style={{ marginBottom: "80px" }}>
                        <ProjectLinksAction links={project.links} />
                    </div>

                    {/* Related Projects */}
                    <RelatedProjects
                        items={projects.filter((p) => p.category.some(c => project.category.includes(c)) && p.slug !== project.slug)}
                    />
                </div>
            </section>
        </>
    );
}

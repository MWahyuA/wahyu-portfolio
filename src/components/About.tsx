import { profile, experiences, projects } from "@/data/portfolio";
import Reveal from "./Reveal";

// Accumulate total experience across all roles
function getYearsExperience(): string {
    const monthsMap: Record<string, number> = {
        jan: 0, feb: 1, mar: 2, apr: 3, may: 4, jun: 5,
        jul: 6, aug: 7, sep: 8, oct: 9, nov: 10, dec: 11
    };

    const uniqueMonths = new Set<string>();

    experiences.forEach((exp) => {
        const type = exp.workType.toLowerCase();
        const isValidType =
            type.includes("full") ||
            type.includes("part") ||
            type.includes("freelance") ||
            type.includes("intern") ||
            type.includes("contract");

        if (!isValidType) return;

        // Example period formats: "Sep 2024 – Dec 2025" or "Sep 2025 – Present"
        const parts = exp.period.split("–").map(p => p.trim());
        if (parts.length !== 2) return;

        const parseDate = (dateStr: string) => {
            if (dateStr.toLowerCase() === "present") return new Date();

            const [monthStr, yearStr] = dateStr.split(" ");
            const month = monthsMap[monthStr.toLowerCase().substring(0, 3)] ?? 0;
            const year = parseInt(yearStr) || new Date().getFullYear();
            return new Date(year, month);
        };

        const startDate = parseDate(parts[0]);
        const endDate = parseDate(parts[1]);

        // Iterate through every month in the range and add it to our Set
        // This automatically prevents double-counting overlapping jobs
        const current = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
        const end = new Date(endDate.getFullYear(), endDate.getMonth(), 1);

        while (current <= end) {
            uniqueMonths.add(`${current.getFullYear()}-${current.getMonth()}`);
            current.setMonth(current.getMonth() + 1);
        }
    });

    const totalMonths = uniqueMonths.size;
    const years = Math.floor(totalMonths / 12);

    // Jika kurang dari 1 tahun tapi ada experience, tampilkan 1
    if (years < 1 && totalMonths > 0) return "1+";

    return `${years}+`;
}

// Hitung jumlah project
function getProjectCount(): string {
    return `${projects.length}`;
}

export default function About() {
    const yearsExp = getYearsExperience();
    const projectCount = getProjectCount();

    return (
        <section className="about" id="about">
            <Reveal>
                <div className="container">
                    <h2 className="section-title">About Me</h2>
                    <p className="section-subtitle">Get to know me better.</p>

                    <div className="about-grid">
                        {/* Foto & Social */}
                        <div className="about-photo-card">
                            <img
                                src={profile.photo}
                                alt={profile.name}
                                className="about-photo"
                            />
                            <div className="about-social">
                                <a
                                    href={profile.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    title="LinkedIn"
                                >
                                    {/* LinkedIn SVG */}
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a
                                    href={profile.social.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    title="GitHub"
                                >
                                    {/* GitHub SVG */}
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                    </svg>
                                </a>
                                <a
                                    href={profile.social.instagram}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Instagram"
                                    title="Instagram"
                                >
                                    {/* Instagram SVG */}
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                                    </svg>
                                </a>
                                {profile.social.behance && (
                                    <a
                                        href={profile.social.behance}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Behance"
                                        title="Behance"
                                    >
                                        <svg width="20" height="20" fill="currentColor" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 640 640">
                                            <path d="M185.577 119.517c18.862 0 35.847 1.642 51.331 5.008 15.52 3.236 28.63 8.752 39.757 16.24 10.996 7.512 19.476 17.516 25.748 29.989 6 12.354 9 27.862 9 46.229 0 19.878-4.476 36.355-13.512 49.63-9.118 13.24-22.358 24-40.122 32.516 24.236 6.993 42.118 19.24 54.118 36.627 11.989 17.516 17.753 38.504 17.753 63.225 0 19.996-3.886 37.11-11.469 51.615-7.748 14.634-18.248 26.492-31.11 35.634-12.993 9.236-27.993 15.992-44.753 20.363-16.642 4.346-33.756 6.626-51.45 6.626H0V119.553l185.601.012-.023-.048zm232.042 31.76h159.616v38.883l-159.616-.012v-38.883.012zm35.469 293.448c11.764 11.469 28.63 17.233 50.646 17.233 15.745 0 29.516-4.016 40.867-12.012 11.35-7.996 18.248-16.465 20.882-25.229l68.965.012c-11.126 34.347-27.874 58.749-50.859 73.5-22.642 14.753-50.35 22.241-82.5 22.241-22.524 0-42.627-3.65-60.757-10.772-18.119-7.24-33.237-17.35-45.993-30.638-12.366-13.24-22.11-28.984-28.996-47.493-6.756-18.354-10.229-38.752-10.229-60.744 0-21.367 3.52-41.245 10.477-59.623 7.122-18.52 16.878-34.359 29.87-47.753 12.98-13.382 28.229-24 46.24-31.748 17.883-7.76 37.631-11.646 59.505-11.646 24.107 0 45.225 4.642 63.356 14.126 18 9.355 32.87 21.993 44.492 37.749 11.646 15.768 19.878 33.874 25.004 54.107 5.126 20.232 6.875 41.35 5.469 63.508H433.706c0 22.359 7.512 43.76 19.358 55.1l.024.082zm89.871-149.707c-9.236-10.24-25.122-15.874-44.233-15.874-12.52 0-22.866 2.114-31.11 6.366-8.115 4.229-14.752 9.473-19.878 15.745-4.997 6.248-8.516 13.004-10.465 20.102-1.996 6.874-3.236 13.24-3.65 18.756l127.502-.012c-1.878-19.984-8.752-34.736-18.118-45.106l-.047.023zm-368.662-16.524c15.355 0 28.099-3.65 38.091-11.008 9.992-7.24 14.752-19.24 14.752-35.752 0-9.106-1.63-16.76-4.878-22.642-3.354-5.87-7.76-10.512-13.37-13.748-5.516-3.355-11.74-5.646-19.099-6.886-7.122-1.358-14.634-1.984-22.24-1.984H86.576v91.973h87.745l-.024.047zm4.748 167.59c8.528 0 16.642-.757 24.213-2.528 7.748-1.748 14.634-4.359 20.363-8.35 5.752-3.887 10.641-8.989 14.114-15.745 3.52-6.638 5.126-15.118 5.126-25.477 0-20.232-5.764-34.748-17.114-43.512-11.351-8.646-26.47-12.874-45.214-12.874H86.552V445.93l92.493-.012v.165z" />
                                        </svg>
                                    </a>
                                )}
                                <a
                                    href={`mailto:${profile.social.email}`}
                                    aria-label="Email"
                                    title="Email"
                                >
                                    {/* Email SVG */}
                                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                                    </svg>
                                </a>
                            </div>

                            {/* Stats Cards */}
                            <div className="about-stats">
                                <div className="about-stat-card">
                                    <span className="stat-number">{yearsExp}</span>
                                    <span className="stat-label">Years Experience</span>
                                </div>
                                <div className="about-stat-card">
                                    <span className="stat-number">{projectCount}</span>
                                    <span className="stat-label">Projects</span>
                                </div>
                            </div>
                        </div>

                        {/* Bio & Skills */}
                        <div className="about-info">
                            <h3>Muhammad Wahyu Anggoro</h3>
                            <p className="about-bio" dangerouslySetInnerHTML={{ __html: profile.bio }}></p>

                            <h3>Skills & Tools</h3>
                            <div className="skills-grid">
                                {profile.skills.map((skill, index) => (
                                    <div key={index} className="skill-card">
                                        <div className="skill-card-header">
                                            <span className="skill-card-title">
                                                <span className="icon-wrapper" dangerouslySetInnerHTML={{ __html: skill.iconSvg }}></span>
                                                {skill.category}
                                            </span>
                                            <span className="skill-card-level">{skill.level}</span>
                                        </div>
                                        <p className="skill-card-tools">{skill.tools}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}



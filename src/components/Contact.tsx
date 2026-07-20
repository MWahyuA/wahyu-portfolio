import { profile } from "@/data/portfolio";
import Reveal from "./Reveal";

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <Reveal>
                <div className="container">
                    <div className="contact-banner">
                        <div className="contact-content">
                            <div className="contact-eyebrow">
                                <span className="line"></span>
                                <span className="text">CONTACT ME</span>
                            </div>
                            <h2 className="contact-title">Interested in collaborating?</h2>
                            <p className="contact-subtitle">
                                Let&apos;s discuss how we can bring your ideas to life. I&apos;m always open to talking about new projects, creative ideas or opportunities to be part of your visions.
                            </p>

                            <div className="contact-chips">
                                <div className="contact-chip">
                                    <span className="dot"></span>
                                    Creative design &amp; dev
                                </div>
                                <div className="contact-chip">
                                    <span className="dot"></span>
                                    {profile.social.email}
                                </div>
                            </div>
                        </div>

                        <div className="contact-actions">
                            <a href={`mailto:${profile.social.email}`} className="btn contact-btn-primary">
                                Send me an Email &rarr;
                            </a>
                            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn contact-btn-outline" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}

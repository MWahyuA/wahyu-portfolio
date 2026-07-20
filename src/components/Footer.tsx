import { profile } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p>
                    © {new Date().getFullYear()} {profile.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
}

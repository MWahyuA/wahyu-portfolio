"use client";
import { useState, useEffect } from "react";

export default function Typewriter({ texts, delay = 3000 }: { texts: string[]; delay?: number }) {
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        let timer: NodeJS.Timeout;

        const handleType = () => {
            const i = loopNum % texts.length;
            const fullText = texts[i];

            setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));

            if (!isDeleting && text === fullText) {
                // Selesai mengetik, jeda selama 'delay' ms
                setTypingSpeed(delay);
                setIsDeleting(true);
            } else if (isDeleting && text === "") {
                // Selesai menghapus, ganti ke teks berikutnya
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(100);
            } else {
                // Sedang mengetik atau menghapus
                setTypingSpeed(isDeleting ? 40 : 100);
            }
        };

        timer = setTimeout(handleType, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, typingSpeed, loopNum, texts, delay]);

    return (
        <span>
            {text}
            <span className="cursor-blink">|</span>
        </span>
    );
}

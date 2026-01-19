"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
    const [mounted, setMounted] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    // Mouse coordinates
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);

    // Aura Spring: Slow and "Liquid" for a beautiful trail
    const auraSpringConfig = { damping: 30, stiffness: 80, mass: 0.8 };
    const auraX = useSpring(cursorX, auraSpringConfig);
    const auraY = useSpring(cursorY, auraSpringConfig);

    // Main Dot Spring: Very fast but smooth (no teleporting)
    const dotSpringConfig = { damping: 40, stiffness: 1000 };
    const dotX = useSpring(cursorX, dotSpringConfig);
    const dotY = useSpring(cursorY, dotSpringConfig);

    useEffect(() => {
        setMounted(true);

        const moveCursor = (e: MouseEvent) => {
            cursorX.set(e.clientX);
            cursorY.set(e.clientY);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            const isClickable =
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button') ||
                target.classList.contains('cursor-pointer') ||
                target.getAttribute('role') === 'button';

            setIsHovering(!!isClickable);
        };

        window.addEventListener("mousemove", moveCursor, { passive: true });
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[99999] overflow-hidden">
            {/* 1. Large Light Aura (The Glow Trail) */}
            <motion.div
                style={{
                    translateX: auraX,
                    translateY: auraY,
                    x: "-50%",
                    y: "-50%",
                }}
                className="fixed top-0 left-0 w-[500px] h-[500px]"
            >
                <div
                    className={`w-full h-full bg-[#0e9aef] rounded-full blur-[120px] transition-opacity duration-1000
            ${isHovering ? "opacity-25" : "opacity-15"}
          `}
                />
            </motion.div>

            {/* 2. Interactive Outer Ring */}
            <motion.div
                style={{
                    translateX: auraX,
                    translateY: auraY,
                    x: "-50%",
                    y: "-50%",
                }}
                animate={{
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? "rgba(14, 154, 239, 0.6)" : "rgba(14, 154, 239, 0.2)",
                    borderWidth: isHovering ? 1 : 1.5,
                }}
                className="fixed top-0 left-0 w-8 h-8 rounded-full border-solid flex items-center justify-center transition-colors duration-500"
            />

            {/* 3. The Central Precision Dot (Now with slight spring for smoothness) */}
            <motion.div
                style={{
                    translateX: dotX,
                    translateY: dotY,
                    x: "-50%",
                    y: "-50%",
                }}
                animate={{
                    scale: isHovering ? 0.5 : 1,
                    backgroundColor: isHovering ? "#0e9aef" : "#0e9aef",
                }}
                className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full shadow-[0_0_15px_rgba(14,154,239,0.8)]"
            />
        </div>
    );
}

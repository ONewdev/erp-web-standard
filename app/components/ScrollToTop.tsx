"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // ปรับ 200 ได้ตามใจ: เลื่อนลงเกินเท่านี้ค่อยโชว์ปุ่ม
      setShow(window.scrollY > 1000);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!show) return null;

  return (
    <button
      onClick={handleClick}
      aria-label="กลับขึ้นด้านบน"
      title="กลับขึ้นด้านบน"
      style={{
        position: "fixed",
        right: 18,
        bottom: 18,
        width: 44,
        height: 44,
        borderRadius: 999,
        border: "1px solid #e5e7eb",
        background: "rgba(255,255,255,0.95)",
        boxShadow: "0 8px 22px rgba(0,0,0,0.12)",
        cursor: "pointer",
        display: "grid",
        placeItems: "center",
        zIndex: 9999,
      }}
    >
      {/* ไอคอนลูกศรขึ้น (SVG) */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 5l-7 7m7-7l7 7M12 5v14"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

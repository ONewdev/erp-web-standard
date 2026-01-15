"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "คุณสมบัติ", href: "/#features" },
  { label: "ติดต่อเรา", href: "/#contact" },
  { label: "บริการ", href: "/service" },
  { label: "ดาวน์โหลด", href: "/document" },
  { label: "ผลงานเรา", href: "/site" },
  { label: "คำรับรองลูกค้า", href: "/testimonials" },
  { label: "บทความ", href: "/blog" },
  { label: "COURSE อบรม", href: "/course" },
  { label: "เกี่ยวกับเรา", href: "/about" },
  { label: "ถาม-ตอบ", href: "/faqs" },
  { label: "Job Opportunities", href: "/career" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setCursorPos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const isHome = pathname === "/" || pathname === "";

  const mainLinks = navItems.slice(0, 2);
  const otherLinks = navItems.slice(2, 7);
  const moreLinks = navItems.slice(7);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-[100] border-b border-slate-200 bg-white/95 backdrop-blur shadow-lg"
    >
      {/* Spotlight */}
      <div
        className="pointer-events-none absolute top-0 left-0"
        style={{
          left: cursorPos.x,
          top: cursorPos.y,
          width: 180,
          height: 180,
          background:
            "radial-gradient(circle, rgba(59,130,246,0.45) 0%, rgba(59,130,246,0.2) 40%, transparent 70%)",
          transform: "translate(-50%, -50%)",
          filter: "blur(35px)",
          zIndex: 40,
        }}
      />

      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 rounded-b-lg bg-blue-600 px-4 py-2
                       text-2xl font-extrabold tracking-tight text-white font-kanit
                       hover:bg-blue-700 transition"
          >
            BCI
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {isHome ? (
              <>
                {mainLinks.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`rounded-lg px-3 py-2 text-sm font-medium font-kanit
                        hover:bg-slate-100 hover:text-blue-700
                        ${
                          isActive
                            ? "bg-blue-50 text-blue-700 font-bold"
                            : "text-slate-700"
                        }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </>
            ) : (
              <Link
                href="/"
                className="rounded-lg px-3 py-2 text-sm font-medium font-kanit
                           text-blue-700 hover:bg-blue-100"
              >
                กลับหน้าแรก
              </Link>
            )}

            {otherLinks.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-lg px-3 py-2 text-sm font-medium font-kanit
                    hover:bg-slate-100 hover:text-blue-700
                    ${
                      isActive
                        ? "bg-blue-50 text-blue-700 font-bold"
                        : "text-slate-700"
                    }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* Dropdown */}
            <div className="relative">
              <button
                onClick={() => setDropdownOpen((v) => !v)}
                className="rounded-lg px-3 py-2 text-sm font-medium font-kanit
                           text-slate-700 hover:bg-slate-100 hover:text-blue-700"
              >
                เพิ่มเติม ▾
              </button>

              <div
                className={`absolute right-0 mt-2 w-52 rounded-lg border border-slate-200
                  bg-white shadow-lg transition
                  ${
                    dropdownOpen
                      ? "visible opacity-100"
                      : "invisible opacity-0"
                  }`}
              >
                {moreLinks.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-4 py-2.5 text-sm font-kanit
                        hover:bg-slate-100 hover:text-blue-700
                        ${
                          isActive
                            ? "bg-blue-50 text-blue-700 font-bold"
                            : "text-slate-700"
                        }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>
          </nav>

          {/* Mobile button */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden rounded-lg border border-slate-200
                       px-4 py-2 text-sm font-semibold font-kanit
                       text-slate-700 hover:bg-slate-100 hover:text-blue-700"
          >
            {open ? "ปิดเมนู" : "เมนู"}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="lg:hidden pb-4">
            <nav className="mt-2 grid gap-1 rounded-lg border border-slate-200 bg-white p-2">
              {[...mainLinks, ...otherLinks, ...moreLinks].map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium font-kanit
                      hover:bg-slate-100 hover:text-blue-700
                      ${
                        isActive
                          ? "bg-blue-50 text-blue-700 font-bold"
                          : "text-slate-700"
                      }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

"use client";

export default function CoursePage() {
  const cards = [
    {
      title: "AI for Executive Course",
      desc: "หลักสูตร AI สำหรับผู้บริหาร เข้าใจการประยุกต์ใช้ AI ในการบริหารองค์กร",
      duration: "2 วัน",
      level: "Executive",
      image: "/img/course/Executive.jpg",
      href: "/executive",
    },
    {
      title: "Utilizing Generative AI for your jobs",
      desc: "หลักสูตร Generative AI ในการทำงานประจำวัน เพิ่มประสิทธิภาพและความเร็วในการทำงาน",
      duration: "1 วัน",
      level: "All Level",
      image: "/img/course/Utilizing.jpg",
      href: "/utilizing",
    },
    {
      title: "LLMs in your organization",
      desc: "หลักสูตร LLMs ในองค์กร เรียนรู้การใช้ Large Language Models ให้เกิดประโยชน์สูงสุด",
      duration: "2 วัน",
      level: "Intermediate",
      image: "/img/course/LLMs.jpg",
      href: "/llms",
    },
  ];

  return (
    <div className="font-kanit" style={{ maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, marginBottom: 8 }}>COURSE อบรม</h1>
      <p style={{ marginBottom: 24 }}>หน้านี้คือ /course</p>

      {/* Card Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: 20,
        }}
      >
        {cards.map((c, idx) => (
          <a
            key={idx}
            href={c.href}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 16,
                background: "#fff",
                boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
                overflow: "hidden",
                transition: "transform 0.2s, box-shadow 0.2s",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.06)";
              }}
            >
              {/* รูป */}
              <img
                src={c.image}
                alt={c.title}
                style={{
                  width: "100%",
                  height: 200,
                  objectFit: "cover",
                }}
              />

              {/* Content */}
              <div style={{ padding: 20 }}>
                <h2 style={{ fontSize: 18, marginBottom: 8, fontWeight: 600 }}>
                  {c.title}
                </h2>

                <p
                  style={{
                    color: "#475569",
                    lineHeight: 1.6,
                    marginBottom: 16,
                    fontSize: 14,
                  }}
                >
                  {c.desc}
                </p>

                <div
                  style={{
                    fontSize: 13,
                    color: "#334155",
                    marginBottom: 16,
                  }}
                >
                  ⏱ ระยะเวลา: <strong>{c.duration}</strong>
                  <br />
                  🎯 ระดับ: <strong>{c.level}</strong>
                </div>

                <button
                  style={{
                    width: "100%",
                    padding: "12px 0",
                    borderRadius: 10,
                    border: "none",
                    background: "#2563eb",
                    color: "#fff",
                    fontWeight: 600,
                    cursor: "pointer",
                    fontSize: 14,
                  }}
                >
                  ดูรายละเอียด →
                </button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}


'use client';

const sections = [
  {
    id: "client-a",
    title: "ลิฟเบทเทอร์อินดัสตรีส์ จำกัด",
    person: "คุณสมศักดิ์ จันอินทร์",
    role: "กรรมการผู้จัดการบริษัท",
    image: "/img/testimonials/Liv.png",
    quote: '"Software และ Hardware มีความเกี่ยวข้องกับ Productivity เราต้องยอมรับว่า Productivity เป็นสิ่งสำคัญ เราต้องทำอย่างต่อเนื่อง เพราะว่าคุณภาพเป็นการพัฒนาที่ไม่มีคำว่าสิ้นสุด"',
    videoId: "g_a1QBpl3pI",
  },
  {
    id: "client-b",
    title: "สยามแฟชั่น จิวเวอร์รี่ จำกัด",
    person: "คุณหรรษา วรัญญูวงศ์ & คุณปิยนุช วรัญญูวงศ์",
    role: "รองกรรมการผู้จัดการ & ผู้จัดการโรงงาน",
    image: "/img/testimonials/Siam.png",
    quote: '"ตอบโจทย์ ราคาสมเหตุสมผล ซึ่งเดิมทีระบบ Manual ทำให้เกิด Human Error การคำนวณผิด ข้อมูลเกิดความผิดพลาด แต่หลังจากใช้โปรแกรม โปรแกรมเข้ามาช่วยเช็คความผิดพลาดต่างๆ ทำให้ Monitor ได้ทัน ข้อมูลถูกต้องครบถ้วน และยังลดต้นทุนในส่วนของการผลิต"',
    videoId: "PFLGCux2UPg",
  },
  {
    id: "client-c",
    title: "ยูโรเซีย ฟู้ดส์เทรดดิ้ง แอนด์เอเจนซี่ จำกัด",
    person: "คุณสุนีย์ รุ่งเรืองไพฑูรย์",
    role: "กรรมการผู้จัดการบริษัท",
    image: "/img/testimonials/foodding.jpg",
    quote: '"รู้สึกเลยว่า เราเข้าใจในส่วนของเทคโนโลยีได้ง่ายขึ้น เพราะมีผู้เชียวชาญเข้ามาสอนการใช้งาน ทำให้เราเปิดกว้างในเรื่องของการใช้งานซอฟท์แวร์นี้"',
    videoId: "zmi6ViYoxR4",
  },
  {
    id: "client-d",
    title: "ร่วมกำชัย จำกัด",
    person: "คุณนิชฌาน ศิริสกุลงาม",
    role: "กรรมการผู้จัดการ",
    image: "/img/testimonials/rkc.png",
    quote: '"นอกจากซอฟต์แวร์สำเร็จรูปที่ขึ้นระบบได้เร็วแล้ว ยัง Customize งานให้ฝ่ายขายสามารถส่ง order ได้ real time, สะดวกขึ้น ประหยัดเวลา และมีความแม่นยำ"',
    videoId: null,
  },
  {
    id: "client-e",
    title: "ทีเบลโก้ จำกัด",
    person: "คุณณรงค์ศักดิ์ ภาคภพ",
    role: "รองประธานบริหารและผู้จัดการทั่วไป",
    image: "/img/testimonials/narongsak.jpg",
    quote: '"ในประเทศไทยเรามีสมาคม เรามีผู้เชี่ยวชาญเรื่องซอฟต์แวร์มากมาย โปรแกรมเมอร์ของคนไทยเก่งครับ และที่สำคัญการเป็นคนไทย สื่อสารกับคนไทย เราก็จะได้ซอฟต์แวร์ตรงความต้องการของคนไทยจริงๆด้วยเช่นกันครับ"',
    videoId: "_B5Txxu0aAs",
  },
  {
    id: "client-f",
    title: "สยามอุตสาหกรรมเทปกาว จำกัด",
    person: "คุณสรณี มะลิรักษ์",
    role: "ผู้จัดการทั่วไป",
    image: "/img/testimonials/siamtab.png",
    quote: '"การใช้ซอฟต์แวร์ของ BCI นำมาซึ่งการเพิ่มประสิทธิภาพขององค์กร ไม่ว่าจะเป็นการวางแผนการผลิตที่แม่นยำขึ้น ทำให้ลดต้นทุนการจัดเก็บสินค้า ลดปัญหาของเสียจากการผลิต"',
    videoId: "ahY3MGDZUx0",
  },
];

export default function TestimonialsPage() {
  return (
    <div className="font-kanit">
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 220px",
          gap: 24,
          padding: 24,
          maxWidth: 1300,
          margin: "0 auto",
        }}
      >
        {/* ===== LEFT + CENTER ===== */}
        <main>
          <div style={{ marginBottom: 32 }}>
            <div style={{ display: "flex", gap: 16, alignItems: "center", marginBottom: 16 }}>
              <i style={{ fontSize: 48, color: "#0b39f0" }} className="fa fa-comments-o" />
              <div>
                <h1 style={{ fontSize: 32, margin: 0, marginBottom: 4, fontWeight: 700 }}>
                  Customers Testimonials
                </h1>
                <p style={{ fontSize: 18, margin: 0, color: "#475569" }}>
                  คำรับรองจากลูกค้า
                </p>
              </div>
            </div>
          </div>

          {sections.map((s) => (
            <section
              key={s.id}
              id={s.id}
              style={{
                scrollMarginTop: 90,
                display: "grid",
                gridTemplateColumns: "200px 1fr",
                gap: 24,
                marginBottom: 32,
                padding: 28,
                border: "2px solid #e5e7eb",
                borderRadius: 16,
                background: "#fff",
                boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
              }}
            >
              {/* ===== LEFT: PERSON IMAGE ===== */}
              <div style={{ textAlign: "center" }}>
                <img
                  src={s.image}
                  alt={s.person}
                  style={{
                    width: 160,
                    height: 160,
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid #9CC1D3",
                    marginBottom: 14,
                    objectPosition: "center",
                  }}
                />
                <strong style={{ display: "block", fontSize: 16, color: "#0b39f0", marginBottom: 4 }}>
                  {s.person}
                </strong>
                <span style={{ fontSize: 13, color: "#64748b", lineHeight: 1.6 }}>
                  {s.role}
                </span>
              </div>

              {/* ===== CENTER: CONTENT ===== */}
              <div>
                <h2 style={{
                  fontSize: 22,
                  fontWeight: 700,
                  marginBottom: 16,
                  color: "#0b39f0",
                  borderBottom: "2px solid #0b39f0",
                  paddingBottom: 12,
                }}>
                  {s.title}
                </h2>

                <p style={{
                  marginBottom: 20,
                  color: "#334155",
                  lineHeight: 1.9,
                  fontSize: 16,
                  fontStyle: "italic",
                  paddingLeft: 12,
                  borderLeft: "4px solid #9CC1D3",
                }}>
                  {s.quote}
                </p>

                {s.videoId && (
                  <div
                    style={{
                      position: "relative",
                      paddingTop: "56.25%",
                      borderRadius: 12,
                      overflow: "hidden",
                      border: "2px solid #e5e7eb",
                      marginTop: 20,
                    }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${s.videoId}`}
                      title={s.title}
                      style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        border: 0,
                      }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                )}
              </div>
            </section>
          ))}
        </main>

        {/* ===== RIGHT: TOC ===== */}
        <aside
          style={{
            position: "sticky",
            top: 90,
            alignSelf: "start",
          }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 700,
              marginBottom: 16,
              color: "#64748b",
              textTransform: "uppercase",
              letterSpacing: 1,
              margin: "0 0 16px 0",
            }}
          >
            บริษัท
          </p>

          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {sections.map((s) => (
              <li key={s.id} style={{ marginBottom: 12 }}>
                <a
                  href={`#${s.id}`}
                  style={{
                    fontSize: 14,
                    color: "#475569",
                    textDecoration: "none",
                    display: "block",
                    padding: "8px 12px",
                    borderRadius: 8,
                    transition: "all 0.3s ease",
                    borderLeft: "3px solid transparent",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(11, 57, 240, 0.08)";
                    e.currentTarget.style.borderLeftColor = "#0b39f0";
                    e.currentTarget.style.color = "#0b39f0";
                    e.currentTarget.style.paddingLeft = "16px";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderLeftColor = "transparent";
                    e.currentTarget.style.color = "#475569";
                    e.currentTarget.style.paddingLeft = "12px";
                  }}
                >
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <style>{`
        html { scroll-behavior: smooth; }
      `}</style>
      </div>
    </div>

  );
}

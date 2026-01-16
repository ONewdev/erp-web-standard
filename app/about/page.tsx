'use client';

export default function AboutPage() {
  const infoSections = [
    {
      icon: "💼",
      title: "งานของเรา",
      desc: "• เราจะพัฒนาศักยภาพของโปรแกรมอย่างต่อเนื่อง\n• เราจะสร้างสรรค์โปรแกรมใหม่ๆเพื่อตอบสนองความต้องการของภาคอุตสาหกรรม\n• เราจะศึกษาเทคโนโลยีใหม่ๆ เพื่อนำมาสร้างสรรค์โปรแกรมที่มีคุณภาพ\n• เราจะพัฒนาระบบบริการหลังการขาย เพื่อสร้างความประทับใจแก่ลูกค้า",
    },
    {
      icon: "⭐",
      title: "วัตถุประสงค์",
      desc: "บริษัทของเรามีวัตถุประสงค์หลักที่จะเป็นผู้นำเสนอโซลูชั่นสำหรับอุตสาหกรรมการผลิต ด้วยความมุ่งมั่นที่จะให้บริการที่มีคุณภาพสูงสุด เพื่อสร้างความพึ่งพอใจให้กับลูกค้า และความเป็นเลิศในการปฏิบัติงานเพื่อแก้ไขปัญหาการบริหารงาน",
    },
    {
      icon: "🗂️",
      title: "ลักษณะขององค์กร",
      desc: "บริษัทมีการพัฒนาศักยภาพอย่างต่อเนื่องมากกว่า 19 ปี มีความเชี่ยวชาญด้าน ERP, MRP, APS, CRM, ADM และระบบ Logistics Planning ครอบคลุมการจัดการการผลิต การเงิน การขาย และการบริการลูกค้า",
    },
    {
      icon: "📊",
      title: "ข้อได้เปรียบเชิงกลยุทธ์",
      desc: "บริษัทมีความมุ่งมั่นที่จะตอบโจทย์ความต้องการของลูกค้า ด้วยทีมวิทยากรและผู้พัฒนาระบบที่มีคุณสมบัติเหมาะสม เพื่อให้ลูกค้าได้รับประโยชน์และประสบการณ์อย่างกว้างขวาง",
    },
    {
      icon: "👨‍⚕️",
      title: "บริการให้คำปรึกษาการดำเนินงาน",
      desc: "บริษัทเป็นผู้เชี่ยวชาญการวางระบบ ERP ด้วยประสบการณ์กว่า 19 ปี มีศูนย์ให้คำปรึกษา Call Center, e-Learning, ศูนย์ฝึกอบรม เพื่อให้ลูกค้าสามารถใช้งานโปรแกรมได้อย่างมีประสิทธิภาพ",
    },
  ];

  const awardRows = [
    {

      items: [
        { name: "Consultants.jpg", label: "Award Ceremony" },
        { name: "cer_qsoft.jpg", label: "Q.Soft Certified" },
      ],
    },
    {

      items: [
        { name: "FINAL-ISO29110_BCI.jpg", label: "ISO 29110" },
        { name: "Pre ISO_IEC 29110-certificate.jpg", label: "Commercial Registration" },
        { name: "image_2020_11_25T02_35_41_627Z.png", label: "Commercial Registration" },
      ],
    },
    {

      items: [
        { name: "image_2020_11_25T02_35_21_527Z.png", label: "Honor" },
        { name: "image_2020_11_25T02_34_54_878Z.png", label: "Achievement" },
        { name: "image_2020_11_25T02_35_29_944Z.png", label: "Achievement" },
        { name: "DSCF7800.JPG", label: "Award Trophy" },
      ],
    },
    {
      items: [
        { name: "IMG_2004_.jpg", label: "Special Award" },
        { name: "image_2020_11_25T02_35_09_271Z.png", label: "Recognition" },
        { name: "image_2020_11_25T02_35_16_410Z.png", label: "Corporate Award" },
       

      ],
    },
    {
      items: [
        { name: "image_2020_11_25T02_35_46_458Z.png", label: "Corporate Award" },
        { name: "image_2020_11_25T02_35_35_652Z.png", label: "Corporate Award" },

      ],
    },
  ];


  const wrap: React.CSSProperties = {
    maxWidth: 1100,
    margin: "0 auto",
    padding: 24,
  };

  const card: React.CSSProperties = {
    border: "1px solid #e5e7eb",
    borderRadius: 16,
    padding: 18,
    background: "#fff",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  };

  return (
    <div className="font-kanit">
      <div style={wrap}>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>เกี่ยวกับเรา</h1>
        <p style={{ marginBottom: 16, color: "#475569" }}>หน้านี้คือ /about</p>

        {/* ===== วิดีโอแบบกว้าง ===== */}
        <div
          style={{
            ...card,
            padding: 0,
            overflow: "hidden",
            marginBottom: 18,
          }}
        >
          <div style={{ position: "relative", paddingTop: "40%" }}>
            <iframe
              src="https://www.youtube.com/embed/YR_aeSKM-FQ?si=hkYktBerRij5oMso"
              title="About video"
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
        </div>

        {/* ===== Section 1: PNG ===== */}
        <section style={{ ...card, marginBottom: 16 }}>
          <div
            style={{
              display: "flex",
              gap: 16,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <img
              src="/img/bci_logo.png"
              alt="เกี่ยวกับเรา"
              style={{
                width: 160,
                height: 160,
                objectFit: "contain",
                borderRadius: 12,
                background: "#f8fafc",
                border: "1px solid #e5e7eb",
                padding: 10,
              }}
            />

            <div style={{ flex: 1, minWidth: 240 }}>
              <h2 style={{ fontSize: 20, margin: 0, marginBottom: 8 }}>
                Business Competitive Intelligence (BCI)
              </h2>
              <p style={{ margin: 0, color: "#334155", lineHeight: 1.7 }}>
                เรามุ่งเน้นการพัฒนาและวางระบบซอฟต์แวร์เพื่อเพิ่มประสิทธิภาพองค์กร
                ครอบคลุม ERP / Accounting / HRM / CRM รวมถึงงานอบรมและให้คำปรึกษา
                เพื่อให้ลูกค้าใช้งานได้จริงและเห็นผลชัดเจน
              </p>
            </div>
          </div>
        </section>

        {/* ===== Product List ===== */}
        <section style={{ ...card, marginBottom: 16 }}>
          <h3 style={{ fontSize: 20, margin: "0 0 16px 0", color: "#0b39f0", fontWeight: 700 }}>
            ผลิตภัณฑ์
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16 }}>
            <div style={{ textAlign: "center", padding: 12 }}>
              <div style={{
                width: 100,
                height: 100,
                margin: "0 auto 12px",
                padding: 8,
                background: "#f8fafc",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                display: "grid",
                placeItems: "center",
              }}>
                <img src="/img/feature/q-soft-logo-50.png" alt="Q.Soft" style={{ maxWidth: "90%", maxHeight: "90%" }} />
              </div>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>Q.Soft</p>
              <p style={{ margin: "4px 0 0 0", fontSize: 12, color: "#666" }}>ERP / MRP</p>
            </div>
            <div style={{ textAlign: "center", padding: 12 }}>
              <div style={{
                width: 100,
                height: 100,
                margin: "0 auto 12px",
                padding: 8,
                background: "#f8fafc",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                display: "grid",
                placeItems: "center",
              }}>
                <img src="/img/feature/smart-soft-logo-50.png" alt="Smart-Soft" style={{ maxWidth: "90%", maxHeight: "90%" }} />
              </div>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>Smart-Soft</p>
              <p style={{ margin: "4px 0 0 0", fontSize: 12, color: "#666" }}>WMS / APS</p>
            </div>
            <div style={{ textAlign: "center", padding: 12 }}>
              <div style={{
                width: 100,
                height: 100,
                margin: "0 auto 12px",
                padding: 8,
                background: "#f8fafc",
                borderRadius: 8,
                border: "1px solid #e5e7eb",
                display: "grid",
                placeItems: "center",
              }}>
                <img src="/img/feature/smile-soft-logo-50.png" alt="Smile-Soft" style={{ maxWidth: "90%", maxHeight: "90%" }} />
              </div>
              <p style={{ margin: 0, fontSize: 14, fontWeight: 600 }}>Smile-Soft</p>
              <p style={{ margin: "4px 0 0 0", fontSize: 12, color: "#666" }}>CRM / HRM</p>
            </div>
          </div>
        </section>

        {/* ===== Section 2+ : Timeline - Icon ซ้าย / เนื้อหาขวา ===== */}
        <div style={{ display: "grid", gap: 12, marginBottom: 28 }}>
          {infoSections.map((s, idx) => (
            <section key={idx} style={{ ...card, borderLeft: "4px solid #0b39f0" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "60px 1fr",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 12,
                    border: "2px solid #0b39f0",
                    background: "linear-gradient(135deg, #0b39f0 0%, #9fe0e8 100%)",
                    display: "grid",
                    placeItems: "center",
                    fontSize: 28,
                    boxShadow: "0 4px 12px rgba(11, 57, 240, 0.15)",
                    flexShrink: 0,
                  }}
                >
                  {s.icon}
                </div>

                <div>
                  <h3 style={{ margin: 0, fontSize: 20, marginBottom: 8, color: "#0b39f0", fontWeight: 700 }}>
                    {s.title}
                  </h3>
                  <p style={{ margin: 0, color: "#475569", lineHeight: 1.8, fontSize: 15 }}>
                    {s.desc}
                  </p>
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* ===== Section 3: Company Description ===== */}
        <section style={{ marginBottom: 40 }}>
          {awardRows.map((row, rowIdx) => (
            <div key={rowIdx} style={{ marginBottom: 40 }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  gap: 24,
                }}
              >
                {row.items.map((item, idx) => (
                  <a
                    key={idx}
                    href={`/img/award/${item.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                  >
                    <div
                      style={{
                        background: "#fff",
                        borderRadius: 16,
                        overflow: "hidden",
                        border: "1px solid #e5e7eb",
                        boxShadow: "0 8px 28px rgba(0,0,0,0.08)",
                        transition: "transform 0.25s ease, box-shadow 0.25s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-6px)";
                        e.currentTarget.style.boxShadow =
                          "0 14px 36px rgba(11,57,240,0.18)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "none";
                        e.currentTarget.style.boxShadow =
                          "0 8px 28px rgba(0,0,0,0.08)";
                      }}
                    >
                      <div
                        style={{
                          width: "100%",
                          aspectRatio: "3 / 2",
                          background: "#f8fafc",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          padding: 12,
                        }}
                      >
                        <img
                          src={`/img/award/${item.name}`}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </section>



      </div>
    </div>

  );
}

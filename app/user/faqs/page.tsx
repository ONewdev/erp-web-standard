"use client";

import { useState } from "react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  tags: string[];
}

const faqData: FaqItem[] = [
  {
    id: 1,
    question:
      "เราไม่ได้มีลูกค้าเพียง 2 - 3 ราย แต่เรามีลูกค้าหลายร้อยราย ซึ่งมีความต้องการสินค้าของเรา โดยใช้ระบบ และวิธีการสั่งซื้อที่แตกต่างกัน เช่นลูกค้าบางรายมีการประมาณการยอดสั่งซื้อให้ก่อนล่วงหน้าเป็นเดือน แล้วจึงยืนยันยอดอีกครั้งหนึ่งล่วงหน้าประมาณ 1 สัปดาห์ ในขณะที่ลูกค้าบางรายไม่มีการประมาณยอดสั่งซื้อมาให้ถึงเวลาต้องการสินค้าก็สั่งซื้อเลยโดยมีระยะเวลาคอยให้เราน้อยเหลือเกิน",
    answer:
      "ระบบของเราสามารถจัดการลูกค้าได้หลายประเภท โดยผ่านการตั้งค่า parameter ต่างๆ สำหรับการประมาณการและการยืนยัน ระบบจะทำการคำนวณให้อัตโนมัติตามนโยบายของแต่ละลูกค้า เมื่อได้รับยอดสั่งจริง ระบบจะปรับแผนการผลิตให้เหมาะสม",
    tags: ["General"],
  },
  {
    id: 2,
    question:
      "ลูกค้าใช้ระบบ Kanban ในการจัดซื้อเมื่อต้องการสินค้าจะส่ง Kanban สั่งซื้อมาให้โดยมีระยะเวลาคอยนับจากที่ได้รับคำสั่งซื้อนี้ไม่กี่ชั่วโมงบางครั้งแค่ 1 - 2 ชั่วโมง โดยที่ยอดสั่งก็ไม่ตรงกับยอดประมาณการที่ได้รับก่อนหน้านี้ โปรแกรมจะพอช่วยอย่างไรได้บ้าง",
    answer:
      "ระบบ Kanban ใน Q.Soft ได้รับการออกแบบเพื่อรองรับการสั่งซื้อแบบ Just-In-Time โปรแกรมจะติดตามระดับสินค้าในคลังและเตือนเมื่อถึงจุด reorder point ระบบสามารถสร้างใบสั่งซื้อโดยอัตโนมัติและสามารถปรับปรุงแผนการผลิตให้ตรงต่อเวลาแม้มีการเปลี่ยนแปลงยอดสั่ง",
    tags: ["General"],
  },
  {
    id: 3,
    question:
      "ที่บริษัทฯนอกจากผลิตชิ้นงานจาก Coil และ Ingot แล้ว ยังมีการนำชิ้นงานมาประกอบกันด้วย (Assembly) โดยที่มีชิ้นงานที่เป็น common part ดังนั้นแม้ว่าเราจะวางแผนการผลิตแบบ Made to Order แต่ว่าเราต้องเตรียมชิ้นงาน Common Part ไว้ก่อนด้วย โปรแกรมสามารถแยกการวางแผน common part ออกมา แล้วเมื่อวางแผนเมื่อได้รับคำสั่งซื้อก็มาวางแผนในส่วนของชั้นสูตรการผลิตที่อยู่ในลำดับต่อเนื่องจาก Common Part โดยไม่ไปวางแผนในส่วนของ Common Part ได้หรือไม่ (เพราะวางแผนผลิตไว้ก่อนแล้ว)",
    answer:
      "ใช่ครับ โปรแกรม Q.Soft MRP และ APS สามารถจัดการผลิตแบบ Two-Level BOM ได้ คุณสามารถตั้งค่าให้ชิ้นงาน Common Part สร้างคำสั่งการผลิตโดยอัตโนมัติตามแผนการผลิตระยะยาว ส่วนชั้นที่สอง (Assembly) จะสร้างคำสั่งตามยอดสั่งจากลูกค้า โปรแกรมจะไม่วางแผนซ้ำสำหรับ Common Part ในการวางแผนสั่งผลิต",
    tags: ["General"],
  },
  {
    id: 4,
    question:
      "บริษัทฯ นำเข้าวัตถุดิบจากต่างประเทศ โปรแกรมสามารถคำนวณระยะเวลาที่ควรสั่งซื้อวัตถุดิบเข้ามาเพื่อให้เกิดการประหยัดที่สุดได้หรือไม่ อย่างไร ?",
    answer:
      "ระบบ Q.Soft MRP และ APS มีฟีเจอร์ในการคำนวณ Lead Time เมื่อจัดการสินค้ามีระยะเวลานำในการรอการขนส่ง โปรแกรมจะพิจารณา Lead Time ของผู้ขายแต่ละรายเพื่อคำนวณช่วงเวลาที่เหมาะสมในการสั่งซื้อ ระบบยังสามารถคำนวณ EOQ (Economic Order Quantity) ที่ลดต้นทุนการสั่งและเก็บรักษาสินค้าได้",
    tags: ["General", "Q.Soft MRP", "Q.Soft APS"],
  },
  {
    id: 5,
    question: "เมื่อไรควรจะเปลี่ยนสถานะจากวางแผน เป็นสั่งผลิต ?",
    answer:
      "การเปลี่ยนสถานะจากวางแผนเป็นสั่งผลิตขึ้นอยู่กับนโยบายของบริษัท โดยทั่วไปคุณควรเปลี่ยนเมื่อ: 1) วัตถุดิบพร้อมใช้ 2) เครื่องจักรว่างและพร้อม 3) มีสตาฟมีความสามารถเพียงพอ 4) ผลงานไม่มีปัญหาการควบคุมคุณภาพ ระบบ Q.Soft APS จะช่วยคำนวณเวลาเริ่มต้นที่เหมาะสมโดยพิจารณาข้อมูลด้านบนอย่างครบถ้วน",
    tags: ["General", "Q.Soft MRP", "Q.Soft APS"],
  },
];

export default function FaqsPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="font-kanit">
      <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "32px 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: 32 }}>
          <h1
            style={{
              fontSize: 40,
              fontWeight: 700,
              marginBottom: 8,
              color: "#1f2937",
            }}
          >
            Frequently Asked Questions
          </h1>
          <p style={{ fontSize: 16, color: "#666", marginBottom: 0 }}>
            คำถามที่ถูกถามบ่อยๆ
          </p>
        </div>

        {/* Service Diagram */}
        <div style={{ marginBottom: 32, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img
            src="/img/Service.drawio.png"
            alt="Service Diagram"
            style={{ maxWidth: "60%", height: "auto", display: "block" }}
          />
        </div>

        {/* FAQ Items */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {faqData.map((faq) => (
            <div
              key={faq.id}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 8,
                overflow: "hidden",
                background: "#fff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              {/* Question */}
              <button
                onClick={() => toggleFaq(faq.id)}
                style={{
                  width: "100%",
                  padding: "16px 20px",
                  background: openFaq === faq.id ? "#f0f9ff" : "#fff",
                  border: "none",
                  cursor: "pointer",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    "#f8fafc";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background =
                    openFaq === faq.id ? "#f0f9ff" : "#fff";
                }}
              >
                <p
                  style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#1f2937",
                    margin: 0,
                    textAlign: "left",
                  }}
                >
                  {faq.question}
                </p>
                <span
                  style={{
                    fontSize: 20,
                    color: "#3b82f6",
                    marginLeft: 12,
                    flexShrink: 0,
                    transform: openFaq === faq.id ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                >
                  ▼
                </span>
              </button>

              {/* Answer */}
              {openFaq === faq.id && (
                <div
                  style={{
                    padding: "16px 20px",
                    borderTop: "1px solid #e5e7eb",
                    background: "#f9fafb",
                  }}
                >
                  <p style={{ fontSize: 14, color: "#4b5563", lineHeight: 1.6, marginBottom: 12 }}>
                    {faq.answer}
                  </p>

                  {/* Tags */}
                  <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                    {faq.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        style={{
                          display: "inline-block",
                          padding: "4px 12px",
                          background: "#dbeafe",
                          color: "#1d4ed8",
                          borderRadius: 4,
                          fontSize: 12,
                          fontWeight: 500,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
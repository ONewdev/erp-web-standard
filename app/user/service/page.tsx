"use client";


import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCog,
  faGraduationCap,
  faChalkboardTeacher,
  faTools,
  faChartBar,
  faEye,
  faVest,
  faWrench,
  faStopwatch,
  faRobot,
  faHeadphones,
  faBook,
  faLink
} from "@fortawesome/free-solid-svg-icons";

type SectionBlock = {
  heading: string;
  bullets: string[];
};

import { ReactNode } from "react";

type ChildItem = {
  label: string;
  icon: ReactNode;
  desc?: string;              // ข้อความธรรมดา
  sections?: SectionBlock[];  // มีหัวข้อ + bullet ได้
};

type ServiceItem = {
  title: string;
  children: ChildItem[];
};

export default function ServicePage() {
  const items: ServiceItem[] = [
    {
      title: "General Services",
      children: [
        {
          icon: <FontAwesomeIcon icon={faSearch} />,
          label: "อบรมการใช้งานโปรแกรม Q.Soft",
          desc:
            "คือ การอบรมการใช้งานโปรแกรม (In House Training) ให้กับองค์กรที่ใช้ Software ของเรา เพื่อให้สามารถใช้งานโปรแกรมได้อย่างมีประสิทธิภาพ ตอบข้อซักถามต่างๆ รวมถึงการสาธิต Users ผู้ทำงานให้มีความเข้าใจในการทำงานมากที่สุด",
        },
        {
          icon: <FontAwesomeIcon icon={faCog} />,
          label: "Implement โปรแกรม Q.Soft",
          desc:
            "คือ การวางระบบการทำงานขององค์กรโดยใช้โปรแกรม Q.Soft ของเราเป็นพื้นฐาน เพื่อวิเคราะห์และปรับปรุงประสิทธิภาพการทำงาน และทำให้ใช้งานโปรแกรมได้อย่างเต็มประสิทธิภาพ ประกอบไปด้วยการวิเคราะห์ระบบ, อบรมการใช้งาน, ดูแลการใช้งานจริง",
        },
        {
          icon: <FontAwesomeIcon icon={faGraduationCap} />,
          label: "Implement โปรแกรมบัญชี-การเงินชั้นนำ",
          desc:
            "จากประสบการณ์การวางระบบบัญชีด้วยโปรแกรมชั้นนำกว่า 7 ปี ทำให้เรามีความชำนาญการวางระบบบัญชี-การเงินด้วยซอฟแวร์ชั้นนำ และยังสามารถให้คำแนะนำในการวิเคราะห์และปรับปรุงระบบ, ฝึกอบรม และดูแลการใช้งานจนทุกฝ่ายที่เกี่ยวข้องทำงานได้สะดวกรวดเร็ว",
        },
        {
          icon: <FontAwesomeIcon icon={faChalkboardTeacher} />,
          label: "อบรมการใช้งานโปรแกรมบัญชีชั้นนำ",
          desc:
            "การอบรมการใช้งานโปรแกรม (In House Training) ให้กับองค์กรที่ใช้ Software ของเรา เพื่อให้สามารถใช้งานโปรแกรมได้อย่างมีประสิทธิภาพ ตอบข้อซักถามต่างๆ และสาธิตการใช้งาน โดยประกบติดกับ Users ให้เข้าใจการทำงานมากที่สุด",
        },
        {
          icon: <FontAwesomeIcon icon={faTools} />,
          label: "ให้คำปรึกษาในการวางระบบบริหารการผลิตและบัญชี",
          desc:
            "จากประสบการณ์ในการ Implement ของเรา เพื่อให้สามารถใช้งาน Software ได้จริงและมีประสิทธิภาพ ทำให้การให้คำปรึกษาอยู่บนพื้นฐานของการใช้งานจริงของ Users เป็นหลัก พร้อมผลลัพธ์ที่ถูกต้องตามต้องการ",
        },
        {
          icon: <FontAwesomeIcon icon={faChartBar} />,
          label: "หลักสูตร Power BI",
          desc:
            "จากประสบการณ์ในการ Implement ของเรา เพื่อให้ลูกค้าสามารถใช้งาน Software ได้จริง และมีประสิทธิภาพ ทำให้คำปรึกษาอยู่บนพื้นฐานการใช้งานจริงของ Users พร้อมผลลัพธ์ที่ถูกต้องตามผู้บริหารต้องการ",
        },
      ],
    },

    {
      title: "AI สำหรับอุตสาหกรรมการผลิต",
      children: [
        {
          icon: <FontAwesomeIcon icon={faEye} />,
          label: "Vision Inspection System",
          desc:
            "ระบบ AI Vision ที่ช่วยตรวจจับข้อบกพร่องได้อย่างแม่นยำจากภาพในทุกขั้นตอนการผลิต รับประกันคุณภาพงานอย่างสม่ำเสมอ พร้อมยกระดับประสิทธิภาพและลดความสูญเสียในกระบวนการผลิต",
        },
        {
          icon: <FontAwesomeIcon icon={faVest} />,
          label: "Monitoring for Safety",
          desc:
            "ระบบ AI ตรวจสอบความปลอดภัยที่สามารถระบุความเสี่ยงและพฤติกรรมไม่ปลอดภัยได้ทันที ลดโอกาสเกิดอุบัติเหตุ และสร้างสภาพแวดล้อมการทำงานที่ปลอดภัยและยั่งยืนมากขึ้น",
        },
        {
          icon: <FontAwesomeIcon icon={faWrench} />,
          label: "AI - Predictive Maintenance",
          desc:
            "ใช้ AI วิเคราะห์ข้อมูลจากเครื่องจักรเพื่อคาดการณ์ปัญหาล่วงหน้า ช่วยวางแผนบำรุงรักษาเชิงรุก ลดเวลาหยุดเครื่อง และเพิ่มความต่อเนื่องในการผลิต",
        },
        {
          icon: <FontAwesomeIcon icon={faStopwatch} />,
          label: "Real-Time Throughput Bottleneck Detection",
          desc:
            "โซลูชัน AI สำหรับตรวจจับและจัดการจุดคอขวดในกระบวนการผลิตแบบเรียลไทม์ ใช้การวิเคราะห์ข้อมูลเพื่อระบุปัญหาทันที พร้อมแจ้งเตือนให้ผู้ใช้งานปรับแผน/การทำงาน เพื่อให้การผลิตราบรื่นและมีประสิทธิภาพมากขึ้น",
        },

        // ✅ แปลงจาก HTML string -> structured sections
        {
          icon: <FontAwesomeIcon icon={faRobot} />,
          label: "Sales Enablement",
          desc:
            "ผู้ช่วยอัจฉริยะสำหรับทีมขาย (LLM-Powered Sales Assistant) ช่วยให้ทีมขายเข้าถึงข้อมูลกำลังการผลิตและข้อจำกัดของระบบได้ทันที ลดความเสี่ยงในการรับคำสั่งซื้อเกินศักยภาพจริง",
          sections: [
            {
              heading: "ความสามารถหลัก",
              bullets: [
                "วิเคราะห์ผลกระทบของคำสั่งซื้อใหม่ต่อแผนการผลิต",
                "ช่วยประเมินความพร้อมในการส่งมอบสินค้า",
                'ตอบคำถามฝ่ายขายในรูปแบบ Chat เช่น “สามารถรับออเดอร์เพิ่มได้หรือไม่?”',
                "เพิ่มความแม่นยำในการเสนอราคาและกำหนดส่งมอบ",
              ],
            },
            {
              heading: "ประโยชน์ทางธุรกิจ",
              bullets: [
                "ลดความผิดพลาดจากการประเมินกำลังการผลิต",
                "เพิ่มความน่าเชื่อถือในการเจรจากับลูกค้า",
                "สนับสนุนการเติบโตของยอดขายอย่างยั่งยืน",
              ],
            },
          ],
        },

        {
          icon: <FontAwesomeIcon icon={faHeadphones} />,
          label: "Intelligent Customer Support Assistant",
          desc:
            "LLM ทำหน้าที่เป็นผู้ช่วยให้ทีม Support เข้าใจสถานการณ์การผลิตและปัญหาที่เกิดขึ้นได้รวดเร็ว พร้อมอธิบายข้อมูลให้ลูกค้าเข้าใจได้ง่ายและชัดเจน",
          sections: [
            {
              heading: "ความสามารถหลัก",
              bullets: [
                "ตอบคำถามลูกค้าเกี่ยวกับสถานะงานผลิตและการส่งมอบ",
                "วิเคราะห์สาเหตุของความล่าช้าหรือปัญหาที่เกิดขึ้น",
                "สรุปข้อมูลเป็นภาษาที่เหมาะกับการสื่อสารกับลูกค้า",
                "รองรับการใช้งานผ่าน Chatbot หรือระบบ Ticket",
              ],
            },
            {
              heading: "ประโยชน์ทางธุรกิจ",
              bullets: [
                "ลดระยะเวลาในการตอบสนองลูกค้า",
                "เพิ่มความพึงพอใจและความเชื่อมั่น",
                "ลดภาระงานซ้ำซ้อนของทีม Support",
              ],
            },
          ],
        },
      ],
    },

    {
      title: "Other services",
      children: [
        {
          icon: <FontAwesomeIcon icon={faBook} />,
          label: "รับดูแลระบบ Network ภายในองค์กร",
          desc:
            "สำหรับองค์กรขนาดเล็กที่ยังไม่พร้อมมีผู้ดูแลระบบ Network ภายในองค์กร ทางบริษัทฯ สามารถช่วยออกแบบและดูแล Network ให้มีเสถียรภาพและความปลอดภัย",
        },
        {
          icon: <FontAwesomeIcon icon={faLink} />,
          label: "รับเขียนโปรแกรม และจัดทำ Web Application",
          desc:
            "รับจัดทำ/พัฒนาโปรแกรมทั้งในรูปแบบ Web Application หรือจัดทำ Web Service ตามความต้องการของลูกค้า",
        },

      ],
    },
  ];

  const [openIndexes, setOpenIndexes] = useState<number[]>(
    items.map((_, idx) => idx) // ✅ เปิดทุกอันตั้งแต่แรก
  );

  const toggle = (idx: number) => {
    setOpenIndexes((prev) =>
      prev.includes(idx)
        ? prev.filter((i) => i !== idx) // ปิด
        : [...prev, idx]                // เปิด
    );
  };

  return (
    <div className="font-kanit">
      <div style={{ padding: 16, maxWidth: 920, margin: "0 auto" }}>
        <h1 style={{ fontSize: 28, marginBottom: 8 }}>Services Center</h1>
        <p style={{ marginBottom: 16, color: "#475569" }}>บริการของพวกเรา</p>

        {items.map((item, idx) => {
          const isOpen = openIndexes.includes(idx);


          return (
            <div
              key={item.title}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: 12,
                padding: 12,
                marginBottom: 12,
                boxShadow: "0 1px 6px rgba(0,0,0,0.05)",
                background: "#fff",
              }}
            >
              <button
                onClick={() => toggle(idx)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  padding: 8,
                  fontSize: 18,
                  fontWeight: 700,
                }}
                aria-expanded={isOpen}
              >
                <span>{item.title}</span>
                <span style={{ fontSize: 18 }}>{isOpen ? "▾" : "▸"}</span>
              </button>

              {isOpen && (
                <div style={{ padding: "8px 12px 10px 12px" }}>
                  <div style={{ display: "grid", gap: 10 }}>
                    {item.children.map((c) => (
                      <div
                        key={c.label}
                        style={{
                          display: "flex",
                          gap: 10,
                          alignItems: "flex-start",
                          padding: "12px 12px",
                          borderRadius: 10,
                          border: "1px solid #f1f5f9",
                          background: "#f8fafc",
                        }}
                      >
                        <div style={{ fontSize: 18, color: "#3b82f6", lineHeight: "22px", marginTop: 2 }}>
                          {c.icon}
                        </div>

                        <div style={{ flex: 1 }}>
                          <div style={{ fontWeight: 800, marginBottom: 4 }}>
                            {c.label}
                          </div>

                          {c.desc && (
                            <div style={{ color: "#475569", lineHeight: 1.7 }}>
                              {c.desc}
                            </div>
                          )}

                          {c.sections?.length ? (
                            <div style={{ marginTop: 10, display: "grid", gap: 10 }}>
                              {c.sections.map((s) => (
                                <div key={s.heading}>
                                  <div style={{ fontWeight: 800, marginBottom: 6 }}>
                                    {s.heading}
                                  </div>
                                  <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                                    {s.bullets.map((b) => (
                                      <li key={b} style={{ color: "#475569" }}>
                                        {b}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          ) : null}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

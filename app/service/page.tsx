"use client";

import { useState } from "react";
import {
  Search,
  Settings,
  GraduationCap,
  Users,
  Handshake,
  BarChart3,
  Eye,
  ShieldCheck,
  Wrench,
  Timer,
  Bot,
  Headphones,
  Network,
  Code2,
  ChevronDown,
  Globe,
  Zap
} from "lucide-react";
import FadeInSection from "../components/FadeInSection";

type SectionBlock = {
  heading: string;
  bullets: string[];
};

type ChildItem = {
  label: string;
  icon: React.ReactNode;
  desc?: string;
  sections?: SectionBlock[];
};

type ServiceItem = {
  title: string;
  subtitle: string;
  children: ChildItem[];
};

export default function ServicePage() {
  const items: ServiceItem[] = [
    {
      title: "General Services",
      subtitle: "บริการทั่วไปและที่ปรึกษาด้านซอฟต์แวร์",
      children: [
        {
          icon: <Search className="w-6 h-6" />,
          label: "อบรมการใช้งานโปรแกรม Q.Soft",
          desc: "คือ การอบรมการใช้งานโปรแกรม (In House Training) ให้กับองค์กรที่ใช้ Software ของเรา เพื่อให้สามารถใช้งานโปรแกรมได้อย่างมีประสิทธิภาพ ตอบข้อซักถามต่างๆ รวมถึงการสาธิต Users ผู้ทำงานให้มีความเข้าใจในการทำงานมากที่สุด",
        },
        {
          icon: <Settings className="w-6 h-6" />,
          label: "Implement โปรแกรม Q.Soft",
          desc: "คือ การวางระบบการทำงานขององค์กรโดยใช้โปรแกรม Q.Soft ของเราเป็นพื้นฐาน เพื่อวิเคราะห์และปรับปรุงประสิทธิภาพการทำงาน และทำให้ใช้งานโปรแกรมได้อย่างเต็มประสิทธิภาพ ประกอบไปด้วยการวิเคราะห์ระบบ, อบรมการใช้งาน, ดูแลการใช้งานจริง",
        },
        {
          icon: <GraduationCap className="w-6 h-6" />,
          label: "Implement โปรแกรมบัญชี-การเงินชั้นนำ",
          desc: "จากประสบการณ์การวางระบบบัญชีด้วยโปรแกรมชั้นนำกว่า 7 ปี ทำให้เรามีความชำนาญการวางระบบบัญชี-การเงินด้วยซอฟแวร์ชั้นนำ และยังสามารถให้คำแนะนำในการวิเคราะห์และปรับปรุงระบบ, ฝึกอบรม และดูแลการใช้งานจนทุกฝ่ายที่เกี่ยวข้องทำงานได้สะดวกรวดเร็ว",
        },
        {
          icon: <Users className="w-6 h-6" />,
          label: "อบรมการใช้งานโปรแกรมบัญชีชั้นนำ",
          desc: "การอบรมการใช้งานโปรแกรม (In House Training) ให้กับองค์กรที่ใช้ Software ของเรา เพื่อให้สามารถใช้งานโปรแกรมได้อย่างมีประสิทธิภาพ ตอบข้อซักถามต่างๆ และสาธิตการใช้งาน โดยประกบติดกับ Users ให้เข้าใจการทำงานมากที่สุด",
        },
        {
          icon: <Handshake className="w-6 h-6" />,
          label: "ให้คำปรึกษาในการวางระบบบริหารการผลิตและบัญชี",
          desc: "จากประสบการณ์ในการ Implement ของเรา เพื่อให้สามารถใช้งาน Software ได้จริงและมีประสิทธิภาพ ทำให้การให้คำปรึกษาอยู่บนพื้นฐานของการใช้งานจริงของ Users เป็นหลัก พร้อมผลลัพธ์ที่ถูกต้องตามต้องการ",
        },
        {
          icon: <BarChart3 className="w-6 h-6" />,
          label: "หลักสูตร Power BI",
          desc: "จากประสบการณ์ในการ Implement ของเรา เพื่อให้ลูกค้าสามารถใช้งาน Software ได้จริง และมีประสิทธิภาพ ทำให้คำปรึกษาอยู่บนพื้นฐานการใช้งานจริงของ Users พร้อมผลลัพธ์ที่ถูกต้องตามผู้บริหารต้องการ",
        },
      ],
    },
    {
      title: "AI สำหรับอุตสาหกรรมการผลิต",
      subtitle: "ยกระดับการผลิตด้วยเทคโนโลยีปัญญาประดิษฐ์",
      children: [
        {
          icon: <Eye className="w-6 h-6" />,
          label: "Vision Inspection System",
          desc: "ระบบ AI Vision ที่ช่วยตรวจจับข้อบกพร่องได้อย่างแม่นยำจากภาพในทุกขั้นตอนการผลิต รับประกันคุณภาพงานอย่างสม่ำเสมอ พร้อมยกระดับประสิทธิภาพและลดความสูญเสียในกระบวนการผลิต",
        },
        {
          icon: <ShieldCheck className="w-6 h-6" />,
          label: "Monitoring for Safety",
          desc: "ระบบ AI ตรวจสอบความปลอดภัยที่สามารถระบุความเสี่ยงและพฤติกรรมไม่ปลอดภัยได้ทันที ลดโอกาสเกิดอุบัติเหตุ และสร้างสภาพแวดล้อมการทำงานที่ปลอดภัยและยั่งยืนมากขึ้น",
        },
        {
          icon: <Wrench className="w-6 h-6" />,
          label: "AI - Predictive Maintenance",
          desc: "ใช้ AI วิเคราะห์ข้อมูลจากเครื่องจักรเพื่อคาดการณ์ปัญหาล่วงหน้า ช่วยวางแผนบำรุงรักษาเชิงรุก ลดเวลาหยุดเครื่อง และเพิ่มความต่อเนื่องในการผลิต",
        },
        {
          icon: <Timer className="w-6 h-6" />,
          label: "Real-Time Throughput Bottleneck Detection",
          desc: "โซลูชัน AI สำหรับตรวจจับและจัดการจุดคอขวดในกระบวนการผลิตแบบเรียลไทม์ ใช้การวิเคราะห์ข้อมูลเพื่อระบุปัญหาทันที พร้อมแจ้งเตือนให้ผู้ใช้งานปรับแผน/การทำงาน เพื่อให้การผลิตราบรื่นและมีประสิทธิภาพมากขึ้น",
        },
        {
          icon: <Bot className="w-6 h-6" />,
          label: "Sales Enablement",
          desc: "ผู้ช่วยอัจฉริยะสำหรับทีมขาย (LLM-Powered Sales Assistant) ช่วยให้ทีมขายเข้าถึงข้อมูลกำลังการผลิตและข้อจำกัดของระบบได้ทันที ลดความเสี่ยงในการรับคำสั่งซื้อเกินศักยภาพจริง",
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
          icon: <Headphones className="w-6 h-6" />,
          label: "Intelligent Customer Support Assistant",
          desc: "LLM ทำหน้าที่เป็นผู้ช่วยให้ทีม Support เข้าใจสถานการณ์การผลิตและปัญหาที่เกิดขึ้นได้รวดเร็ว พร้อมอธิบายข้อมูลให้ลูกค้าเข้าใจได้ง่ายและชัดเจน",
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
      title: "Other Services",
      subtitle: "บริการอื่นๆ เพื่อสนับสนุนเทคโนโลยีในองค์กร",
      children: [
        {
          icon: <Network className="w-6 h-6" />,
          label: "รับดูแลระบบ Network ภายในองค์กร",
          desc: "สำหรับองค์กรขนาดเล็กที่ยังไม่พร้อมมีผู้ดูแลระบบ Network ภายในองค์กร ทางบริษัทฯ สามารถช่วยออกแบบและดูแล Network ให้มีเสถียรภาพและความปลอดภัย",
        },
        {
          icon: <Code2 className="w-6 h-6" />,
          label: "รับเขียนโปรแกรม และจัดทำ Web Application",
          desc: "รับจัดทำ/พัฒนาโปรแกรมทั้งในรูปแบบ Web Application หรือจัดทำ Web Service ตามความต้องการของลูกค้า",
        },
      ],
    },
  ];

  const [openSections, setOpenSections] = useState<string[]>(
    items.map(item => item.title)
  );

  const toggleSection = (title: string) => {
    setOpenSections(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen pb-20">
      {/* Hero Header */}
      <div className="bg-white border-b mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-blue-600 rounded-xl text-white shadow-lg shadow-blue-200">
                <Globe className="w-8 h-8" />
              </div>
              <div className="h-px flex-1 bg-slate-200"></div>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4">
              Services <span className="text-blue-600">Center</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              เราพร้อมส่งมอบบริการที่ปรึกษา และโซลูชันด้านเทคโนโลยีที่ทันสมัย
              เพื่อขับเคลื่อนธุรกิจของคุณให้ก้าวไกลในยุคดิจิทัล
            </p>
          </FadeInSection>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {items.map((section, sIdx) => (
          <div key={section.title} className="mb-12">
            <FadeInSection delay={sIdx * 0.1}>
              <button
                onClick={() => toggleSection(section.title)}
                className="w-full text-left flex items-center justify-between group py-4 border-b-2 border-slate-200 hover:border-blue-400 transition-all mb-8"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-[#1e293b] flex items-center gap-3">
                    <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                    {section.title}
                  </h2>
                  <p className="text-slate-500 mt-1 ml-5 font-medium">{section.subtitle}</p>
                </div>
                <div className={`p-2 rounded-full bg-white shadow-sm border transform transition-transform duration-300 ${openSections.includes(section.title) ? 'rotate-180' : ''}`}>
                  <ChevronDown className="w-6 h-6 text-slate-400" />
                </div>
              </button>

              {openSections.includes(section.title) && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
                  {section.children.map((service, cIdx) => (
                    <div
                      key={service.label}
                      className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                    >
                      <div className="mb-6 flex items-start justify-between">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                          {service.icon}
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                          <Zap className="w-5 h-5 text-blue-400 fill-blue-400" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-[#1e293b] mb-3 group-hover:text-blue-600 transition-colors">
                        {service.label}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                        {service.desc}
                      </p>

                      {service.sections && (
                        <div className="space-y-4 pt-4 border-t border-slate-50 mt-auto">
                          {service.sections.map((s) => (
                            <div key={s.heading}>
                              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                                {s.heading}
                              </div>
                              <ul className="space-y-1.5 text-xs text-slate-500">
                                {s.bullets.map((b) => (
                                  <li key={b} className="flex items-start gap-2">
                                    <span className="w-1 h-1 rounded-full bg-blue-400 mt-1.5 shrink-0"></span>
                                    {b}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </FadeInSection>
          </div>
        ))}
      </div>
    </div>
  );
}

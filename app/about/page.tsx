'use client';

import { useState } from "react";

import Image from "next/image";
import {
  Briefcase,
  Star,
  Network,
  BarChart,
  UserRoundCheck,
  Play,
  Award,
  Zap,
  Globe,
  Users,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "../components/FadeInSection";

export default function AboutPage() {
  const brandBlue = "#0e9aef";

  const infoSections = [
    {
      icon: Briefcase,
      title: "งานของเรา",
      color: "blue",
      items: [
        "เราจะพัฒนาศักยภาพของโปรแกรมอย่างต่อเนื่อง",
        "เราจะสร้างสรรค์โปรแกรมใหม่ๆเพื่อตอบสนองความต้องการของภาคอุตสาหกรรม",
        "เราจะศึกษาเทคโนโลยีใหม่ๆ เพื่อนำมาสร้างสรรค์โปรแกรมที่มีคุณภาพ",
        "เราจะพัฒนาระบบบริการหลังการขาย เพื่อสร้างความประทับใจแก่ลูกค้า"
      ]
    },
    {
      icon: Star,
      title: "วัตถุประสงค์",
      color: "amber",
      content: "บริษัทของเรามีวัตถุประสงค์หลัก ที่จะเป็นผู้นำเสนอโซลูชั่นสำหรับอุตสาหกรรมการผลิตโดย ทางบริษัทมีความมุ่งมั่น ที่จะให้บริการที่มีคุณภาพสูงสุด เพื่อสร้างความพึ่งพอใจให้กับลูกค้า อีกทั้งความเป็นเลิศในการปฏิบัติงานภายในแผนงาน และสามารถแก้ไขปัญหาการบริหารงานให้กับผู้ประกอบการณ์ที่เลือกใช้ระบบทำให้ลูกค้าของเราก้าวไปสู่การพัฒนาศักยภาพ ในการแข่งขันขององค์กรในธุรกิจของเขาได้เป็นอย่างดี"
    },
    {
      icon: Network,
      title: "ลักษณะขององค์กร",
      color: "emerald",
      content: "บริษัทมีการพัฒนาศักยภาพและพัฒนาระบบการทำงานอย่างต่อเนื่อง หลังจากที่ได้ก่อตั้งบริษัทขึ้นตั้งแต่ ปี พ.ศ.2545 และด้วยประสบการณ์มากกว่า 19 ปี ทำให้ทางบริษัทมีระบบที่มีประสิทธิภาพ มี Solution ที่ตรงตามความต้องการสำหรับ ธุระกิจการผลิต และการจัดจำหน่าย อีกทั้งมีความเชี่ยวชาญในด้านการวางแผนการผลิต MRP (Manufacturing Resource Planning), การวางระบบบริหารองค์กร ERP (Enterprise Resource Planning), การบริหารตารางการผลิต APS (Advanced Planning and Scheduling), การบริหารลูกค้าสัมพันธ์ CRM (Customer Relationship Management), การดูแลบริหาร จัดการอพาร์ทเม้นท์ ADM (Apartment & Dormitory Management) และระบบ Logistics Planning ระบบเหล่านี้ครอบ คลุมการจัดการของการผลิตข้อมูลด้านการเงิน, การขายและการสนับสนุนการบริการลูกค้า การจัดจำหน่าย และการบริการ หลังการขาย",
      subContent: "วันนี้บริษัทของเราได้รวบรวมโซลูชั่นเฉพาะทาง สำหรับธุรกิจต่างๆ เช่น ธุรกิจการผลิตอะไหล่ และชิ้นส่วนของรถยนต์, ธุรกิจการฉีดพลาสติก, ธุรกิจการขึ้นรูปเหล็ก และสแตนเลส, ธุรกิจหล่อโลหะ, ธุรกิจเครื่องประดับ, ธุรกิจประกอบเครื่องจักร เครื่องกลต่างๆ ,ธุรกิจร้านค้า วัตถุก่อสร้าง, ธุรกิจ นำเข้า / ส่งออก ซึ่งทั้งหมดนี้ที่พัฒนาขึ้นโดย ทีมงาน บุคลากรที่มีคุณภาพ ความรู้ ความสามารถเฉพาะตัวและทักษะใน การดำเนินธุรกิจ ด้านการบริหาร การบัญชี เศรษฐศาสตร์ วิศวกรรมอุตสาหกรรม วิทยาศาสตร์คอมพิวเตอร์ วิศวกรรมคอมพิวเตอร์ เทคโนโลยีสารสนเทศ วิทยาศาสตร์การจัดการ การวิจัยดำเนินงาน การออกแบบและวางระบบให้ภาคอุตสาหกรรมที่หลากหลาย ทำให้ทางบริษัทเชื่อมั่นว่าโซลูชั่นที่เรานำเสนอ จะสามารถแก้ไขปัญหาการบริหารงานให้กับผู้ประกอบการที่เลือกใช้ระบบได้อย่างลงตัว"
    },
    {
      icon: BarChart,
      title: "ข้อได้เปรียบเชิงกลยุทธ์",
      color: "indigo",
      content: "บริษัทมีความมุ่งมั่นที่จะตอบโจทย์ความต้องการของลูกค้า การให้บริการลูกค้าและการพัฒนา ด้วย Solution ที่ดีเยี่ยม และมีประสิทธิภาพ อีกทั้งทางบริษัทมีบริการจากวิทยากร และผู้พัฒนาระบบ ที่มีคุณสมบัติเหมาะสม ครบถ้วนซึ่งจะช่วยให้ลูกค้า ได้รับประโยชน์ และประสบการณ์อย่างกว้างขวาง โดยละเอียด ของ solution ที่มีความหลายหลายต่างๆ และระบบของทางบริษัท"
    },
    {
      icon: UserRoundCheck,
      title: "บริการให้คำปรึกษาการดำเนินงาน",
      color: "orange",
      content: "บริษัทฯเป็นผู้เชี่ยวชาญการวางระบบ ERP (Enterprise Resource Planning) โดยเฉพาะด้านอุตสาหกรรม มีความชำนาญการวางระบบบริหารการผลิต, จัดทำต้นทุนการผลิต, บัญชี-การเงิน, การกระจายสินค้า ด้วยประสบการณ์การทำงานกว่า 10 ปี ความรู้และความเชี่ยวชาญเฉพาะทางในเชิงลึก รวมถึงซอฟต์แวร์การผลิต การจัด จำหน่าย บัญชีและการเงิน ขายหน้าร้าน ระบบการจัดการภาษี ระบบการบริหารธุรกิจ ระบบบริหารงานบุคคล รองรับในเรื่อง ของการคำนวณ การวางแผนการขนส่งและการกำหนดเวลา การจำลองสถานะการณ์ และการเพิ่มประสิทธิภาพ ทักษะเหล่านี้ ล้วนแต่ถูกพัฒนา และปรับปรุง เพื่อให้มั่นใจได้ว่า Solution ของคุณจะทำงานได้อย่างมีประสิทธิภาพ บริษัทฯยังบริการ ให้คำปรึกษาเพื่อวิเคราะห์ และปรับปรุงการทำงาน เพื่อให้การทำงานอย่างเป็นระบบของลูกค้าทำงานได้ เต็มประสิทธิภาพ",
      subContent: "บริษัทฯมีศูนย์ให้คำปรึกษา (Call Center), e-Learning, ศูนย์ฝึกอบรม, การอบรมการใช้งานโปรแกรมถึงสถานที่ ให้กับองค์กรที่ใช้ Software ของเราเพื่อให้ลูกค้าสามารถใช้งาน โปรแกรมได้อย่างมีประสิทธิภาพ ตอบข้อซักถามต่างๆ ในการใช้งานโปรแกรมรวมถึงการสาธิต ซึ่งจะประกบติดกับ Users ผู้ทำงานให้มีความเข้าใจในการทำงานมากที่สุด\n\nในส่วนขององค์กรขนาดเล็กที่ยังไม่พร้อมจะมีผู้ดูแลระบบ Network ภายในองค์กรของตนเอง ทางบริษัทฯ มีบุคลากรที่มีความรู้ความสามารถที่จะช่วยออกแบบ และดูแลระบบเครือข่ายของท่านให้มีเสถียรภาพ และความปลอดภัยสูงสุด"
    },
  ];

  const colorMap: { [key: string]: string } = {
    blue: "#0e9aef",
    amber: "#f59e0b",
    emerald: "#10b981",
    indigo: "#6366f1",
    orange: "#f97316",
  };

  const highlightText = (text: string) => {
    const keywords = [
      { term: "MRP (Manufacturing Resource Planning)", color: "text-emerald-500" },
      { term: "ERP (Enterprise Resource Planning)", color: "text-blue-500" },
      { term: "APS (Advanced Planning and Scheduling)", color: "text-indigo-500" },
      { term: "CRM (Customer Relationship Management)", color: "text-rose-500" },
      { term: "ADM (Apartment & Dormitory Management)", color: "text-amber-500" },
      { term: "Logistics Planning", color: "text-slate-500" },
    ];

    let highlighted = text;
    // Simple replacement for demonstration. For complex content, a more robust parser might be needed.
    // However, since we define the content, we can use React elements instead of dangerouslySetInnerHTML.
    return text.split(/(MRP \(Manufacturing Resource Planning\)|ERP \(Enterprise Resource Planning\)|APS \(Advanced Planning and Scheduling\)|CRM \(Customer Relationship Management\)|ADM \(Apartment & Dormitory Management\)|Logistics Planning)/).map((part, i) => {
      const match = keywords.find(k => k.term === part);
      if (match) {
        return <span key={i} className={`font-bold ${match.color}`}>{part}</span>;
      }
      return part;
    });
  };

  const awards = [
    "Pre ISO_IEC 29110-certificate.jpg",
    "FINAL-ISO29110_BCI.jpg",
    "cer_qsoft.jpg",
    "Consultants.jpg",
    "DSCF7800.JPG",
    "image_2020_11_25T02_34_54_878Z.png",
    "image_2020_11_25T02_35_09_271Z.png",
    "image_2020_11_25T02_35_16_410Z.png",
    "image_2020_11_25T02_35_21_527Z.png",
    "image_2020_11_25T02_35_29_944Z.png",
    "image_2020_11_25T02_35_35_652Z.png",
    "image_2020_11_25T02_35_41_627Z.png",
    "image_2020_11_25T02_35_46_458Z.png",
    "IMG_2004_.jpg",
  ];

  return (
    <div className="font-kanit bg-white min-h-screen">
      {/* Hero Header */}
      <div className="relative pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <FadeInSection>
                <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 mb-6 leading-[1.1] tracking-tight">
                  About <span style={{ color: "#0e9aef" }}>Us</span>

                </h1>
                <p className="text-xl text-slate-500 font-medium max-w-xl leading-relaxed mb-10">
                  เกี่ยวกับบริษัทของเรา
                </p>

              </FadeInSection>
            </div>

            <div className="lg:w-1/2 w-full">
              <FadeInSection delay={0.2}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-blue-100/30 rounded-[2.5rem] blur-2xl group-hover:bg-blue-100/50 transition-colors duration-700"></div>
                  <div className="relative aspect-video bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-200/40 border border-slate-100">
                    <iframe
                      src="https://www.youtube.com/embed/YR_aeSKM-FQ?si=hkYktBerRij5oMso"
                      title="BCI Corporate Video"
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </FadeInSection>
            </div>
          </div>
        </div>
      </div>

      {/* Product Showcase Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 mb-4 italic">Our Core Solutions</h2>
              <p className="text-slate-500 max-w-2xl mx-auto italic font-medium">ผลผลิตภัณฑ์ซอฟต์แวร์คุณภาพที่ได้รับการยอมรับจากภาคอุตสาหกรรม</p>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { id: 'qsoft', img: 'q-soft-logo-50.png', name: 'Q.Soft', desc: 'ERP / MRP / Warehouse Management', color: 'blue' },
              { id: 'smart', img: 'smart-soft-logo-50.png', name: 'Smart-Soft', desc: 'WMS / APS / Material Planning', color: 'indigo' },
              { id: 'smile', img: 'smile-soft-logo-50.png', name: 'Smile-Soft', desc: 'CRM / HRM / Service Management', color: 'emerald' },
            ].map((prod, idx) => (
              <FadeInSection key={prod.id} delay={idx * 0.1}>
                <div className="group p-8 bg-slate-50 rounded-[2rem] border border-transparent hover:border-[#0e9aef]/20 hover:bg-white hover:shadow-xl hover:shadow-blue-200/20 transition-all duration-500 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 p-4 bg-white rounded-2xl shadow-md flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <img src={`/img/feature/${prod.img}`} alt={prod.name} className="max-w-full max-h-full object-contain" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{prod.name}</h3>
                  <p className="text-sm text-slate-400 font-medium mb-4 italic uppercase tracking-wider">{prod.desc}</p>
                  <div className="h-1 w-12 bg-blue-100 group-hover:bg-[#0e9aef] mx-auto rounded-full transition-colors duration-500"></div>
                </div>
              </FadeInSection>
            ))}
          </div>

          <FadeInSection delay={0.4}>
            <div className="flex flex-wrap justify-center gap-3">
              {['ERP', 'MRP', 'APS', 'WMS', 'PM', 'POS'].map((tag) => (
                <span key={tag} className="px-4 py-1.5 bg-slate-100 text-slate-500 rounded-full text-xs font-bold tracking-widest hover:bg-blue-50 hover:text-[#0e9aef] transition-colors cursor-default">
                  # {tag}
                </span>
              ))}
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Info Sections - Timeline Style */}
      <div className="py-24 bg-slate-50 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          {infoSections.map((section, idx) => (
            <div key={idx} className="relative pl-12 md:pl-20 pb-20 last:pb-0">
              {/* Timeline Line */}
              {idx !== infoSections.length - 1 && (
                <div className="absolute left-[23px] md:left-[31px] top-10 bottom-0 w-[2px] bg-slate-200"></div>
              )}

              <FadeInSection>
                <div className="relative">
                  {/* Timeline Dot/Icon */}
                  <div className={`absolute -left-12 md:-left-20 w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white shadow-lg shadow-slate-200 flex items-center justify-center z-10 border-2 border-transparent transition-colors duration-500`}
                    style={{ borderColor: colorMap[section.color] || brandBlue }}>
                    <section.icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: colorMap[section.color] || brandBlue }} />
                  </div>

                  <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] shadow-sm border border-slate-100">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3 italic">
                      {section.title}
                    </h3>

                    {section.items ? (
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <div className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: colorMap[section.color] || brandBlue }}></div>
                            <span className="text-slate-600 font-medium leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="space-y-6">
                        <p className="text-slate-600 leading-relaxed font-normal italic">
                          {highlightText(section.content)}
                        </p>
                        {section.subContent && (
                          <div className="p-6 bg-slate-50 rounded-2xl border-l-4" style={{ borderColor: colorMap[section.color] || brandBlue }}>
                            <p className="text-slate-500 text-sm italic font-medium leading-relaxed whitespace-pre-wrap">
                              {highlightText(section.subContent)}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </FadeInSection>
            </div>
          ))}
        </div>
      </div>

      {/* Company Description Summary */}
      <div className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInSection>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 italic text-center">Company description</h2>
            <div className="mb-12 inline-block">
              <Image src="/img/bci_logo.png" alt="BCI Logo" width={120} height={120} className="mx-auto" />
            </div>
            <div className="space-y-4 text-base md:text-lg text-slate-600 font-medium italic leading-relaxed text-center">
              <p>
                ด้วยประสบการณ์กว่า 19 ปี โดยทีมงานมืออาชืพที่มีความสามารถ ความเชี่ยวชาญ ในการให้คำปรึกษาและฝึกอบรม
              </p>
              <p>
                อันจะนำท่านไปสู่การพัฒนาศักยภาพในการแข่งขันขององค์กร และพัฒนาระบบการทำงานให้เจริญเติบโตอย่างต่อเนื่องและยั่งยืน
              </p>
            </div>
            <div className="mt-10 inline-block px-8 py-6 bg-[#0e9aef] text-white rounded-[2rem] shadow-xl shadow-blue-200/40 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-150 transition-transform duration-700"></div>
              <p className="text-lg md:text-xl font-bold italic leading-tight tracking-tight relative z-10">
                "เราจึงมีความเชื่อมั่นว่า เราจะสามารถแก้ปัญหาให้ท่านได้อย่างตรงจุด <br className="hidden md:block" /> ภายในระยะเวลาอันสั้น"
              </p>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Awards & Recognition Gallery */}
      <div className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="flex items-center justify-between mb-16">
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-2 italic">Awards & Recognition</h2>
                <p className="text-slate-500 font-medium italic italic capitalize">ความภูมิใจและการรับรองมาตรฐานระดับสากล</p>
              </div>
              <div className="hidden md:flex items-center gap-3">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100">
                  <Award className="w-6 h-6 text-amber-500" />
                </div>
                <div className="text-sm font-bold text-slate-400 italic">ISO/IEC 29110 Certified</div>
              </div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {awards.map((award, idx) => (
              <FadeInSection key={idx} delay={idx * 0.05}>
                <a
                  href={`/img/award/${award}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block cursor-zoom-in transition-all duration-500"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl">
                    <Image
                      src={`/img/award/${award}`}
                      alt="BCI Award"
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[#0e9aef]/0 group-hover:bg-[#0e9aef]/10 transition-colors duration-500"></div>
                  </div>
                </a>
              </FadeInSection>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

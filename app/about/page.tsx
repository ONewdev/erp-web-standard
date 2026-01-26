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
import FloatingIcons from "../components/FloatingIcons";

export default function AboutPage() {
  const brandBlue = "var(--brand-blue)";

  const infoSections = [
    {
      icon: Briefcase,
      title: "งานของเรา",
      color: "blue",
      bgImage: "/img/feature/",
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
      bgImage: "/img/",
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
      bgImage: "/img/",
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
    blue: "var(--brand-blue)",
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
      <FloatingIcons />
      {/* Full Width Video - Top of Page */}
      <div className="w-full relative bg-white pb-8">
        <FadeInSection delay={0.2}>
          <div className="relative group aspect-video">
            <div data-hide-cursor className="relative w-full h-full bg-white overflow-hidden">
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

      {/* Hero Section with About Us Side by Side */}
      <div className="relative bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--brand-blue)]/5 -skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* About Us with Background Image */}
            <FadeInSection>
              <div className="relative rounded-3xl overflow-hidden h-96 md:h-[500px]">
                <Image
                  src="/img/shattered.png"
                  alt="BCI Background"
                  fill
                  className="object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-start p-8 md:p-12 z-10">
                  <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 leading-tight">
                    About <span style={{ color: "var(--brand-blue)" }}>Us</span>
                  </h1>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed max-w-md">
                    เกี่ยวกับบริษัทของเรา
                  </p>
                  <div className="w-24 h-1.5 bg-[var(--brand-blue)] mx-auto mt-10 rounded-full"></div>
                </div>
              </div>
            </FadeInSection>

            {/* Product Showcase Grid */}
            <FadeInSection delay={0.2}>
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 italic">ผลิตภัณฑ์</h3>
                <div className="grid grid-cols-2 gap-12 md:gap-16">
                  {[
                    { id: 'qsoft', img: 'q-soft-logo-50.png', name: 'Q.Soft', color: 'blue' },
                    { id: 'smart', img: 'smart-soft-logo-50.png', name: 'Smart-Soft', color: 'indigo' },
                    { id: 'smile', img: 'smile-soft-logo-50.png', name: 'Smile-Soft', color: 'emerald' },
                  ].map((prod, idx) => (
                    <div key={prod.id} className={`flex flex-col items-center gap-6 ${idx === 0 ? 'col-span-2 md:col-span-2' : ''}`}>
                      <div className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center">
                        <img src={`/img/feature/${prod.img}`} alt={prod.name} className="max-w-full max-h-full object-contain" />
                      </div>
                      <h3 className="font-bold text-slate-900 text-lg text-center">{prod.name}</h3>
                    </div>
                  ))}
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>

      {/* Product Showcase Section - Removed as moved above */}

      {/* Info Sections - Alternating Full Width Rows */}
      <div className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">บริษัท BCI</h2>
              <p className="text-lg text-slate-600 font-medium max-w-2xl mx-auto">เรามุ่งมั่นในการนำเสนอโซลูชั่นที่มีคุณภาพสูงสุดเพื่อขับเคลื่อนธุรกิจของคุณไปสู่ความสำเร็จ</p>
            </div>
          </FadeInSection>

          <div className="space-y-16 md:space-y-0">
            {/* All Sections - Alternating Left/Right */}
            {infoSections.map((section, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                {/* Check if this section should be on right and has no subContent */}
                {(idx === 1 || idx === 3) && !section.subContent ? (
                  /* Right aligned without subContent - use text-align or margin */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start py-8 md:py-12">
                    <div className="md:col-start-2">
                      <div className="relative">
                        {/* Background Image */}
                        {section.bgImage && (
                          <div className="absolute -inset-8 opacity-10 -z-10">
                            <Image
                              src={section.bgImage}
                              alt="background"
                              width={300}
                              height={300}
                              className="object-contain"
                            />
                          </div>
                        )}
                        {/* Section Title */}
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: colorMap[section.color] + "15" }}>
                            <section.icon className="w-6 h-6" style={{ color: colorMap[section.color] || brandBlue }} />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                            {section.title}
                          </h3>
                        </div>

                        {/* Content */}
                        {section.items ? (
                          <div className="space-y-6">
                            {section.items.map((item, i) => (
                              <div key={i} className="flex items-start gap-4 md:gap-6">
                                <div className="w-1.5 h-1.5 rounded-full mt-3 flex-shrink-0" 
                                  style={{ backgroundColor: colorMap[section.color] || brandBlue }}></div>
                                <p className="text-slate-600 font-medium leading-relaxed flex-1">{item}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-slate-600 text-base md:text-lg font-normal leading-relaxed">
                            {highlightText(section.content)}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Normal grid with order classes */
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start py-8 md:py-12">
                    {/* Left Column */}
                    <div className={(idx === 1 || idx === 3) ? 'md:order-2' : 'md:order-1'}>
                      <div className="relative">
                        {/* Background Image */}
                        {section.bgImage && (
                          <div className="absolute -inset-8 opacity-10 -z-10">
                            <Image
                              src={section.bgImage}
                              alt="background"
                              width={300}
                              height={300}
                              className="object-contain"
                            />
                          </div>
                        )}
                        {/* Section Title */}
                        <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: colorMap[section.color] + "15" }}>
                            <section.icon className="w-6 h-6" style={{ color: colorMap[section.color] || brandBlue }} />
                          </div>
                          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                            {section.title}
                          </h3>
                        </div>

                        {/* Content */}
                        {section.items ? (
                          <div className="space-y-6">
                            {section.items.map((item, i) => (
                              <div key={i} className="flex items-start gap-4 md:gap-6">
                                <div className="w-1.5 h-1.5 rounded-full mt-3 flex-shrink-0" 
                                  style={{ backgroundColor: colorMap[section.color] || brandBlue }}></div>
                                <p className="text-slate-600 font-medium leading-relaxed flex-1">{item}</p>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-slate-600 text-base md:text-lg font-normal leading-relaxed">
                            {highlightText(section.content)}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Right Column - SubContent */}
                    {section.subContent && (
                      <div className={(idx === 1 || idx === 3) ? 'md:order-1' : 'md:order-2'}>
                        <div className="p-6 md:p-8 bg-white rounded-2xl border-2 transition-all duration-500 hover:shadow-lg h-full flex items-center"
                          style={{ borderColor: colorMap[section.color] + "30" }}>
                          <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed whitespace-pre-wrap">
                            {highlightText(section.subContent)}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Divider */}
                {idx !== infoSections.length - 1 && (
                  <div className="mt-8 md:mt-12 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
                )}
              </FadeInSection>
            ))}
          </div>
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
            <div className="mt-10 inline-block px-8 py-6 bg-[var(--brand-blue)] text-white rounded-[2rem] shadow-xl shadow-blue-200/40 relative overflow-hidden group">
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
                <h2 className="text-3xl font-bold text-slate-900 mb-2 italic">รางวัลและการยกย่อง</h2>
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-0 border border-slate-300">
            {awards.map((award, idx) => (
              <FadeInSection key={idx} delay={idx * 0.05}>
                <a
                  href={`/img/award/${award}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block cursor-zoom-in transition-all duration-500 border-r border-b border-slate-300"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={`/img/award/${award}`}
                      alt="BCI Award"
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-[var(--brand-blue)]/0 group-hover:bg-[var(--brand-blue)]/10 transition-colors duration-500"></div>
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

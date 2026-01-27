'use client';

import { useState, useEffect } from "react";

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
  X,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import FadeInSection from "../components/FadeInSection";
import FloatingIcons from "../components/FloatingIcons";

export default function AboutPage() {
  const brandBlue = "var(--brand-blue)";
  const [activeIndex, setActiveIndex] = useState(0);

  const products = [
    { img: 'q-soft-logo-50.png', name: 'Q.Soft', desc: 'โซลูชั่นการจัดการทรัพยากรระดับองค์กร' },
    { img: 'smart-soft-logo-50.png', name: 'Smart-Soft', desc: 'นวัตกรรมซอฟต์แวร์สำหรับการผลิตที่ชาญฉลาด' },
    { img: 'smile-soft-logo-50.png', name: 'Smile-Soft', desc: 'ระบบที่เน้นความง่ายและรอยยิ้มในการทำงาน' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [products.length]);

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
      {/* Flush Full-Width Video */}
      <div className="w-full relative -mt-10 md:-mt-20">
        <FadeInSection delay={0.2}>
          <div data-hide-cursor className="w-full aspect-video bg-slate-900">
            <iframe
              src="https://www.youtube.com/embed/YR_aeSKM-FQ?si=hkYktBerRij5oMso"
              title="BCI Corporate Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </FadeInSection>
      </div>

      {/* Hero Section - Focused on About Us */}
      <div className="relative bg-white overflow-hidden pb-12">
        <div className="absolute top-10 right-0 w-full h-full bg-[var(--brand-blue)]/5  transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-12 relative z-10 text-center">
          <FadeInSection>
            <div className="relative rounded-3xl overflow-hidden py-12">
              <div className="relative z-10">
                <h1 className="text-6xl md:text-9xl font-black text-slate-900 mb-6 leading-none tracking-tighter">
                  About <span style={{ color: "var(--brand-blue)" }}>Us</span>
                </h1>
                <p className="text-xl md:text-3xl text-slate-500 font-semibold leading-relaxed max-w-2xl mx-auto">
                  เกี่ยวกับบริษัทของเรา
                </p>
                <div className="w-32 h-2 bg-[var(--brand-blue)] mt-12 mx-auto rounded-full"></div>
              </div>
            </div>
          </FadeInSection>
        </div>
      </div>

      {/* Product Showcase Section - 3D Carousel Style */}
      <div className="bg-slate-50/50 py-24 border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
          <FadeInSection>
            <h3 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight italic">
              ผลิตภัณฑ์ <span className="text-[var(--brand-blue)]">และโซลูชั่น</span>
            </h3>
          </FadeInSection>
        </div>

        {/* 3D-ish Carousel Container - Smaller & Clearer */}
        <div className="relative max-w-7xl mx-auto h-[400px] flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center perspective-[1500px]">
            {products.map((prod, idx) => {
              // Calculate relative position based on activeIndex
              let position = idx - activeIndex;
              if (position < -Math.floor(products.length / 2)) position += products.length;
              if (position > Math.floor(products.length / 2)) position -= products.length;

              const isActive = position === 0;
              const isSide = Math.abs(position) === 1;

              return (
                <motion.div
                  key={idx}
                  initial={false}
                  animate={{
                    x: position * 280,
                    scale: isActive ? 1.1 : 0.8,
                    z: isActive ? 0 : -200,
                    opacity: isActive ? 1 : isSide ? 0.6 : 0,
                    filter: isActive ? "blur(0px)" : "blur(2px)",
                    rotateY: position * -30,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 30,
                  }}
                  style={{
                    zIndex: isActive ? 20 : 10,
                    position: "absolute",
                    transformStyle: "preserve-3d",
                  }}
                  className="flex flex-col items-center gap-8 cursor-pointer"
                  onClick={() => setActiveIndex(idx)}
                >
                  <div className={`relative transition-all duration-700 flex items-center justify-center rounded-[3rem] 
                    ${isActive
                      ? 'w-44 h-44 md:w-64 md:h-64 bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] ring-1 ring-slate-100 p-8'
                      : 'w-32 h-32 md:w-52 md:h-52 p-4'}`}>
                    <img
                      src={`/img/feature/${prod.img}`}
                      alt={prod.name}
                      className={`max-w-full max-h-full object-contain transition-all duration-1000 
                        ${isActive ? 'grayscale-0 scale-100' : 'grayscale opacity-40'}`}
                    />
                  </div>

                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key={prod.name}
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="text-center"
                      >
                        <h3 className="font-black text-slate-900 text-2xl md:text-3xl tracking-tighter uppercase mb-2">{prod.name}</h3>
                        <p className="text-slate-500 font-semibold text-sm md:text-base max-w-sm mx-auto">{prod.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Carousel Indicators */}
          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30">
            {products.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-2 rounded-full transition-all duration-700 ${i === activeIndex ? 'w-12 bg-[var(--brand-blue)]' : 'w-3 bg-slate-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Info Sections - Alternating Full Width Rows */}
      <div className="py-24 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <FadeInSection>
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">บริษัท <span style={{ color: "var(--brand-blue)" }}>BCI</span></h2>
              <div className="w-20 h-1.5 bg-[var(--brand-blue)] mx-auto mb-8 rounded-full"></div>
              <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed">เรามุ่งมั่นในการนำเสนอโซลูชั่นที่มีคุณภาพสูงสุดเพื่อขับเคลื่อนธุรกิจของคุณไปสู่ความสำเร็จ</p>
            </div>
          </FadeInSection>

          <div className="space-y-16">
            {/* Highlight Three Sections in a Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {[infoSections[0], infoSections[1], infoSections[3]].map((section, idx) => (
                <FadeInSection key={idx} delay={idx * 0.1}>
                  <div className="h-full p-8 bg-white rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden relative group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-slate-50 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700"></div>

                    <div className="relative z-10">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-6"
                        style={{ backgroundColor: colorMap[section.color] + "15" }}>
                        <section.icon className="w-6 h-6" style={{ color: colorMap[section.color] || brandBlue }} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-4">{section.title}</h3>

                      {section.items ? (
                        <div className="space-y-3">
                          {section.items.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-1 h-1 rounded-full mt-2 flex-shrink-0"
                                style={{ backgroundColor: colorMap[section.color] || brandBlue }}></div>
                              <p className="text-slate-500 text-[13px] font-medium leading-relaxed">{item}</p>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-slate-500 text-[13px] font-medium leading-relaxed">
                          {highlightText(section.content || "")}
                        </p>
                      )}
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>

            {/* Detailed Sections - Alternating Left/Right */}
            {[infoSections[2], infoSections[4]].map((section, idx) => (
              <FadeInSection key={idx} delay={idx * 0.1}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start py-8 md:py-12">
                  {/* Content Column */}
                  <div className={idx % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-sm"
                          style={{ backgroundColor: colorMap[section.color] + "15" }}>
                          <section.icon className="w-7 h-7" style={{ color: colorMap[section.color] || brandBlue }} />
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900">
                          {section.title}
                        </h3>
                      </div>

                      <p className="text-slate-600 text-base md:text-lg font-normal leading-relaxed">
                        {highlightText(section.content || "")}
                      </p>
                    </div>
                  </div>

                  {/* SubContent Box */}
                  <div className={idx % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                    <div className="p-8 md:p-10 bg-white rounded-[2.5rem] border-2 transition-all duration-500 hover:shadow-xl h-full flex items-center relative overflow-hidden group"
                      style={{ borderColor: colorMap[section.color] + "30" }}>
                      <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"
                        style={{ color: colorMap[section.color] }}>
                        <section.icon className="w-full h-full" />
                      </div>
                      <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed whitespace-pre-wrap relative z-10">
                        {highlightText(section.subContent || "")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Divider for the first one */}
                {idx === 0 && (
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
              <Image
                src="/img/bci_logo.png"
                alt="BCI Logo"
                width={250}
                height={250}
                className="mx-auto w-[150px] md:w-[150px] h-auto"
              />
            </div>
            <div className="space-y-5 text-base md:text-lg text-slate-600 font-medium italic leading-relaxed text-center">
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
              </div>
            </div>
          </FadeInSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {awards.map((award, idx) => (
              <FadeInSection key={idx} delay={idx * 0.05}>
                <a
                  href={`/img/award/${award}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative block cursor-zoom-in bg-white p-4 rounded-2xl shadow-sm border border-slate-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl">
                    <Image
                      src={`/img/award/${award}`}
                      alt="BCI Award"
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-blue)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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

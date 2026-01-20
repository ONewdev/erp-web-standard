"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, MapPin, Phone, Mail, Youtube, Facebook, Send, Building2, Settings, BarChart3, Truck } from "lucide-react";
import { motion } from "framer-motion";
import FadeInSection from "@/app/components/FadeInSection";

export default function Home() {
  const slides = [
    {
      id: 1,
      title: "SOFTWARE ERP\nQSOFT, MRP, APS, PM, POS, WMS\nและ USER INTERFACE ที่ดูง่ายต่อการใช้งาน\nเราพร้อมที่จะให้บริการคุณ",
      description: "ด้วยประสบการณ์กว่า 10 ปี โดยทีมงานมืออาชืพที่มีความสามารถ ความเชี่ยวชาญ ในการให้คำปรึกษาและฝึกอบรม",
      imageUrl: "/img/placeholder/header_one.jpg",
      link: "/about",
      linkText: "อ่านเพิ่มเติม",
      showLaptop: true,
    },
    {
      id: 2,
      title: "เรามีความเชื่อมั่น\nว่าเราจะสามารถแก้ปัญหาให้ท่านได้อย่างตรงจุด\nภายในระยะเวลาอันสั้น",
      description: "เพื่อนำท่านไปสู่การพัฒนาศักยภาพในการแข่งขันขององค์กร\nและพัฒนาระบบการทำงานให้เจริญเติบโตอย่างต่อเนื่องและยั่งยืน",
      imageUrl: "/img/placeholder/header_three.jpg",
      link: "/about",
      linkText: "อ่านเพิ่มเติม",
    },
    {
      id: 3,
      title: "อบรม Power BI\nสำหรับโปรแกรมบัญชี WINSpeed\nและ myAccount",
      description: "รับลงทะเบียนล่วงหน้าจำนวน 20 คน จนกว่าจะครบ",
      imageUrl: "/img/placeholder/header_two.jpg",
      link: "/resgiter-bi",
      linkText: "ลงทะเบียน",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => (prev + 1) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex((prev) => (prev - 1 + slides.length) % slides.length);
      setIsTransitioning(false);
    }, 300);
  };

  const goToSlide = (i: number) => {
    if (isTransitioning || i === index) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setIndex(i);
      setIsTransitioning(false);
    }, 300);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 6000); // 6 วินาที

    return () => clearInterval(interval);
  }, [index]);

  return (
    <div className="font-kanit">
      {/* ===== Slide ===== */}
      <div className="relative overflow-hidden w-full h-[470px] text-white">
        {/* Background Images with Fade Transition */}
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ${i === index ? "opacity-100 z-0" : "opacity-0 z-0"
              }`}
          >
            <Image
              src={slide.imageUrl}
              alt={slide.title}
              fill
              className="object-cover brightness-75"
              priority={i === 0}
              sizes="100vw"
            />
          </div>
        ))}

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col md:flex-row justify-center items-center px-10 md:px-20 lg:px-32 z-10">
          {/* Text Container */}
          <div
            className={`flex-1 flex flex-col items-start transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
          >
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 md:mb-5 leading-tight drop-shadow-2xl whitespace-pre-line break-words">
              {slides[index].title}
            </h1>
            <p className="text-xs md:text-sm lg:text-base mb-6 md:mb-8 leading-relaxed drop-shadow-lg whitespace-pre-line break-words max-w-xl text-white/90">
              {slides[index].description}
            </p>
            <Link
              href={slides[index].link}
              className="inline-block bg-[#0e9aef] text-white px-7 py-2.5 md:px-9 md:py-3.5 rounded-xl text-sm md:text-base font-semibold hover:bg-black transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              {slides[index].linkText}
            </Link>
          </div>

          {/* Fixed Laptop Image logic: No unmounting */}
          <div
            className={`hidden lg:flex flex-1 justify-center items-center relative h-full w-full max-h-[350px] transition-all duration-700 ease-out transform ${!isTransitioning && slides[index].showLaptop
              ? "opacity-100 scale-100 translate-x-0"
              : "opacity-0 scale-90 translate-x-10 pointer-events-none"
              }`}
          >
            <div className="relative w-full h-full max-w-[500px]">
              <Image
                src="/img/laptop.png"
                alt="Laptop UI"
                fill
                className="object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center z-20 hover:bg-white/40 transition-all duration-300 shadow-xl hover:scale-110 border-2 border-white/50"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-white/30 backdrop-blur-md text-white rounded-full w-12 h-12 md:w-14 md:h-14 flex items-center justify-center z-20 hover:bg-white/40 transition-all duration-300 shadow-xl hover:scale-110 border-2 border-white/50"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
          {slides.map((slide, i) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`transition-all duration-300 rounded-full ${i === index
                ? "w-6 h-2 md:w-8 md:h-2.5 bg-white scale-100 shadow-lg"
                : "w-2 h-2 md:w-2.5 md:h-2.5 bg-white/60 hover:bg-white/80"
                }`}
            />
          ))}
        </div>
      </div>

      {/* ===== Content ===== */}
      <div className="space-y-16">

        <section id="features" className="scroll-mt-24 mb-16">
          <section className="my-12 flex flex-col items-center">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
              {[
                { imageUrl: "/img/feature/qsoft_mrp.png", alt: "MRP", label: "Q.Soft MRP", href: "/mrp" },
                { imageUrl: "/img/feature/qsoft_aps.png", alt: "APS", label: "Q.Soft APS", href: "/aps" },
                { imageUrl: "/img/feature/qsoft_pm.png", alt: "PM", label: "Q.Soft PM", href: "/pm" },
                { imageUrl: "/img/feature/qsoft_pos.png", alt: "POS", label: "Q.Soft POS", href: "/pos" },
                { imageUrl: "/img/feature/qsoft_wms.png", alt: "WMS", label: "Q.Soft WMS", href: "/wms" },
                { imageUrl: "/img/feature/qsoft_vfs.png", alt: "VFS", label: "Q.Soft VFS", href: "/vfs" },
                { imageUrl: "/img/feature/qsoft_restaurant.png", alt: "RESTURANT", label: "Q.Soft Restaurant", href: "/resturant" },
                { imageUrl: "/img/feature/services_maintenance.png", alt: "Services", label: "Services", href: "/service" },
                { imageUrl: "/img/feature/RBD-logo.jpg", alt: "RBD", label: "RBD", href: "/rbd" },
                { imageUrl: "/img/feature/win-speed.png", alt: "WINSPEED", label: "WINSpeed", href: "/winspeed" },
                { imageUrl: "/img/feature/myAccount.png", alt: "MyAccount", label: "myAccount", href: "/myaccount" },
                { imageUrl: "/img/feature/HRMI.png", alt: "HRMI", label: "HRMI", href: "/hrmi" },
                { imageUrl: "/img/feature/IoT box final.png", alt: "IoT", label: "IoT", href: "/iiot" },
              ].map((item, idx) => (
                <FadeInSection key={item.alt + idx} delay={idx * 0.1}>
                  <Link href={item.href} className="group block">
                    <div className="flex flex-col items-center">
                      <h2 className="text-xl md:text-2xl font-semibold text-[#676a6c] mb-4 group-hover:text-blue-600 transition-colors">
                        {item.label}
                      </h2>
                      <div className="relative w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-40 mb-2">
                        <Image
                          src={item.imageUrl}
                          alt={item.alt}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 250px"
                        />
                      </div>
                    </div>
                  </Link>
                </FadeInSection>
              ))}
            </div>
          </section>
        </section>

        {/* ===== Software Q.Soft Information Section ===== */}
        <section
          id="highlight"
          className="scroll-mt-24 py-20"
        >
          <FadeInSection>
            <div className="max-w-7xl mx-auto px-6">
              {/* Header */}
              <div className="text-center mb-16">
                <div className="w-[60px] h-[1px] border-b-2 border-[#0e9aef] mx-auto mb-10"></div>
                <h1 className="text-3xl md:text-4xl font-light text-[#676a6c] mb-4">
                  Software Q.Soft
                  <br />
                  <span className="text-[#0e9aef] font-semibold"> ระบบบริหารโรงงานอุตสาหกรรมและคลังสินค้ารับฝาก</span>
                </h1>
                <p className="text-[#aeaeae] text-sm md:text-base mt-4">
                  We are confident that we can solve the problem, you have a point. Within a short time
                </p>
              </div>

              {/* Features Grid - 3 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Left Column */}
                <FadeInSection delay={0.1}>
                  <div className="space-y-8">
                    <div className="text-center group p-8 rounded-[2rem] transition-all duration-500 hover:bg-blue-50/50 hover:shadow-lg hover:-translate-y-1">
                      <div className="inline-flex items-center justify-center p-4 bg-white shadow-sm border border-slate-100 rounded-2xl mb-6 transition-all duration-300 group-hover:bg-[#0e9aef] group-hover:text-white text-[#0e9aef] group-hover:shadow-blue-200">
                        <Building2 className="w-12 h-12" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800 mb-4 transition-colors group-hover:text-[#0e9aef]">
                        Q.Soft MRP
                      </h2>
                      <p className="text-slate-500 leading-relaxed font-light text-[15px]">
                        ผู้ประกอบการภาคอุตสาหกรรมที่กำลังมองหาโปรแกรมบริหารและวางแผนการผลิต (MRP) ที่มีคุณภาพ
                        รับรู้ต้นทุนที่แท้จริง (Actual Cost) ใช้งานง่าย ราคาไม่สูงจนเกินไป เมื่อเทียบกับความสามารถที่ได้รับ q.soft mrp ของเราตอบโจทย์คุณได้
                      </p>
                    </div>
                    <div className="text-center group p-8 rounded-[2rem] transition-all duration-500 hover:bg-blue-50/50 hover:shadow-lg hover:-translate-y-1">
                      <div className="inline-flex items-center justify-center p-4 bg-white shadow-sm border border-slate-100 rounded-2xl mb-6 transition-all duration-300 group-hover:bg-[#0e9aef] group-hover:text-white text-[#0e9aef] group-hover:shadow-blue-200">
                        <Settings className="w-12 h-12" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800 mb-4 transition-colors group-hover:text-[#0e9aef]">
                        Q.Soft PM
                      </h2>
                      <p className="text-slate-500 leading-relaxed font-light text-[15px]">
                        ระบบที่จะช่วยให้คุณกำหนดแผนการซ่อมบำรุงให้กับเครื่องจักร หรือทรัพย์สินต่างๆ
                        รวมไปถึงการบันทึกและติดตามงานซ่อมบำรุงในเครื่องจักรของคุณได้
                      </p>
                    </div>
                  </div>
                </FadeInSection>

                {/* Center Column - Image */}
                <FadeInSection delay={0.2}>
                  <div className="flex items-center justify-center h-full group cursor-pointer">
                    <div className="relative w-full aspect-square overflow-hidden rounded-lg">
                      <Image
                        src="/img/perspective.png"
                        alt="Q.Soft Dashboard"
                        fill
                        className="object-contain transition-transform duration-300 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                  </div>
                </FadeInSection>

                {/* Right Column */}
                <FadeInSection delay={0.3}>
                  <div className="space-y-8">
                    <div className="text-center group p-8 rounded-[2rem] transition-all duration-500 hover:bg-blue-50/50 hover:shadow-lg hover:-translate-y-1">
                      <div className="inline-flex items-center justify-center p-4 bg-white shadow-sm border border-slate-100 rounded-2xl mb-6 transition-all duration-300 group-hover:bg-[#0e9aef] group-hover:text-white text-[#0e9aef] group-hover:shadow-blue-200">
                        <BarChart3 className="w-12 h-12" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800 mb-4 transition-colors group-hover:text-[#0e9aef]">
                        Q.Soft APS
                      </h2>
                      <p className="text-slate-500 leading-relaxed font-light text-[15px]">
                        โปรแกรมบริหารการผลิต
                        ที่จะช่วยให้คุณจัดการแผนการผลิตสินค้าที่มีความซับซ้อนในกระบวนการผลิตได้อย่างรวดเร็ว
                        และโปรแกรมสามารถแสดงผลการผลิตให้อยู่ในรูปแบบของกราฟฟิกเพื่อให้ง่ายต่อการบริหารจัดการอีกด้วย
                      </p>
                    </div>
                    <div className="text-center group p-8 rounded-[2rem] transition-all duration-500 hover:bg-blue-50/50 hover:shadow-lg hover:-translate-y-1">
                      <div className="inline-flex items-center justify-center p-4 bg-white shadow-sm border border-slate-100 rounded-2xl mb-6 transition-all duration-300 group-hover:bg-[#0e9aef] group-hover:text-white text-[#0e9aef] group-hover:shadow-blue-200">
                        <Truck className="w-12 h-12" />
                      </div>
                      <h2 className="text-2xl font-bold text-slate-800 mb-4 transition-colors group-hover:text-[#0e9aef]">
                        Q.Soft WMS
                      </h2>
                      <p className="text-slate-500 leading-relaxed font-light text-[15px]">
                        การจัดเก็บสินค้าสำหรับธุรกิจรับฝากสินค้า ไม่ว่าจะเป็นสินค้าพิเศษ หรือสินค้าทั่วไป
                        ระบบของเราสามารถบริหารพื้นที่จัดเก็บได้อย่างมีประสิทธิภาพสูงสุด
                      </p>
                    </div>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* ===== Contact Us Section ===== */}
        <section
          id="contact"
          className="scroll-mt-24 pt-24 pb-24 relative overflow-hidden"
        >
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <FadeInSection>
              <div className="text-left mb-20">
                <div className="inline-block px-4 py-1.5 mb-4 text-[11px] font-bold tracking-[0.2em] text-[#0e9aef] uppercase bg-blue-50 rounded-full border border-blue-100 ml-10">
                  Contact Us
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-10 pl-10">
                  ติดต่อเรา
                </h1>
                <p className="text-slate-500 text-lg max-w-2xl font-light pl-10">
                  เรามีความเชื่อมั่นว่าเราจะสามารถแก้ปัญหาให้ท่านได้อย่างตรงจุด ภายในระยะเวลาอันสั้น
                </p>
                <div className="w-24 h-1.5 bg-[#0e9aef] mt-8 rounded-full ml-10"></div>
              </div>
            </FadeInSection>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* ===== Left: Contact Info (5 Cols) ===== */}
              <div className="lg:col-span-5 space-y-8">
                <FadeInSection delay={0.1}>
                  <motion.div
                    whileHover={{
                      y: -10,
                      backgroundColor: "rgba(239, 246, 255, 0.5)",
                      borderColor: "rgba(14, 154, 239, 0.3)",
                      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)"
                    }}
                    className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-100 text-[#0e9aef] rounded-xl flex items-center justify-center mb-6 shadow-inner">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-4">ที่อยู่สำนักงาน</h3>
                    <address className="not-italic text-slate-600 leading-relaxed font-light text-[15px]">
                      <p className="mb-4 text-slate-500 leading-relaxed">
                        บริการให้คำปรึกษา การเพิ่มประสิทธิภาพภาคการผลิต <br />
                        <span className="font-medium text-slate-700">Q. Soft</span> เป็น Software ที่พัฒนาขึ้นโดยทีมงานที่มีประสบการณ์ด้านการวิเคราะห์ และพัฒนาระบบบริหารการผลิตในภาคอุตสาหกรรมที่หลากหลาย ผนวกกับทีมงานที่มีประสบการณ์ในการพัฒนา Database Application (โปรแกรมที่มีระบบการจัดเก็บฐานข้อมูลจำนวนมาก)
                      </p>
                      <strong className="block mb-2 text-[#0e9aef] text-[17px]">บริษัท บิสซิเนส คอมเพ็ดทิทีฟ อินเทลลิเจนซ์ จำกัด</strong>
                      59/69 หมู่ 1 ซ.ติวานนท์ - ปากเกร็ด 56 ต.บ้านใหม่ <br />
                      อ.ปากเกร็ด จ.นนทบุรี 11120 <br />
                      หมายเลขประจำตัวของผู้เสียภาษี 0105545127622
                    </address>
                  </motion.div>
                </FadeInSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FadeInSection delay={0.2} className="h-full">
                    <motion.div
                      whileHover={{
                        y: -8,
                        backgroundColor: "rgba(239, 246, 255, 0.5)",
                        borderColor: "rgba(14, 154, 239, 0.3)",
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)"
                      }}
                      className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 transition-colors duration-300 h-full"
                    >
                      <div className="w-10 h-10 bg-orange-100 text-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                        <Phone className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-800 mb-3">ฝ่ายขาย</h4>
                      <ul className="space-y-2 text-slate-600 font-light text-sm">
                        <li className="flex items-center gap-2 hover:text-[#0e9aef] transition-colors"><a href="tel:025822110">02-582-2110</a></li>
                        <li className="flex items-center gap-2 hover:text-[#0e9aef] transition-colors"><a href="tel:0917623838">091-762-3838</a></li>
                        <li className="flex items-center gap-2 hover:text-[#0e9aef] transition-colors"><a href="tel:0863950364">086-395-0364</a></li>
                      </ul>
                    </motion.div>
                  </FadeInSection>

                  <FadeInSection delay={0.3} className="h-full">
                    <motion.div
                      whileHover={{
                        y: -8,
                        backgroundColor: "rgba(239, 246, 255, 0.5)",
                        borderColor: "rgba(14, 154, 239, 0.3)",
                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)"
                      }}
                      className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-100 transition-colors duration-300 h-full"
                    >
                      <div className="w-10 h-10 bg-green-100 text-green-500 rounded-xl flex items-center justify-center mb-6 shadow-inner">
                        <Phone className="w-5 h-5" />
                      </div>
                      <h4 className="text-lg font-bold text-slate-800 mb-3">ฝ่าย Support</h4>
                      <ul className="space-y-2 text-slate-600 font-light text-sm">
                        <li className="flex items-center gap-2 hover:text-[#0e9aef] transition-colors"><a href="tel:0831226349">083-122-6349</a></li>
                        <li className="flex items-center gap-2 hover:text-[#0e9aef] transition-colors"><a href="tel:0917623838">091-762-3838</a></li>
                        <li className="flex items-center gap-2 hover:text-[#0e9aef] transition-colors"><a href="tel:0863213874">086-321-3874</a></li>
                      </ul>
                    </motion.div>
                  </FadeInSection>
                </div>

                <FadeInSection delay={0.4}>
                  <div className="flex flex-col items-center gap-6 pt-8 border-t border-slate-200 mt-4">
                    <a
                      href="mailto:chopaka_m@q-softthai.com;nurng.t072@gmail.com;chopaka1817@gmail.com"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0e9aef] text-white px-10 py-4 rounded-2xl font-bold shadow-lg shadow-blue-100 hover:bg-black transition-all duration-300 hover:scale-105"
                    >
                      <Mail className="w-5 h-5" />
                      ส่งอีเมลถึงเรา
                    </a>
                    <div className="flex gap-6 justify-center">
                      <a href="https://www.facebook.com/q.soft/" target="_blank" className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-all duration-300 shadow-sm group">
                        <Facebook className="w-7 h-7" />
                      </a>
                      <a href="https://www.youtube.com/user/qsoftthai/" target="_blank" className="w-14 h-14 bg-white border border-slate-200 rounded-2xl flex items-center justify-center text-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all duration-300 shadow-sm group">
                        <Youtube className="w-7 h-7" />
                      </a>
                    </div>
                  </div>
                </FadeInSection>
              </div>

              {/* ===== Right: Modern Form (7 Cols) ===== */}
              <div className="lg:col-span-7">
                <FadeInSection delay={0.2}>
                  <motion.div
                    whileHover={{
                      y: -5,
                      backgroundColor: "rgba(239, 246, 255, 0.3)",
                      borderColor: "rgba(14, 154, 239, 0.4)",
                      boxShadow: "0 25px 50px -12px rgba(14, 154, 239, 0.15)"
                    }}
                    className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-50 relative transition-all duration-500"
                  >
                    <div className="absolute top-0 right-10 -translate-y-1/2 w-20 h-20 bg-blue-100 rounded-3xl rotate-12 -z-10 opacity-20"></div>

                    <h2 className="text-2xl font-bold text-slate-800 mb-10">ติดต่อผู้เชี่ยวชาญของเรา</h2>

                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        alert("ส่งข้อมูลเรียบร้อย!");
                      }}
                      className="space-y-4"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Name Input */}
                        <div className="relative group/field bg-slate-50 rounded-xl border border-slate-200 focus-within:border-[#0e9aef] focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50 transition-all">
                          <input
                            type="text"
                            id="name"
                            required
                            className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent"
                            placeholder="ชื่อ-สกุล"
                          />
                          <label
                            htmlFor="name"
                            className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                       peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                       peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                          >
                            ชื่อ-สกุล
                          </label>
                        </div>

                        {/* Phone Input */}
                        <div className="relative group/field bg-slate-50 rounded-xl border border-slate-200 focus-within:border-[#0e9aef] focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50 transition-all">
                          <input
                            type="text"
                            id="phone"
                            required
                            className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent"
                            placeholder="เบอร์โทรศัพท์"
                          />
                          <label
                            htmlFor="phone"
                            className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                       peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                       peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                          >
                            เบอร์โทรศัพท์
                          </label>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Email Input */}
                        <div className="relative group/field bg-slate-50 rounded-xl border border-slate-200 focus-within:border-[#0e9aef] focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50 transition-all">
                          <input
                            type="email"
                            id="email"
                            required
                            className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent"
                            placeholder="อีเมล"
                          />
                          <label
                            htmlFor="email"
                            className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                       peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                       peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                          >
                            อีเมล
                          </label>
                        </div>

                        {/* Company Input */}
                        <div className="relative group/field bg-slate-50 rounded-xl border border-slate-200 focus-within:border-[#0e9aef] focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50 transition-all">
                          <input
                            type="text"
                            id="company"
                            required
                            className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent"
                            placeholder="บริษัท"
                          />
                          <label
                            htmlFor="company"
                            className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                       peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                       peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                          >
                            บริษัท
                          </label>
                        </div>
                      </div>

                      <div className="relative group/field bg-slate-50 rounded-xl border border-slate-200 focus-within:border-[#0e9aef] focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50 transition-all">
                        <select
                          id="service"
                          className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer appearance-none cursor-pointer"
                        >
                          <option value="" disabled selected className="text-slate-400">กรุณาเลือกบริการ</option>
                          <option value="1">Q.Soft MRP - Manufacturing Resource Planning</option>
                          <option value="2">Q.Soft APS - Advanced Planning and Scheduling</option>
                          <option value="3">Q.Soft PM - Plant Maintenance</option>
                          <option value="4">Q.Soft POS - Point of Sale</option>
                          <option value="5">Q.Soft WMS - Warehouse Management System</option>
                          <option value="6">Q.Soft VFS - Village Fund System</option>
                          <option value="7">Q.Soft POS for Restaurant</option>
                          <option value="8">WINSPEED</option>
                          <option value="9">myAccount</option>
                          <option value="10">HRMI</option>
                          <option value="11">Industrial Internet of things</option>
                        </select>
                        <label
                          htmlFor="service"
                          className="absolute left-5 top-2 text-[10px] text-[#0e9aef] font-bold font-kanit"
                        >
                          เลือกบริการที่ท่านสนใจ
                        </label>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                          <ChevronRight className="w-4 h-4 rotate-90" />
                        </div>
                      </div>

                      <div className="pt-4">
                        <button type="submit" className="w-full bg-[#0e9aef] text-white py-4 rounded-xl font-bold text-base shadow-lg shadow-blue-100 hover:bg-black transition-all duration-500 flex items-center justify-center gap-3 active:scale-95">
                          <Send className="w-5 h-5" />
                          SUBMIT
                        </button>
                      </div>
                    </form>
                  </motion.div>
                </FadeInSection>

                {/* Separate Google Maps Card */}
                <FadeInSection delay={0.3}>
                  <div className="mt-8 rounded-[2.5rem] overflow-hidden border border-slate-100 shadow-xl h-[400px] relative bg-white p-4">
                    <div className="absolute inset-4 rounded-[2rem] overflow-hidden">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21904.272143554408!2d100.56008115037825!3d13.948788647682154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e2836299299ac5%3A0xffd24ce376fe4efe!2z4Lia4LiI4LiBLiDguJrguLTguKrguIvguLTguYDguJnguKog4LiE4Lit4Lih4LmA4Lie4LmH4LiU4LiX4Li04LiX4Li14LifIOC4reC4tOC4meC5gOC4l-C4peC4peC4tOC5gOC4iOC4meC4i-C5jA!5e0!3m2!1sth!2sth!4v1768884936985!5m2!1sth!2sth"
                        className="absolute inset-0 w-full h-full border-0"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                  </div>
                </FadeInSection>
              </div>
            </div>

            {/* Bottom Slogan Section */}
            <FadeInSection delay={0.5}>
              <div className="mt-12 text-center border-t border-slate-200 pt-16">
                <p className="text-slate-400 font-light text-[15px] italic">
                  "เราจะพาคุณไปสู่การพัฒนาศักยภาพในการแข่งขันขององค์กร พัฒนาระบบการทำงานให้เจริญเติบโตอย่างต่อเนื่องและยั่งยืน"
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>
      </div>
    </div>
  );
}

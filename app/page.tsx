"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FadeInSection from "@/app/components/FadeInSection";

export default function Home() {
  const slides = [
    {
      id: 1,
      title:
        "SOFTWARE ERPQSOFT, MRP, APS, PM, POS, WMS และ USER INTERFACE ที่ดูง่ายต่อการใช้งานเราพร้อมที่จะให้บริการคุณ",
      description:
        "ด้วยประสบการณ์กว่า 10 ปี โดยทีมงานมืออาชืพที่มีความสามารถ ความเชี่ยวชาญในการให้คำปรึกษาและฝึกอบรม",
      imageUrl: "/img/placeholder/header_one.jpg",
      link: "/about",
      linkText: "อ่านเพิ่มเติม",
    },
    {
      id: 2,
      title: "อบรม Power BI สำหรับโปรแกรมบัญชี WINSpeed และ myAccount",
      description: "รับลงทะเบียนล่วงหน้าจำนวน 20 คน จนกว่าจะครบ",
      imageUrl: "/img/placeholder/header_two.jpg",
      link: "/about",
      linkText: "อ่านเพิ่มเติม",
    },
    {
      id: 3,
      title:
        "เรามีความเชื่อมั่น ว่าเราจะสามารถแก้ปัญหาให้ท่านได้อย่างตรงจุด ภายในระยะเวลาอันสั้น",
      description:
        "เพื่อนำท่านไปสู่การพัฒนาศักยภาพในการแข่งขันขององค์กร\nและพัฒนาระบบการทำงานให้เจริญเติบโตอย่างต่อเนื่องและยั่งยืน",
      imageUrl: "/img/placeholder/header_three.jpg",
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


  // // ✅ โครงรูป (เปลี่ยน imageUrl ทีหลังได้)
  // const featureImages = [
  //   {
  //     title: "โซลูชัน ERP",
  //     description: "ดูรายละเอียดระบบ ERP",
  //     imageUrl: "/img/placeholder/feature1.jpg", // ยังไม่มีรูปจริงก็ใส่ placeholder ไว้ก่อน
  //     href: "/erp",
  //   },
  //   {
  //     title: "Power BI Training",
  //     description: "ดูคอร์สและรอบอบรม",
  //     imageUrl: "/img/placeholder/feature2.jpg",
  //     href: "/course",
  //   },
  //   {
  //     title: "บริการที่ปรึกษา",
  //     description: "อ่านรายละเอียดการให้บริการ",
  //     imageUrl: "/img/placeholder/feature3.jpg",
  //     href: "/service",
  //   },
  // ];

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
        <div className="absolute inset-0 flex flex-col justify-center items-start text-left px-8 md:px-16 lg:px-24 z-10">
          <div
            className={`max-w-[65%] md:max-w-[60%] ml-4 transition-all duration-500 ${isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
          >
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-5 leading-tight drop-shadow-2xl whitespace-pre-line break-words">
              {slides[index].title}
            </h1>
            <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 leading-relaxed drop-shadow-lg whitespace-pre-line break-words">
              {slides[index].description}
            </p>
            <Link
              href={slides[index].link}
              className="inline-block bg-blue-600 text-white px-7 py-2.5 md:px-9 md:py-3.5 rounded-lg text-sm md:text-base font-semibold hover:bg-blue-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              {slides[index].linkText}
            </Link>
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
                { imageUrl: "/img/feature/qsoft_mrp.png", alt: "MRP", label: "MRP", href: "/mrp" },
                { imageUrl: "/img/feature/qsoft_aps.png", alt: "APS", label: "APS", href: "/aps" },
                { imageUrl: "/img/feature/qsoft_pm.png", alt: "PM", label: "PM", href: "/pm" },
                { imageUrl: "/img/feature/qsoft_pos.png", alt: "POS", label: "POS", href: "/pos" },
                { imageUrl: "/img/feature/qsoft_wms.png", alt: "WMS", label: "WMS", href: "/wms" },
                { imageUrl: "/img/feature/qsoft_vfs.png", alt: "VFS", label: "VFS", href: "/vfs" },
                { imageUrl: "/img/feature/qsoft_restaurant.png", alt: "RESTURANT", label: "RESTURANT", href: "/resturant" },
                { imageUrl: "/img/feature/services_maintenance.png", alt: "Serviecs", label: "Serviecs", href: "/service" },
                { imageUrl: "/img/feature/RBD-logo.jpg", alt: "RBD", label: "RBD", href: "/rbd" },
                { imageUrl: "/img/feature/win-speed.png", alt: "WINSPEED", label: "WINSPEED", href: "/winspeed" },
                { imageUrl: "/img/feature/myAccount.png", alt: "MyAccount", label: "MyAccount", href: "/myaccount" },
                { imageUrl: "/img/feature/HRMI.png", alt: "HRMI", label: "HRMI", href: "/hrmi" },
                { imageUrl: "/img/feature/IoT box final.png", alt: "IIOT", label: "IIOT", href: "/iiot" },
              ].map((item, idx) => (
                <FadeInSection key={item.alt + idx} delay={idx * 0.1}>
                  <Link href={item.href} className="group block">
                    <div className="flex flex-col items-center">
                      <div className="relative w-40 h-28 sm:w-48 sm:h-32 md:w-56 md:h-40 mb-2">
                        <Image
                          src={item.imageUrl}
                          alt={item.alt}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 250px"
                        />
                      </div>
                      <span className="text-sm font-medium text-slate-700 group-hover:text-blue-600 transition">{item.label}</span>
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
                <div className="h-1 bg-blue-600 w-24 mx-auto mb-6"></div>
                <h1 className="text-2xl md:text-3xl font-bold mb-2">
                  Software Q.Soft
                </h1>
                <h2 className="text-lg md:text-xl text-blue-600 font-semibold mb-6">
                  ระบบบริหารโรงงานอุตสาหกรรมและคลังสินค้ารับฝาก
                </h2>
                <p className="text-slate-600 text-base">
                  We are confident that we can solve the problem, you have a point. Within a short time
                </p>
              </div>

              {/* Features Grid - 3 Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                {/* Left Column */}
                <FadeInSection delay={0.1}>
                  <div className="space-y-8">
                    <div className="text-center">
                      <i className="fa fa-institution text-blue-600 text-3xl block mb-4"></i>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">
                        Q.Soft MRP
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        ผู้ประกอบการภาคอุตสาหกรรมที่กำลังมองหาโปรแกรมบริหารและวางแผนการผลิต (MRP) ที่มีคุณภาพ
                        รับรู้ต้นทุนที่แท้จริง (Actual Cost) ใช้งานง่าย ราคาไม่สูงจนเกินไป เมื่อเทียบกับความสามารถที่ได้รับ q.soft mrp ของเราตอบโจทย์คุณได้
                      </p>
                    </div>
                    <div className="text-center">
                      <i className="fa fa-bar-chart text-blue-600 text-3xl block mb-4"></i>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">
                        Q.Soft PM
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
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
                    <div className="text-center">
                      <i className="fa fa-calendar text-blue-600 text-3xl block mb-4"></i>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">
                        Q.Soft APS
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        โปรแกรมบริหารการผลิต
                        ที่จะช่วยให้คุณจัดการแผนการผลิตสินค้าที่มีความซับซ้อนในกระบวนการผลิตได้อย่างรวดเร็ว
                        และโปรแกรมสามารถแสดงผลการผลิตให้อยู่ในรูปแบบของกราฟฟิกเพื่อให้ง่ายต่อการบริหารจัดการอีกด้วย
                      </p>
                    </div>
                    <div className="text-center">
                      <i className="fa fa-truck text-blue-600 text-3xl block mb-4"></i>
                      <h3 className="text-lg font-semibold text-slate-800 mb-3">
                        Q.Soft WMS
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
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


        <section
          id="contact"
          className="scroll-mt-24 pt-16 pb-16 bg-[#f4f4f4] relative"
        >
          {/* Background Image (World Map) */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none flex items-center justify-center overflow-hidden">
            {/* Use a placeholder or the actual image if available in public folder. 
                    Based on ERP code: background-image: url('../../img/word_map.png');
                    I'll use a placeholder or assume it's moved to public/img/word_map.png
                */}
            <div
              className="w-full h-full bg-[url('/img/word_map.png')] bg-no-repeat bg-center bg-contain"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="h-[2px] w-[60px] bg-[#0e9aef] mx-auto mb-4"></div>
              <h1 className="text-3xl font-light text-[#676a6c] mb-2">
                ติดต่อเรา
              </h1>
              <p className="text-[#aeaeae] text-sm">
                เราจะสามารถแก้ปัญหาให้ท่านได้อย่างตรงจุด ภายในระยะเวลาอันสั้น
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* ===== Left: Content ===== */}
              <div className="mt-8 lg:ml-12">
                <h3 className="text-xl md:text-2xl font-light text-[#676a6c] mb-6 text-left">
                  บริการให้คำปรึกษา การเพิ่มประสิทธิภาพภาคการผลิต
                </h3>

                <p className="text-[#676a6c] text-[16px] leading-relaxed mb-6 font-light">
                  Q. Soft เป็น Software ที่พัฒนาขึ้นโดยทีมงานที่มีประสบการณ์ด้านการวิเคราะห์ และพัฒนาระบบบริหารการผลิตในภาคอุตสาหกรรมที่หลากหลาย ผนวกกับทีมงานที่มีประสบการณ์ในการพัฒนา Database Application (โปรแกรมที่มีระบบการจัดเก็บฐานข้อมูลจำนวนมาก)
                </p>

                <address className="text-[13px] text-[#676a6c] not-italic leading-loose">
                  <strong className="block mb-1 text-[16px]">
                    <span className="text-[#0e9aef]">บริษัท บิสซิเนส คอมเพ็ดทิทีฟ อินเทลลิเจนซ์ จำกัด </span>
                  </strong>
                  59/69 หมู่ 1 ซ.ติวานนท์ - ปากเกร็ด 56 ต.บ้านใหม่
                  <br /> อ.ปากเกร็ด จ.นนทบุรี 11120
                  <br /> หมายเลขประจำตัวของผู้เสียภาษี 0105545127622
                  <br />
                  <br />
                  <span className="font-bold border-b border-dotted border-slate-400" title="Phone">ฝ่ายขาย</span>
                  <i className="fa fa-phone mx-2"></i> <a href="tel:025822110" className="mr-2 hover:text-[#0e9aef]">02-582-2110</a>
                  <i className="fa fa-mobile mx-2"></i> <a href="tel:0917623838" className="mr-2 hover:text-[#0e9aef]">091-762-3838</a>
                  <i className="fa fa-mobile mx-2"></i> <a href="tel:0863950364" className="mr-2 hover:text-[#0e9aef]">086-395-0364</a>

                  <br />
                  <span className="font-bold border-b border-dotted border-slate-400" title="Phone">ฝ่าย support</span>
                  <i className="fa fa-mobile mx-2"></i> <a href="tel:0831226349" className="mr-2 hover:text-[#0e9aef]">083-122-6349</a>
                  <i className="fa fa-mobile mx-2"></i> <a href="tel:0917623838" className="mr-2 hover:text-[#0e9aef]">091-762-3838</a>
                  <i className="fa fa-mobile mx-2"></i> <a href="tel:0863213874" className="hover:text-[#0e9aef]">086-321-3874</a>
                </address>
              </div>

              {/* ===== Right: Form (Login Box Style) ===== */}
              <div className="lg:mr-12">
                {/* ERP 'login-box' recreation */}
                <div className="p-10 bg-black/50 rounded-lg shadow-2xl backdrop-blur-sm box-border">
                  <h2 className="text-white text-center text-2xl mb-8 font-light">
                    ติดต่อผู้เชี่ยวชาญของเรา
                  </h2>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      alert("ส่งข้อมูลเรียบร้อย!");
                    }}
                  >
                    {/* User Box Input 1 */}
                    <div className="relative mb-8 group">
                      <input type="text" name="name" required
                        className="w-full py-2.5 text-white bg-transparent border-none border-b border-white outline-none focus:border-b-[#64BAEE] peer transition-colors"
                      />
                      <label className="absolute top-0 left-0 py-2.5 text-white pointer-events-none transition-all duration-500 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#64BAEE] peer-valid:-top-5 peer-valid:text-xs peer-valid:text-[#64BAEE]">
                        ชื่อ-สกุล
                      </label>
                    </div>

                    {/* User Box Input 2 */}
                    <div className="relative mb-8 group">
                      <input type="text" name="phone" required
                        className="w-full py-2.5 text-white bg-transparent border-none border-b border-white outline-none focus:border-b-[#64BAEE] peer transition-colors"
                      />
                      <label className="absolute top-0 left-0 py-2.5 text-white pointer-events-none transition-all duration-500 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#64BAEE] peer-valid:-top-5 peer-valid:text-xs peer-valid:text-[#64BAEE]">
                        เบอร์โทรศัพท์ติดต่อ
                      </label>
                    </div>

                    {/* User Box Input 3 */}
                    <div className="relative mb-8 group">
                      <input type="text" name="email" required
                        className="w-full py-2.5 text-white bg-transparent border-none border-b border-white outline-none focus:border-b-[#64BAEE] peer transition-colors"
                      />
                      <label className="absolute top-0 left-0 py-2.5 text-white pointer-events-none transition-all duration-500 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#64BAEE] peer-valid:-top-5 peer-valid:text-xs peer-valid:text-[#64BAEE]">
                        อีเมล์
                      </label>
                    </div>

                    {/* User Box Input 4 */}
                    <div className="relative mb-8 group">
                      <input type="text" name="company" required
                        className="w-full py-2.5 text-white bg-transparent border-none border-b border-white outline-none focus:border-b-[#64BAEE] peer transition-colors"
                      />
                      <label className="absolute top-0 left-0 py-2.5 text-white pointer-events-none transition-all duration-500 peer-focus:-top-5 peer-focus:text-xs peer-focus:text-[#64BAEE] peer-valid:-top-5 peer-valid:text-xs peer-valid:text-[#64BAEE]">
                        บริษัท
                      </label>
                    </div>

                    {/* Select Box */}
                    <div className="relative mb-8 group">
                      <select className="w-full py-2.5 text-white bg-transparent border-none border-b border-white outline-none focus:border-b-[#64BAEE] [&>option]:text-black">
                        <option value="" selected disabled hidden>เลือกบริการของเรา</option>
                        <option value="1">Q.Soft MRP - Manufacturing Resource Planning</option>
                        <option value="2">Q.Soft APS - Advanced Planning and Scheduling</option>
                        <option value="3">Q.Soft PM - Plant Maintenance</option>
                        <option value="4">Q.Soft POS - Point of Sale</option>
                        <option value="5">Q.Soft WMS - Warehouse Management System</option>
                        <option value="6">Q.Soft VFS - Village Fund System</option>
                        <option value="7">Q.Soft POS for Restuarant</option>
                        <option value="8">WINSPEED</option>
                        <option value="9">myAccount</option>
                        <option value="10">HRMI</option>
                        <option value="11">Industrial Internet of things</option>
                      </select>
                    </div>

                    {/* Submit Button with Neon Effect */}
                    <div className="flex justify-center mt-10">
                      <button type="submit" className="relative inline-block px-5 py-2.5 text-[#64BAEE] text-base uppercase tracking-[4px] overflow-hidden transition-all duration-500 hover:bg-[#64BAEE] hover:text-white shadow-[0_0_5px_#64BAEE,0_0_25px_#64BAEE,0_0_50px_#64BAEE,0_0_100px_#64BAEE]">
                        Submit
                      </button>
                    </div>

                  </form>
                </div>
              </div>
            </div>

            {/* ===== Email & Social Media Section ===== */}
            <div className="mt-16 border-t border-slate-200 pt-12">
              <div className="text-center mb-12">
                <a
                  href="mailto:chopaka_m@q-softthai.com;nurng.t072@gmail.com;chopaka1817@gmail.com"
                  className="inline-block bg-[#0e9aef] text-white px-5 py-2.5 rounded text-sm font-semibold hover:bg-[#0c88d3] transition duration-300"
                >
                  ส่งอีเมลถึงเรา
                </a>

                <p className="text-[#676a6c] mt-6 mb-4 text-sm">
                  หรือติดตามเราบนแพลตฟอร์มโซเชียล
                </p>
                <ul className="flex justify-center gap-4">
                  <li>
                    <a
                      href="https://www.youtube.com/user/qsoftthai/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0e9aef] text-white w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#64BAEE] transition"
                      title="YouTube"
                    >
                      <i className="fa fa-youtube-play text-sm"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/q.soft/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#0e9aef] text-white w-7 h-7 rounded-full flex items-center justify-center hover:bg-[#64BAEE] transition"
                      title="Facebook"
                    >
                      <i className="fa fa-facebook text-sm"></i>
                    </a>
                  </li>
                </ul>
              </div>

              {/* ===== Footer Info ===== */}
              <div className="text-center max-w-4xl mx-auto py-12 border-t border-slate-200">
                <p className="text-[#676a6c] leading-relaxed mb-4 text-[13px]">
                  <strong>&copy; 2017 Business Competitive Intelligence Co., Ltd.</strong>
                </p>
                <a href="privacypolicy" className="text-[#0e9aef] hover:underline font-bold text-[13px]">
                  Privacy policy
                </a>
                <p className="text-[#aeaeae] text-[13px] leading-relaxed mt-4">
                  With more than 10 years with a professional team of skilled, professional. In consulting and training
                  <br />
                  "We are confident that we can solve the problem, you have a point. Within a short time."
                  <br />
                  This will take you to the development of the competitiveness of enterprises. Development work continued and sustainable growth.
                </p>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

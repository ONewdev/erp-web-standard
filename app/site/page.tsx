"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Package, Sparkles, Star, Users, Zap } from "lucide-react";

const navItems = [
  { label: "Q.soft", key: "qsoft" },
  { label: "Winspeed", key: "winspeed" },
  { label: "HRM", key: "hrm" },
  { label: "AI", key: "ai" },
  { label: "Consultancy / Training", key: "consulting" },
  { label: "อื่น ๆ", key: "others" },
] as const;

const Tooltip = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onTouchStart={() => setShow(true)}
      onTouchEnd={() => setTimeout(() => setShow(false), 1000)}
    >
      {children}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded shadow-lg whitespace-nowrap z-50 pointer-events-none"
          >
            {title}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-gray-800" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

type SectionKey = (typeof navItems)[number]["key"];

interface Client {
  name: string;
  logo?: string;
}

const qsoftSubcategories = ["MRP", "APS", "WMS", "PM"] as const;
type QsoftSubcategory = (typeof qsoftSubcategories)[number];

const qsoftColors: Record<QsoftSubcategory, { bg: string; dot: string }> = {
  MRP: { bg: "#3b9eff", dot: "#3b9eff" },
  APS: { bg: "#52c41a", dot: "#52c41a" },
  WMS: { bg: "#ff4d4f", dot: "#ff4d4f" },
  PM: { bg: "#faad14", dot: "#faad14" },
};

const clientsByQsoftCategory: Record<QsoftSubcategory, Client[]> = {
  MRP: [
    { name: "บริษัท แพนสยาม แมนูแฟคเจอริ่ง จำกัด", logo: "/img/site/pansiam_logo.jpg" },
    { name: "บริษัท ซี.อี. คราฟท์แมน จำกัด", logo: "/img/site/ce_logo.jpg" },
    { name: "บริษัท มินามิดะ (ไทยแลนด์) จำกัด", logo: "/img/site/minamida_logo.jpg" },
    { name: "บริษัท เทคโนพลาส อุตสาหกรรม (ประเทศไทย) จำกัด", logo: "/img/site/technoplast_logo.jpg" },
    { name: "บริษัท นครศรีพาราวูด จำกัด", logo: "/img/site/nakonsi.png" },
    { name: "บริษัท ทีเบลโก้ จำกัด", logo: "/img/site/tbelco.jpg" },
    { name: "บริษัท วี.ซี.มีท โปรเซสซิ่ง จำกัด", logo: "/img/site/vc.png" },
    { name: "บริษัท โบลแพค จำกัด", logo: "/img/site/blowpack_logo.jpg" },
  ],
  APS: [
    { name: "บริษัท แพนสยาม แมนูแฟคเจอริ่ง จำกัด", logo: "/img/site/pansiam_logo.jpg" },
    { name: "บริษัท ซี.อี. คราฟท์แมน จำกัด", logo: "/img/site/ce_logo.jpg" },
    { name: "บริษัท มินามิดะ (ไทยแลนด์) จำกัด", logo: "/img/site/minamida_logo.jpg" },
    { name: "บริษัท เทคโนพลาส อุตสาหกรรม (ประเทศไทย) จำกัด", logo: "/img/site/technoplast_logo.jpg" },
    { name: "บริษัท นครศรีพาราวูด จำกัด", logo: "/img/site/nakonsi.png" },
    { name: "บริษัท ทีเบลโก้ จำกัด", logo: "/img/site/tbelco.jpg" },
    { name: "บริษัท วี.ซี.มีท โปรเซสซิ่ง จำกัด", logo: "/img/site/vc.png" },
    { name: "บริษัท โบลแพค จำกัด", logo: "/img/site/blowpack_logo.jpg" },
  ],
  WMS: [
    { name: "บริษัท แพนสยาม แมนูแฟคเจอริ่ง จำกัด", logo: "/img/site/pansiam_logo.jpg" },
    { name: "บริษัท นครศรีพาราวูด จำกัด", logo: "/img/site/nakonsi.png" },
    { name: "บริษัท วี.ซี.มีท โปรเซสซิ่ง จำกัด", logo: "/img/site/vc.png" },
    { name: "บริษัท โบลแพค จำกัด", logo: "/img/site/blowpack_logo.jpg" },
  ],
  PM: [
    { name: "บริษัท โบลแพค จำกัด", logo: "/img/site/blowpack_logo.jpg" },
  ],
};

const clients: Record<SectionKey, Client[]> = {
  qsoft: [
    { name: "บริษัท แพนสยาม แมนูแฟคเจอริ่ง จำกัด", logo: "/img/site/pansiam_logo.jpg" },
    { name: "บริษัท ซี.อี. คราฟท์แมน จำกัด", logo: "/img/site/ce_logo.jpg" },
    { name: "บริษัท มินามิดะ (ไทยแลนด์) จำกัด", logo: "/img/site/minamida_logo.jpg" },
    { name: "บริษัท เทคโนพลาส อุตสาหกรรม (ประเทศไทย) จำกัด", logo: "/img/site/technoplast_logo.jpg" },
    { name: "บริษัท นครศรีพาราวูด จำกัด", logo: "/img/site/nakonsi.png" },
    { name: "บริษัท ทีเบลโก้ จำกัด", logo: "/img/site/tbelco.jpg" },
    { name: "บริษัท วี.ซี.มีท โปรเซสซิ่ง จำกัด", logo: "/img/site/vc.png" },
    { name: "บริษัท โบลแพค จำกัด", logo: "/img/site/blowpack_logo.jpg" },
    { name: "บริษัท สยามบาร์เดอร์ จำกัด", logo: "/img/site/siam-brothers.png" },
    { name: "บริษัท สยามบราเดอร์ เน็ต จำกัด", logo: "/img/site/siam-net.jpg" },
    { name: "บริษัท โตเกียว เคอิโซ (ไทยแลนด์) จำกัด", logo: "/img/site/tokyo-keiso.png" },
    { name: "บริษัท บางชัน เยนเนอร์เรล เเซมบลี จำกัด", logo: "/img/site/bangna.png" },
    { name: "บริษัท ไมโครไฟเบอร์อุตสาหกรรม จำกัด", logo: "/img/site/microfiber.png" },
    { name: "บริษัท ร่วมกำชัย จำกัด", logo: "/img/site/rkc.png" },
    { name: "บริษัท วันเดอร์ฟูล พลาสติก จำกัด", logo: "/img/site/wonderful.png" },
    { name: "บริษัท ไทยรุ่ง อินเตอร์ บิส จำกัด", logo: "/img/site/thairoong.png" },
    { name: "บริษัท ไทยสแตนดาร์ด เมทัล โปรดักส์ จำกัด", logo: "/img/site/thaimetal.png" },
  ],
  winspeed: [
    { name: "บริษัท แพนสยาม แมนูแฟคเจอริ่ง จำกัด", logo: "/img/site/pansiam_logo.jpg" },
    { name: "บริษัท ซี.อี. คราฟท์แมน จำกัด", logo: "/img/site/ce_logo.jpg" },
    { name: "บริษัท มินามิดะ (ไทยแลนด์) จำกัด", logo: "/img/site/minamida_logo.jpg" },
    { name: "บริษัท เทคโนพลาส อุตสาหกรรม (ประเทศไทย) จำกัด", logo: "/img/site/technoplast_logo.jpg" },
    { name: "บริษัท นครศรีพาราวูด จำกัด", logo: "/img/site/nakonsi.png" },
    { name: "บริษัท ทีเบลโก้ จำกัด", logo: "/img/site/tbelco.jpg" },
    { name: "บริษัท สยามบาร์เดอร์ จำกัด", logo: "/img/site/siam-brothers.png" },
    { name: "บริษัท สยามบราเดอร์ เน็ต จำกัด", logo: "/img/site/siam-net.jpg" },
    { name: "บริษัท บางชัน เยนเนอร์เรล เอเซมบลี จำกัด", logo: "/img/site/bangna.png" },
    { name: "บริษัท ไมโครไฟเบอร์อุตสาหกรรม จำกัด", logo: "/img/site/microfiber.png" },
    { name: "บริษัท โตเกียว เคอิโซ (ไทยแลนด์) จำกัด", logo: "/img/site/tokyo-keiso.png" },
    { name: "บริษัท ร่วมกำชัย จำกัด", logo: "/img/site/rkc.png" },
    { name: "บริษัท เจแปน ออโตเมติก แมชชีน (ไทยแลนด์) จำกัด", logo: "/img/site/japan-auto.jpg" },
  ],
  hrm: [],
  ai: [
    { name: "บริษัท ไทย เคียววะ จีเอ็มบี จำกัด", logo: "/img/site/TKG-logo.png" },
  ],
  consulting: [
    { name: "Future Skill", logo: "/img/site/futureskill.jpg" },
    { name: "กรมพัฒนาฝีมือแรงงาน", logo: "/img/site/develop.jpg" },
    { name: "สถาบันพัฒนาฝีมือแรงงาน1 สมุทรปราการ", logo: "/img/site/develop1.jpg" },
    { name: "มูลนิธิครูดีของแผ่นดิน", logo: "/img/site/bestTeacher.png" },
    { name: "สถาบันพัฒนาบุคลากรดิจิทัล", logo: "/img/site/DiSDA.png" },
    { name: "บริษัท ไทย-ซีโน แมนูแฟคเจอริ่ง จำกัด", logo: "/img/site/TSM-logo.png" },
    { name: "บริษัท แก้วกรุงไทย จำกัด", logo: "/img/site/GTG.png" },
  ],
  others: [
    { name: "บริษัท พ.ศ.ช. ผลิตภัณฑ์อาหาร จำกัด", logo: "/img/site/psch.png" },
    { name: "บริษัท สยามอุตสาหกรรมเทปกาว จำกัด", logo: "/img/site/siat.png" },
    { name: "บริษัท เจแปน ออโตเมติก แมชชีน (ไทยแลนด์) จำกัด", logo: "/img/site/jam.png" },
    { name: "บริษัท ยูโรเซีย ฟู๊ด จำกัด", logo: "/img/site/ursf.png" },
    { name: "บริษัท ฟูจิกิเคน จำกัด", logo: "/img/site/image_2023_01_28T10_28_37_862Z.png" },
    { name: "บริษัท อมาเบลล์ จำกัด", logo: "/img/site/image_2023_01_28T10_28_42_599Z.png" },
    { name: "บริษัท นครดีซี จำกัด", logo: "/img/site/image_2023_01_28T10_32_15_891Z.png" },
    { name: "บริษัท นครดีซี นครศรีธรรมราช จำกัด", logo: "/img/site/image_2023_01_28T10_32_26_456Z.png" },
    { name: "บริษัท ร่วมกำชัย จำกัด", logo: "/img/site/rkc.png" },
  ],
};

export default function SitePage() {
  const [active, setActive] = useState<SectionKey>("qsoft");

  const getQsoftClientsWithTags = () => {
    return clients.qsoft.map((client) => {
      const categories: QsoftSubcategory[] = [];
      (qsoftSubcategories as readonly QsoftSubcategory[]).forEach((cat) => {
        if (clientsByQsoftCategory[cat].some(c => c.name === client.name)) {
          categories.push(cat);
        }
      });
      return {
        ...client,
        categories,
      };
    });
  };

  const displayClients = active === "qsoft" ? getQsoftClientsWithTags() : clients[active];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94], // cubic-bezier for smooth feel
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      },
    },
  };

  const cardVariants = {
    hover: {
      y: -4,
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      transition: {
        duration: 0.2,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="font-kanit bg-gray-50/50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header + Sticky Navbar + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 mb-12 items-start">
          {/* LEFT : Title + Sticky Navbar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-4"
          >
            {/* Title */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image
                  src="/img/best_seller.png"
                  alt="Business Client Groups"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="space-y-2">
                <div className="w-16 h-1 bg-[#0e9aef] rounded-full mb-4 hidden md:block" />
                <h1 className="text-3xl md:text-5xl font-bold text-slate-800 leading-tight">
                  กลุ่มลูกค้าที่ใช้บริการ
                  <span className="text-[#0e9aef]">โปรแกรม</span>
                </h1>
                <p className="text-slate-500 text-lg font-light">
                  Q.Soft, WINSpeed, HRM, AI และผลิตภัณฑ์ชั้นนำอื่น ๆ
                </p>
              </div>
            </div>

            {/* ✅ Sticky Navbar ใต้หัวข้อ */}
            <div className="sticky top-20 mt-15 z-40">
              <div className="inline-flex flex-wrap gap-3">
                {navItems.map((item) => {
                  const isActive = active === item.key;

                  // กำหนดไอคอนสำหรับแต่ละปุ่ม
                  const Icon = () => {
                    switch (item.key) {
                      case 'qsoft': return <Package className="w-4 h-4" />;
                      case 'winspeed': return <Zap className="w-4 h-4" />;
                      case 'hrm': return <Users className="w-4 h-4" />;
                      case 'ai': return <Sparkles className="w-4 h-4" />;
                      case 'consulting': return <Briefcase className="w-4 h-4" />;
                      case 'others': return <Star className="w-4 h-4" />;
                      default: return null;
                    }
                  };

                  return (
                    <button
                      key={item.key}
                      onClick={() => {
                        setActive(item.key);
                        window.scrollTo({ top: 20, behavior: "smooth" });
                      }}
                      className={`
                flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold 
                transition-all duration-300 border-2
                ${isActive
                          ? "bg-[#0e9aef] text-white border-[#0e9aef] shadow-lg shadow-blue-200/50"
                          : "bg-white text-slate-600 border-slate-200 hover:border-[#0e9aef] hover:text-[#0e9aef] hover:shadow-md"
                        }
              `}
                    >
                      <Icon />
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 min-w-[320px] relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50/50 rounded-full -mr-16 -mt-16 transition-transform group-hover:scale-110" />

            <div className="relative z-10 grid grid-cols-2 gap-y-4 gap-x-8">
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-[#0e9aef] font-bold">Total Sites</span>
                <span className="text-2xl font-bold text-slate-800">47</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Q.Soft</span>
                <span className="text-2xl font-bold text-slate-800">17+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">WINSpeed</span>
                <span className="text-2xl font-bold text-slate-800">13+</span>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">AI Solution</span>
                <span className="text-2xl font-bold text-slate-800">1</span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-50 text-[10px] text-slate-400 text-right font-medium tracking-wider">
              LAST UPDATE: {new Date().toLocaleDateString("th-TH")}
            </div>
          </motion.div>
        </div>


        {/* Legend for Q.soft - Animates in */}
        <AnimatePresence>
          {active === "qsoft" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex items-center gap-6 py-4 mb-8 overflow-x-auto whitespace-nowrap border-b border-slate-100"
            >
              <span className="text-xs font-bold text-[#0e9aef] uppercase tracking-widest">ระบบงานหลัก:</span>
              <div className="flex gap-6">
                {qsoftSubcategories.map((subcat) => (
                  <div key={subcat} className="flex items-center gap-2 group cursor-pointer">
                    <Tooltip title={`Q.Soft ${subcat}`}>
                      <div className="w-3 h-3 rounded-full shadow-sm ring-2 ring-white transition-transform group-hover:scale-125" style={{ background: qsoftColors[subcat].dot }} />
                    </Tooltip>
                    <span className="text-xs font-bold text-slate-600 tracking-tight">{subcat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid Container */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8"
          >
            {displayClients.length > 0 ? (
              displayClients.map((company, idx) => (
                <motion.div
                  key={`${active}-${company.name}-${idx}`}
                  variants={itemVariants}
                  className="group flex flex-col items-center"
                >
                  <motion.div
                    className="relative w-full aspect-[4/3] bg-transparent flex items-center justify-center p-10 cursor-pointer overflow-hidden transition-all duration-500 hover:border-blue-100"
                  >
                    {/* Background Detail */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-50/30 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                    {company.logo && (
                      <div className="relative w-full h-full transform transition-transform duration-700 group-hover:scale-110">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </motion.div>

                  <div className="mt-5 px-4 text-center flex flex-col items-center gap-2">
                    {/* Tags / Indicators moved outside */}
                    {active === "qsoft" && "categories" in company && (
                      <div className="flex gap-1.5 mb-1 transition-all duration-300">
                        {(company as any).categories.map((cat: QsoftSubcategory) => (
                          <Tooltip key={cat} title={`Q.Soft ${cat}`}>
                            <div
                              className="w-2.5 h-2.5 rounded-full shadow-sm ring-1 ring-slate-100"
                              style={{ background: qsoftColors[cat].dot }}
                            />
                          </Tooltip>
                        ))}
                      </div>
                    )}
                    <h3 className="text-sm md:text-base font-bold text-slate-700 group-hover:text-[#0e9aef] transition-colors leading-snug">
                      {company.name}
                    </h3>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                className="col-span-full py-24 text-center bg-white rounded-[3rem] border border-dashed border-slate-200"
              >
                <p className="text-slate-400 font-light italic">
                  ไม่มีข้อมูลในหมวดหมู่นี้
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
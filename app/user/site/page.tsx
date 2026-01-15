"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Q.soft", key: "qsoft", subItems: ["MRP", "APS", "WMS", "PM"] },
  { label: "Winspeed", key: "winspeed" },
  { label: "HRM", key: "hrm" },
  { label: "AI", key: "ai" },
  { label: "Consultancy / Training", key: "consulting" },
  { label: "อื่น ๆ", key: "others" },
] as const;

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
    { name: "บริษัท วี.ซี.มีท โปรเซสซิ่ง จำกัด", logo: "/img/site/vcmeat_logo.jpg" },
    { name: "บริษัท โบลแพค จำกัด", logo: "/img/site/blowpack_logo.jpg" },
    { name: "บริษัท สยามบาร์เดอร์ จำกัด", logo: "/img/site/siam-brothers.png" },
    { name: "บริษัท สยามบราเดอร์ เน็ต จำกัด", logo: "/img/site/siam-net.jpg" },
    { name: "บริษัท โตเกียว เคอิโซ (ไทยแลนด์) จำกัด", logo: "/img/site/tokyo-keiso.png" },
    { name: "บริษัท บางชัน เยนเนอร์เรล เอเซมบลี จำกัด", logo: "/img/site/bangna.png" },
    { name: "บริษัท ไมโครไฟเบอร์อุตสาหกรรม จำกัด", logo: "/img/site/microfiber.png" },
    { name: "บริษัท ร่วมกำชัย จำกัด", logo: "/img/site/sai.jpg" },
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
  ],
  others: [
    { name: "บริษัท Other Services One จำกัด", logo: "/img/site/thaiauto_logo.jpg" },
    { name: "บริษัท Other Services Two จำกัด", logo: "/img/site/japan-auto.jpg" },
    { name: "บริษัท Other Services Three จำกัด", logo: "/img/site/dfsk_logo.jpg" },
    { name: "บริษัท Other Services Four จำกัด", logo: "/img/site/apd_logo.jpg" },
    { name: "บริษัท Other Services Five จำกัด", logo: "/img/site/arrow_logo.jpg" },
    { name: "บริษัท Other Services Six จำกัด", logo: "/img/site/jnt_logo.jpg" },
    { name: "บริษัท Other Services Seven จำกัด", logo: "/img/site/npfood_logo.jpg" },
    { name: "บริษัท Other Services Eight จำกัด", logo: "/img/site/northcm_logo.jpg" },
    { name: "บริษัท Other Services Nine จำกัด", logo: "/img/site/tsd-logo.png" },
  ],
};

export default function SitePage() {
  const [active, setActive] = useState<SectionKey>("qsoft");

  const getQsoftClientsWithTags = () => {
    const clientMap = new Map<string, Set<QsoftSubcategory>>();
    
    (qsoftSubcategories as readonly QsoftSubcategory[]).forEach((category) => {
      clientsByQsoftCategory[category].forEach((client) => {
        if (!clientMap.has(client.name)) {
          clientMap.set(client.name, new Set());
        }
        clientMap.get(client.name)!.add(category);
      });
    });

    return Array.from(clientMap.entries()).map(([name, categories]) => ({
      name,
      logo: clients.qsoft.find(c => c.name === name)?.logo,
      categories: Array.from(categories) as QsoftSubcategory[],
    }));
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
    <div className="font-kanit">
      <div style={{ padding: "24px", maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ fontSize: 32, marginBottom: 12, fontWeight: 700 }}>
          กลุ่มลูกค้าที่ใช้บริการโปรแกรม
        </h1>
        <p style={{ marginBottom: 24, color: "#666" }}>
          เลือกเมนูด้านบนเพื่อดูรายชื่อลูกค้าที่ใช้งานระบบของเรา
        </p>

        {/* Navbar */}
        <nav
          style={{
            display: "flex",
            gap: 12,
            alignItems: "flex-start",
            padding: "12px 24px",
            borderBottom: "1px solid #e5e7eb",
            background: "rgba(255,255,255,0.95)",
            position: "sticky",
            top: 0,
            zIndex: 10,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "flex-start" }}>
            {navItems.map((item) => {
              const isActive = active === item.key;
              return (
                <button
                  key={item.key}
                  onClick={() => setActive(item.key)}
                  style={{
                    padding: "8px 16px",
                    borderRadius: 6,
                    fontSize: 14,
                    fontWeight: isActive ? 700 : 500,
                    background: isActive ? "#3b82f6" : "transparent",
                    color: isActive ? "#ffffff" : "#334155",
                    border: isActive ? "none" : "1px solid #e5e7eb",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </nav>

        {/* Legend สำหรับ Q.soft */}
        {active === "qsoft" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              display: "flex",
              gap: 12,
              padding: "16px 24px",
              borderBottom: "1px solid #e5e7eb",
              background: "#f9fafb",
              alignItems: "center",
            }}
          >
            <p style={{ fontSize: 13, color: "#666", margin: 0, fontWeight: 600 }}>
              กรองตามระบบ:
            </p>
            {qsoftSubcategories.map((subcat) => (
              <span
                key={subcat}
                style={{
                  padding: "4px 10px",
                  borderRadius: 4,
                  fontSize: 12,
                  fontWeight: 600,
                  background: qsoftColors[subcat].bg,
                  color: "#ffffff",
                }}
              >
                {subcat}
              </span>
            ))}
          </motion.div>
        )}

        {/* Grid Container with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "24px",
              padding: "24px",
            }}
          >
            {displayClients.length > 0 ? (
              displayClients.map((company, idx) => (
                <motion.div
                  key={`${active}-${company.name}-${idx}`}
                  variants={itemVariants}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <motion.div
                    variants={cardVariants}
                    whileHover="hover"
                    style={{
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
                      padding: "16px",
                      background: "#fff",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "280px",
                      height: "200px",
                      position: "relative",
                    }}
                  >
                    {company.logo && (
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          overflow: "hidden",
                        }}
                      >
                        <Image
                          src={company.logo}
                          alt={company.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                    )}

                    {/* Circle Indicators */}
                    {active === "qsoft" && "categories" in company && (
                      <div
                        style={{
                          position: "absolute",
                          bottom: "12px",
                          right: "12px",
                          display: "flex",
                          gap: "6px",
                          flexWrap: "wrap",
                          justifyContent: "flex-end",
                        }}
                      >
                        {(company as any).categories.map((cat: QsoftSubcategory) => (
                          <motion.div
                            key={cat}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              type: "spring",
                              stiffness: 300,
                              damping: 20,
                              delay: 0.3,
                            }}
                            style={{
                              width: "12px",
                              height: "12px",
                              borderRadius: "50%",
                              background: qsoftColors[cat].dot,
                              boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                            }}
                            title={cat}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>

                  <h3
                    style={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#1f2937",
                      textAlign: "center",
                      maxWidth: "280px",
                    }}
                  >
                    {company.name}
                  </h3>
                </motion.div>
              ))
            ) : (
              <motion.div
                variants={itemVariants}
                style={{
                  gridColumn: "1 / -1",
                  textAlign: "center",
                  padding: "40px",
                }}
              >
                <p style={{ color: "#999", fontSize: 16 }}>
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
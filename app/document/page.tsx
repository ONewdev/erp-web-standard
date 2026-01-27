"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart3,
  FileDown,
  FileText,
  ImageOff,
  Files,
  Cloud,
  ArrowUpCircle,
  FileSearch,
  BookOpen,
  Users,
  Layers,
  ChevronRight,
  Download,
  Calendar
} from "lucide-react";
import FadeInSection from "../components/FadeInSection";

// Fix for TypeScript error with motion components
const MotionTr = motion.tr as any;
const MotionDiv = motion.div as any;

interface Document {
  name: string;
  th?: string;
  en?: string;
  thUrl?: string;
  enUrl?: string;
  cn?: string;
  cnUrl?: string;
  kr?: string;
  krUrl?: string;
  jp?: string;
  jpUrl?: string;
  created: string;
  category?: string;
}

interface DocumentSection {
  title: string;
  items: Document[];
}

const documents: DocumentSection[] = [
  {
    title: "Documents",
    items: [
      { name: "Q.Soft MRP", th: "ดาวน์โหลด", en: "ดาวน์โหลด", thUrl: "/doc/Q-Soft_MRP_THV3.pdf", enUrl: "/doc/Q-Soft_MRP_ENGV3.pdf", created: "29.07.2025 10:19" },
      { name: "Q.Soft APS", th: "ดาวน์โหลด", en: "-", thUrl: "/doc/APS_new.pdf", created: "14.08.2014 02:51" },
      { name: "Q.Soft WMS", th: "-", en: "-", created: "14.08.2014 02:51" },
      { name: "Q.Soft PM", th: "ดาวน์โหลด", en: "-", thUrl: "/doc/Q.Soft_PM_V3Brochue(thai).pdf", created: "29.07.2025 10:19" },
      { name: "Q.Soft POS", th: "ดาวน์โหลด", en: "-", thUrl: "/doc/Q_Soft_POS_V3Brochue(thai)600305.pdf", created: "29.07.2025 10:19" },
    ],
  },
  {
    title: "Brochure",
    items: [
      { name: "Power BI Advanced", th: "ดาวน์โหลด", thUrl: "/doc/CoursePowerBI-Advanced.jpg", en: "-", cn: "-", kr: "-", jp: "-", created: "30.01.2023 10:01" },
      { name: "Power BI Basic", th: "ดาวน์โหลด", thUrl: "/doc/CoursePowerBI-Basic.jpg", en: "-", cn: "-", kr: "-", jp: "-", created: "30.01.2023 10:01" },
      { name: "Smart Soft SCM", th: "ดาวน์โหลด", thUrl: "/doc/Smart_Soft_SCM_Brochure650610.pdf", en: "-", cn: "-", kr: "-", jp: "-", created: "05.08.2020 15:25" },
      { name: "Q.Soft SCM", th: "ดาวน์โหลด", thUrl: "/doc/Q_Soft_SCM_Brochure6901.pdf", en: "ดาวน์โหลด", enUrl: "/doc/Q_Soft_SCM_Brochure(Eng)671008.pdf", cn: "ดาวน์โหลด", cnUrl: "/doc/CN_Q_Soft_SCM_Brochure671008.pdf", kr: "ดาวน์โหลด", krUrl: "/doc/KR_Q_Soft_SCM_Brochure671008.pdf", jp: "ดาวน์โหลด", jpUrl: "/doc/JP_Q_Soft_SCM_Brochure671008.pdf", created: "06.12.2024 12:56" },
      { name: "Q.Soft SO Web Application", th: "ดาวน์โหลด", thUrl: "/doc/SOApp.jpg", en: "-", cn: "-", kr: "-", jp: "-", created: "05.06.2020 02:51" },
      { name: "Q.Soft WMS (Warehouse Management System)", th: "ดาวน์โหลด", thUrl: "/doc/Q_Soft_MFG-WMS_Brochue(thai).pdf", en: "ดาวน์โหลด", enUrl: "/doc/Q_Soft_WMS_Prof+Brochue(Eng)V1.pdf", cn: "-", kr: "-", jp: "-", created: "01.08.2025 10:20" },
      { name: "Q.Soft Smart Tag", th: "ดาวน์โหลด", thUrl: "/doc/Medicine_Pay_Out_System(SmartTag).pdf", en: "-", cn: "-", kr: "-", jp: "-", created: "14.08.2014 02:51" },
      { name: "Q.Soft CM (Container Management)", th: "ดาวน์โหลด", thUrl: "/doc/Q.soft_CM.pdf", en: "-", cn: "-", kr: "-", jp: "-", created: "14.08.2014 02:51" },
      { name: "Q.Soft APS (Brochure)", th: "ดาวน์โหลด", thUrl: "/doc/Q_Soft_APS_Brochue(thai).pdf", en: "-", cn: "-", kr: "-", jp: "-", created: "01.08.2025 10:20" },
      { name: "Q.Soft WMS (Service)", th: "ดาวน์โหลด", thUrl: "/doc/Q_Soft_Ser-WMS_Brochue(thai).pdf", en: "-", cn: "-", kr: "-", jp: "-", created: "01.08.2025 10:20" },
      { name: "Q.Soft PM (Version 1.01)", th: "ดาวน์โหลด", thUrl: "/doc/Q.Soft_PM_V1Brochue(thai).pdf", en: "-", cn: "-", kr: "-", jp: "-", created: "01.08.2025 10:20" },
      { name: "Q.Soft SMS (Sport Management System)", th: "ดาวน์โหลด", thUrl: "/doc/Q_Soft_SMS_Brochue.pdf", en: "-", cn: "-", kr: "-", jp: "-", created: "01.08.2025 10:20" },
      { name: "Q.soft ElectricShield", th: "ดาวน์โหลด", thUrl: "/doc/QSoftElectricShield.pdf", en: "-", cn: "-", kr: "-", jp: "-", created: "14.08.2014 02:51" },
      { name: "DPS สำหรับโรงพยาบาล", th: "ดาวน์โหลด", thUrl: "/doc/DPS_1.pdf", en: "-", cn: "-", kr: "-", jp: "-", created: "01.08.2025 10:20" },
    ],
  },
  {
    title: "WINSpeed",
    items: [
      { name: "WINSpeed", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/winspeed_updated_0421.pdf", en: "-", created: "09.04.2021 11:51" },
      { name: "การสำรองข้อมูล WINSpeed", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/backup_WINSpeed.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "การคีย์ใบเบิก ZZ, NW, WR", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/CC.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "การคำนวณต้นทุน", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/COST.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "ลบเอกสารที่ลบไม่ได้", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/DELDOC.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "การทำแบบฟอร์ม WINSpeed", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/form_winspeed_myaccount.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "การโพส GL", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/GL.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "การคีย์ ส่งคืน, ลดหนี้ (GR)", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/GR.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "การกำหนด Lot และ Serial", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/IC.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "ทำเช็ค 1 ใบ จ่ายชำระหลาย Invoice", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/Invoice.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "การขายเชื่อ", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/IVAG.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "Landed Cost", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/Landed-Cost.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "วิธีลง License", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/License_HRMI.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "การซื้อเชื่อ PO", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/PO.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "การโอนข้อมูลแบบ Manual เอกสาร PO, SO จากโปรแกรม WINSpeed เข้า Q.Soft ผ่าน API", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/PO_SO_Manual_WINSpeed_Q.Soft.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "การจ่ายชำระหนี้ PV", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/PV.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "การรับชำระหนี้ RE", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/RE.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "การรขายเชื่อ SO", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/WINSpeed/SO.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "ปรับปรุงสต็อกการ์ด เมื่อ TB ต้นทุนสินค้าถูกต้องแล้ว", thUrl: "/doc/WINSpeed/Stock_TB.pdf", th: "ดาวน์โหลด", en: "-", created: "29.07.2025 10:19" },
      { name: "วิธีใส่ License ใหม่", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed_Delete_License.pdf", en: "-", created: "14.08.2014 02:51" },
    ],
  },
  {
    title: "HRMI",
    items: [
      { name: "HRMI", th: "ดาวน์โหลด", thUrl: "/doc/HRMI/hrmi_updated_0421.pdf", en: "-", created: "09.04.2021 11:51" },
      { name: "แก้ปัญหายอดรวมใน Pay Slip ไม่แสดง", th: "ดาวน์โหลด", thUrl: "/doc/HRMI/HR_HRMi.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "คู่มือการใช้งานโปรแกรม HRMI", th: "ดาวน์โหลด", thUrl: "/doc/HRMI/Manual_HRMI_Payroll.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "คู่มือการใช้งานโปรแกรม HRMI เพื่อทำเงินเดือน", th: "ดาวน์โหลด", thUrl: "/doc/HRMI/Manual_HRMI_Payroll_Full.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "คู่มือการ Set Email Alert", th: "ดาวน์โหลด", thUrl: "/doc/HRMI/SetEmailAlertHRMi.pdf", en: "-", created: "29.07.2025 10:19" },
    ],
  },
  {
    title: "CRM",
    items: [
      { name: "CRM", th: "ดาวน์โหลด", thUrl: "/doc/CRM/crm_updated_0421.pdf", en: "-", created: "09.04.2021 11:51" },
    ],
  },
  {
    title: "Support & Other",
    items: [
      { name: "SpecServer-Cloud (QSoft-WINSpeed)", th: "ดาวน์โหลด", thUrl: "/doc/WINSpeed/SpecServer-Cloud(QSoft-WINSpeed).pdf", en: "-", created: "23.09.2022 14:55" },
      { name: "LeanManufacturing (WhitePaper)", th: "ดาวน์โหลด", thUrl: "/doc/LeanManufacturing(WhitePaper).pdf", en: "-", created: "14.08.2014 02:51" },
      { name: "SQL Server Express 2005", th: "ดาวน์โหลด", thUrl: "/doc/setupSQL2005.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "SQL Server Express 2008 R2", th: "ดาวน์โหลด", thUrl: "/doc/setupSQL2008R2.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "SQL Server Express 2012", th: "ดาวน์โหลด", thUrl: "/doc/setupSQL2012.pdf", en: "-", created: "29.07.2025 10:19" },
      { name: "รายละเอียดแผนงานวางระบบ ISO9001-2008", thUrl: "/doc/ISO9001-2008Brochure.pdf", th: "ดาวน์โหลด", en: "-", created: "29.07.2025 10:19" },
    ],
  },
];

export default function DocumentPage() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const showExtraLanguages = activeTab === "Brochure" || activeTab === "All";

  // Compute items to display
  const displayData = activeTab === "All" ? documents : [documents.find((doc) => doc.title === activeTab)].filter(Boolean) as DocumentSection[];

  // Scroll to top of list when category changes
  useEffect(() => {
    const element = document.getElementById('doc-list-start');
    if (element) {
      const yOffset = -150;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [activeTab]);

  return (
    <div className="font-kanit min-h-screen bg-gray-50 pb-12">
      {/* Hero Header Section */}
      <FadeInSection>
        <div className="bg-white border-b overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--brand-blue)]/5 -skew-x-12 transform origin-top-right"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Section - Image & Title */}
              <div className="flex flex-col md:flex-row gap-8 md:gap-10 items-center">
                <div className="relative group flex-shrink-0">
                  <div className="absolute inset-0 bg-[var(--brand-blue)]/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
                  <div className="relative w-40 h-40 md:w-48 md:h-48 bg-slate-50 rounded-[2.5rem] overflow-hidden flex items-center justify-center border border-slate-100 shadow-sm transition-transform duration-500 group-hover:-rotate-3">
                    <Image
                      src="/img/download_from_cloud.png"
                      alt="Download"
                      width={140}
                      height={140}
                      className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[var(--brand-blue)] rounded-full text-xs font-bold mb-4">
                    <BookOpen className="w-3 h-3" /> RESOURCES
                  </div>
                  <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Document <span style={{ color: "var(--brand-blue)" }}>Center</span>
                  </h1>
                  <p className="text-base md:text-lg text-slate-500 font-medium max-w-md leading-relaxed">
                    ศูนย์รวมคู่มือการใช้งานและโบรชัวร์ผลิตภัณฑ์ BCI สำหรับผู้ใช้งานและองค์กร
                  </p>
                </div>
              </div>

              {/* Right Section - Stats Card & Info Overlay */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div className="bg-white p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group">
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="p-2 bg-blue-50 rounded-xl">
                        <BarChart3 className="w-5 h-5 text-[var(--brand-blue)]" />
                      </div>
                      <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Overview</span>
                    </div>

                    <div className="space-y-4">
                      {[
                        { label: "ไฟล์ทั้งหมด", count: 39, color: "#0e9aef", icon: FileDown },
                        { label: "เอกสารคู่มือ", count: 11, color: "#10b981", icon: FileText },
                        { label: "โบรชัวร์", count: 23, color: "#8b5cf6", icon: ImageOff },
                      ].map((stat) => (
                        <div key={stat.label} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="p-1.5 rounded-lg bg-slate-50">
                              <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                            </div>
                            <span className="text-sm font-semibold text-slate-600">{stat.label}</span>
                          </div>
                          <span className="text-base md:text-lg font-bold text-slate-800">{stat.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-[var(--brand-blue)] p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] shadow-xl shadow-blue-200/50 text-white flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                  <div className="relative z-10 flex items-center gap-2 mb-4 text-xs font-bold opacity-80 italic">
                    <ArrowUpCircle className="w-4 h-4" /> Recommended
                  </div>

                  <div className="relative z-10 mb-6">
                    <p className="text-xs md:text-sm opacity-90 leading-relaxed font-light italic">
                      "สำหรับการดาวน์โหลดแบบพิมพ์ จำเป็นต้องติดตั้ง Adobe Reader 5.0.5 ขึ้นไป"
                    </p>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/20 text-[10px] tracking-widest uppercase opacity-60">
                    Last Updated: {new Date().toLocaleDateString("th-TH")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FadeInSection>

      {/* Content Section */}
      <div id="doc-list-start" className="max-w-7xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <FadeInSection delay={0.2}>
          <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">

            {/* Tabs - Responsive Scrollable Container */}
            <div className="border-b bg-white/80 backdrop-blur sticky top-0 z-30">
              <div className="overflow-x-auto scrollbar-hide">
                <div className="flex p-3 gap-2 min-w-max">
                  <button
                    onClick={(e) => {
                      setActiveTab("All");
                      e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                    }}
                    className={`px-5 md:px-7 py-2.5 md:py-3.5 rounded-xl md:rounded-2xl font-bold transition-all text-xs md:text-sm flex items-center gap-2 ${activeTab === "All"
                      ? "bg-[var(--brand-blue)] text-white shadow-lg shadow-blue-200"
                      : "text-slate-500 hover:text-[var(--brand-blue)] hover:bg-blue-50"
                      }`}
                  >
                    <Layers className="w-4 h-4" />
                    All
                  </button>

                  {documents.map((section) => (
                    <button
                      key={section.title}
                      onClick={(e) => {
                        setActiveTab(section.title);
                        e.currentTarget.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
                      }}
                      className={`px-5 md:px-7 py-2.5 md:py-3.5 rounded-xl md:rounded-2xl font-bold transition-all text-xs md:text-sm flex items-center gap-2 ${activeTab === section.title
                        ? "bg-[var(--brand-blue)] text-white shadow-lg shadow-blue-200"
                        : "text-slate-500 hover:text-[var(--brand-blue)] hover:bg-blue-50"
                        }`}
                    >
                      {section.title === "Documents" && <FileSearch className="w-4 h-4" />}
                      {section.title === "Brochure" && <ImageOff className="w-4 h-4" />}
                      {section.title === "WINSpeed" && <ArrowUpCircle className="w-4 h-4" />}
                      {section.title === "HRMI" && <Users className="w-4 h-4" />}
                      {section.title === "CRM" && <BarChart3 className="w-4 h-4" />}
                      {section.title === "Support & Other" && <Files className="w-4 h-4" />}
                      {section.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Info Message */}
            <div className="bg-[var(--brand-blue)]/5 px-4 md:px-6 py-4 flex items-start md:items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm shrink-0">
                <BookOpen className="w-4 h-4 text-[var(--brand-blue)]" />
              </div>
              <p className="text-xs md:text-sm text-slate-600">
                <span className="font-bold text-slate-800">Pro Tip:</span> ไฟล์ PDF สามารถเปิดอ่านจากเครื่องหรือโทรศัพท์ได้ทันที หากมีปัญหาให้ติดตั้ง Adobe Acrobat Reader
              </p>
            </div>

            {/* Table Area - Responsive Grid for Mobile, Table for Tablet/Desktop */}
            <div>
              {/* Desktop Table View */}
              <div className="hidden md:block overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                      <th className="px-8 py-5 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">File Name</th>
                      <th className="px-6 py-5 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">TH</th>
                      <th className="px-6 py-5 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">EN</th>
                      {showExtraLanguages && (
                        <>
                          <th className="px-6 py-5 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">CN</th>
                          <th className="px-6 py-5 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">KR</th>
                          <th className="px-6 py-5 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">JP</th>
                        </>
                      )}
                      <th className="px-8 py-5 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">Release</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {displayData.map((section) => (
                      <React.Fragment key={section.title}>
                        {activeTab === "All" && (
                          <tr className="bg-slate-50/50">
                            <td colSpan={showExtraLanguages ? 7 : 4} className="px-8 py-3">
                              <div className="flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                                {section.title}
                              </div>
                            </td>
                          </tr>
                        )}
                        {section.items.map((item, index) => (
                          <MotionTr
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            key={`${item.name}-${index}`}
                            className="hover:bg-slate-50 transition-colors group"
                          >
                            <td className="px-8 py-5">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-[var(--brand-blue)]">
                                  <FileText className="w-4 h-4" />
                                </div>
                                <span className="text-slate-700 font-semibold text-sm">{item.name}</span>
                              </div>
                            </td>
                            {/* TH */}
                            <td className="px-4 py-5 text-center text-sm">
                              {item.thUrl ? (
                                <Link href={item.thUrl} target="_blank" className="text-[var(--brand-blue)] font-bold hover:underline">Download</Link>
                              ) : <span className="text-slate-300">-</span>}
                            </td>
                            {/* EN */}
                            <td className="px-4 py-5 text-center text-sm">
                              {item.enUrl ? (
                                <Link href={item.enUrl} target="_blank" className="text-purple-600 font-bold hover:underline">Download</Link>
                              ) : <span className="text-slate-300">-</span>}
                            </td>
                            {showExtraLanguages && (
                              <>
                                <td className="px-4 py-5 text-center text-sm">{item.cnUrl ? <Link href={item.cnUrl} target="_blank" className="text-red-500 font-bold hover:underline">CN</Link> : <span className="text-slate-300">-</span>}</td>
                                <td className="px-4 py-5 text-center text-sm">{item.krUrl ? <Link href={item.krUrl} target="_blank" className="text-green-600 font-bold hover:underline">KR</Link> : <span className="text-slate-300">-</span>}</td>
                                <td className="px-4 py-5 text-center text-sm">{item.jpUrl ? <Link href={item.jpUrl} target="_blank" className="text-amber-500 font-bold hover:underline">JP</Link> : <span className="text-slate-300">-</span>}</td>
                              </>
                            )}
                            <td className="px-8 py-5 text-right">
                              <span className="text-[10px] text-slate-400 font-mono">{item.created}</span>
                            </td>
                          </MotionTr>
                        ))}
                      </React.Fragment>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile List/Card View */}
              <div className="md:hidden divide-y divide-slate-100">
                {displayData.map((section) => (
                  <div key={section.title}>
                    {activeTab === "All" && (
                      <div className="bg-slate-50 px-4 py-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        {section.title}
                      </div>
                    )}
                    <div className="divide-y divide-slate-100">
                      {section.items.map((item, idx) => (
                        <div key={idx} className="p-4 bg-white">
                          <div className="flex items-start justify-between mb-4">
                            <div className="flex items-start gap-3">
                              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-[var(--brand-blue)] shrink-0">
                                <FileText className="w-5 h-5" />
                              </div>
                              <div>
                                <h4 className="font-bold text-slate-800 text-sm leading-tight mb-1">{item.name}</h4>
                                <div className="flex items-center gap-1.5 text-[10px] text-slate-400">
                                  <Calendar className="w-3 h-3" />
                                  <span>{item.created}</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {item.thUrl && (
                              <a href={item.thUrl} target="_blank" className="flex-1 min-w-[100px] flex items-center justify-center gap-2 py-2.5 bg-blue-50 text-[var(--brand-blue)] rounded-xl text-xs font-bold active:bg-blue-600 active:text-white transition-colors">
                                <Download className="w-3 h-3" /> TH
                              </a>
                            )}
                            {item.enUrl && (
                              <a href={item.enUrl} target="_blank" className="flex-1 min-w-[100px] flex items-center justify-center gap-2 py-2.5 bg-purple-50 text-purple-600 rounded-xl text-xs font-bold active:bg-purple-600 active:text-white transition-colors">
                                <Download className="w-3 h-3" /> EN
                              </a>
                            )}
                            {item.cnUrl && (
                              <a href={item.cnUrl} target="_blank" className="flex-1 min-w-[80px] flex items-center justify-center gap-2 py-2.5 bg-red-50 text-red-600 rounded-xl text-xs font-bold">
                                CN
                              </a>
                            )}
                            {item.krUrl && (
                              <a href={item.krUrl} target="_blank" className="flex-1 min-w-[80px] flex items-center justify-center gap-2 py-2.5 bg-green-50 text-green-600 rounded-xl text-xs font-bold">
                                KR
                              </a>
                            )}
                            {item.jpUrl && (
                              <a href={item.jpUrl} target="_blank" className="flex-1 min-w-[80px] flex items-center justify-center gap-2 py-2.5 bg-amber-50 text-amber-600 rounded-xl text-xs font-bold">
                                JP
                              </a>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
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
} from "lucide-react";
import FadeInSection from "../components/FadeInSection";


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
  const [activeTab, setActiveTab] = useState<string>("Documents");

  const isBrochure = activeTab === "Brochure";

  return (
    <div className="font-kanit min-h-screen bg-gray-50">
      {/* Hero Header Section - Clean & White like other pages */}
      <FadeInSection>
        <div className="bg-white border-b overflow-hidden relative">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#0e9aef]/5 -skew-x-12 transform origin-top-right"></div>

          <div className="max-w-7xl mx-auto px-6 py-12 md:py-24 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left Section - Image & Title */}
              <div className="flex flex-col md:flex-row gap-10 items-center">
                <div className="relative group flex-shrink-0">
                  <div className="absolute inset-0 bg-[#0e9aef]/20 blur-3xl rounded-full scale-75 group-hover:scale-100 transition-transform duration-700"></div>
                  <div className="relative w-48 h-48 bg-slate-50 rounded-[2.5rem] overflow-hidden flex items-center justify-center border border-slate-100 shadow-sm transition-transform duration-500 group-hover:-rotate-3">
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-[#0e9aef] rounded-full text-xs font-bold mb-4">
                    <BookOpen className="w-3 h-3" /> RESOURCES
                  </div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                    Document <span style={{ color: "#0e9aef" }}>Center</span>
                  </h1>
                  <p className="text-lg text-slate-500 font-medium max-w-md leading-relaxed">
                    ศูนย์รวมคู่มือการใช้งานและโบรชัวร์ผลิตภัณฑ์ BCI สำหรับผู้ใช้งานและองค์กร
                  </p>
                </div>
              </div>

              {/* Right Section - Stats Card & Info Overlay */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 h-full">
                <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-xl shadow-slate-200/40 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-full -mr-12 -mt-12 transition-transform group-hover:scale-110"></div>

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="p-2.5 bg-blue-50 rounded-xl">
                        <BarChart3 className="w-5 h-5 text-[#0e9aef]" />
                      </div>
                      <span className="text-sm font-bold text-slate-400 tracking-widest uppercase">Overview</span>
                    </div>

                    <div className="space-y-5">
                      {[
                        { label: "ไฟล์ทั้งหมด", count: 39, color: "#0e9aef", icon: FileDown },
                        { label: "เอกสารคู่มือ", count: 11, color: "#10b981", icon: FileText },
                        { label: "โบรชัวร์", count: 23, color: "#8b5cf6", icon: ImageOff },
                      ].map((stat) => (
                        <div key={stat.label} className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`p-1.5 rounded-lg bg-slate-50`}>
                              <stat.icon className="w-4 h-4" style={{ color: stat.color }} />
                            </div>
                            <span className="text-sm font-semibold text-slate-600">{stat.label}</span>
                          </div>
                          <span className="text-lg font-bold text-slate-800">{stat.count}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-[#0e9aef] p-8 rounded-[2.5rem] shadow-xl shadow-blue-200/50 text-white flex flex-col justify-between relative overflow-hidden group">
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                  <div className="relative z-10 flex items-center gap-2 mb-6 text-sm font-bold opacity-80 italic">
                    <ArrowUpCircle className="w-4 h-4" /> Recommended
                  </div>

                  <div className="relative z-10 mb-8">
                    <p className="text-sm opacity-90 leading-relaxed font-light italic">
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
      <FadeInSection delay={0.2}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="bg-white rounded-3xl shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100">
            {/* Tabs - Premium Horizontal Scroll */}
            <div className="border-b border-slate-100 bg-slate-50/50 p-2">
              <div className="flex flex-wrap gap-2">
                {documents.map((section) => (
                  <button
                    key={section.title}
                    onClick={() => setActiveTab(section.title)}
                    className={`px-6 py-3 rounded-2xl font-bold transition-all text-sm flex items-center gap-2 ${activeTab === section.title
                      ? "bg-white text-[#0e9aef] shadow-sm border border-slate-100"
                      : "text-slate-500 hover:text-slate-800 hover:bg-white/50"
                      }`}
                  >
                    {section.title === "Documents" && <FileSearch className="w-4 h-4" />}
                    {section.title === "Brochure" && <ImageOff className="w-4 h-4" />}
                    {section.title === "WINSpeed" && <ArrowUpCircle className="w-4 h-4" />}
                    {section.title === "HRMI" && <Users className="w-4 h-4 text-orange-500" />}
                    {section.title === "CRM" && <BarChart3 className="w-4 h-4 text-green-500" />}
                    {section.title === "Support & Other" && <Files className="w-4 h-4 text-purple-500" />}
                    {section.title}
                  </button>
                ))}
              </div>
            </div>

            {/* Info Message */}
            <div className="bg-[#0e9aef]/5 px-6 py-4 flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg shadow-sm">
                <BookOpen className="w-4 h-4 text-[#0e9aef]" />
              </div>
              <p className="text-sm text-slate-600">
                <span className="font-bold text-slate-800">Pro Tip:</span> ไฟล์ PDF สามารถเปิดอ่านผ่าน Web Browser ได้ทันทีโดยไม่ต้องติดตั้งซอฟต์แวร์เพิ่มเติม
              </p>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-100">
                    <th className="px-8 py-5 text-left text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {activeTab} Name
                    </th>
                    <th className="px-6 py-5 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">TH</th>
                    <th className="px-6 py-5 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">EN</th>
                    {isBrochure && (
                      <>
                        <th className="px-6 py-5 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">CN</th>
                        <th className="px-6 py-5 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">KR</th>
                        <th className="px-6 py-5 text-center text-xs font-bold text-slate-400 uppercase tracking-wider">JP</th>
                      </>
                    )}
                    <th className="px-8 py-5 text-right text-xs font-bold text-slate-400 uppercase tracking-wider">
                      Release Date
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {documents
                    .find((doc) => doc.title === activeTab)
                    ?.items.map((item, index) => (
                      <motion.tr
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.05 }}
                        key={index}
                        className="hover:bg-slate-50/50 transition-colors group"
                      >
                        <td className="px-8 py-5">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-[#0e9aef]/10 flex items-center justify-center text-[#0e9aef] group-hover:scale-110 transition-transform">
                              <FileText className="w-4 h-4" />
                            </div>
                            <span className="text-slate-700 font-semibold group-hover:text-[#0e9aef] transition-colors">{item.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-5 text-center">
                          {item.thUrl ? (
                            <a
                              href={item.thUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-bold hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                            >
                              Download
                            </a>
                          ) : (
                            <span className="text-slate-300 text-xs">N/A</span>
                          )}
                        </td>
                        <td className="px-6 py-5 text-center">
                          {item.enUrl ? (
                            <a
                              href={item.enUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center px-4 py-1.5 bg-purple-50 text-purple-600 rounded-full text-xs font-bold hover:bg-purple-600 hover:text-white transition-all shadow-sm"
                            >
                              Download
                            </a>
                          ) : (
                            <span className="text-slate-300 text-xs">N/A</span>
                          )}
                        </td>
                        {isBrochure && (
                          <>
                            {[
                              { url: item.cnUrl, text: item.cn, lang: "cn" },
                              { url: item.krUrl, text: item.kr, lang: "kr" },
                              { url: item.jpUrl, text: item.jp, lang: "jp" },
                            ].map((langData, idx) => {
                              const colors: Record<string, string> = {
                                cn: "bg-red-50 text-red-600 hover:bg-red-600",
                                kr: "bg-green-50 text-green-600 hover:bg-green-600",
                                jp: "bg-yellow-50 text-yellow-600 hover:bg-yellow-600"
                              };
                              return (
                                <td key={idx} className="px-6 py-5 text-center">
                                  {langData.url ? (
                                    <a
                                      href={langData.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className={`inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-bold hover:text-white transition-all shadow-sm ${colors[langData.lang]}`}
                                    >
                                      Download
                                    </a>
                                  ) : (
                                    <span className="text-slate-300 text-xs">N/A</span>
                                  )}
                                </td>
                              );
                            })}
                          </>
                        )}
                        <td className="px-8 py-5 text-right">
                          <span className="text-xs font-medium text-slate-400 font-mono">{item.created}</span>
                        </td>
                      </motion.tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </FadeInSection>
    </div>
  );
}
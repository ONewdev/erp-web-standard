"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";


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
      { name: "Q.Soft MRP", th: "ดาวน์โหลด", en: "ดาวน์โหลด",  thUrl: "/doc/Q-Soft_MRP_THV3.pdf", enUrl: "/doc/Q-Soft_MRP_ENGV3.pdf",created: "29.07.2025 10:19" },
      { name: "Q.Soft APS", th: "ดาวน์โหลด", en: "-", thUrl: "/doc/APS_new.pdf", created: "14.08.2014 02:51" },
      { name: "Q.Soft WMS", th: "-", en: "-", created: "14.08.2014 02:51" },
      { name: "Q.Soft PM", th: "ดาวน์โหลด", en: "-",  thUrl: "/doc/Q.Soft_PM_V3Brochue(thai).pdf", created: "29.07.2025 10:19" },
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
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← กลับไปหน้าหลัก
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Left Section - Image & Title */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="relative w-full h-48 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src="/img/download_from_cloud.png"
                    alt="Download"
                    fill
                    className="object-contain p-4"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  Documents Download Center
                </h1>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">
                  คู่มือการใช้งานโปรแกรม Q.Soft
                </h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <strong className="text-blue-900 block mb-3">
                    คำแนะนำในการดาวน์โหลดแบบพิมพ์
                  </strong>
                  <ul className="text-sm text-blue-800 space-y-2">
                    <li>• สำหรับผู้ที่จะทำการดาวน์โหลดแบบพิมพ์ จำเป็นจะต้องทำการติดตั้งโปรแกรม Adobe Reader ลงในเครื่องคอมพิวเตอร์ก่อน</li>
                    <li>• ขอแนะนำให้ใช้ Adobe Reader เวอร์ชั่น 5.0.5 ขึ้นไป</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Middle Section - Stats */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6">
                    <span className="mr-2">📊</span>สถิติไฟล์
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">39</span>
                      <span className="text-gray-700">ไฟล์ทั้งหมด</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">11</span>
                      <span className="text-gray-700">เอกสาร</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-purple-600">23</span>
                      <span className="text-gray-700">โบรชัวร์</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-orange-600">5</span>
                      <span className="text-gray-700">เอกสารอื่น</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Status */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-lg p-6 h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6">
                    <span className="mr-2">📶</span>สถานะไฟล์
                  </h3>
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl font-bold text-green-600">⬆️</span>
                    <div>
                      <p className="text-xl font-bold text-gray-900">ปกติ</p>
                      <p className="text-sm text-gray-600">พร้อมใช้งาน</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">
                    อัปเดตล่าสุด: 14.08.2014 02:51
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="border-b border-gray-200 flex flex-wrap">
            {documents.map((section) => (
              <button
                key={section.title}
                onClick={() => setActiveTab(section.title)}
                className={`px-6 py-4 font-semibold border-b-2 transition text-sm sm:text-base ${activeTab === section.title
                    ? "border-blue-600 text-blue-600 bg-blue-50"
                    : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
              >
                {section.title}
              </button>
            ))}
          </div>

          {/* Info Message */}
          <div className="bg-blue-50 border-b border-blue-200 px-6 py-4">
            <p className="text-sm text-blue-900">
              <span className="font-semibold"><span className="mr-2">💡</span>ข้อมูล:</span> หากไม่ได้ติดตั้งโปรแกรมอ่านไฟล์ PDF สามารถเปิดอ่านผ่าน Web Browser ได้เช่นกัน
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-100 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">
                    {isBrochure ? (
                      <>
                        <span className="mr-2">📋</span>Brochure
                      </>
                    ) : (
                      <>
                        <span className="mr-2">📄</span>{activeTab}
                      </>
                    )}
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">
                    <span className="bg-blue-200 px-2 py-1 rounded text-xs font-mono">th</span>
                  </th>
                  <th className="px-6 py-4 text-center font-semibold text-gray-900">
                    <span className="bg-purple-200 px-2 py-1 rounded text-xs font-mono">en</span>
                  </th>
                  {isBrochure && (
                    <>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">
                        <span className="bg-red-200 px-2 py-1 rounded text-xs font-mono">cn</span>
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">
                        <span className="bg-green-200 px-2 py-1 rounded text-xs font-mono">kr</span>
                      </th>
                      <th className="px-6 py-4 text-center font-semibold text-gray-900">
                        <span className="bg-yellow-200 px-2 py-1 rounded text-xs font-mono">jp</span>
                      </th>
                    </>
                  )}
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">
                    <span className="mr-2">📅</span>วันที่
                  </th>
                </tr>
              </thead>
              <tbody>
                {documents
                  .find((doc) => doc.title === activeTab)
                  ?.items.map((item, index) => (
                    <tr
                      key={index}
                      className={`border-b border-gray-200 hover:bg-blue-50 transition ${index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        }`}
                    >
                      <td className="px-6 py-4 text-gray-900 font-medium">
                        {item.name}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.thUrl ? (
                          <a
                            href={item.thUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
                          >
                            {item.th}
                          </a>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-6 py-4 text-center">
                        {item.enUrl ? (
                          <a
                            href={item.enUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
                          >
                            {item.en}
                          </a>
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      {isBrochure && (
                        <>
                          <td className="px-6 py-4 text-center">
                            {item.cnUrl ? (
                              <a
                                href={item.cnUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
                              >
                                {item.cn}
                              </a>
                            ) : (
                              <span className="text-gray-400">{item.cn || "-"}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {item.krUrl ? (
                              <a
                                href={item.krUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
                              >
                                {item.kr}
                              </a>
                            ) : (
                              <span className="text-gray-400">{item.kr || "-"}</span>
                            )}
                          </td>
                          <td className="px-6 py-4 text-center">
                            {item.jpUrl ? (
                              <a
                                href={item.jpUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 hover:underline font-semibold"
                              >
                                {item.jp}
                              </a>
                            ) : (
                              <span className="text-gray-400">{item.jp || "-"}</span>
                            )}
                          </td>
                        </>
                      )}
                      <td className="px-6 py-4 text-gray-600 text-xs font-mono">
                        {item.created}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Notice */}
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
          <div className="text-center">
            <p className="text-gray-800 mb-2">
              <strong><span className="mr-2">📞</span>สำหรับข้อมูลเพิ่มเติม</strong>
            </p>
            <p className="text-blue-600 font-semibold">
              โปรดติดต่อเราได้ที่ <a href="mailto:contact@bci.co.th" className="hover:underline">contact@bci.co.th</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
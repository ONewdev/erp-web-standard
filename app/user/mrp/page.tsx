"use client";

import Image from "next/image";
import Link from "next/link";

export default function PageMRP() {
  return (
    <div className="font-kanit min-h-screen bg-gradient-to-b from-green-400 to-white">
      {/* ===== Breadcrumb / Navigation ===== */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <Link href="/" className="text-blue-600 hover:text-blue-700">
            ← กลับไปหน้าหลัก
          </Link>
        </div>
      </div>

      {/* ===== Main Content ===== */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ===== Left Sidebar ===== */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="border-b border-gray-200 p-6">
                <h5 className="text-xl font-bold text-gray-800">Q.Soft MRP</h5>
              </div>
              <div className="relative h-48 mb-4">
                <Image
                  src="/img/feature/qsoft_mrp_big.png"
                  alt="Q.Soft MRP"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Q.Soft MRP</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    เป็นโปรแกรมที่พัฒนาขึ้นโดยทีมงานที่มีประสบการณ์ด้านการวิเคราะห์
                    และพัฒนาระบบบริหารการผลิตในภาคอุตสาหกรรมที่หลากหลาย
                    ผนวกกับทีมงานที่มีประสบการณ์ในการพัฒนา Database
                    Application
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">จุดมุ่งหมายของโปรแกรมนี้</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    ให้ผู้ประกอบการภาคอุตสาหกรรมที่กำลังมองหาโปรแกรมบริหารและวางแผนการผลิต
                    (MRP) ที่มีคุณภาพ ใช้งานง่าย และราคาไม่สูงจนเกินไป
                    เพื่อให้รับรู้ต้นทุนที่แท้จริง (Actual Cost)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== Right Content ===== */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-4">
                  Q.Soft MRP - Manufacturing Resource Planning
                </h2>
                <div className="text-slate-600 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-700">
                    โปรแกรม Q.Soft MRP ประกอบไปด้วย Feature การทำงานหลักๆ ดังนี้
                  </h3>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong>1. ระบบบริหารการใช้สินค้าและวัตถุดิบ</strong> (Material
                    Requirement Planning MRP.I) รองรับการบริหารสต็อก, การจัดซื้อวัตถุดิบ
                  </p>
                  <p>
                    <strong>2. ระบบวางแผนการผลิต</strong> (Manufacturing Resource
                    Planning MRP.II) รองรับการผลิตแบบ made to order, made to stock
                    สามารถจัดการกับ hot order ได้อย่างมีประสิทธิภาพ
                  </p>
                  <p>
                    <strong>3. ระบบต้นทุนการผลิต</strong> (Cost Accounting)
                    รองรับการเก็บต้นทุนการผลิตทุกหน่วยการผลิต (Work In Process)
                  </p>
                  <p>
                    <strong>4. ระบบขาย</strong> (Sale Order)
                    รองรับการจัดทำใบเสนอราคา, ใบรับคำสั่งซื้อ, ใบส่งของ
                  </p>
                  <p>
                    <strong>5. ระบบรักษากำหนดสิทธิการใช้งาน</strong> (Security Authority)
                    สามารถกำหนดสิทธิการใช้งานได้ทุกเมนู, ทุก field
                  </p>
                  <p>
                    <strong>6. ระบบการเชื่อมต่อกับโปรแกรมบัญชี-การเงิน</strong>
                    (Interface System) รองรับการเชื่อมต่อกับโปรแกรมบัญชี-การเงิน
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  ประโยชน์ที่ได้รับจากโปรแกรม
                </h3>
                <div className="space-y-3 text-slate-600 text-sm">
                  <p>
                    ✓ สามารถวางแผนแบบ Advance Scheduling (Forward + Backward Scheduling)
                  </p>
                  <p>
                    ✓ สามารถวางแผนการผลิตได้ทั้งแบบทีละขั้นตอนหรือทั้งสายการผลิต
                  </p>
                  <p>✓ สามารถแทรกงานด่วน เปลี่ยนแปลงแผนการผลิต</p>
                  <p>✓ ผู้บริหารทราบต้นทุนก่อนและหลังการผลิต</p>
                  <p>✓ รองรับการวางแผนการผลิตแบบ Re-Process, Re-Work, Re-Pack</p>
                  <p>✓ รองรับ QC Process</p>
                  <p>
                    ✓ ลดความซ้ำซ้อน เพิ่มความรวดเร็วในการทำงาน ทั้งจัดซื้อ คลังสินค้า
                    วางแผนการผลิต
                  </p>
                  <p>
                    ✓ สามารถนำไปใช้ในการบริหารคลังสินค้าให้มีปริมาณที่เหมาะสม
                  </p>
                  <p>
                    ✓ สามารถตรวจสอบต้นทุนสินค้าได้ทั้งแบบ FIFO, Average และ Lot
                    Specific
                  </p>
                  <p>✓ เพิ่มความแม่นยำของข้อมูล ลดความผิดพลาดในการทำงาน</p>
                  <p>✓ สามารถ Export ข้อมูลเป็นไฟล์ MS Office, PDF, XML ได้</p>
                  <p>✓ รองรับการทำงานแบบ Multi Company, Multi Branch, Multi Factory</p>
                </div>
              </div>

              {/* ===== Documents Download ===== */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  📄 ดาวน์โหลดเอกสารประกอบ
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-slate-600">
                    <a
                      href="/doc/Q_Soft_MRP.zip"
                      download
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      📦 ดาวน์โหลดทั้งหมด (ZIP)
                    </a>
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {[
                      { name: "Q-Soft_MRP_TH.pdf", file: "Q-Soft_MRP_TH.pdf" },
                      { name: "MRP Brochure V6.11", file: "Q_Soft_MRP_ENT+Brochue(thai)V6.11.pdf" },
                      { name: "MRP Automotive", file: "Q_Soft_MRP_ENT+Brochue(thai)V6Automotive.pdf" },
                      { name: "MRP Plastics", file: "Q_Soft_MRP_ENT+Brochue(thai)V6_Plastics.pdf" },
                      { name: "MRP Assembly", file: "Q_Soft_MRP_ENT+Brochue(thai)V6_Assembly.pdf" },
                      { name: "Qsoft(FLB)", file: "Qsoft(FLB).pdf" },
                      { name: "MRP + PM V7.01", file: "Q_Soft_MRP_Opt_PM_Brochue(thai)V7.01.pdf" },
                      { name: "MRP + WMS V7.01", file: "Q_Soft_MRP+_Opt_WMS_Brochue(thai)V7.01.pdf" },
                      { name: "MRP Food/Drug/Chemical", file: "Q_Soft_MRP_ENT+Brochue(thai)V6_Food-Drug-Chemical.pdf" },
                    ].map((doc, idx) => (
                      <a
                        key={idx}
                        href={`/doc/${doc.file}`}
                        download
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 hover:underline"
                      >
                        <span className="text-lg mr-1">📕</span> {doc.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* ===== CTA ===== */}
              <div className="border-t border-gray-200 pt-6">
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    สนใจใช้งานระบบ Q.Soft MRP?
                  </h3>
                  <Link
                    href="/#contact"
                    className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition font-semibold"
                  >
                    ติดต่อเราเลย
                  </Link>
                </div>
              </div>

              {/* ===== Related Products ===== */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  🔗 โปรแกรมที่เกี่ยวข้อง
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: "APS", href: "/aps" },
                    { label: "PM", href: "/pm" },
                    { label: "POS", href: "/pos" },
                    { label: "WMS", href: "/wms" },
                    { label: "VFS", href: "/vfs" },
                    { label: "Service", href: "/service" },
                  ].map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="text-center p-3 bg-gray-100 rounded hover:bg-blue-100 transition"
                    >
                      <span className="text-sm font-semibold text-blue-600">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
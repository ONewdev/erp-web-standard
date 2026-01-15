"use client";

import Image from "next/image";
import Link from "next/link";

export default function PageVFS() {
  return (
    <div className="font-kanit min-h-screen bg-gradient-to-b from-fuchsia-400 to-white">
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
                <h5 className="text-xl font-bold text-gray-800">Q.Soft VFS</h5>
              </div>
              <div className="relative h-48 mb-4">
                <Image
                  src="/img/feature/qsoft_vfs_lg.png"
                  alt="Q.Soft VFS"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Q.Soft VFS</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    ซอฟท์แวร์ที่พัฒนาขึ้นมาเพื่อบริหารงานของกองทุนหมู่บ้าน
                    สถาบันการเงิน และสหกรณ์โดยเฉพาะ
                    เน้นการใช้งานง่าย ครอบคุมระบบงานที่มีหลากหลายความตามภูมิภาคต่างๆ
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
                  Q.Soft VFS - Village Fund System
                </h2>
                <div className="text-slate-600 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-700">
                    โปรแกรม Q.Soft VFS ประกอบไปด้วย Feature การทำงานหลักๆ ดังนี้
                  </h3>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong>1. ระบบธนาคาร</strong> บริหารหลักการธนาคารสำหรับกองทุน
                  </p>
                  <p>
                    <strong>2. ระบบเงินฝาก</strong> จัดการเงินฝากแบบต่างๆ
                  </p>
                  <p>
                    <strong>3. ระบบเงินกู้</strong> บริหารเงินกู้ประเภทต่างๆ
                  </p>
                  <p>
                    <strong>4. ระบบเงินกู้ OD</strong> จัดการวงเงิน Overdraft
                  </p>
                  <p>
                    <strong>5. ระบบเงินหุ้น</strong> บริหารการซื้อขายและถือหุ้น
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  ประโยชน์ที่ได้รับจากโปรแกรม
                </h3>
                <div className="space-y-2 text-slate-600 text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <p>✓ กำหนดประเภทเงินฝากได้</p>
                    <p>✓ กำหนดอัตราดอกเบี้ยแต่ละประเภท</p>
                    <p>✓ กำหนดระยะเวลาการจ่ายดอกเบี้ย</p>
                    <p>✓ รองรับฝากเงินสัจจะ</p>
                    <p>✓ จ่ายดอกเบี้ยเป็นเงินสดอัตโนมัติ</p>
                    <p>✓ ฝากเงินแบบกลุ่ม</p>
                    <p>✓ เปลี่ยนอัตราดอกเบี้ยล่วงหน้า</p>
                    <p>✓ พิมพ์สมุดเงินฝากได้</p>
                    <p>✓ พิมพ์ Statement ลงสมุด</p>
                    <p>✓ กำหนดประเภทเงินกู้ได้</p>
                    <p>✓ กำหนดอัตราดอกเบี้ยเงินกู้</p>
                    <p>✓ วิธีคิดดอกเบี้ยแบบมาตรฐาน</p>
                    <p>✓ วิธีคิดแบบคงที่</p>
                    <p>✓ วิธีคิดแบบลดต้นลดดอก</p>
                    <p>✓ วิธีคิดดอกเบี้ยกองทุนหมู่บ้าน</p>
                    <p>✓ คิดค่าปรับจ่ายล่าช้าอัตโนมัติ</p>
                    <p>✓ รองรับการชำระรายวัน/เดือน/ปี</p>
                    <p>✓ กำหนดวงเงินเครดิต</p>
                    <p>✓ กำหนดอัตราดอกเบี้ย OD</p>
                    <p>✓ วิธีคิดดอกเบี้ย OD</p>
                    <p>✓ ขั้นตอนอนุมัติสัญญาเงินกู้</p>
                    <p>✓ ต่อสัญญากู้ OD</p>
                    <p>✓ คิดดอกเบี้ยเมื่อเบิก OD</p>
                    <p>✓ พิมพ์สัญญาเงินกู้</p>
                    <p>✓ พิมพ์สัญญาผู้ค้ำประกัน</p>
                    <p>✓ กำหนดประเภทเงินหุ้น</p>
                    <p>✓ ซื้อขายถอนหุ้นและปันผล</p>
                    <p>✓ โอนบัญชี GL อัตโนมัติ</p>
                    <p>✓ รายงานการซื้อขายหุ้น</p>
                    <p>✓ รายงานผู้ถือหุ้น</p>
                  </div>
                </div>
              </div>

              {/* ===== CTA ===== */}
              <div className="border-t border-gray-200 pt-6">
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    สนใจใช้งานระบบ Q.Soft VFS?
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
                    { label: "MRP", href: "/mrp" },
                    { label: "APS", href: "/aps" },
                    { label: "PM", href: "/pm" },
                    { label: "POS", href: "/pos" },
                    { label: "WMS", href: "/wms" },
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
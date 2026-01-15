"use client";

import Image from "next/image";
import Link from "next/link";

export default function RestaurantPage() {
  return (
    <div className="font-kanit min-h-screen bg-gradient-to-b from-red-400 to-white">
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
                <h5 className="text-xl font-bold text-gray-800">Q.Soft POS for Restaurant</h5>
              </div>
              <div className="relative h-48 mb-4">
                <Image
                  src="/img/feature/qsoft_restaurant_lg.png"
                  alt="Q.Soft POS for Restaurant"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Q.Soft POS for Restaurant</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    ระบบโปรแกรมขายหน้าร้านอาหารที่ได้ถูกพัฒนาขึ้นมาสำหรับธุรกิจร้านอาหาร
                    โดยใช้เทคโนโลยี ASP.NET ของ Microsoft
                    ซึ่งทำให้การบริหารร้านเป็นไปได้อย่างง่ายดาย
                    และมีประสิทธิภาพสูง
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
                  Q.Soft POS for Restaurant
                </h2>
                <div className="text-slate-600 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-700">
                    โปรแกรม Q.Soft POS for Restaurant ประกอบไปด้วย Feature การทำงานหลักๆ ดังนี้
                  </h3>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong>1. จัดการข้อมูลเมนูอาหารและเครื่องดื่ม</strong> ได้อย่างง่ายดาย
                  </p>
                  <p>
                    <strong>2. กำหนดราคาอาหาร เครื่องดื่ม</strong> ตามโซนการให้บริการที่แตกต่างกัน
                  </p>
                  <p>
                    <strong>3. จัดการข้อมูลพนักงาน</strong> แบ่งตามตำแหน่งของพนักงาน
                  </p>
                  <p>
                    <strong>4. สร้างโซนการให้บริการ</strong> กำหนดราคาค่าบริการต่างๆ ตามโซน
                  </p>
                  <p>
                    <strong>5. กำหนดค่าคอมมิชชั่น</strong> ให้กับพนักงานได้อย่างยืดหยุ่น
                  </p>
                  <p>
                    <strong>6. ระบบสมาชิก คูปอง ส่วนลด</strong> เพื่อเพิ่มความจงรักภักษ์ของลูกค้า
                  </p>
                  <p>
                    <strong>7. รายงานสรุปยอดต่างๆ</strong> สำหรับการวิเคราะห์ผลประกอบการ
                  </p>
                  <p>
                    <strong>8. รองรับการแสดงผล</strong> ทั้ง Desktop Tablet และ Mobile
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  ประโยชน์ที่ได้รับจากโปรแกรม
                </h3>
                <div className="space-y-2 text-slate-600 text-sm">
                  <div className="space-y-2">
                    <p>✓ เพิ่มรายได้ผลตอบแทนต่อโต๊ะอาหารสูงขึ้น</p>
                    <p>✓ บริหารร้านอาหารได้อย่างง่ายดาย</p>
                    <p>✓ เพิ่มประสิทธิภาพในการจัดการแม่บ้าน</p>
                    <p>✓ เก็บข้อมูลเมนูและราคาอย่างเป็นระบบ</p>
                    <p>✓ จัดการพนักงานและสิทธิ์ของพนักงาน</p>
                    <p>✓ รองรับหลายโซนการให้บริการ</p>
                    <p>✓ คำนวณค่าคอมมิชชั่นอัตโนมัติ</p>
                    <p>✓ ระบบสมาชิกเพื่อเก็บข้อมูลลูกค้า</p>
                    <p>✓ จัดการคูปองและส่วนลดได้</p>
                    <p>✓ ดูรายงานผลประกอบการแบบรealtime</p>
                    <p>✓ ใช้งานได้บนอุปกรณ์ต่างๆ (Desktop/Tablet/Mobile)</p>
                  </div>
                </div>
              </div>

              {/* ===== Documents Download ===== */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  📄 ดาวน์โหลดเอกสารประกอบ
                </h3>
                <div className="space-y-2">
                  <div className="space-y-2">
                    {[
                      { name: "Q.Soft POS for Restaurant Brochure (Thai)", file: "Q_SoftPOS-Restaurant(thai).pdf" },
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
                    สนใจใช้งานระบบ Q.Soft POS for Restaurant?
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
                    { label: "VFS", href: "/vfs" },
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
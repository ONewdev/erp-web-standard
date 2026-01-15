"use client";

import Image from "next/image";
import Link from "next/link";

export default function PageWMS() {
  return (
    <div className="font-kanit min-h-screen bg-gradient-to-b from-violet-400 to-white">
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
                <h5 className="text-xl font-bold text-gray-800">Q.Soft WMS</h5>
              </div>
              <div className="relative h-48 mb-4">
                <Image
                  src="/img/feature/qsoft_wms_big.png"
                  alt="Q.Soft WMS"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Q.Soft WMS</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    เป็นโปรแกรมที่พัฒนาขึ้นโดยทีมงานที่มีประสบการณ์ด้านการวิเคราะห์
                    และพัฒนาระบบบริหารการผลิตในภาคอุตสาหกรรมที่หลากหลาย
                    ผนวกกับทีมงานที่มีประสบการณ์ในการพัฒนา Database Application
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">จุดมุ่งหมายของโปรแกรมนี้</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    ลดระยะทาง ใช้พื้นที่อย่างเกิดประโยชน์สูงสุด สร้างความมั่นใจในทรัพยากร
                    สร้างความพึงพอใจในการทำงาน และวางแผนอย่างต่อเนื่องเพื่อให้เกิดประสิทธิภาพและคุ้มค่า
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
                  Q.Soft WMS - Warehouse Management System
                </h2>
                <div className="text-slate-600 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-700">
                    โปรแกรม Q.Soft WMS ประกอบไปด้วย Feature การทำงานหลักๆ ดังนี้
                  </h3>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong>1. บริหารงานด้วยระบบ Graphic</strong> ทำให้ง่ายในการจัดการ
                    และใช้หลักการ Drag & Drop
                  </p>
                  <p>
                    <strong>2. วางแผนการผลิตและจ้างผลิต</strong> ด้วย Gantt Bar
                  </p>
                  <p>
                    <strong>3. วางแผนการจัดซื้อและจัดส่ง</strong> ด้วย Gantt Bar
                  </p>
                  <p>
                    <strong>4. ดูภาพรวมของเส้นทางการผลิต</strong> ตั้งแต่ระดับนาทีถึงระดับวัน
                  </p>
                  <p>
                    <strong>5. ดูภาพรวมของการใช้งานหน่วยการผลิต</strong> ในรูปแบบ Gantt Chart
                  </p>
                  <p>
                    <strong>6. ดูภาพรวมของการบริหารสินค้าคงคลัง</strong> ได้อย่างชัดเจน
                  </p>
                  <p>
                    <strong>7. ตรวจสอบสถานะของงาน</strong> ได้ง่ายจากสีของ Gantt Chart
                  </p>
                  <p>
                    <strong>8. ลดเวลาในการคำนวณ</strong> ความต้องการที่ซ้ำซ้อน
                  </p>
                  <p>
                    <strong>9. ตอบสนองความเปลี่ยนแปลง</strong> ของแผนการผลิตได้ดี
                  </p>
                  <p>
                    <strong>10. Customize เพื่อเชื่อมต่อโปรแกรม MRP</strong> ใดๆ ก็ได้
                  </p>
                  <p>
                    <strong>11. ดูรายละเอียดของงาน</strong> (Order - Instruction)
                    เพื่อลดความผิดพลาด
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  ประโยชน์ที่ได้รับจากโปรแกรม
                </h3>
                <div className="space-y-2 text-slate-600 text-sm">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <p>✓ รองรับคลังหลากหลายประเภท</p>
                    <p>✓ รองรับการทำงานหลายคลังพร้อมกัน (Multi-warehouse)</p>
                    <p>✓ ระบบคลังเสมือน (Virtual Warehouse)</p>
                    <p>✓ บริหารสินค้า Lot Specific, FIFO, LIFO</p>
                    <p>✓ รองรับ Cross Docking</p>
                    <p>✓ บริหารคลังเพื่อปริมาณที่เหมาะสม</p>
                    <p>✓ ตรวจสอบต้นทุน FIFO, Average, Lot Specific</p>
                    <p>✓ เพิ่มความแม่นยำของข้อมูล</p>
                    <p>✓ กำหนดสิทธิการใช้งานได้อย่างอิสระ</p>
                    <p>✓ สร้างแบบฟอร์มการทำงานได้เอง</p>
                    <p>✓ Export ข้อมูลเป็นไฟล์ต่างๆ</p>
                    <p>✓ ตรวจสอบการทำงานของผู้ใช้งาน</p>
                    <p>✓ รองรับ Multi Company, Multi Branch, Multi Factory</p>
                    <p>✓ รองรับภาษาไทยและอังกฤษ</p>
                    <p>✓ ระบบบริหารสินค้าคงคลัง (เบิก-รับ-โอน-คืน)</p>
                    <p>✓ ทำ Lot Traceability ได้</p>
                    <p>✓ ทราบต้นทุนสินค้าก่อนการผลิต</p>
                    <p>✓ ตรวจสอบสต็อกผ่าน internet</p>
                    <p>✓ ตรวจสอบยอดค้างส่งผ่าน internet</p>
                    <p>✓ จองสินค้าเพื่อขายได้</p>
                    <p>✓ สรุปยอดสั่งซื้อของแต่ละลูกค้า</p>
                    <p>✓ พิมพ์สั่งซื้อผ่าน internet</p>
                    <p>✓ กำหนดราคาค่าเช่าเป็นปริมาตร</p>
                    <p>✓ เลือกระบบ Client/Server หรือ Multi Tiers</p>
                  </div>
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
                      href="/doc/Q_Soft_WMS.zip"
                      download
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      📦 ดาวน์โหลดทั้งหมด (ZIP)
                    </a>
                  </p>
                  <div className="space-y-2">
                    {[
                      { name: "Q.Soft WMS Prof+ Brochure (Thai) V1", file: "Q_Soft_WMS_Prof+Brochue(thai)V1.pdf" },
                      { name: "Q.Soft WMS Brochure (Thai)", file: "Q_Soft_WMS_Brochue(thai)591207.pdf" },
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
                    สนใจใช้งานระบบ Q.Soft WMS?
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
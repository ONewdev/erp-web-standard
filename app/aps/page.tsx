"use client";

import Image from "next/image";
import Link from "next/link";

export default function PageAPS() {
  return (
    <div className="font-kanit min-h-screen bg-gradient-to-b from-cyan-400 to-white">
      {/* ===== Main Content ===== */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* ===== Left Sidebar ===== */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="border-b border-gray-200 p-6">
                <h5 className="text-xl font-bold text-gray-800">Q.Soft APS</h5>
              </div>
              <div className="relative h-48 mb-4">
                <Image
                  src="/img/feature/qsoft_aps_big.png"
                  alt="Q.Soft APS"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Q.Soft APS</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    เป็นโปรแกรมบริหารตารางการผลิตเพื่อเพิ่มความรวดเร็วในการจัดการแผนการผลิต หลายสินค้าที่มีความซ้ำซ้อนทั้งในกระบวนการการผลิต, หลายหน่วยผลิต(Resources) ให้อยู่ในรูปของ Graphic เพื่อง่ายในการบริหารจัดการ
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">จุดมุ่งหมายของโปรแกรมนี้</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    คือ ให้ผู้ประกอบการภาคอุตสาหกรรมที่กำลังมองหาโปรแกรมบริหารและวางแผนการผลิต (MRP) ที่มีคุณภาพ ใช้งานง่าย และราคาไม่สูงจนเกินไปเมื่อเทียบกับความสามารถที่ได้รับ เพื่อให้รับรู้ต้นทุนที่แท้จริง (Actual Cost) อันจะนำไปสู่การพัฒนาศักยภาพในการแข่งขันขององค์กร และพัฒนาระบบการทำงานให้เจริญเติบโตอย่างต่อเนื่อง เพื่อให้เกิดผลกำไรสูงสุด
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
                  Q.Soft APS - Advanced Planning and Scheduling
                </h2>
                <div className="text-slate-600 space-y-2">
                  <h3 className="text-lg font-semibold text-gray-700">
                    โปรแกรม Q.Soft APS ประกอบไปด้วย Feature การทำงานหลักๆ ดังนี้
                  </h3>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <div className="space-y-3 text-slate-600">
                  <p>
                    <strong>1. บริหารงานด้วยระบบ Graphic</strong> ทำให้ง่ายในการจัดการ
                    และใช้หลักการ Drag & Drop ในการบริหารตารางเวลาการผลิต
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
                    <strong>5. ดูภาพรวมของการใช้งานหน่วยการผลิต</strong> ในรูปแบบของ Gantt Chart
                  </p>
                  <p>
                    <strong>6. ดูภาพรวมของการบริหารสินค้าคงคลัง</strong> ได้อย่างชัดเจน
                  </p>
                  <p>
                    <strong>7. ตรวจสอบสถานะของงาน</strong> ได้ง่ายจากสีของ Gantt Chart
                  </p>
                  <p>
                    <strong>8. ลดเวลาในการคำนวณ</strong> ความต้องการที่ซ้ำซ้อนให้เร็วยิ่งขึ้นไป
                  </p>
                  <p>
                    <strong>9. ตอบสนองความเปลี่ยนแปลง</strong> ของแผนการผลิตที่มีการเปลี่ยนแปลงอยู่ตลอดเวลาได้ดี
                  </p>
                  <p>
                    <strong>10. Customize เพื่อเชื่อมต่อโปรแกรม MRP</strong> ใดๆ ก็ได้
                    เพื่อเพิ่มประสิทธิภาพการทำงานของโปรแกรมนั้น
                  </p>
                  <p>
                    <strong>11. ดูรายละเอียดของงาน</strong> (Order - Instruction)
                    ที่ออกไปเพื่อลดความผิดพลาดในการกระจายงานได้
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  ประโยชน์ที่ได้รับจากโปรแกรม
                </h3>
                <div className="space-y-3 text-slate-600 text-sm">
                  <p>
                    1. สามารถแบ่งกำลังการผลิตแยกหน่วยผลิตในกระบวนการเดียวกัน
                  </p>
                  <p>
                    2. รายงานสำหรับประเมินผล (Report Evaluation) ที่ครบถ้วน
                  </p>
                  <p>
                    3. Drill Down ไปยังเอกสารเพื่อปรับปรุง หรือเปลี่ยนแปลงข้อมูลได้ทันที
                  </p>
                  <p>
                    4. สามารถ Export ข้อมูลไป MS Project หรือ MS Excel ได้
                  </p>
                  <p>
                    5. Friendly Graphic User Interface 
                  </p>
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
                      href="/doc/Q_Soft_APS.zip"
                      download
                      className="text-blue-600 hover:text-blue-700 font-semibold"
                    >
                      📦 ดาวน์โหลดทั้งหมด (ZIP)
                    </a>
                  </p>
                  <div className="space-y-2">
                    {[
                      { name: "APS_new.pdf", file: "APS_new.pdf" },
                      { name: "APS Brochure (Thai)", file: "Q_Soft_APS_Brochue(thai)561206.pdf" },
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


              {/* ===== Related Products ===== */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  🔗 โปรแกรมที่เกี่ยวข้อง
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: "MRP", href: "/mrp" },
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
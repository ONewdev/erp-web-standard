"use client";

import Image from "next/image";
import Link from "next/link";

export default function PageIIoT() {
  const objectives = [
    {
      number: "1",
      title: "ติดตามสถานการณ์ทำงานของพนักงาน",
      description: "เก็บข้อมูลสถานะการทำงาน ระดับการสวมใส่อุปกรณ์ และสถิติการทำงาน"
    },
    {
      number: "2",
      title: "ติดตาม และแจ้งเตือนสถานะงานผลิต",
      description: "ระบบแจ้งเตือนแบบ Real Time เมื่อมีการเปลี่ยนแปลงสถานะงาน"
    },
    {
      number: "3",
      title: "ควบคุมคุณภาพการผลิต",
      description: "จัดการและติดตามผลการตรวจสอบคุณภาพในแต่ละขั้นตอน"
    },
    {
      number: "4",
      title: "คำนวณค่าจ่ายค่าแรงต่อคน",
      description: "คำนวณค่าจ้างตามผลการทำงานจริงของพนักงาน"
    },
    {
      number: "5",
      title: "ทราบความวิกฤตของงานล่วงหน้า",
      description: "ระบบเตือนภัยสำหรับงานที่มีความเสี่ยง"
    },
    {
      number: "6",
      title: "ตรวจวัดการทำงานของเครื่องจักร",
      description: "ติดตามและวินิจฉัยสถานะของเครื่องจักร"
    },
    {
      number: "7",
      title: "ติดตามสถานะกระบวนการผลิต",
      description: "ทำนายและเตือนเหตุการณ์สำคัญในกระบวนการผลิต"
    },
    {
      number: "8",
      title: "ประเมินผลการทำงานของพนักงานแต่ละคน",
      description: "รายงานและวิเคราะห์ประสิทธิภาพพนักงาน"
    }
  ];

  const features = [
    {
      icon: "📱",
      title: "Edge Computing",
      description: "บันทึกข้อมูลลงในอุปกรณ์ตนเองก่อน ไม่กลัวสัญญาณอ่อน"
    },
    {
      icon: "☁️",
      title: "Cloud Computing",
      description: "ส่งข้อมูลไปเก็บและประมวลผลที่ Platform บนระบบ Cloud"
    },
    {
      icon: "🔔",
      title: "LINE Alert",
      description: "แจ้งเตือนเหตุการณ์สำคัญไปยัง LINE Application ทันที"
    },
    {
      icon: "💾",
      title: "Gateway Storage",
      description: "Gateway มี HDD ขนาดใหญ่เก็บข้อมูลสำรอง"
    },
    {
      icon: "📊",
      title: "Real Time Monitoring",
      description: "ติดตามงานผลิตแบบ Real Time ตลอดเวลา"
    },
    {
      icon: "✅",
      title: "Quality Control",
      description: "ระบบ QC ที่เชื่อมต่อและติดตามผลการตรวจสอบ"
    }
  ];

  const workflow = [
    { status: "เริ่มงานใหม่", color: "blue" },
    { status: "เรียก QC", color: "yellow" },
    { status: "งานไม่ผ่าน", color: "red" },
    { status: "งานผ่าน", color: "green" },
    { status: "ปิดงาน", color: "gray" }
  ];

  return (
    <div className="font-kanit min-h-screen bg-gray-50">
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
                <h5 className="text-xl font-bold text-gray-800">Industrial IoT</h5>
              </div>
              <div className="relative h-48 mb-4">
                <Image
                  src="/img/iiot.jpg"
                  alt="Industrial IoT"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">Industrial IoT</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Platform และอุปกรณ์ IoT เพื่อเพิ่มประสิทธิภาพการทำงานของโรงงานอุตสาหกรรม
                  </p>
                </div>
                <div>
                  <h5 className="font-bold text-gray-800 mb-2">จุดเด่น</h5>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    ✓ ติดตาม Real Time
                    <br />✓ Edge Computing
                    <br />✓ Cloud Based
                    <br />✓ LINE Alert
                    <br />✓ เพิ่มผลผลิต
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
                  Industrial Internet of Things (IIoT)
                </h2>
                <div className="text-slate-600 space-y-4">
                  <p>
                    Platform และอุปกรณ์ Industrial IoT เพิ่มประสิทธิภาพการทำงานของโรงงานอุตสาหกรรม
                    โดยเฉพาะเน้นการเพิ่มประสิทธิภาพการทำงานของพนักงานในสายการผลิต
                  </p>
                  <p>
                    ระบบติดตามงาน การจ่ายค่าจ้าง และผลักดันการทำงานอย่างต่อเนื่องให้กับพนักงาน
                    การตรวจวัดเพื่อเพิ่มทักษะฝีมือการทำงาน
                    และการเพิ่มประสิทธิภาพทีมตรวจสอบคุณภาพงาน
                  </p>
                  <p>
                    อุปกรณ์ใช้แนวคิด Edge Computing
                    ไม่กลัวปัญหาสัญญาณอ่อน เนื่องจากบันทึกข้อมูลลงในอุปกรณ์ตนเองก่อน
                    แล้วส่งข้อมูลไปยัง Platform บนระบบ Cloud Computing
                    ที่แจ้งเตือนเหตุการณ์สำคัญไปยังผู้เกี่ยวข้องที่ LINE Application
                  </p>
                </div>
              </div>

              {/* ===== Objectives ===== */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-6">
                  จุดมุ่งหมายของโปรแกรม
                </h3>
                <div className="space-y-3">
                  {objectives.map((obj, idx) => (
                    <div key={idx} className="border-l-4 border-blue-600 pl-4 py-2">
                      <h4 className="font-bold text-gray-800">
                        {obj.number}. {obj.title}
                      </h4>
                      <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                        {obj.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ===== Features ===== */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-6">
                  ระบบและคุณสมบัติหลัก
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((feature, idx) => (
                    <div key={idx} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{feature.icon}</span>
                        <h4 className="font-bold text-gray-800">
                          {feature.title}
                        </h4>
                      </div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ===== Workflow Status ===== */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-6">
                  สถานะการแจ้งเตือน
                </h3>
                <div className="flex flex-wrap gap-3">
                  {workflowStatus.map((item, idx) => (
                    <div
                      key={idx}
                      className={`px-4 py-2 rounded-full text-white text-sm font-semibold bg-${item.color}-500`}
                    >
                      {item.status}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-slate-600 mt-4">
                  ระบบแจ้งเตือนผ่าน LINE Application สำหรับทุกเหตุการณ์สำคัญในกระบวนการผลิต
                </p>
              </div>

              {/* ===== Key Benefits ===== */}
              <div className="border-t border-gray-200 pt-6">
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  ประโยชน์ที่ได้รับ
                </h3>
                <div className="space-y-3 text-slate-600 text-sm">
                  <p>✓ เพิ่มประสิทธิภาพการผลิต (Productivity)</p>
                  <p>✓ เพิ่มประสิทธิผลการทำงาน (Efficiency)</p>
                  <p>✓ ลดข้อผิดพลาดและผลิตภัณฑ์ที่ชำรุด</p>
                  <p>✓ ติดตามสถานะงานแบบ Real Time</p>
                  <p>✓ คำนวณค่าจ้างตามผลการทำงาน</p>
                  <p>✓ ประเมินประสิทธิภาพพนักงาน</p>
                  <p>✓ ระบบเตือนภัยล่วงหน้า</p>
                  <p>✓ ลดต้นทุนการดำเนินการ</p>
                </div>
              </div>

              {/* ===== CTA ===== */}
              <div className="border-t border-gray-200 pt-6">
                <div className="bg-blue-50 rounded-lg p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    สนใจใช้งานระบบ Industrial IoT?
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
                    { label: "WMS", href: "/wms" },
                    { label: "PM", href: "/pm" },
                    { label: "HRMI", href: "/hrmi" },
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

const workflowStatus = [
  { status: "เริ่มงานใหม่", color: "blue" },
  { status: "เรียก QC", color: "yellow" },
  { status: "งานไม่ผ่าน", color: "red" },
  { status: "งานผ่าน", color: "green" },
  { status: "ปิดงาน", color: "gray" }
];

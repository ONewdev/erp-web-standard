"use client";

import Image from "next/image";
import Link from "next/link";

export default function PageMyAccount() {
  const features = [
    {
      number: "1",
      title: "Enterprise Manager",
      description: "เป็นการกำหนดค่าเริ่มต้นต่างๆ (Master Files) สำหรับการเริ่มใช้งานโปรแกรม รวมถึงการกำหนดตั้งค่า Option ในแต่ละระบบของโปรแกรมเพื่อให้รองรับกับการ บันทึก Transaction และการวางระบบในการทำงานของโปรแกรม"
    },
    {
      number: "2",
      title: "Purchase Order",
      description: "เป็นการบันทึกซื้อสินค้าโดยเริ่มจากทำใบสั่งซื้อเพื่ออ้างอิงไปทำรายการซื้อสดหรือซื้อเชื่อ เพื่อเพิ่มสต๊อกสินค้าทันที รองรับการจ่ายเงินมัดจำและ Landed Cost"
    },
    {
      number: "3",
      title: "Accounts Payable",
      description: "เป็นการบันทึกจ่ายชำระหนี้ จากการซื้อหรือตั้งหนี้ สามารถบันทึกการรับวางบิลจากเจ้าหนี้เข้าในระบบ หรือทำเอกสารเช็คเพื่อรออนุมัติจ่าย พร้อมพิมพ์ฟอร์มใบสำคัญจ่าย"
    },
    {
      number: "4",
      title: "Sale Order",
      description: "เป็นการบันทึกขายสินค้า โดยเริ่มจากทำใบเสนอราคา เมื่อลูกค้ายืนยันคำสั่งซื้อ เพื่อการสั่งจองและจัดทำใบสั่งขาย รองรับการรับเงินมัดจำและ สั่งพิมพ์ใบกำกับภาษี"
    },
    {
      number: "5",
      title: "Accounts Receivable",
      description: "เป็นการบันทึกรับชำระหนี้และบริหารยอดลูกหนี้คงค้าง สามารถจัดทำใบวางบิลและใบเสร็จรับเงิน พร้อมออกใบเสร็จรับเงิน ฟอร์มใบสำคัญรับ"
    },
    {
      number: "6",
      title: "Cheque and Bank",
      description: "เป็นการบริหารจัดการเช็ครับ-จ่าย และเงินโอน มีรายงานรองรับทุกสถานะของเช็คแต่ละใบ การบันทึกฝาก-ถอนเงิน และการจัดทำ Bank Reconcile"
    },
    {
      number: "7",
      title: "Inventory Control",
      description: "เป็นการตรวจสอบความเคลื่อนไหวสินค้าได้แบบ Real Time เชื่อมโยงจากระบบต่างๆให้อัตโนมัติ รองรับการบันทึกสินค้ายกมา เบิก โอนย้ายคลัง และปรับปรุงสินค้า"
    },
    {
      number: "8",
      title: "Petty Cash",
      description: "เป็นการบริหารวงเงินสดย่อย เพื่อควบคุมการรับ-จ่ายเงินสดย่อย รองรับการกำหนดวงเงินตามแผนก พร้อมสั่งพิมพ์ฟอร์มใบสำคัญจ่าย"
    },
    {
      number: "9",
      title: "Advance System",
      description: "เป็นการควบคุมเงินทดรองจ่าย สามารถทำเอกสารเพื่อขออนุมัติเบิก รองรับการเบิกเงินตามรหัสงาน JOB และการเบิก-เคลียร์เงินทดรอง"
    },
    {
      number: "10",
      title: "Budget Control",
      description: "เป็นการกำหนดงบประมาณในการเปรียบเทียบผลต่างที่ตั้งไว้กับรายได้และค่าใช้จ่าย รองรับงบประมาณตามแผนก Job และหลายปีงบประมาณ"
    },
    {
      number: "11",
      title: "General Ledger",
      description: "เป็นการบันทึกบัญชีรายวันแยกประเภท และการ Post ลงบัญชีของระบบอื่นๆแบบ Real Time สามารถพิมพ์ Voucher งบทดลองหรือกระดาษทำการได้"
    },
    {
      number: "12",
      title: "Financial Management",
      description: "เป็นการสร้างและจัดทำรูปแบบงบการเงิน เช่น งบกำไรขาดทุน งบดุล งบต้นทุนขาย รองรับการ Export เป็น Excel และสามารถเรียกงบการเงินตามสาขา แผนก"
    },
    {
      number: "13",
      title: "Value Added Tax",
      description: "เพื่อการเรียกดูรายงานภาษีซื้อ-ขาย ของกิจการ สามารถเลือกรายงานตามงวดภาษี พิมพ์แบบภ.พ.30 และหนังสือรับรองการหักภาษี ณ ที่จ่าย"
    },
    {
      number: "14",
      title: "Audit and Internal Control",
      description: "เป็นการตรวจข้อมูลและการควบคุมภายใน เพื่อการควบคุมภายใน และช่วยควบคุมระบบการทำงานให้มีประสิทธิภาพ"
    },
    {
      number: "15",
      title: "Company Manager",
      description: "เพื่อการตรวจสอบข้อมูลที่บันทึกโดยจะเก็บประวัติการเพิ่ม ลบ แก้ไข เอกสาร รวมทั้งเป็นการกำหนดแบบฟอร์มของระบบต่างๆ"
    },
    {
      number: "16",
      title: "Purchase Analysis & Sale Analysis",
      description: "เป็นการแสดงรายงานวิเคราะห์เกี่ยวกับการซื้อ-ขายสินค้า การเปรียบเทียบยอดซื้อ-ขายสินค้า ทั้งที่เป็นแบบรายเดือนและรายปี"
    },
    {
      number: "17",
      title: "Fixed Assets",
      description: "เป็นการคำนวณค่าเสื่อมราคาทรัพย์สินด้วยวิธีเส้นตรง สามารถตรวจสอบการคิดค่าเสื่อมราคาได้ทันที และ Post กลับมายังโปรแกรม myAccount"
    },
    {
      number: "18",
      title: "Security Administrator",
      description: "เป็นการกำหนดสิทธิ์เข้าใช้ในต่ละระบบของผู้ใช้ได้รายบุคคล รองรับการกำหนดสิทธิ์ของพนักงานในแต่ละแผนก และเข้าถึงสาขา"
    },
    {
      number: "19",
      title: "To do list & Events",
      description: "เป็นระบบช่วยเตือน (Alert) งานประจำวัน และแสดงประวัติการบันทึกข้อมูล โปรแกรมจะแสดงข้อมูลให้อัตโนมัติตามการระบุช่วงเวลา"
    }
  ];

  return (
    <div className="font-kanit min-h-screen bg-gray-50">

      {/* ===== Main Content ===== */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              myAccount
            </h2>
            <div className="text-slate-600 space-y-4">
              <p>
                โปรแกรมบัญชีสำหรับธุรกิจ SMEs
                ที่ครอบคลุมด้วยระบบการทำงานถึง 20 ระบบ
                ที่เปี่ยมด้วยประสิทธิภาพลดขั้นตอนการทำงานที่ยุ่งยาก
              </p>
              <p>
                ทั้งระบบเชื่อมโยงถึงกันช่วยลดการ ทำงานที่ซ้ำซ้อน
                สามารถตรวจสอบทางเดินเอกสาร รวมถึงการ Drill Down Daily
                Report ดู สถานะและประวัติของเอกสารได้
              </p>
              <p>
                การบันทึกข้อมูลแบบ Real Time
                โดยหลังการบันทึกซื้อ-ขายสินค้าจะมีผลกับระบบ สต๊อกสินค้า
                และระบบการเงินบัญชี ซึ่งมีรายงานที่หลากหลายทั้งภายในและภายนอก
                ตรงตามหลักสรรพากรและหลักการบัญชี
              </p>
            </div>
          </div>

          {/* ===== Features ===== */}
          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-lg font-bold text-gray-800 mb-6">
              ประกอบไปด้วย Feature การทำงานหลักๆ ดังนี้
            </h3>
            <div className="space-y-4">
              {features.map((feature, idx) => (
                <div key={idx} className="border-l-4 border-blue-600 pl-4 py-2">
                  <h4 className="font-bold text-gray-800">
                    {feature.number}. {feature.title}
                  </h4>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

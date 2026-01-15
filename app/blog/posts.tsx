import React from "react";

export type Post = {
  slug: string;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  cover: string;
  tags?: string[];
  body: React.ReactNode;
};

export const posts: Post[] = [
  {
    slug: "icdl-asia-digital-literacy-day-2025",
    title:
      "BCI ร่วมเวที ICDL Asia Digital Literacy Day 2025 - ผลักดันความร่วมมือสามฝ่าย จีน–สิงคโปร์–ไทย",
    category: "Business",
    date: "18/10/2025",
    cover: "/img/blog/ICDLchina4.jpg",
    excerpt:
      "BCI ร่วมบรรยายหัวข้อ Standards · Skills · Mobility ในงาน International Digital Talent Development Conference 2025 ที่เมืองหนานจิง ประเทศจีน",
    body: (
      <div className="space-y-6 leading-relaxed text-slate-700">
        <p>
          ระหว่างวันที่ 13-16 ตุลาคม 2568 คุณธนพล ต่อสิทธิเดชกุล กรรมการผู้จัดการบริษัท
          บิสซิเนส คอมเพ็ดทิทีฟ อินเทลลิเจนซ์ จำกัด (BCI) ได้รับเกียรติเป็นแขกพิเศษ
          (Special Guest Speaker) ในงาน International Digital Talent Development Conference 2025
          ที่มณฑลเจียงซู เมืองหนานจิง ประเทศจีน
        </p>

        <p>
          ภายในงาน คุณธนพลได้บรรยายหัวข้อ “Standards · Skills · Mobility: A Trilateral Agenda for
          Digital Literacy Collaboration — China-Singapore-Thailand” เพื่อนำเสนอแนวคิดการยกระดับ
          ทักษะดิจิทัลในระดับภูมิภาค ผ่านความร่วมมือด้านมาตรฐาน (Standards) การพัฒนาทักษะ (Skills)
          และการเคลื่อนย้ายแรงงานคุณภาพ (Mobility) เพื่อสนับสนุนเศรษฐกิจดิจิทัลในเอเชีย
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <img src="/img/blog/ICDLchina7.jpg" alt="ICDL China keynote" className="rounded-lg" />
          <img src="/img/blog/ICDLchina6.jpg" alt="ICDL China stage" className="rounded-lg" />
        </div>

        <p>
          งานนี้จัดโดย ICDL Thailand ร่วมกับ ICDL Asia มีผู้บริหารระดับนโยบายจากหลายประเทศ
          สถาบันการศึกษา และองค์กรพันธมิตรจากจีน สิงคโปร์ และไทย เข้าร่วมแลกเปลี่ยนแนวทางการพัฒนา
          ทักษะดิจิทัล เพื่อสร้างความร่วมมืออย่างยั่งยืนในระดับภูมิภาค
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <img src="/img/blog/ICDLchina9.jpg" alt="ICDL China audience" className="rounded-lg" />
          <img src="/img/blog/ICDLchina5.jpg" alt="ICDL China panel" className="rounded-lg" />
        </div>

        <p>
          ไฮไลต์อีกส่วนคือการสาธิตและแลกเปลี่ยนมุมมองกับพันธมิตรต่างประเทศเพื่อผลักดันสมรรถนะดิจิทัล
          (Digital Competency) ให้สอดคล้องกับมาตรฐานสากล และรองรับการเคลื่อนย้ายแรงงานดิจิทัลคุณภาพ
        </p>


        <div className="overflow-hidden rounded-xl bg-slate-100">
          <div className="relative aspect-video">
            <video
              src="/img/blog/ICDLchina-video.mp4"
              poster="/img/news/ICDLchina3.jpg"
              controls
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <p>
          การเข้าร่วมครั้งนี้สะท้อนบทบาทของ BCI ในฐานะผู้นำด้าน Digital Transformation และผู้สนับสนุน
          การพัฒนาทักษะดิจิทัลของบุคลากรไทยให้ก้าวสู่มาตรฐานสากล
        </p>
      </div>
    ),
  },
  {
    slug: "ai-in-automotive-parts-training",
    title: "BCI ถ่ายทอดองค์ความรู้ “บทบาทของ AI ในธุรกิจผลิตชิ้นส่วนรถยนต์”",
    category: "Training",
    date: "15/10/2025",
    cover: "/img/blog/aicar1.jpg",
    excerpt:
      "บรรยายให้ผู้บริหารและบุคลากร Summit Auto Body Skills Development Center เข้าใจการประยุกต์ใช้ AI ในอุตสาหกรรมยานยนต์",
    body: (
      <div className="space-y-4 leading-relaxed text-slate-700">
        <p>
          เมื่อวันที่ 9 ตุลาคม 2568 คุณธนพล ต่อสิทธิเดชกุล กรรมการผู้จัดการ BCI เป็นวิทยากร
          ในหลักสูตร “บทบาทของ AI ในธุรกิจผลิตชิ้นส่วนรถยนต์” ให้กับทีมผู้บริหารและบุคลากร
          ของบริษัท ซัมมิท โอโต บอดี้ สกิลส์ ดีเวลลอปเม้นท์ เซ็นเตอร์ จำกัด จ.สมุทรปราการ
        </p>
        <img src="/img/blog/aicar3.jpg" alt="อบรม AI Automotive" className="rounded-lg" />
        <p className="font-semibold">หัวข้อสำคัญ</p>
        <ul className="list-disc list-outside pl-6 space-y-1">
          <li>การใช้ AI เพื่อเพิ่มประสิทธิภาพในกระบวนการผลิต</li>
          <li>การคาดการณ์ความต้องการและบริหารซัพพลายเชน</li>
          <li>การใช้ Generative AI สนับสนุนงานวางแผนและวิเคราะห์ข้อมูล</li>
        </ul>
        <p>
          บรรยากาศเต็มไปด้วยการแลกเปลี่ยนความคิดเห็น สะท้อนความมุ่งมั่นของภาคอุตสาหกรรมไทย
          สู่ยุค Smart Manufacturing ที่ BCI พร้อมให้คำปรึกษาและพัฒนาโซลูชันร่วมกับภาคธุรกิจอย่างต่อเนื่อง
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <img src="/img/blog/aicar2.jpg" alt="Workshop" className="rounded-lg" />
          <img src="/img/blog/aicar4.jpg" alt="Group photo" className="rounded-lg" />
          <img src="/img/blog/aicar5.jpg" alt="Training activity" className="rounded-lg" />
          <img src="/img/blog/aicar6.jpg" alt="" className="rounded-lg" />
          <img src="/img/blog/aicar7.jpg" alt="" className="rounded-lg" />
        </div>
      </div>
    ),
  },
  {
    slug: "africa-technology-expo-2025",
    title: "รุกตลาดแอฟริกา สู่งาน Africa Technology Expo 2025",
    category: "Business",
    date: "03/07/2025",
    cover: "/img/blog/africa5.jpg",
    excerpt:
      "DITP ร่วมกับ ATSI พาผู้ประกอบการซอฟต์แวร์ไทยบุกตลาดไนจีเรียและอียิปต์ พร้อมโชว์ Thailand Pavilion",
    body: (
      <div className="space-y-6 leading-relaxed text-slate-700">
        <p>
          กรมส่งเสริมการค้าระหว่างประเทศ (DITP) ร่วมมือกับสมาคมอุตสาหกรรมซอฟต์แวร์ไทย
          (ATSI) นำผู้ประกอบการซอฟต์แวร์ไทยออกบุกตลาดในภูมิภาคแอฟริกา เพื่อขยายฐานธุรกิจและเพิ่มโอกาสบนเวทีโลก
          โดยจัดกิจกรรมเดินทางไปยังเมืองลากอส ประเทศไนจีเรีย และกรุงไคโร ประเทศอียิปต์
          ระหว่างวันที่ 21–26 มิถุนายน 2568 เพื่อเข้าร่วมงาน Africa Technology Expo 2025
          กิจกรรม Business Matching และ Thai Software Business Trip
        </p>

        <br></br>

        <p>
          การดำเนินงานในครั้งนี้มุ่งเน้นการสนับสนุนผู้ประกอบการซอฟต์แวร์ไทยที่มีศักยภาพด้านระบบ Cyber Security,
          FinTech, Manufacturing Execution System (MES), AI, ERP, Hotel Management, Travel Platform, GPS และ IoT
          Solutions ให้สามารถเข้าสู่ตลาดแอฟริกาที่กำลังพัฒนาอย่างก้าวกระโดดในด้านโครงสร้างดิจิทัล
        </p>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          <img src="/img/blog/africa2.jpg" alt="Thailand Pavilion Africa Expo" className="rounded-lg w-full" />
          <div className="space-y-2">
            <p className="font-semibold">ไฮไลต์ของภารกิจ ได้แก่</p>
            <ul className="list-disc list-outside pl-6 space-y-1">
              <li>
                การแสดงผลงานและแพลตฟอร์มซอฟต์แวร์ของผู้ประกอบการไทยภายในโซน Thailand Pavilion
                ในงาน Africa Technology Expo 2025
              </li>
              <li>
                การเจรจาจับคู่ธุรกิจ (Business Matching) กับผู้ประกอบการด้าน ICT และตัวแทนจำหน่ายในไนจีเรียและอียิปต์
              </li>
            </ul>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          <div>
            <ul className="list-disc list-outside pl-6 space-y-1">
              <li>
                การรับข้อมูลเชิงลึกเกี่ยวกับตลาดซอฟต์แวร์จากสำนักงานส่งเสริมการค้า หอการค้าอียิปต์
                และหน่วยงานสำคัญอื่นๆ
              </li>
              <li>
                การพบปะหารือกับสถานเอกอัครราชทูตไทยประจำกรุงไคโร และงาน Networking Dinner
                เพื่อสร้างเครือข่ายความร่วมมือระหว่างผู้ประกอบการ
              </li>
            </ul>
          </div>
          <img src="/img/blog/africa3.jpg" alt="Business matching in Africa" className="rounded-lg w-full" />
        </div>

        <div className="grid gap-6 md:grid-cols-2 items-start">
          <img src="/img/blog/africa7.jpg" alt="Africa market opportunities" className="rounded-lg w-full" />
          <p>
            การเดินทางในครั้งนี้ได้รับการต้อนรับและสนับสนุนอย่างอบอุ่นจากทั้งภาครัฐและภาคเอกชนในประเทศคู่ค้า
            แสดงให้เห็นถึงความพร้อมและโอกาสทางธุรกิจที่ดี โดยหลายบริษัทมีความสนใจที่จะเข้ามาเป็นตัวแทนจำหน่ายในรูปแบบ
            Local Partner และมีแผนร่วมลงทุนกับบริษัทไทยในอนาคต ถือเป็นจุดเริ่มต้นสำคัญในการต่อยอดขยายธุรกิจในตลาดแอฟริกา
          </p>
        </div>

        <p>
          ทางสมาคมฯ ยังเดินหน้าพัฒนาและสานต่อความสัมพันธ์ที่แข็งแกร่งในตลาดต่างประเทศอย่างต่อเนื่อง
          มุ่งส่งเสริมและผลักดันผู้ประกอบการไทยให้ก้าวสู่เวทีตลาดโลก พร้อมนำองค์ความรู้และเทคโนโลยีที่มีประสิทธิภาพมาประยุกต์ใช้
          รวมถึงสร้างเครือข่ายพันธมิตรทางธุรกิจที่แข็งแกร่ง เพื่อรองรับการเติบโตของผู้ประกอบการไทยในระยะยาว
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          <img src="/img/blog/africa6.jpg" alt="Africa delegation" className="rounded-lg w-full" />
          <img src="/img/blog/africa4.jpg" alt="Africa technology collaboration" className="rounded-lg w-full" />
        </div>

        <p className="text-sm text-slate-500">อัปเดตเมื่อ : วันที่ 03/07/2025</p>
      </div>
    ),
  },
  {
    slug: "lean-manufacturing-principle",
    title: "หลักการและระบบการผลิตแบบลีน (Lean Principle & Lean Manufacturing)",
    category: "Technology",
    date: "—",
    cover: "/img/blog/lean-manufacturing-istock-1073363688.jpg",
    excerpt:
      "แนวคิด Lean เพื่อลดความสูญเปล่า 8 ประการ และ 5 ขั้นตอนหลักสู่ Lean Production",
    body: (
      <div className="space-y-4 leading-relaxed text-slate-700">
        <p>
          Lean Manufacturing เน้นลดความสูญเปล่า (Waste) และเพิ่มคุณค่าให้ลูกค้า โรงงานจำนวนมากจึงปรับ
          จาก Mass Production สู่ Lean Production
        </p>
        <p className="font-semibold">ความสูญเปล่า 8 ประการ</p>
        <ul className="list-disc list-outside pl-6 space-y-1">
          <li>ผลิตมากเกินไป (Over Production)</li>
          <li>มีกระบวนการมากเกินไป (Over Processing)</li>
          <li>การขนย้ายเกินจำเป็น (Conveyance)</li>
          <li>สินค้าคงคลังส่วนเกิน (Inventory)</li>
          <li>การเคลื่อนไหวที่ไม่จำเป็น (Motion)</li>
          <li>เวลารอคอย (Waiting)</li>
          <li>ของเสีย/งานแก้ไข (Defect & Rework)</li>
          <li>ศักยภาพคนที่ไม่ได้ใช้เต็มที่ (Underutilized People)</li>
        </ul>
        <p className="font-semibold">ขั้นตอนหลักสู่ Lean</p>
        <ul className="list-disc list-outside pl-6 space-y-1">
          <li>กำหนดคุณค่า (Value) ของผลิตภัณฑ์</li>
          <li>ทำ Value Stream Mapping</li>
          <li>สร้าง Flow ให้การผลิตไหลลื่น</li>
          <li>สร้างระบบ Pull ลดการผลิตเกิน</li>
          <li>พัฒนาสู่ความสมบูรณ์แบบ (Perfection)</li>
        </ul>
        <p>
          ผลลัพธ์ที่คาดหวัง: เพิ่มผลผลิต/ลดต้นทุน/ลด Breakdown/ลด Lead time อย่างน้อย 15% และเพิ่มความยืดหยุ่น
          ในการตอบสนองลูกค้า
        </p>
      </div>
    ),
  },
  {
    slug: "ai-quality-control",
    title: "ระบบ AI Quality Control ตัวช่วยควบคุมคุณภาพสินค้า",
    category: "Technology",
    date: "—",
    cover: "/img/blog/1_81e42V29ALfP6eU1FPhMdg.jpeg",
    excerpt:
      "ใช้กล้องและอัลกอริทึม AI ตรวจสอบสินค้าบนสายการผลิตแบบเรียลไทม์ ลดข้อผิดพลาดและต้นทุน",
    body: (
      <div className="space-y-4 leading-relaxed text-slate-700">
        <p>
          AI Quality Control ใช้กล้องจับภาพสินค้าในสายการผลิต ส่งเข้าสู่ระบบ AI เพื่อประมวลผลและบอกทันทีว่า
          ผ่านเกณฑ์คุณภาพหรือไม่ พร้อมระบุสาเหตุข้อบกพร่อง
        </p>
        <p className="font-semibold">เหตุผลที่ควรใช้ AI QC</p>
        <ul className="list-disc list-outside pl-6 space-y-1">
          <li>เพิ่มความแม่นยำในการตรวจสอบคุณภาพ</li>
          <li>เพิ่มความรวดเร็วในสายการผลิต</li>
          <li>ลดค่าใช้จ่ายระยะยาวผ่านการเรียนรู้ของระบบ</li>
        </ul>
        <p>
          ระบบสามารถตรวจหลายชิ้นพร้อมกัน ลดขั้นตอนและความผิดพลาดจากมนุษย์ ช่วยให้การผลิตรวดเร็ว
          และควบคุมต้นทุนได้ดีขึ้น
        </p>
      </div>
    ),
  },
  {
    slug: "erp-for-sme",
    title: "ระบบ ERP ในธุรกิจ SME",
    category: "Technology",
    date: "—",
    cover: "/img/blog/ERP.jpg",
    excerpt:
      "ERP คือระบบสารสนเทศเพื่อบูรณาการข้อมูลและวางแผนทรัพยากรธุรกิจ ตั้งแต่จัดซื้อ ผลิต ขาย การเงิน และบุคคล",
    body: (
      <div className="space-y-4 leading-relaxed text-slate-700">
        <p>
          SME ต้องเตรียมพร้อมรับการเปลี่ยนแปลงอุตสาหกรรมด้วย ERP เพื่อเชื่อมโยงข้อมูลทั้งองค์กรแบบ Real Time
          ลดขั้นตอนซ้ำซ้อน วางแผนการลงทุน และตัดสินใจได้รวดเร็ว
        </p>
        <p className="font-semibold">กลุ่มระบบหลักที่พบบ่อย</p>
        <ul className="list-disc list-outside pl-6 space-y-1">
          <li>MRP: วางแผนความต้องการวัสดุ</li>
          <li>CRM: บริหารความสัมพันธ์ลูกค้า</li>
          <li>FRM: การเงินและบัญชี</li>
          <li>HRM: บริหารทรัพยากรบุคคล</li>
          <li>SCM: บริหารซัพพลายเชน</li>
        </ul>
        <p className="font-semibold">คุณสมบัติ ERP ที่ดี</p>
        <ul className="list-disc list-outside pl-6 space-y-1">
          <li>Flexible รองรับการเปลี่ยนแปลง</li>
          <li>Modular แยกส่วนอิสระ</li>
          <li>Comprehensive ครอบคลุมฟังก์ชันหลากหลาย</li>
          <li>เชื่อมต่อระบบอื่นได้ (Beyond the Company)</li>
          <li>Best Practices ปรับให้เหมาะกับองค์กรได้</li>
        </ul>
      </div>
    ),
  },
  {
    slug: "7-benefits-of-iiot",
    title: "เผย 7 ข้อดีของ IIoT ที่ชี้ชัดว่าทำไมอุตสาหกรรมการผลิตควรยกระดับ",
    category: "Technology",
    date: "—",
    cover: "/img/blog/iiot.jpg",
    excerpt:
      "IIoT เชื่อมเครื่องจักร คน และไอที ช่วยเพิ่มประสิทธิภาพ วางแผนการผลิต ลดข้อผิดพลาด และดูแลบำรุงรักษาเชิงคาดการณ์",
    body: (
      <div className="space-y-4 leading-relaxed text-slate-700">
        <p>
          IIoT เป็นหัวใจของ Industry 4.0 เชื่อมโยงเครื่องจักร เทคโนโลยีไอที และคน ให้ข้อมูลไหลเวียนเรียลไทม์
          เพื่อการตัดสินใจที่แม่นยำ
        </p>
        <p className="font-semibold">7 ข้อดีหลัก</p>
        <ol className="list-decimal list-outside pl-6 space-y-1">
          <li>ผลิตได้มีประสิทธิภาพและมาตรฐานสูงขึ้น</li>
          <li>วางแผนการผลิตง่ายขึ้นด้วยข้อมูลเรียลไทม์</li>
          <li>ลดความผิดพลาดจากงานที่พึ่งพาแรงงาน</li>
          <li>เพิ่มความปลอดภัยเมื่อเครื่องแจ้งเตือนความผิดปกติ</li>
          <li>ประหยัดพลังงาน เปิด-ปิดระบบอัตโนมัติ</li>
          <li>บำรุงรักษาเชิงคาดการณ์ ลด Downtime และยืดอายุเครื่องจักร</li>
          <li>รายงานแม่นยำ แจ้งเตือนทันเหตุการณ์ ช่วยตัดสินใจ</li>
        </ol>
      </div>
    ),
  },
  {
    slug: "ai-makes-robots-smarter",
    title: "ระบบ AI ทำให้หุ่นยนต์เป็นมากกว่าหุ่นยนต์",
    category: "Technology",
    date: "—",
    cover: "/img/blog/Ai_content.jpg",
    excerpt:
      "AI ยกระดับ Cobot ให้มองเห็น ปรับตัว เรียนรู้ และควบคุมเครื่องจักรอื่นได้ ช่วยงานอุตสาหกรรมปลอดภัยและยืดหยุ่น",
    body: (
      <div className="space-y-4 leading-relaxed text-slate-700">
        <p>
          AI ถูกนำมาใช้ในหุ่นยนต์โรงงานเพื่อให้ทำงานและตัดสินใจได้อิสระ ลดความเสี่ยงจากงานอันตรายและงานจำเจ
        </p>
        <p className="font-semibold">ความสามารถสำคัญของ Cobot ที่มี AI</p>
        <ul className="list-disc list-outside pl-6 space-y-1">
          <li>ควบคุมตัวเองตามสภาพพื้นที่งาน</li>
          <li>มองเห็น จดจำทิศทาง ตรวจสอบและเลือกวางชิ้นงานได้</li>
          <li>ปรับแรงและหลีกเลี่ยงการชน พร้อมตอบสนองต่อข้อผิดพลาด</li>
          <li>เรียนรู้รูปแบบงาน คาดคะเนความล้มเหลว และปรับปรุงตนเอง</li>
          <li>แชร์ข้อมูลงานกับหุ่นยนต์ตัวอื่นและควบคุมเครื่องจักรอื่นได้</li>
        </ul>
        <p>
          ผลคือหุ่นยนต์ทำงานได้ยืดหยุ่น ปลอดภัย และมีประสิทธิภาพสูง รองรับการผลิตยุคใหม่ที่เปลี่ยนแปลงเร็ว
        </p>
      </div>
    ),
  },
  {
    slug: "smart-warehouse-basics",
    title: "ทำความรู้จัก Smart Warehouse คลังสินค้าอัจฉริยะ",
    category: "Technology",
    date: "—",
    cover: "/img/blog/8070-02_digital_services180830-1highressrgb.jpg",
    excerpt:
      "Smart Warehouse ใช้ระบบอัตโนมัติและข้อมูลเรียลไทม์เพื่อปรับสต็อกให้พอเหมาะ ลดต้นทุนโลจิสติกส์ และรองรับ Big Data",
    body: (
      <div className="space-y-4 leading-relaxed text-slate-700">
        <p>
          การจัดการสินค้าคงคลังคือหัวใจโลจิสติกส์ “Be in the right place at the right time”
          Smart Warehouse ใช้หุ่นยนต์อัจฉริยะและระบบอัตโนมัติในการตรวจสอบ เคลื่อนย้าย และกระจายสินค้าแบบแม่นยำ
          พร้อมส่งข้อมูลแบบเรียลไทม์
        </p>
        <p>
          ข้อมูลจำนวนมาก (Big Data) และ Streaming Data จากคลังอัจฉริยะถูกนำมาวิเคราะห์ทั้งเชิงพรรณนา
          วินิจฉัย พยากรณ์ และเชิงสั่งการ เพื่อหาจุดที่เหมาะสมที่สุดในการจัดการโลจิสติกส์ (Optimization)
        </p>
        <p>
          Smart Logistics Lab มุ่งพัฒนาบุคลากรให้พร้อมกับเทคโนโลยีใหม่ ตั้งแต่การออกแบบ Smart Warehouse
          จนถึงการใช้ Real-time Data Analytics เพื่อวางแผนกลยุทธ์และลดความเสี่ยงในการลงทุนระยะยาว
        </p>
      </div>
    ),
  },
];


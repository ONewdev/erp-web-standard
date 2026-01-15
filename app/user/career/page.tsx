import { div } from "framer-motion/client";
import CareerCard from "./CareerCard";
import { careerData } from "./careerData";
import FadeInSection from "@/app/components/FadeInSection";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";


export default function CareerPage() {
  return (
    <div className="font-kanit bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <div className="flex items-center gap-3 mb-4">
            <div className="text-4xl text-white">
               <FontAwesomeIcon icon={faBriefcase} />
            </div>
              <h1 className="text-4xl md:text-5xl font-bold">Job Opportunities</h1>
            </div>
            <p className="text-blue-100 text-lg">ร่วมงานกับเรา - ต้องการทีมมืออาชีพที่มีความสามารถ</p>
          </FadeInSection>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div style={grid} className="gap-6 md:grid-cols-2">
          {careerData.map((item, idx) => (
            <FadeInSection key={item.id} delay={idx * 0.1}>
              <CareerCard data={item} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ===== grid 2 แถว / responsive ===== */
const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 32,
  maxWidth: "1400px",
  margin: "0 auto",
};

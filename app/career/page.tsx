"use client";

import { motion } from "framer-motion";
import CareerCard from "./CareerCard";
import { careerData } from "./careerData";
import FadeInSection from "@/app/components/FadeInSection";
import { Briefcase, Globe } from "lucide-react";

export default function CareerPage() {
  

  return (
    <div className="font-kanit bg-[#f8fafc] min-h-screen pb-20">
      {/* Hero Header Section - Clean & White like other pages */}
      <div className="bg-white border-b mb-10 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--brand-blue)]/5 -skew-x-12 transform origin-top-right"></div>
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-8 relative z-10">
          <FadeInSection>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="p-3 rounded-xl text-white shadow-lg"
                style={{ backgroundColor: "var(--brand-blue)", boxShadow: `0 10px 20px rgba(14, 154, 239, 0.2)` }}
              >
                <Briefcase className="w-8 h-8" />
              </div>
              
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-4">
              Job <span style={{ color: "var(--brand-blue)" }}>Opportunities</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl leading-relaxed">
              ร่วมเป็นส่วนหนึ่งของครอบครัว BCI เรากำลังทีมที่มีความสามารถ
              และพร้อมที่จะเติบโตไปพร้อมกับนวัตกรรมเทคโนโลยีระดับสากล
            </p>
          </FadeInSection>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          {careerData.map((item, idx) => (
            <FadeInSection key={item.id} delay={idx * 0.1}>
              <CareerCard data={item} index={idx} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
}


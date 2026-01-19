"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Clock,
  MapPin,
  Award,
  CheckCircle2,
  Mail,
  Phone,
  ChevronDown,
  ChevronUp,
  Tag
} from "lucide-react";

type Props = {
  data: {
    title: string;
    positions: number;
    description: string;
    workType: string;
    responsibilities: string;
    benefits: string;
    qualifications: string;
    contact: string;
    status: string;
    image: string;
    tags?: string[];
  };
};

export default function CareerCard({ data }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const brandBlue = "#0e9aef";

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden flex flex-col hover:shadow-xl transition-all duration-500 group">
      {/* Top Image Section */}
      <div className="relative h-64 overflow-hidden bg-slate-50 flex items-center justify-center p-6">
        <img
          src={data.image}
          alt={data.title}
          className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-red-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-lg">
            {data.status}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-8 flex-1 flex flex-col">
        {/* Chips/Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {data.tags?.map((tag) => (
            <span key={tag} className="px-3 py-1 bg-slate-100 text-slate-500 text-xs rounded-lg font-medium">
              #{tag}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-[#0e9aef] transition-colors">
          {data.title}
        </h3>

        <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
          <Users className="w-4 h-4" />
          <span>{data.positions} ตำแหน่ง</span>
          <span className="mx-2 text-slate-300">|</span>
          <Clock className="w-4 h-4" />
          <span>{data.workType.split('/')[1]?.trim() || data.workType}</span>
        </div>

        <p className="text-slate-600 leading-relaxed mb-8 line-clamp-3">
          {data.description}
        </p>

        {/* Action & Collapsible Details */}
        <div className="space-y-4 mt-auto">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between py-3 px-4 rounded-xl bg-slate-50 text-slate-600 font-semibold hover:bg-slate-100 transition-colors"
          >
            <span>รายละเอียดงาน</span>
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="overflow-hidden"
              >
                <div className="space-y-6 py-4 text-sm">
                  <section>
                    <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-2">
                      <CheckCircle2 className="w-4 h-4 text-[#0e9aef]" />
                      หน้าที่และความรับผิดชอบ
                    </h4>
                    <p className="text-slate-600 whitespace-pre-line pl-6">
                      {data.responsibilities}
                    </p>
                  </section>

                  <section>
                    <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-2">
                      <Award className="w-4 h-4 text-orange-500" />
                      คุณสมบัติ
                    </h4>
                    <p className="text-slate-600 whitespace-pre-line pl-6">
                      {data.qualifications}
                    </p>
                  </section>

                  <section>
                    <h4 className="flex items-center gap-2 font-bold text-slate-800 mb-2">
                      <Tag className="w-4 h-4 text-green-500" />
                      สวัสดิการ
                    </h4>
                    <p className="text-slate-600 whitespace-pre-line pl-6">
                      {data.benefits}
                    </p>
                  </section>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-4 border-t border-slate-100">
            <a
              href={`mailto:nurng.t072@gmail.com?subject=สมัครงานตำแหน่ง ${data.title}`}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl text-white font-bold shadow-lg shadow-blue-200 transition-all hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: brandBlue }}
            >
              <Mail className="w-5 h-5" />
              สมัครตำแหน่งนี้
            </a>
          </div>

          <div className="flex flex-col items-center gap-2 pt-4">
            <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">ข้อมูลติดต่อ</p>
            <div className="flex items-center gap-4 text-slate-500 text-xs">
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> 0-2582-2110</span>
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" /> nurng.t072@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


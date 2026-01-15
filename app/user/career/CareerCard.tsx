"use client";

import { useState } from "react";

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
  };
};

export default function CareerCard({ data }: Props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 h-full flex flex-col hover:translate-y-[-4px]">
      {/* Image */}
      <div className="relative w-full h-80 overflow-hidden bg-gray-100 flex items-center justify-center">
        <img 
          src={data.image} 
          alt={data.title} 
          className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-10 flex-1 flex flex-col">
        {/* Title & Status */}
        <div className="flex justify-between items-start gap-3 mb-5">
          <h3 className="text-2xl font-bold text-gray-900 flex-1">{data.title}</h3>
          <span className="whitespace-nowrap px-4 py-2 bg-red-100 text-red-700 text-sm font-semibold rounded-full">
            {data.status}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-lg mb-6">{data.description}</p>

        {/* Info Grid */}
        <div className={`space-y-5 text-base ${expanded ? "" : "flex-1"}`}>
          <div className="flex justify-between border-b border-gray-200 pb-3">
            <span className="font-semibold text-gray-700">จำนวนตำแหน่ง:</span>
            <span className="text-blue-600 font-bold text-xl">{data.positions}</span>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <span className="font-semibold text-gray-700 text-base">รูปแบบงาน:</span>
            <p className="text-gray-600 text-base mt-2">{data.workType}</p>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <span className="font-semibold text-gray-700 text-base">หน้าที่:</span>
            <p className="text-gray-600 text-base mt-2 whitespace-pre-wrap">{data.responsibilities}</p>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <span className="font-semibold text-gray-700 text-base">สวัสดิการ:</span>
            <p className="text-gray-600 text-base mt-2">{data.benefits}</p>
          </div>

          <div className="border-b border-gray-200 pb-3">
            <span className="font-semibold text-gray-700 text-base">คุณสมบัติ:</span>
            <p className="text-gray-600 text-base mt-2">{data.qualifications}</p>
          </div>
        </div>

        {/* Contact Button */}
        <a 
          href={`mailto:${data.contact.split(',')[1]?.trim() || data.contact}`}
          className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-4 px-4 rounded-lg transition-all duration-300 text-center text-lg"
        >
          สมัครตำแหน่งนี้
        </a>

        {/* Contact Info */}
        <p className="text-gray-500 text-sm mt-4 text-center border-t border-gray-200 pt-3">
          {data.contact}
        </p>
      </div>
    </div>
  );
}

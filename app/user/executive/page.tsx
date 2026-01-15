"use client";

import { executiveData } from "./executiveData";
import Image from "next/image";

export default function ExecutivePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 font-kanit">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          <div className="flex-1">
            <p className="text-sm text-gray-600 mb-2">สมัครเข้าร่วม Course</p>
            <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6">
              {executiveData.title}
            </h1>

            {/* Overview Section */}
            <div className="mb-8">
              <p className="text-gray-700 leading-relaxed">
                {executiveData.overview}
              </p>
            </div>

            {/* Lessons Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                บทเรียน
              </h2>
              <div className="space-y-3">
                {executiveData.lessons.map((lesson, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-blue-300 to-white p-4 rounded-2xl hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer"
                  >
                    <p className="text-gray-700">{lesson}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Course Details Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                เกี่ยวกับ Course
              </h2>
              <div className="flex flex-wrap gap-8 justify-between">
                {executiveData.details.map((detail, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center gap-3 hover:scale-110 transition-transform duration-300"
                  >
                    <Image
                      src={detail.icon}
                      alt={detail.text}
                      width={60}
                      height={60}
                    />
                    <p className="text-gray-700 text-center">{detail.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="w-full max-w-xl lg:sticky lg:top-24">
              <Image
                src={executiveData.image}
                alt={executiveData.title}
                width={700}
                height={525}
                className="w-full h-auto object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

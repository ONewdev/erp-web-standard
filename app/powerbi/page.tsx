"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeInSection from "@/app/components/FadeInSection";
import { Globe, BookOpen, Share2, Database, Layout, BarChart3 } from "lucide-react";

const PowerBIIcon = ({ className }: { className?: string }) => (
    <svg height="40" viewBox=".8 0 32.3 34" width="40" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className={className}>
        <g fill="currentColor">
            <path d="m11.1 27.3c0 1.1-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1v-9c0-1.1.9-2.1 2.1-2.1s2.1.9 2.1 2.1zm6 2.4c0 1.1-.9 2.1-2.1 2.1s-2-.9-2-2.1v-13.7c0-1.1.9-2.1 2.1-2.1s2.1.9 2.1 2.1v13.7zm-12.1-4.4c0 1.1-.9 2.1-2.1 2.1s-2.1-.9-2.1-2.1v-4.9c0-1.1.9-2.1 2.1-2.1s2.1 1 2.1 2.1zm18.1 6.6c0 1.1-.9 2.1-2.1 2.1-1.1 0-2-1-2-2.1v-18.2c0-1.1.9-2.1 2.1-2.1 1.1 0 2.1.9 2.1 2.1v18.2z" />
            <path d="m29.7 31c-.4 0-.7-.1-1.1-.2l-2.5-.8c-.4-.1-.7-.6-.5-1 .1-.4.6-.7 1-.5l2.6.8c.5.2 1.1.1 1.6-.3.5-.3.7-.9.7-1.4v-16.7c0-.8-.5-1.5-1.2-1.7l-24.5-7.4c-.5-.2-1.1-.1-1.6.2-.4.4-.7.9-.7 1.5v11.5c0 .5-.4.8-.8.8-.5 0-.8-.4-.8-.8v-11.5c0-1.1.5-2.1 1.4-2.7.9-.7 2-.8 3-.5l24.4 7.4c1.4.4 2.4 1.8 2.4 3.3v16.7c0 1.1-.5 2.1-1.4 2.8-.6.2-1.3.5-2 .5" />
        </g>
    </svg>
);

export default function PowerBIPage() {
    return (
        <div className="bg-[#f8fafc] min-h-screen font-kanit">
            {/* Hero Header */}
            <div className="bg-white border-b overflow-hidden relative">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-[var(--brand-blue)]/5 -skew-x-12 transform origin-top-right"></div>
                <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 relative z-10">
                    <FadeInSection>
                        <div className="flex items-center gap-6 mb-6">
                            <div className="p-4 bg-[var(--brand-blue)] rounded-2xl text-white shadow-xl shadow-blue-200">
                                <PowerBIIcon />
                            </div>
                            <div className="h-12 w-1 bg-slate-200 rounded-full hidden md:block"></div>
                            <div>
                                <h1 className="text-4xl md:text-6xl font-extrabold text-[#111827] mb-2 tracking-tight">
                                    Power <span style={{ color: "var(--brand-blue)" }}>BI</span>
                                </h1>
                                <p className="text-xl text-slate-500 font-medium">แนะนำหลักสูตรการใช้งาน</p>
                            </div>
                        </div>
                    </FadeInSection>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* Main Content Area */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Video Section */}
                        <FadeInSection delay={0.1}>
                            <div className="bg-white rounded-[2.5rem] p-4 shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden">
                                <div className="aspect-video relative rounded-[2rem] overflow-hidden bg-slate-100">
                                    <iframe
                                        className="absolute inset-0 w-full h-full"
                                        src="https://www.youtube.com/embed/n534IUwLOtk"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </FadeInSection>

                        {/* Information Blocks */}
                        <div className="space-y-10">
                            <FadeInSection delay={0.2}>
                                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-[var(--brand-blue)]"></div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                        <BarChart3 className="text-[var(--brand-blue)] w-8 h-8" />
                                        Power BI คืออะไร ?
                                    </h2>
                                    <p className="text-slate-600 text-lg leading-relaxed mb-0">
                                        Power BI คือคอลเลกชันของบริการซอฟต์แวร์ แอป และตัวเชื่อมต่อที่ทำงานร่วมกัน
                                        เพื่อเปลี่ยนแหล่งข้อมูลที่ไม่เกี่ยวข้องของคุณให้เป็นข้อมูลเชิงลึกที่สอดคล้องกัน
                                        แสดงข้อมูลได้ และโต้ตอบได้ ข้อมูลของคุณอาจเป็นสเปรดชีต Excel
                                        หรือคอลเลกชันของระบบ Cloud และคลังข้อมูลแบบไฮบริดภายในองค์กร Power BI
                                        ช่วยให้คุณเชื่อมต่อกับแหล่งข้อมูลของคุณ แสดงภาพและค้นพบเรื่องสำคัญ
                                        รวมถึงแชร์สิ่งเหล่านั้นกับบุคคลหรือทุกคนที่คุณต้องการได้อย่างง่ายดาย
                                    </p>
                                </div>
                            </FadeInSection>

                            <FadeInSection delay={0.3}>
                                <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-slate-100 relative overflow-hidden group hover:shadow-md transition-shadow">
                                    <div className="absolute top-0 left-0 w-2 h-full bg-blue-400"></div>
                                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                                        <Layout className="text-blue-400 w-8 h-8" />
                                        Power BI Desktop คืออะไร ?
                                    </h2>
                                    <p className="text-slate-600 text-lg leading-relaxed">
                                        Power BI Desktop คือ เครื่องมือในการจัดการกับข้อมูล ทั้ง จัดระเบียบ คำนวณ
                                        ปรับแต่งอัตโนมัติและยังเป็นเครื่องมือในการสร้างรายงาน มีความสามารถในการรวม
                                        ประสานข้อมูลจากหลายแหล่ง ทั้ง ฐานข้อมูล ไฟล์ต่างๆ ทั้ง Excel, Text File
                                        และ ข้อมูลจากเว็บไซต์ ทำให้งานอันแสนน่าเบื่อ เป็นงานที่สนุก ใช้เวลาในการพัฒนาไม่มาก
                                    </p>
                                </div>
                            </FadeInSection>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <FadeInSection delay={0.4}>
                                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 h-full">
                                        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                            <Share2 className="text-[var(--brand-blue)] w-6 h-6" />
                                            ส่วนต่างๆ ของ Power BI
                                        </h2>
                                        <p className="text-slate-600 leading-relaxed">
                                            Power BI ประกอบด้วย: แอปพลิเคชันสำหรับเครื่องเดสก์ท็อป Windows ที่เรียกว่า
                                            Power BI Desktop, บริการ SaaS (Software as a Service)
                                            แบบออนไลน์ที่เรียกว่าบริการของ Power BI และแอปสำหรับอุปกรณ์เคลื่อนที่
                                            Power BI สำหรับอุปกรณ์ Windows, iOS และ Android
                                        </p>
                                    </div>
                                </FadeInSection>

                                <FadeInSection delay={0.5}>
                                    <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 h-full">
                                        <h2 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                                            <Database className="text-blue-400 w-6 h-6" />
                                            การเก็บข้อมูลของ Power BI
                                        </h2>
                                        <p className="text-slate-600 leading-relaxed">
                                            Power BI สามารถนำข้อมูลของทั้งองค์กร ไม่ว่าจะอยู่บน คลาวด์ (Cloud) หรือ
                                            On-Premise โดยใช้ Power BI Gateway ที่จะเชื่อมโยงไปยังฐานข้อมูล SQL Server,
                                            Analysis Service หรือแหล่งต่างๆ ให้มาอยู่ใน Dashboard เดียวกัน และเผยแพร่ไปยังทุกอุปกรณ์
                                        </p>
                                    </div>
                                </FadeInSection>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Area */}
                    <div className="lg:col-span-4 space-y-8">
                        <FadeInSection delay={0.6}>
                            <div className="bg-white rounded-3xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100">
                                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2 pb-4 border-b">
                                    <BookOpen className="text-[var(--brand-blue)] w-6 h-6" />
                                    เอกสารประกอบ
                                </h3>

                                <div className="space-y-6">
                                    <div className="group cursor-zoom-in">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">หนังสือเชิญวิทยากร #1</p>
                                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200">
                                            <Image
                                                src="/img/bi/หนังสือเชิญนายธนพล_page-0001 (1).jpg"
                                                alt="หนังสือเชิญนายธนพล"
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>

                                    <div className="group cursor-zoom-in">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">หนังสือเชิญวิทยากร #2</p>
                                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-slate-200">
                                            <Image
                                                src="/img/bi/หนังสือเรียนเชิญเป็นวิทยากรAHRDA.jpg"
                                                alt="หนังสือเรียนเชิญเป็นวิทยากรAHRDA"
                                                fill
                                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeInSection>

                        <FadeInSection delay={0.7}>
                            <div className="bg-gradient-to-br from-[var(--brand-blue)] to-blue-600 rounded-3xl p-8 text-white shadow-xl shadow-blue-200/50 relative overflow-hidden group">
                                <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-700">
                                    <PowerBIIcon className="w-48 h-48" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 relative z-10">สนใจหลักสูตร?</h3>
                                <p className="text-white/80 mb-8 relative z-10 leading-relaxed font-light">
                                    ยกระดับการวิเคราะห์ข้อมูลในองค์กรของคุณด้วย Power BI ติดต่อเราเพื่อขอรายละเอียดเพิ่มเติมเกี่ยวกับการอบรม
                                </p>
                                <button className="w-full bg-white text-[var(--brand-blue)] py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 active:scale-95 relative z-10">
                                    สอบถามข้อมูลโทร 091-762-3838
                                </button>
                            </div>
                        </FadeInSection>
                    </div>

                </div>
            </div>
        </div>
    );
}

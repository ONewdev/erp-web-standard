'use client';

import { useState } from 'react';
import { AlertCircle, Facebook, Mail, Phone } from 'lucide-react';

interface RegistrationData {
  name: string;
  email: string;
  mobile: string;
  company: string;
  address: string;
}

// Static count - สำหรับแสดงจำนวนผู้ลงทะเบียน (ข้อมูลคงที่)
const STATIC_REGISTRATION_COUNT = 0;

export default function RegisterBIPage() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<RegistrationData>({
    name: '',
    email: '',
    mobile: '',
    company: '',
    address: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    // ตรวจสอบช่องที่ต้องกรอก
    if (!formData.name.trim()) {
      setError('กรุณากรอกชื่อ-นามสกุล');
      setLoading(false);
      return;
    }
    if (!formData.email.trim()) {
      setError('กรุณากรอกอีเมล');
      setLoading(false);
      return;
    }
    if (!formData.mobile.trim() || isNaN(Number(formData.mobile))) {
      setError('กรุณากรอกเบอร์โทรศัพท์ที่ถูกต้อง');
      setLoading(false);
      return;
    }
    if (!formData.company.trim()) {
      setError('กรุณากรอกชื่อบริษัท');
      setLoading(false);
      return;
    }
    if (!formData.address.trim()) {
      setError('กรุณากรอกที่อยู่บริษัท');
      setLoading(false);
      return;
    }

    // Static form - เปิด mailto link แทนการส่ง API
    const mailtoBody = `
ชื่อ-นามสกุล: ${formData.name}
อีเมล: ${formData.email}
เบอร์โทรศัพท์: ${formData.mobile}
บริษัท: ${formData.company}
ที่อยู่: ${formData.address}
    `.trim();

    const mailtoLink = `mailto:info@bci.co.th?subject=ลงทะเบียนอบรม Power BI - ${formData.name}&body=${encodeURIComponent(mailtoBody)}`;

    // เปิด email client
    window.location.href = mailtoLink;

    // แสดงข้อความสำเร็จ
    setSuccess(true);
    setFormData({
      name: '',
      email: '',
      mobile: '',
      company: '',
      address: '',
    });

    setTimeout(() => {
      setSuccess(false);
    }, 5000);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-kanit">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Registration Count Card */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 p-8 text-center transition-all duration-500 hover:shadow-xl hover:bg-white/80">
              <h2 className="text-slate-500 mb-4 font-light tracking-wide">จำนวนคนที่ลงทะเบียนแล้วตอนนี้</h2>
              <h1 className="text-6xl font-bold text-[#0e9aef]">{STATIC_REGISTRATION_COUNT}</h1>
              <p className="text-sm text-slate-400 mt-4 font-light">รับลงทะเบียนล่วงหน้าจำนวน <span className="font-bold text-slate-600">20 คน</span></p>
            </div>

            {/* Image Card */}
            <div className="bg-white rounded-[2rem] shadow-sm border border-slate-100 overflow-hidden group">
              <img
                src="/img/bi/ads_bi.jpg"
                alt="Power BI Advertisement"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-[2rem] shadow-2xl border border-slate-50 overflow-hidden">
              {/* Card Header */}
              <div className="bg-[#0e9aef] px-8 py-6 text-center">
                <h3 className="text-xl font-bold text-white">ลงทะเบียนอบรม</h3>
              </div>

              {/* Card Body */}
              <div className="px-8 py-10">
                <h2 className="text-2xl font-bold text-slate-800 mb-3 leading-tight">
                  อบรม Power BI
                </h2>
                <p className="text-[#0e9aef] font-medium mb-8 text-sm">
                  สำหรับโปรแกรมบัญชี WINSpeed และ myAccount
                </p>

                {/* Error Alert */}
                {error && (
                  <div className="mb-6 p-4 bg-red-50 border border-red-100 rounded-2xl flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-red-600 text-sm font-light">{error}</p>
                  </div>
                )}

                {/* Success Alert */}
                {success && (
                  <div className="mb-6 p-4 bg-green-50 border border-green-100 rounded-2xl flex items-start gap-3">
                    <Mail className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-700 text-sm font-bold">เปิดหน้าต่างอีเมลแล้ว!</p>
                      <p className="text-green-600 text-xs mt-1 font-light">กรุณาส่งอีเมลเพื่อยืนยันการลงทะเบียน</p>
                    </div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="relative group/field bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-[#0e9aef] focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50 transition-all">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent"
                      placeholder="ชื่อ-สกุล"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      ชื่อ-สกุล
                    </label>
                  </div>

                  <div className="relative group/field bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-[#0e9aef] focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50 transition-all">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent"
                      placeholder="อีเมล"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      อีเมล
                    </label>
                  </div>

                  <div className="relative group/field bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-[#0e9aef] focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50 transition-all">
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent"
                      placeholder="เบอร์โทรศัพท์"
                    />
                    <label
                      htmlFor="mobile"
                      className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      เบอร์โทรศัพท์
                    </label>
                  </div>

                  <div className="relative group/field bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-[#0e9aef] focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50 transition-all">
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent"
                      placeholder="บริษัท"
                    />
                    <label
                      htmlFor="company"
                      className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      บริษัท
                    </label>
                  </div>

                  <div className="relative group/field bg-slate-50 rounded-2xl border border-slate-200 focus-within:border-[#0e9aef] focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50 transition-all">
                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      rows={3}
                      className="w-full px-5 pt-6 pb-2 bg-transparent border-none outline-none font-kanit text-slate-900 peer placeholder-transparent resize-none"
                      placeholder="ที่อยู่บริษัท"
                    />
                    <label
                      htmlFor="address"
                      className="absolute left-5 top-4 text-slate-400 text-sm font-kanit transition-all pointer-events-none
                                peer-focus:top-1.5 peer-focus:text-[10px] peer-focus:text-[#0e9aef] peer-focus:font-bold
                                peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-[10px]"
                    >
                      ที่อยู่บริษัท
                    </label>
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-[#0e9aef] text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-blue-100 hover:bg-black transition-all duration-500 flex items-center justify-center gap-3 disabled:bg-gray-300 active:scale-95"
                    >
                      {loading ? 'กำลังลงทะเบียน...' : 'ลงทะเบียนทางอีเมล'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

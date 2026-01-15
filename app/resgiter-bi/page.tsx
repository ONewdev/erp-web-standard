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
    <div className="min-h-screen bg-gray-100">
      {/* Header Navigation */}
      <nav className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-600">
            BCI
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              กลับไปหน้าหลัก
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Registration Count Card */}
            <div className="bg-white rounded-lg shadow p-8 text-center">
              <h2 className="text-gray-600 mb-4">จำนวนคนที่ลงทะเบียนแล้วตอนนี้</h2>
              <h1 className="text-5xl font-bold text-blue-900">{STATIC_REGISTRATION_COUNT}</h1>
              <p className="text-sm text-gray-500 mt-2">รับลงทะเบียนล่วงหน้าจำนวน 20 คน</p>
            </div>

            {/* Image Card */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src="/img/bi/ads_bi.jpg"
                alt="Power BI Advertisement"
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow">
              {/* Card Header */}
              <div className="border-b px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-800">กรอกข้อมูล</h3>
              </div>

              {/* Card Body */}
              <div className="px-6 py-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3">
                  อบรม Power BI สำหรับโปรแกรมบัญชี WINSpeed และ myAccount
                </h2>
                <p className="text-gray-700 font-semibold mb-6">
                  รับลงทะเบียนล่วงหน้าจำนวน 20 คน จนกว่าจะครบ
                </p>

                {/* Error Alert */}
                {error && (
                  <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">{error}</p>
                  </div>
                )}

                {/* Success Alert */}
                {success && (
                  <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
                    <Mail className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-700 text-sm font-semibold">เปิดหน้าต่างอีเมลแล้ว!</p>
                      <p className="text-green-600 text-xs mt-1">กรุณาส่งอีเมลเพื่อยืนยันการลงทะเบียน</p>
                    </div>
                  </div>
                )}

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ชื่อ-นามสกุล
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="กรอกชื่อของคุณ"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      อีเมล
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="กรอกอีเมล"
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      เบอร์โทรศัพท์
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="กรอกเบอร์โทรศัพท์"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      บริษัท
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="กรอกชื่อบริษัท"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      ที่อยู่บริษัท
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="กรอกที่อยู่บริษัท"
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 transition duration-200"
                  >
                    {loading ? 'กำลังลงทะเบียน...' : 'ลงทะเบียน'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <p className="text-gray-600 text-sm">
              <strong>Copyright</strong> Business Competitive Intelligence Co., Ltd. © 2014-2024
            </p>
            <a
              href="https://www.facebook.com/q.soft/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarDaysIcon, ClockIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const selectedPlan = searchParams.get('plan');
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    weight: '',
    height: '',
    goal: '',
    experience: '',
    plan: selectedPlan || 'premium',
    date: '',
    time: '',
    message: ''
  });

  const plans = {
    basic: { name: 'الخطة الأساسية', price: '299' },
    premium: { name: 'الخطة المتقدمة', price: '499' },
    pro: { name: 'الخطة الاحترافية', price: '799' }
  };

  const availableTimes = [
    '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Handle form submission
      console.log('Form submitted:', formData);
      // Redirect to success page or dashboard
      navigate('/dashboard');
    }
  };

  const renderStepContent = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">المعلومات الشخصية</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الاسم الكامل *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  البريد الإلكتروني *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="أدخل بريدك الإلكتروني"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  رقم الهاتف *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="05xxxxxxxx"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  العمر *
                </label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="مثال: 25"
                  min="16"
                  max="80"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الوزن (كجم) *
                </label>
                <input
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="مثال: 70"
                  min="30"
                  max="200"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الطول (سم) *
                </label>
                <input
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="مثال: 175"
                  min="120"
                  max="220"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  هدفك الأساسي *
                </label>
                <select
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">اختر هدفك</option>
                  <option value="weight_loss">إنقاص الوزن</option>
                  <option value="muscle_gain">زيادة الكتلة العضلية</option>
                  <option value="fitness">تحسين اللياقة العامة</option>
                  <option value="strength">زيادة القوة</option>
                  <option value="endurance">تحسين التحمل</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  مستوى الخبرة *
                </label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">اختر مستواك</option>
                  <option value="beginner">مبتدئ</option>
                  <option value="intermediate">متوسط</option>
                  <option value="advanced">متقدم</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                رسالة إضافية (اختياري)
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="أخبرنا عن أي معلومات إضافية أو أسئلة..."
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">اختر الخطة والموعد</h2>
            
            {/* Plan Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">اختر الخطة المناسبة</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.entries(plans).map(([key, plan]) => (
                  <label key={key} className="cursor-pointer">
                    <input
                      type="radio"
                      name="plan"
                      value={key}
                      checked={formData.plan === key}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-4 rounded-lg border-2 transition-all ${
                      formData.plan === key 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      <h4 className="font-semibold text-gray-900">{plan.name}</h4>
                      <p className="text-2xl font-bold text-blue-600">{plan.price} ر.س</p>
                      <p className="text-sm text-gray-600">شهرياً</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Date Selection */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                <CalendarDaysIcon className="h-5 w-5 inline ml-2" />
                اختر التاريخ للجلسة المجانية
              </h3>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>

            {/* Time Selection */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                <ClockIcon className="h-5 w-5 inline ml-2" />
                اختر الوقت المناسب
              </h3>
              <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                {availableTimes.map((time) => (
                  <label key={time} className="cursor-pointer">
                    <input
                      type="radio"
                      name="time"
                      value={time}
                      checked={formData.time === time}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className={`p-3 text-center rounded-lg border-2 transition-all ${
                      formData.time === time 
                        ? 'border-blue-500 bg-blue-50 text-blue-700' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}>
                      {time}
                    </div>
                  </label>
                ))}
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircleIcon className="h-10 w-10 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">تأكيد الحجز</h2>
              <p className="text-gray-600">راجع المعلومات قبل تأكيد الحجز</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">معلومات الحجز</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">الاسم:</span>
                  <span className="font-medium">{formData.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">البريد الإلكتروني:</span>
                  <span className="font-medium">{formData.email}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">رقم الهاتف:</span>
                  <span className="font-medium">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الخطة المختارة:</span>
                  <span className="font-medium">{plans[formData.plan as keyof typeof plans]?.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">التاريخ:</span>
                  <span className="font-medium">{formData.date}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الوقت:</span>
                  <span className="font-medium">{formData.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">الهدف:</span>
                  <span className="font-medium">{formData.goal}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">الجلسة المجانية</h3>
              <p className="text-blue-700">
                ستحصل على جلسة تقييم مجانية مدتها 30 دقيقة مع كابتن خالد لمناقشة أهدافك
                ووضع خطة مخصصة لك.
              </p>
            </div>

            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">ماذا بعد الحجز؟</h3>
              <ul className="list-disc list-inside text-green-700 space-y-1">
                <li>ستصلك رسالة تأكيد على البريد الإلكتروني</li>
                <li>سيتم التواصل معك لتأكيد الموعد</li>
                <li>ستحصل على رابط الجلسة الأونلاين</li>
                <li>يمكنك إلغاء أو تعديل الموعد حتى 24 ساعة قبل الجلسة</li>
              </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-gray-600">
              الخطوة {step} من 3
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round((step / 3) * 100)}% مكتمل
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form */}
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-xl shadow-lg p-8"
        >
          <form onSubmit={handleSubmit}>
            {renderStepContent()}
            
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  السابق
                </button>
              )}
              
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors ml-auto"
              >
                {step === 3 ? 'تأكيد الحجز' : 'التالي'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
      
      <Footer />
    </div>
  );
};

export default BookingPage;
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PlansPage: React.FC = () => {
  const plans = [
    {
      id: 'basic',
      name: "الخطة الأساسية",
      price: "299",
      originalPrice: "399",
      period: "شهري",
      description: "مثالية للمبتدئين الذين يريدون البدء في رحلة الصحة واللياقة",
      features: [
        "4 جلسات تدريب أسبوعياً",
        "خطة غذائية مخصصة",
        "دعم عبر الواتساب",
        "تقييم أسبوعي للتقدم",
        "فيديوهات تعليمية أساسية",
        "متابعة الوزن والقياسات"
      ],
      notIncluded: [
        "مكالمات فيديو مباشرة",
        "خطط غذائية متقدمة",
        "تمارين مخصصة يومياً"
      ],
      popular: false,
      color: "blue"
    },
    {
      id: 'premium',
      name: "الخطة المتقدمة",
      price: "499",
      originalPrice: "649",
      period: "شهري",
      description: "الخيار الأمثل للحصول على نتائج سريعة ومتابعة شاملة",
      features: [
        "6 جلسات تدريب أسبوعياً",
        "خطة غذائية مفصلة ومتنوعة",
        "دعم على مدار 24 ساعة",
        "تقييم يومي للتقدم",
        "مكالمات فيديو أسبوعية",
        "تمارين مخصصة حسب الهدف",
        "متابعة دقيقة للعادات اليومية",
        "خطط مكملات غذائية"
      ],
      notIncluded: [
        "تدريب يومي مباشر",
        "خطط تأهيل متخصصة"
      ],
      popular: true,
      color: "orange"
    },
    {
      id: 'pro',
      name: "الخطة الاحترافية",
      price: "799",
      originalPrice: "999",
      period: "شهري",
      description: "للجادين في تحقيق أهداف متقدمة مع متابعة شخصية كاملة",
      features: [
        "تدريب يومي مخصص",
        "خطة غذائية وتدريبية شاملة",
        "دعم مباشر ومتواصل",
        "تقييم يومي مفصل",
        "مكالمات فيديو متعددة أسبوعياً",
        "برامج تأهيل خاصة",
        "استشارات طبية رياضية",
        "خطط مكملات متقدمة",
        "متابعة النوم والراحة",
        "تحليل شامل للتقدم"
      ],
      notIncluded: [],
      popular: false,
      color: "purple"
    }
  ];

  const getColorClasses = (color: string, variant: 'bg' | 'text' | 'border' | 'hover') => {
    const colors = {
      blue: {
        bg: 'bg-blue-600',
        text: 'text-blue-600',
        border: 'border-blue-500',
        hover: 'hover:bg-blue-700'
      },
      orange: {
        bg: 'bg-orange-500',
        text: 'text-orange-500',
        border: 'border-orange-500',
        hover: 'hover:bg-orange-600'
      },
      purple: {
        bg: 'bg-purple-600',
        text: 'text-purple-600',
        border: 'border-purple-500',
        hover: 'hover:bg-purple-700'
      }
    };
    return colors[color as keyof typeof colors][variant];
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              اختر الخطة المناسبة لك
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto">
              خطط مدروسة علمياً لتحقيق أهدافك في الصحة واللياقة البدنية
            </p>
            <div className="bg-white bg-opacity-20 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-lg font-semibold mb-2">عرض خاص لفترة محدودة!</p>
              <p className="text-orange-300">خصم 25% على جميع الخطط للمشتركين الجدد</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-white rounded-2xl shadow-xl overflow-hidden ${
                  plan.popular ? 'ring-4 ring-orange-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center py-2 font-semibold">
                    الأكثر شعبية
                  </div>
                )}
                
                <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {plan.originalPrice} ر.س
                      </span>
                      <span className="text-4xl font-bold text-gray-900">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 mr-2">ر.س / {plan.period}</span>
                    </div>
                    
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full inline-block text-sm font-semibold">
                      وفر {parseInt(plan.originalPrice) - parseInt(plan.price)} ر.س
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">ما يشمله:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <CheckCircleIcon className="h-5 w-5 text-green-500 mt-0.5 ml-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Not Included */}
                  {plan.notIncluded.length > 0 && (
                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">غير مشمول:</h4>
                      <ul className="space-y-3">
                        {plan.notIncluded.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <XCircleIcon className="h-5 w-5 text-red-400 mt-0.5 ml-3 flex-shrink-0" />
                            <span className="text-gray-500">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <Link
                    to={`/booking?plan=${plan.id}`}
                    className={`block w-full text-center py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg'
                        : `${getColorClasses(plan.color, 'bg')} ${getColorClasses(plan.color, 'hover')} text-white`
                    }`}
                  >
                    اختر هذه الخطة
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ضمان استرداد الأموال
              </h3>
              <p className="text-gray-600 mb-6">
                نحن واثقون من جودة خدماتنا. إذا لم تكن راضياً عن النتائج خلال أول 30 يوم،
                سنسترد أموالك بالكامل دون أي أسئلة.
              </p>
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                <span>✓ بدون رسوم إضافية</span>
                <span>✓ استرداد سريع</span>
                <span>✓ دعم 24/7</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              أسئلة شائعة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              إجابات على أهم الأسئلة حول خططنا التدريبية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "هل يمكنني تغيير الخطة لاحقاً؟",
                answer: "نعم، يمكنك ترقية أو تخفيض خطتك في أي وقت. سنحتسب الفرق في السعر بشكل عادل."
              },
              {
                question: "كم مدة الالتزام المطلوبة؟",
                answer: "لا يوجد التزام طويل الأمد. يمكنك إلغاء اشتراكك في أي وقت مع إشعار مسبق 7 أيام."
              },
              {
                question: "هل التدريب مناسب للمبتدئين؟",
                answer: "بالطبع! نصمم البرامج حسب مستواك الحالي، سواء كنت مبتدئاً أو محترفاً."
              },
              {
                question: "ماذا لو لم أستطع حضور جلسة؟",
                answer: "يمكنك إعادة جدولة الجلسات بسهولة عبر التطبيق أو إشعار المدرب مسبقاً."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              مستعد للبدء؟
            </h2>
            <p className="text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              انضم إلى أكثر من 500 شخص حققوا أهدافهم معنا
            </p>
            <Link
              to="/booking"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              احجز جلستك المجانية الآن
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PlansPage;
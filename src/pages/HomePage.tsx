import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  PlayCircleIcon, 
  StarIcon, 
  CheckCircleIcon,
  UserGroupIcon,
  TrophyIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  const services = [
    {
      icon: <UserGroupIcon className="h-8 w-8" />,
      title: "تدريب شخصي أونلاين",
      description: "جلسات تدريب مخصصة حسب مستواك وأهدافك"
    },
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: "خطط غذائية مخصصة",
      description: "برامج غذائية متوازنة تناسب نمط حياتك"
    },
    {
      icon: <TrophyIcon className="h-8 w-8" />,
      title: "متابعة دورية",
      description: "تقييم مستمر وتعديل البرنامج حسب التقدم"
    }
  ];

  const plans = [
    {
      name: "الخطة الأساسية",
      price: "299",
      period: "شهري",
      features: [
        "4 جلسات تدريب أسبوعياً",
        "خطة غذائية مخصصة",
        "دعم عبر الواتساب",
        "تقييم أسبوعي"
      ],
      popular: false
    },
    {
      name: "الخطة المتقدمة",
      price: "499",
      period: "شهري",
      features: [
        "6 جلسات تدريب أسبوعياً",
        "خطة غذائية مفصلة",
        "دعم على مدار 24 ساعة",
        "تقييم يومي",
        "مكالمات فيديو أسبوعية"
      ],
      popular: true
    },
    {
      name: "الخطة الاحترافية",
      price: "799",
      period: "شهري",
      features: [
        "تدريب يومي مخصص",
        "خطة غذائية وتدريبية شاملة",
        "دعم مباشر",
        "تقييم يومي مفصل",
        "مكالمات فيديو متعددة",
        "برامج تأهيل خاصة"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "فقدت 15 كيلو في 3 أشهر مع كابتن خالد. البرنامج مناسب جداً ومرن.",
      rating: 5
    },
    {
      name: "فاطمة العلي",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "أفضل مدرب تعاملت معه. صبور ومتفهم ويساعدني في تحقيق أهدافي.",
      rating: 5
    },
    {
      name: "محمد السالم",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "زادت قوتي ولياقتي بشكل ملحوظ. البرنامج علمي ومدروس بعناية.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow">
              حقق أهدافك مع
              <span className="block text-orange-400">كابتن خالد</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              مدرب شخصي معتمد • تدريب أونلاين • خطط غذائية مخصصة
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              to="/booking"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              احجز جلستك المجانية
            </Link>
            <button className="flex items-center space-x-2 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 border border-white border-opacity-30">
              <PlayCircleIcon className="h-6 w-6" />
              <span>شاهد الفيديو التعريفي</span>
            </button>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animation-float">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-4">
            <TrophyIcon className="h-8 w-8 text-orange-400" />
          </div>
        </div>
        <div className="absolute bottom-20 right-10 animation-float" style={{ animationDelay: '2s' }}>
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-full p-4">
            <StarIcon className="h-8 w-8 text-yellow-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                من هو <span className="gradient-text">كابتن خالد</span>؟
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                مدرب شخصي معتمد مع خبرة تزيد عن 8 سنوات في مجال التدريب الرياضي والتغذية الصحية. 
                ساعدت أكثر من 500 شخص في تحقيق أهدافهم الصحية واللياقة البدنية.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">500+</div>
                  <div className="text-sm text-gray-600">عميل راضٍ</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600">8+</div>
                  <div className="text-sm text-gray-600">سنوات خبرة</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="كابتن خالد"
                  className="rounded-lg shadow-2xl object-cover w-full h-96"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">كابتن خالد</h3>
                  <p className="text-orange-400">مدرب شخصي معتمد</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              خدماتنا المتميزة
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              نقدم خدمات شاملة لتحقيق أفضل النتائج في رحلتك نحو الصحة واللياقة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg card-hover text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-600">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              اختر الخطة المناسبة لك
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              خطط متنوعة تناسب جميع المستويات والأهداف
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative bg-white p-8 rounded-xl shadow-lg card-hover ${
                  plan.popular ? 'ring-2 ring-orange-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      الأكثر شعبية
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    {plan.price} <span className="text-lg text-gray-600">ر.س</span>
                  </div>
                  <div className="text-gray-600">{plan.period}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircleIcon className="h-5 w-5 text-green-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/booking"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-orange-500 hover:bg-orange-600 text-white shadow-lg'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                  }`}
                >
                  اختر هذه الخطة
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              آراء عملائنا
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              تجارب حقيقية من أشخاص حققوا أهدافهم معنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg card-hover"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">عميل راضٍ</p>
                  </div>
                </div>
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
              مستعد لبدء رحلتك نحو الصحة؟
            </h2>
            <p className="text-xl mb-8 text-gray-200">
              احجز جلستك المجانية الآن واكتشف كيف يمكننا مساعدتك في تحقيق أهدافك
            </p>
            <Link
              to="/booking"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg inline-block"
            >
              احجز الآن - مجاناً
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
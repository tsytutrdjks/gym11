import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReactPlayer from 'react-player';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { 
  PlayCircleIcon, 
  StarIcon, 
  CheckCircleIcon,
  UserGroupIcon,
  TrophyIcon,
  HeartIcon,
  FireIcon,
  SparklesIcon,
  BoltIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const HomePage: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  const services = [
    {
      icon: <UserGroupIcon className="h-12 w-12" />,
      title: "تدريب شخصي أونلاين",
      description: "جلسات تدريب مخصصة حسب مستواك وأهدافك مع متابعة لحظية",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <HeartIcon className="h-12 w-12" />,
      title: "خطط غذائية ذكية",
      description: "برامج غذائية متوازنة مدعومة بالذكاء الاصطناعي",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      icon: <TrophyIcon className="h-12 w-12" />,
      title: "متابعة متقدمة",
      description: "تقييم مستمر وتعديل البرنامج باستخدام أحدث التقنيات",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: <BoltIcon className="h-12 w-12" />,
      title: "تحليلات متقدمة",
      description: "تحليل شامل للأداء والتقدم مع توصيات ذكية",
      gradient: "from-purple-500 to-indigo-500"
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
        "تقييم أسبوعي",
        "مكتبة فيديوهات تدريبية"
      ],
      popular: false,
      gradient: "from-blue-500 to-blue-600"
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
        "مكالمات فيديو أسبوعية",
        "تحليلات متقدمة",
        "برامج تأهيل خاصة"
      ],
      popular: true,
      gradient: "from-orange-500 to-red-500"
    },
    {
      name: "الخطة الاحترافية",
      price: "799",
      period: "شهري",
      features: [
        "تدريب يومي مخصص",
        "خطة غذائية وتدريبية شاملة",
        "دعم مباشر VIP",
        "تقييم يومي مفصل",
        "مكالمات فيديو متعددة",
        "برامج تأهيل متخصصة",
        "استشارات طبية رياضية",
        "تطبيق مخصص"
      ],
      popular: false,
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const testimonials = [
    {
      name: "أحمد محمد",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "فقدت 20 كيلو في 4 أشهر! التطبيق والمتابعة كانت رائعة جداً. أفضل استثمار في حياتي.",
      rating: 5,
      achievement: "فقدان 20 كجم",
      gradient: "from-green-400 to-blue-500"
    },
    {
      name: "فاطمة العلي",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "زادت قوتي وثقتي بنفسي بشكل لا يصدق. كابتن خالد محترف حقيقي ومتفهم.",
      rating: 5,
      achievement: "زيادة القوة 150%",
      gradient: "from-pink-400 to-purple-500"
    },
    {
      name: "محمد السالم",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      text: "حققت أفضل شكل في حياتي! البرنامج علمي ومدروس والنتائج مذهلة.",
      rating: 5,
      achievement: "أفضل لياقة",
      gradient: "from-yellow-400 to-orange-500"
    }
  ];

  const freeVideos = [
    {
      id: 1,
      title: "تمارين الإحماء الأساسية",
      description: "تعلم كيفية الإحماء الصحيح قبل التمرين",
      thumbnail: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "10 دقائق",
      views: "15.2K",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 2,
      title: "تمارين البطن للمبتدئين",
      description: "روتين سهل وفعال لتقوية عضلات البطن",
      thumbnail: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "15 دقيقة",
      views: "23.8K",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    {
      id: 3,
      title: "تمارين الكارديو المنزلية",
      description: "احرق السعرات الحرارية بفعالية من المنزل",
      thumbnail: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800",
      duration: "20 دقيقة",
      views: "31.5K",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    }
  ];

  const stats = [
    { number: "500+", label: "عميل راضٍ", icon: <UserGroupIcon className="h-8 w-8" /> },
    { number: "8+", label: "سنوات خبرة", icon: <TrophyIcon className="h-8 w-8" /> },
    { number: "95%", label: "معدل النجاح", icon: <StarIcon className="h-8 w-8" /> },
    { number: "24/7", label: "دعم متواصل", icon: <HeartIcon className="h-8 w-8" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section with Video Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
            playing
            loop
            muted
            width="100%"
            height="100%"
            style={{ objectFit: 'cover' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full opacity-30 animate-bounce"></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full opacity-25 animate-ping"></div>
          <div className="absolute bottom-20 right-1/3 w-14 h-14 bg-gradient-to-r from-yellow-500 to-red-500 rounded-full opacity-20 animate-pulse"></div>
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="flex items-center justify-center mb-6">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="bg-gradient-to-r from-orange-500 to-pink-500 p-4 rounded-full mr-4"
              >
                <RocketLaunchIcon className="h-12 w-12 text-white" />
              </motion.div>
              <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-orange-200 bg-clip-text text-transparent">
                أقوى منصة تدريب
                <span className="block bg-gradient-to-r from-orange-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  في العالم
                </span>
              </h1>
            </div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-3xl mb-8 text-gray-200 font-light"
            >
              مع <span className="font-bold text-orange-400">كابتن خالد</span> • تقنيات متقدمة • نتائج مضمونة
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Link
              to="/booking"
              className="group relative bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 hover:from-orange-600 hover:via-pink-600 hover:to-purple-600 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-500 transform hover:scale-110 shadow-2xl hover:shadow-orange-500/50"
            >
              <span className="relative z-10 flex items-center">
                <SparklesIcon className="h-6 w-6 mr-2" />
                احجز جلستك المجانية
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <button className="group flex items-center space-x-3 bg-white/10 backdrop-blur-lg hover:bg-white/20 text-white px-8 py-5 rounded-2xl text-xl font-semibold transition-all duration-500 border border-white/30 hover:border-white/50">
              <PlayCircleIcon className="h-8 w-8 group-hover:scale-110 transition-transform" />
              <span>شاهد الفيديو التعريفي</span>
            </button>
          </motion.div>

          {/* Floating Stats */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
              >
                <div className="text-orange-400 mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Free Training Videos Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            data-aos="fade-up"
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              فيديوهات تدريبية
              <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                مجانية
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              ابدأ رحلتك مع مجموعة من أفضل التمارين المجانية
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {freeVideos.map((video, index) => (
              <motion.div
                key={video.id}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                whileHover={{ y: -10 }}
                className="group bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/20 hover:border-orange-500/50 transition-all duration-500"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="bg-orange-500 hover:bg-orange-600 rounded-full p-4 cursor-pointer shadow-2xl"
                    >
                      <PlayCircleIcon className="h-12 w-12 text-white" />
                    </motion.div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {video.duration}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                    {video.views} مشاهدة
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              data-aos="fade-right"
              className="space-y-8"
            >
              <div>
                <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
                  من هو 
                  <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                    كابتن خالد
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  مدرب شخصي معتمد دولياً مع خبرة تزيد عن 8 سنوات في مجال التدريب الرياضي والتغذية الصحية. 
                  ساعدت أكثر من 500 شخص في تحقيق أهدافهم وتغيير حياتهم للأفضل.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl text-white shadow-xl"
                >
                  <div className="text-4xl font-black mb-2">500+</div>
                  <div className="text-sm font-medium">عميل راضٍ</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-gradient-to-br from-orange-500 to-pink-600 rounded-2xl text-white shadow-xl"
                >
                  <div className="text-4xl font-black mb-2">8+</div>
                  <div className="text-sm font-medium">سنوات خبرة</div>
                </motion.div>
              </div>

              <div className="flex flex-wrap gap-4">
                {['مدرب معتمد', 'خبير تغذية', 'مستشار لياقة', 'محلل أداء'].map((badge, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-semibold"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              data-aos="fade-left"
              className="relative"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -inset-4 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl opacity-20 blur-xl"
                ></motion.div>
                <img
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="كابتن خالد"
                  className="relative rounded-3xl shadow-2xl object-cover w-full h-96 lg:h-[500px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-3xl"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold mb-1">كابتن خالد</h3>
                  <p className="text-orange-400 font-semibold">مدرب شخصي معتمد دولياً</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.03"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v20h40V20H20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            data-aos="fade-up"
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              خدماتنا
              <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                المتميزة
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              نقدم خدمات شاملة ومتطورة لتحقيق أفضل النتائج في رحلتك نحو الصحة واللياقة
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 150}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:border-white/30 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className={`bg-gradient-to-br ${service.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-orange-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-center leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            data-aos="fade-up"
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
              اختر الخطة
              <span className="block bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                المناسبة لك
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              خطط متنوعة ومدروسة علمياً تناسب جميع المستويات والأهداف
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative bg-white p-8 rounded-3xl shadow-2xl border-2 transition-all duration-500 overflow-hidden ${
                  plan.popular 
                    ? 'border-orange-500 scale-105 shadow-orange-500/25' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-pink-500 text-white text-center py-3 font-bold text-lg">
                    🔥 الأكثر شعبية
                  </div>
                )}
                
                <div className={`${plan.popular ? 'pt-8' : ''}`}>
                  <div className="text-center mb-8">
                    <div className={`bg-gradient-to-br ${plan.gradient} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                      <TrophyIcon className="h-10 w-10 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{plan.name}</h3>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 text-lg mr-2">ر.س / {plan.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="h-6 w-6 text-green-500 ml-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/booking"
                    className={`block w-full text-center py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white shadow-lg'
                        : `bg-gradient-to-br ${plan.gradient} hover:shadow-lg text-white`
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

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M30 30c11.046 0 20-8.954 20-20H30v20z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            data-aos="fade-up"
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
              آراء عملائنا
              <span className="block bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">
                المميزين
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              تجارب حقيقية من أشخاص حققوا أهدافهم وغيروا حياتهم معنا
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group bg-white/10 backdrop-blur-lg p-8 rounded-3xl border border-white/20 hover:border-white/40 transition-all duration-500 relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-white mb-6 italic text-lg leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-white/30"
                      />
                      <div className="mr-4">
                        <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                        <p className="text-gray-300 text-sm">عميل راضٍ</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        {testimonial.achievement}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Cpath d="M20 20c0 11.046-8.954 20-20 20v20h40V20H20z"/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            data-aos="fade-up"
            className="text-white"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8">
              مستعد لبدء رحلتك؟
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto font-light">
              انضم إلى أكثر من 500 شخص حققوا أهدافهم وغيروا حياتهم معنا
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/booking"
                className="group bg-white hover:bg-gray-100 text-gray-900 px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-500 transform hover:scale-110 shadow-2xl"
              >
                <span className="flex items-center">
                  <FireIcon className="h-6 w-6 mr-2 text-orange-500" />
                  احجز جلستك المجانية الآن
                </span>
              </Link>
              
              <Link
                to="/plans"
                className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-10 py-5 rounded-2xl text-xl font-bold transition-all duration-500 transform hover:scale-110"
              >
                استكشف الخطط
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomePage;
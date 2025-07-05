import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import ReactPlayer from 'react-player';
import { 
  PlayIcon, 
  DocumentTextIcon, 
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  CogIcon,
  ArrowRightOnRectangleIcon,
  TrophyIcon,
  FireIcon,
  StarIcon,
  BoltIcon,
  HeartIcon,
  CheckCircleIcon,
  ClockIcon,
  DownloadIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Line, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const ClientDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  const workoutVideos = [
    {
      id: 1,
      title: "تمارين القوة المتقدمة - اليوم 1",
      duration: "45 دقيقة",
      thumbnail: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=800",
      completed: true,
      date: "2024-01-15",
      difficulty: "متقدم",
      calories: 350,
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "تمارين قوة شاملة لتطوير العضلات الأساسية"
    },
    {
      id: 2,
      title: "كارديو عالي الكثافة - HIIT",
      duration: "30 دقيقة",
      thumbnail: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=800",
      completed: false,
      date: "2024-01-16",
      difficulty: "متوسط",
      calories: 280,
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "تمارين كارديو عالية الكثافة لحرق الدهون"
    },
    {
      id: 3,
      title: "يوجا واسترخاء - المرونة",
      duration: "25 دقيقة",
      thumbnail: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=800",
      completed: false,
      date: "2024-01-17",
      difficulty: "مبتدئ",
      calories: 120,
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "جلسة يوجا لتحسين المرونة والاسترخاء"
    },
    {
      id: 4,
      title: "تمارين الجزء العلوي",
      duration: "40 دقيقة",
      thumbnail: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800",
      completed: true,
      date: "2024-01-14",
      difficulty: "متقدم",
      calories: 320,
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      description: "تركيز على عضلات الصدر والكتفين والذراعين"
    }
  ];

  const nutritionPlans = [
    {
      id: 1,
      title: "خطة الأسبوع الأول - إنقاص الوزن",
      type: "PDF",
      size: "2.5 MB",
      downloadUrl: "#",
      description: "خطة غذائية متوازنة لإنقاص الوزن بشكل صحي",
      calories: "1800 سعرة",
      meals: 6
    },
    {
      id: 2,
      title: "وصفات صحية ولذيذة",
      type: "PDF",
      size: "1.8 MB",
      downloadUrl: "#",
      description: "مجموعة من الوصفات الصحية والسهلة التحضير",
      calories: "متنوعة",
      meals: 15
    },
    {
      id: 3,
      title: "دليل المكملات الغذائية",
      type: "PDF",
      size: "1.2 MB",
      downloadUrl: "#",
      description: "دليل شامل للمكملات الغذائية المناسبة لأهدافك",
      calories: "إرشادات",
      meals: 0
    }
  ];

  const messages = [
    {
      id: 1,
      from: "كابتن خالد",
      message: "ممتاز! تقدمك في التمارين رائع جداً. استمر على هذا المنوال وستحقق أهدافك قريباً! 💪",
      time: "منذ ساعتين",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "received"
    },
    {
      id: 2,
      from: "أنت",
      message: "شكراً لك كابتن! أشعر بتحسن كبير في مستوى لياقتي وطاقتي. التمارين ممتعة والنتائج واضحة 🔥",
      time: "منذ 3 ساعات",
      avatar: user?.avatar || "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "sent"
    },
    {
      id: 3,
      from: "كابتن خالد",
      message: "لا تنس شرب الماء بكثرة وأخذ قسط كافي من النوم. هذا مهم جداً للتعافي والنتائج 💧😴",
      time: "أمس",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      type: "received"
    }
  ];

  const stats = [
    { 
      label: "الوزن الحالي", 
      value: "78 كجم", 
      change: "-2 كجم", 
      positive: true, 
      icon: <HeartIcon className="h-6 w-6" />,
      gradient: "from-pink-500 to-rose-500"
    },
    { 
      label: "التمارين المكتملة", 
      value: "24", 
      change: "+6", 
      positive: true, 
      icon: <TrophyIcon className="h-6 w-6" />,
      gradient: "from-yellow-500 to-orange-500"
    },
    { 
      label: "السعرات المحروقة", 
      value: "3,250", 
      change: "+450", 
      positive: true, 
      icon: <FireIcon className="h-6 w-6" />,
      gradient: "from-red-500 to-pink-500"
    },
    { 
      label: "أيام النشاط", 
      value: "18", 
      change: "+3", 
      positive: true, 
      icon: <BoltIcon className="h-6 w-6" />,
      gradient: "from-blue-500 to-purple-500"
    }
  ];

  const achievements = [
    { title: "أول تمرين", icon: "🎯", unlocked: true, date: "2024-01-01" },
    { title: "أسبوع كامل", icon: "🔥", unlocked: true, date: "2024-01-07" },
    { title: "فقدان 5 كجم", icon: "⚖️", unlocked: true, date: "2024-01-20" },
    { title: "شهر من التدريب", icon: "💪", unlocked: false, date: null },
    { title: "محارب اللياقة", icon: "🏆", unlocked: false, date: null },
    { title: "أسطورة الصحة", icon: "👑", unlocked: false, date: null }
  ];

  const upcomingSessions = [
    {
      id: 1,
      title: "جلسة متابعة أسبوعية",
      date: "2024-01-20",
      time: "18:00",
      type: "مكالمة فيديو",
      duration: "30 دقيقة"
    },
    {
      id: 2,
      title: "تقييم شهري شامل",
      date: "2024-01-25",
      time: "19:00",
      type: "مكالمة فيديو",
      duration: "45 دقيقة"
    }
  ];

  // Chart data
  const weightData = {
    labels: ['يناير 1', 'يناير 8', 'يناير 15', 'يناير 22', 'يناير 29'],
    datasets: [
      {
        label: 'الوزن (كجم)',
        data: [82, 81, 80, 79, 78],
        borderColor: 'rgb(249, 115, 22)',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const activityData = {
    labels: ['مكتمل', 'متبقي'],
    datasets: [
      {
        data: [75, 25],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(156, 163, 175, 0.3)'
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(156, 163, 175, 1)'
        ],
        borderWidth: 2
      }
    ]
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute top-4 right-4 opacity-20">
                <TrophyIcon className="h-24 w-24" />
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-3">مرحباً {user?.name}! 🎉</h2>
                <p className="text-blue-100 mb-6 text-lg">
                  مرحباً بك في لوحة التحكم المتقدمة. تابع تقدمك وحقق أهدافك مع أقوى الأدوات!
                </p>
                <div className="flex flex-wrap items-center gap-4 text-sm">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-semibold">
                    {user?.subscriptionPlan || 'الخطة المتقدمة'}
                  </span>
                  <span className="bg-green-500 px-4 py-2 rounded-full font-semibold">
                    {user?.subscriptionStatus === 'active' ? '✅ نشط' : '❌ غير نشط'}
                  </span>
                  <span className="bg-orange-500 px-4 py-2 rounded-full font-semibold">
                    🔥 مستوى متقدم
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${stat.gradient} p-6`}>
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <p className="text-sm font-medium opacity-90">{stat.label}</p>
                        <p className="text-3xl font-black">{stat.value}</p>
                      </div>
                      <div className="bg-white/20 p-3 rounded-xl">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className={`text-sm font-bold ${
                      stat.positive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change} هذا الأسبوع
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <TrophyIcon className="h-7 w-7 text-yellow-500 mr-3" />
                إنجازاتك
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className={`text-center p-4 rounded-xl border-2 transition-all ${
                      achievement.unlocked
                        ? 'border-yellow-300 bg-yellow-50 shadow-lg'
                        : 'border-gray-200 bg-gray-50 opacity-60'
                    }`}
                  >
                    <div className="text-3xl mb-2">{achievement.icon}</div>
                    <div className="text-sm font-semibold text-gray-900">{achievement.title}</div>
                    {achievement.unlocked && achievement.date && (
                      <div className="text-xs text-gray-500 mt-1">{achievement.date}</div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Latest Workouts */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <PlayIcon className="h-6 w-6 text-blue-600 mr-3" />
                  أحدث التمارين
                </h3>
                <div className="space-y-4">
                  {workoutVideos.slice(0, 3).map((video) => (
                    <motion.div
                      key={video.id}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                      onClick={() => setSelectedVideo(video)}
                    >
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-20 h-20 rounded-xl object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-xl">
                          <PlayIcon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{video.title}</h4>
                        <p className="text-sm text-gray-600">{video.duration} • {video.calories} سعرة</p>
                        <div className="flex items-center mt-1">
                          <span className={`text-xs px-2 py-1 rounded-full ${
                            video.difficulty === 'متقدم' ? 'bg-red-100 text-red-800' :
                            video.difficulty === 'متوسط' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-green-100 text-green-800'
                          }`}>
                            {video.difficulty}
                          </span>
                        </div>
                      </div>
                      <div className={`w-4 h-4 rounded-full ${
                        video.completed ? 'bg-green-500' : 'bg-gray-300'
                      }`}></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Upcoming Sessions */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CalendarDaysIcon className="h-6 w-6 text-green-600 mr-3" />
                  الجلسات القادمة
                </h3>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <motion.div
                      key={session.id}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-100"
                    >
                      <div className="bg-blue-500 p-3 rounded-xl">
                        <CalendarDaysIcon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{session.title}</h4>
                        <p className="text-sm text-gray-600">{session.date} - {session.time}</p>
                        <div className="flex items-center mt-1 space-x-2">
                          <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {session.type}
                          </span>
                          <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                            {session.duration}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        );

      case 'workouts':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black text-gray-900">مكتبة التمارين</h2>
              <div className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                {workoutVideos.filter(v => v.completed).length} من {workoutVideos.length} مكتمل
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {workoutVideos.map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setSelectedVideo(video)}
                        className="bg-white/20 backdrop-blur-sm hover:bg-white/30 rounded-full p-4 transition-all"
                      >
                        <PlayIcon className="h-12 w-12 text-white" />
                      </motion.button>
                    </div>
                    {video.completed && (
                      <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        ✅ مكتمل
                      </div>
                    )}
                    <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {video.duration}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      🔥 {video.calories} سعرة
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{video.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-xs px-3 py-1 rounded-full font-semibold ${
                        video.difficulty === 'متقدم' ? 'bg-red-100 text-red-800' :
                        video.difficulty === 'متوسط' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {video.difficulty}
                      </span>
                      <span className="text-sm text-gray-500">{video.date}</span>
                    </div>
                    <button
                      onClick={() => setSelectedVideo(video)}
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      {video.completed ? 'مشاهدة مرة أخرى' : 'بدء التمرين'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Video Modal */}
            <AnimatePresence>
              {selectedVideo && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                  onClick={() => setSelectedVideo(null)}
                >
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="aspect-video">
                      <ReactPlayer
                        url={selectedVideo.url}
                        width="100%"
                        height="100%"
                        controls
                        playing
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{selectedVideo.title}</h3>
                      <p className="text-gray-600 mb-4">{selectedVideo.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>⏱️ {selectedVideo.duration}</span>
                        <span>🔥 {selectedVideo.calories} سعرة</span>
                        <span>📊 {selectedVideo.difficulty}</span>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );

      case 'nutrition':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black text-gray-900">الخطط الغذائية</h2>
              <div className="text-sm text-gray-600 bg-gray-100 px-4 py-2 rounded-full">
                {nutritionPlans.length} خطة متاحة
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nutritionPlans.map((plan) => (
                <motion.div
                  key={plan.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 group"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 p-4 rounded-2xl">
                      <DocumentTextIcon className="h-8 w-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 text-lg">{plan.title}</h3>
                      <p className="text-sm text-gray-600">{plan.type} • {plan.size}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  
                  <div className="flex items-center justify-between mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                        {plan.calories}
                      </span>
                      {plan.meals > 0 && (
                        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                          {plan.meals} وجبة
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                    <DownloadIcon className="h-5 w-5 mr-2" />
                    تحميل الخطة
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="space-y-6">
            <h2 className="text-3xl font-black text-gray-900">المحادثات</h2>
            
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="flex items-center space-x-4">
                  <img 
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="كابتن خالد"
                    className="w-12 h-12 rounded-full border-2 border-white shadow-lg"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">كابتن خالد</h3>
                    <p className="text-sm text-green-600 font-semibold">🟢 متصل الآن</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 max-h-96 overflow-y-auto bg-gray-50">
                <div className="space-y-6">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.type === 'sent' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${
                        message.type === 'sent' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <img 
                          src={message.avatar}
                          alt={message.from}
                          className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                        />
                        <div className={`p-4 rounded-2xl shadow-lg ${
                          message.type === 'sent' 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                            : 'bg-white text-gray-900 border border-gray-200'
                        }`}>
                          <p className="text-sm leading-relaxed">{message.message}</p>
                          <p className={`text-xs mt-2 ${
                            message.type === 'sent' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {message.time}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-100 bg-white">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    placeholder="اكتب رسالتك هنا..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
                    إرسال
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'progress':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-gray-900">تتبع التقدم</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
              >
                <h3 className="font-bold text-gray-900 mb-6 text-xl flex items-center">
                  <ChartBarIcon className="h-6 w-6 text-orange-500 mr-3" />
                  تطور الوزن
                </h3>
                <div className="h-64">
                  <Line 
                    data={weightData} 
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false
                        }
                      },
                      scales: {
                        y: {
                          beginAtZero: false,
                          min: 75,
                          max: 85
                        }
                      }
                    }} 
                  />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
              >
                <h3 className="font-bold text-gray-900 mb-6 text-xl flex items-center">
                  <TrophyIcon className="h-6 w-6 text-green-500 mr-3" />
                  نشاط التمارين
                </h3>
                <div className="h-64 flex items-center justify-center">
                  <div className="w-48 h-48">
                    <Doughnut 
                      data={activityData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'bottom'
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Weekly Summary */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
            >
              <h3 className="font-bold text-gray-900 mb-6 text-xl">ملخص الأسبوع</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <div className="text-3xl font-black text-blue-600 mb-2">6</div>
                  <div className="text-sm text-gray-600">تمارين مكتملة</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-xl">
                  <div className="text-3xl font-black text-green-600 mb-2">1,850</div>
                  <div className="text-sm text-gray-600">سعرة محروقة</div>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl">
                  <div className="text-3xl font-black text-orange-600 mb-2">4.2</div>
                  <div className="text-sm text-gray-600">ساعات تدريب</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl">
                  <div className="text-3xl font-black text-purple-600 mb-2">95%</div>
                  <div className="text-sm text-gray-600">معدل الالتزام</div>
                </div>
              </div>
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-3">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl">
                  <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-xl font-black bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  لوحة التحكم
                </span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-xl">
                <img 
                  src={user?.avatar || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'}
                  alt={user?.name}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                />
                <div>
                  <span className="text-sm font-bold text-gray-900">{user?.name}</span>
                  <div className="text-xs text-gray-500">عضو مميز</div>
                </div>
              </div>
              <button
                onClick={logout}
                className="text-gray-400 hover:text-red-600 transition-colors p-2 rounded-lg hover:bg-red-50"
              >
                <ArrowRightOnRectangleIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <nav className="space-y-3">
                {[
                  { id: 'overview', label: 'نظرة عامة', icon: ChartBarIcon, gradient: 'from-blue-500 to-purple-500' },
                  { id: 'workouts', label: 'التمارين', icon: PlayIcon, gradient: 'from-green-500 to-blue-500' },
                  { id: 'nutrition', label: 'التغذية', icon: DocumentTextIcon, gradient: 'from-red-500 to-pink-500' },
                  { id: 'messages', label: 'الرسائل', icon: ChatBubbleLeftRightIcon, gradient: 'from-purple-500 to-pink-500' },
                  { id: 'progress', label: 'التقدم', icon: TrophyIcon, gradient: 'from-yellow-500 to-orange-500' }
                ].map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.02, x: 5 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeTab === item.id
                        ? `bg-gradient-to-r ${item.gradient} text-white shadow-lg`
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon className="h-6 w-6" />
                    <span className="font-semibold">{item.label}</span>
                  </motion.button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {renderContent()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
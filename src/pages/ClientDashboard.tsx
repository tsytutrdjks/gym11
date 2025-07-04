import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { 
  PlayIcon, 
  DocumentTextIcon, 
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  CalendarDaysIcon,
  UserCircleIcon,
  CogIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const ClientDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const workoutVideos = [
    {
      id: 1,
      title: "تمارين القوة - اليوم 1",
      duration: "45 دقيقة",
      thumbnail: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400",
      completed: true,
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "تمارين الكارديو - اليوم 2",
      duration: "30 دقيقة",
      thumbnail: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400",
      completed: false,
      date: "2024-01-16"
    },
    {
      id: 3,
      title: "تمارين المرونة - اليوم 3",
      duration: "20 دقيقة",
      thumbnail: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400",
      completed: false,
      date: "2024-01-17"
    }
  ];

  const nutritionPlans = [
    {
      id: 1,
      title: "خطة الأسبوع الأول",
      type: "PDF",
      size: "2.5 MB",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "وصفات صحية",
      type: "PDF",
      size: "1.8 MB",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "دليل المكملات الغذائية",
      type: "PDF",
      size: "1.2 MB",
      downloadUrl: "#"
    }
  ];

  const messages = [
    {
      id: 1,
      from: "كابتن خالد",
      message: "ممتاز! تقدمك في التمارين رائع. استمر على هذا المنوال.",
      time: "منذ ساعتين",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      from: "أنت",
      message: "شكراً لك! أشعر بتحسن كبير في مستوى لياقتي.",
      time: "منذ 3 ساعات",
      avatar: user?.avatar || "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const stats = [
    { label: "الوزن الحالي", value: "78 كجم", change: "-2 كجم", positive: true },
    { label: "التمارين المكتملة", value: "12", change: "+3", positive: true },
    { label: "السعرات المحروقة", value: "2,450", change: "+150", positive: true },
    { label: "أيام النشاط", value: "15", change: "+2", positive: true }
  ];

  const upcomingSessions = [
    {
      id: 1,
      title: "جلسة متابعة أسبوعية",
      date: "2024-01-20",
      time: "18:00",
      type: "مكالمة فيديو"
    },
    {
      id: 2,
      title: "تقييم شهري",
      date: "2024-01-25",
      time: "19:00",
      type: "مكالمة فيديو"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-2">مرحباً {user?.name}!</h2>
              <p className="text-blue-100 mb-4">
                مرحباً بك في لوحة التحكم الخاصة بك. تابع تقدمك وصل إلى أهدافك.
              </p>
              <div className="flex items-center space-x-4 text-sm">
                <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full">
                  {user?.subscriptionPlan}
                </span>
                <span className="bg-green-500 px-3 py-1 rounded-full">
                  {user?.subscriptionStatus === 'active' ? 'نشط' : 'غير نشط'}
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`text-sm font-medium ${
                      stat.positive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Latest Workouts */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">أحدث التمارين</h3>
                <div className="space-y-4">
                  {workoutVideos.slice(0, 3).map((video) => (
                    <div key={video.id} className="flex items-center space-x-4">
                      <div className="relative">
                        <img 
                          src={video.thumbnail} 
                          alt={video.title}
                          className="w-16 h-16 rounded-lg object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                          <PlayIcon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{video.title}</h4>
                        <p className="text-sm text-gray-600">{video.duration}</p>
                      </div>
                      <div className={`w-3 h-3 rounded-full ${
                        video.completed ? 'bg-green-500' : 'bg-gray-300'
                      }`}></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Sessions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">الجلسات القادمة</h3>
                <div className="space-y-4">
                  {upcomingSessions.map((session) => (
                    <div key={session.id} className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
                      <CalendarDaysIcon className="h-8 w-8 text-blue-600" />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{session.title}</h4>
                        <p className="text-sm text-gray-600">{session.date} - {session.time}</p>
                        <p className="text-xs text-blue-600">{session.type}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'workouts':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">فيديوهات التمارين</h2>
              <div className="text-sm text-gray-600">
                {workoutVideos.filter(v => v.completed).length} من {workoutVideos.length} مكتمل
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {workoutVideos.map((video) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="relative">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <PlayIcon className="h-12 w-12 text-white" />
                    </div>
                    {video.completed && (
                      <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                        مكتمل
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-sm text-gray-600 mb-4">{video.duration}</p>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                      {video.completed ? 'مشاهدة مرة أخرى' : 'بدء التمرين'}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'nutrition':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">الخطط الغذائية</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {nutritionPlans.map((plan) => (
                <div key={plan.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <DocumentTextIcon className="h-6 w-6 text-red-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{plan.title}</h3>
                      <p className="text-sm text-gray-600">{plan.type} • {plan.size}</p>
                    </div>
                  </div>
                  <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
                    تحميل
                  </button>
                </div>
              ))}
            </div>
          </div>
        );

      case 'messages':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">الرسائل</h2>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center space-x-3">
                  <img 
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="كابتن خالد"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">كابتن خالد</h3>
                    <p className="text-sm text-green-600">متصل الآن</p>
                  </div>
                </div>
              </div>
              
              <div className="p-6 max-h-96 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.from === 'أنت' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-3 max-w-xs ${
                        message.from === 'أنت' ? 'flex-row-reverse' : ''
                      }`}>
                        <img 
                          src={message.avatar}
                          alt={message.from}
                          className="w-8 h-8 rounded-full"
                        />
                        <div className={`p-3 rounded-lg ${
                          message.from === 'أنت' 
                            ? 'bg-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-900'
                        }`}>
                          <p className="text-sm">{message.message}</p>
                          <p className={`text-xs mt-1 ${
                            message.from === 'أنت' ? 'text-blue-100' : 'text-gray-500'
                          }`}>
                            {message.time}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="p-6 border-t border-gray-100">
                <div className="flex items-center space-x-3">
                  <input
                    type="text"
                    placeholder="اكتب رسالتك هنا..."
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors">
                    إرسال
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'progress':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">تتبع التقدم</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">إحصائيات الوزن</h3>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">رسم بياني للوزن</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">نشاط التمارين</h3>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">رسم بياني للنشاط</p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-2">
                <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
                  <svg className="h-6 w-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <span className="text-lg font-bold text-gray-900">كابتن خالد</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img 
                  src={user?.avatar || 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400'}
                  alt={user?.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm font-medium text-gray-700">{user?.name}</span>
              </div>
              <button
                onClick={logout}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ArrowRightOnRectangleIcon className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64 space-y-2">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
              <nav className="space-y-2">
                {[
                  { id: 'overview', label: 'نظرة عامة', icon: ChartBarIcon },
                  { id: 'workouts', label: 'التمارين', icon: PlayIcon },
                  { id: 'nutrition', label: 'التغذية', icon: DocumentTextIcon },
                  { id: 'messages', label: 'الرسائل', icon: ChatBubbleLeftRightIcon },
                  { id: 'progress', label: 'التقدم', icon: ChartBarIcon }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
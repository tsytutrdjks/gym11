import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { 
  UserGroupIcon,
  ChartBarIcon,
  DocumentTextIcon,
  VideoCameraIcon,
  CogIcon,
  BellIcon,
  CalendarDaysIcon,
  CurrencyDollarIcon,
  ArrowRightOnRectangleIcon,
  PlusIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  TrophyIcon,
  FireIcon,
  StarIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { Line, Bar, Doughnut } from 'react-chartjs-2';

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Enhanced mock data
  const stats = [
    { 
      label: "إجمالي العملاء", 
      value: "247", 
      change: "+23", 
      positive: true, 
      icon: UserGroupIcon,
      gradient: "from-blue-500 to-cyan-500",
      description: "عملاء جدد هذا الشهر"
    },
    { 
      label: "الاشتراكات النشطة", 
      value: "189", 
      change: "+15", 
      positive: true, 
      icon: TrophyIcon,
      gradient: "from-green-500 to-emerald-500",
      description: "معدل نمو 8.6%"
    },
    { 
      label: "الإيرادات الشهرية", 
      value: "87,450 ر.س", 
      change: "+22%", 
      positive: true, 
      icon: CurrencyDollarIcon,
      gradient: "from-yellow-500 to-orange-500",
      description: "أعلى إيراد في التاريخ"
    },
    { 
      label: "معدل الرضا", 
      value: "4.9/5", 
      change: "+0.3", 
      positive: true, 
      icon: StarIcon,
      gradient: "from-pink-500 to-purple-500",
      description: "من 156 تقييم"
    }
  ];

  const recentClients = [
    {
      id: 1,
      name: "أحمد محمد السالم",
      email: "ahmed@example.com",
      plan: "الخطة الاحترافية",
      status: "نشط",
      joinDate: "2024-01-15",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      progress: 85,
      lastActivity: "منذ ساعتين"
    },
    {
      id: 2,
      name: "فاطمة العلي",
      email: "fatima@example.com",
      plan: "الخطة المتقدمة",
      status: "نشط",
      joinDate: "2024-01-10",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      progress: 92,
      lastActivity: "منذ 30 دقيقة"
    },
    {
      id: 3,
      name: "محمد الأحمد",
      email: "mohammed@example.com",
      plan: "الخطة الأساسية",
      status: "منتهي",
      joinDate: "2023-12-20",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      progress: 45,
      lastActivity: "منذ 3 أيام"
    }
  ];

  const workoutVideos = [
    {
      id: 1,
      title: "تمارين القوة المتقدمة - الجزء الأول",
      duration: "45 دقيقة",
      views: 1234,
      likes: 89,
      uploadDate: "2024-01-10",
      thumbnail: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "قوة",
      difficulty: "متقدم"
    },
    {
      id: 2,
      title: "كارديو عالي الكثافة للمبتدئين",
      duration: "30 دقيقة",
      views: 2156,
      likes: 145,
      uploadDate: "2024-01-08",
      thumbnail: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "كارديو",
      difficulty: "مبتدئ"
    },
    {
      id: 3,
      title: "يوجا الصباح للاسترخاء",
      duration: "25 دقيقة",
      views: 987,
      likes: 67,
      uploadDate: "2024-01-05",
      thumbnail: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "يوجا",
      difficulty: "مبتدئ"
    }
  ];

  const nutritionPlans = [
    {
      id: 1,
      title: "خطة إنقاص الوزن - الأسبوع الأول",
      downloads: 156,
      uploadDate: "2024-01-12",
      size: "2.5 MB",
      category: "إنقاص الوزن",
      rating: 4.8
    },
    {
      id: 2,
      title: "برنامج زيادة الكتلة العضلية",
      downloads: 89,
      uploadDate: "2024-01-09",
      size: "3.1 MB",
      category: "زيادة الوزن",
      rating: 4.9
    },
    {
      id: 3,
      title: "وصفات صحية للرياضيين",
      downloads: 234,
      uploadDate: "2024-01-06",
      size: "4.2 MB",
      category: "وصفات",
      rating: 4.7
    }
  ];

  // Chart data
  const clientGrowthData = {
    labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
    datasets: [
      {
        label: 'عملاء جدد',
        data: [12, 19, 15, 25, 22, 30],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const revenueData = {
    labels: ['يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو'],
    datasets: [
      {
        label: 'الإيرادات (ر.س)',
        data: [45000, 52000, 48000, 61000, 75000, 87450],
        backgroundColor: 'rgba(249, 115, 22, 0.8)',
        borderColor: 'rgba(249, 115, 22, 1)',
        borderWidth: 2
      }
    ]
  };

  const planDistributionData = {
    labels: ['الأساسية', 'المتقدمة', 'الاحترافية'],
    datasets: [
      {
        data: [45, 35, 20],
        backgroundColor: [
          'rgba(34, 197, 94, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(168, 85, 247, 0.8)'
        ],
        borderColor: [
          'rgba(34, 197, 94, 1)',
          'rgba(59, 130, 246, 1)',
          'rgba(168, 85, 247, 1)'
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
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
                >
                  <div className={`bg-gradient-to-r ${stat.gradient} p-6`}>
                    <div className="flex items-center justify-between text-white">
                      <div>
                        <p className="text-sm font-medium opacity-90">{stat.label}</p>
                        <p className="text-3xl font-black">{stat.value}</p>
                      </div>
                      <div className="bg-white/20 p-3 rounded-xl">
                        <stat.icon className="h-8 w-8" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className={`text-sm font-bold mb-1 ${
                      stat.positive ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.change} هذا الشهر
                    </div>
                    <p className="text-xs text-gray-500">{stat.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <ChartBarIcon className="h-6 w-6 text-blue-600 mr-3" />
                  نمو العملاء
                </h3>
                <div className="h-64">
                  <Line 
                    data={clientGrowthData} 
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false
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
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <CurrencyDollarIcon className="h-6 w-6 text-orange-600 mr-3" />
                  الإيرادات الشهرية
                </h3>
                <div className="h-64">
                  <Bar 
                    data={revenueData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false
                        }
                      }
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Recent Activities */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Recent Clients */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="lg:col-span-2 bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-900 flex items-center">
                    <UserGroupIcon className="h-6 w-6 text-green-600 mr-3" />
                    العملاء الجدد
                  </h3>
                  <button
                    onClick={() => setActiveTab('clients')}
                    className="text-blue-600 hover:text-blue-700 text-sm font-semibold bg-blue-50 px-4 py-2 rounded-lg transition-colors"
                  >
                    عرض الكل
                  </button>
                </div>
                <div className="space-y-4">
                  {recentClients.map((client) => (
                    <motion.div
                      key={client.id}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <img 
                        src={client.avatar} 
                        alt={client.name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900">{client.name}</h4>
                        <p className="text-sm text-gray-600">{client.plan}</p>
                        <p className="text-xs text-gray-500">{client.lastActivity}</p>
                      </div>
                      <div className="text-center">
                        <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          client.status === 'نشط' 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-red-100 text-red-800'
                        }`}>
                          {client.status}
                        </div>
                        <div className="mt-2 w-16 bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${client.progress}%` }}
                          ></div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{client.progress}%</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Plan Distribution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <TrophyIcon className="h-6 w-6 text-purple-600 mr-3" />
                  توزيع الخطط
                </h3>
                <div className="h-48 flex items-center justify-center">
                  <div className="w-40 h-40">
                    <Doughnut 
                      data={planDistributionData}
                      options={{
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                          legend: {
                            position: 'bottom',
                            labels: {
                              padding: 20,
                              usePointStyle: true
                            }
                          }
                        }
                      }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6">إجراءات سريعة</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { 
                    title: "رفع فيديو جديد", 
                    icon: VideoCameraIcon, 
                    action: () => setActiveTab('content'),
                    gradient: "from-blue-500 to-purple-500"
                  },
                  { 
                    title: "إضافة خطة غذائية", 
                    icon: DocumentTextIcon, 
                    action: () => setActiveTab('content'),
                    gradient: "from-green-500 to-emerald-500"
                  },
                  { 
                    title: "إدارة العملاء", 
                    icon: UserGroupIcon, 
                    action: () => setActiveTab('clients'),
                    gradient: "from-orange-500 to-red-500"
                  },
                  { 
                    title: "عرض التقارير", 
                    icon: ChartBarIcon, 
                    action: () => setActiveTab('analytics'),
                    gradient: "from-purple-500 to-pink-500"
                  }
                ].map((item, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={item.action}
                    className={`flex flex-col items-center p-6 bg-gradient-to-r ${item.gradient} hover:shadow-lg rounded-2xl transition-all duration-300 text-white`}
                  >
                    <item.icon className="h-8 w-8 mb-3" />
                    <span className="text-sm font-semibold text-center">{item.title}</span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </div>
        );

      case 'clients':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black text-gray-900">إدارة العملاء</h2>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 shadow-lg"
              >
                <PlusIcon className="h-5 w-5" />
                <span>إضافة عميل جديد</span>
              </motion.button>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-50 to-blue-50">
                    <tr>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-700 uppercase tracking-wider">
                        العميل
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-700 uppercase tracking-wider">
                        الخطة
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-700 uppercase tracking-wider">
                        الحالة
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-700 uppercase tracking-wider">
                        التقدم
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-700 uppercase tracking-wider">
                        تاريخ الانضمام
                      </th>
                      <th className="px-6 py-4 text-right text-sm font-bold text-gray-700 uppercase tracking-wider">
                        الإجراءات
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentClients.map((client) => (
                      <motion.tr
                        key={client.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        whileHover={{ backgroundColor: '#f9fafb' }}
                        className="transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img 
                              src={client.avatar} 
                              alt={client.name}
                              className="w-12 h-12 rounded-full object-cover ml-4 border-2 border-gray-200"
                            />
                            <div>
                              <div className="text-sm font-semibold text-gray-900">{client.name}</div>
                              <div className="text-sm text-gray-500">{client.email}</div>
                              <div className="text-xs text-gray-400">{client.lastActivity}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                            {client.plan}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                            client.status === 'نشط' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {client.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-16 bg-gray-200 rounded-full h-2 mr-3">
                              <div 
                                className="bg-green-600 h-2 rounded-full transition-all duration-300"
                                style={{ width: `${client.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm font-semibold text-gray-900">{client.progress}%</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {client.joinDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-3">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-blue-600 hover:text-blue-900 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                            >
                              <EyeIcon className="h-5 w-5" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-green-600 hover:text-green-900 p-2 rounded-lg hover:bg-green-50 transition-colors"
                            >
                              <PencilIcon className="h-5 w-5" />
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="text-red-600 hover:text-red-900 p-2 rounded-lg hover:bg-red-50 transition-colors"
                            >
                              <TrashIcon className="h-5 w-5" />
                            </motion.button>
                          </div>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );

      case 'content':
        return (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black text-gray-900">إدارة المحتوى</h2>
              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 shadow-lg"
                >
                  <VideoCameraIcon className="h-5 w-5" />
                  <span>رفع فيديو</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl flex items-center space-x-2 transition-all duration-300 shadow-lg"
                >
                  <DocumentTextIcon className="h-5 w-5" />
                  <span>رفع خطة غذائية</span>
                </motion.button>
              </div>
            </div>

            {/* Workout Videos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <VideoCameraIcon className="h-6 w-6 text-blue-600 mr-3" />
                فيديوهات التمارين
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workoutVideos.map((video) => (
                  <motion.div
                    key={video.id}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="border border-gray-200 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-40 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white px-2 py-1 rounded-lg text-xs">
                        {video.duration}
                      </div>
                      <div className="absolute bottom-3 left-3 flex items-center space-x-2 text-white text-xs">
                        <span>👁️ {video.views}</span>
                        <span>❤️ {video.likes}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{video.title}</h4>
                      <div className="flex items-center justify-between text-sm text-gray-600 mb-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          video.difficulty === 'متقدم' ? 'bg-red-100 text-red-800' :
                          video.difficulty === 'متوسط' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-green-100 text-green-800'
                        }`}>
                          {video.difficulty}
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                          {video.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3">{video.uploadDate}</p>
                      <div className="flex items-center space-x-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-blue-600 hover:text-blue-900 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <EyeIcon className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-green-600 hover:text-green-900 p-2 rounded-lg hover:bg-green-50 transition-colors"
                        >
                          <PencilIcon className="h-4 w-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-red-600 hover:text-red-900 p-2 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          <TrashIcon className="h-4 w-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Nutrition Plans */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <DocumentTextIcon className="h-6 w-6 text-green-600 mr-3" />
                الخطط الغذائية
              </h3>
              <div className="space-y-4">
                {nutritionPlans.map((plan) => (
                  <motion.div
                    key={plan.id}
                    whileHover={{ scale: 1.01 }}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-red-500 to-pink-500 p-3 rounded-xl">
                        <DocumentTextIcon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{plan.title}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600">
                          <span>{plan.size} • {plan.downloads} تحميل</span>
                          <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-semibold">
                            {plan.category}
                          </span>
                          <div className="flex items-center">
                            <StarIcon className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="mr-1">{plan.rating}</span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500">{plan.uploadDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-blue-600 hover:text-blue-900 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <EyeIcon className="h-4 w-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-green-600 hover:text-green-900 p-2 rounded-lg hover:bg-green-50 transition-colors"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="text-red-600 hover:text-red-900 p-2 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <TrashIcon className="h-4 w-4" />
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-8">
            <h2 className="text-3xl font-black text-gray-900">التقارير والإحصائيات المتقدمة</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6"
              >
                <h3 className="font-bold text-gray-900 mb-6 text-xl flex items-center">
                  <ChartBarIcon className="h-6 w-6 text-blue-600 mr-3" />
                  نمو العملاء الشهري
                </h3>
                <div className="h-64">
                  <Line 
                    data={clientGrowthData} 
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false
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
                  <CurrencyDollarIcon className="h-6 w-6 text-orange-600 mr-3" />
                  تطور الإيرادات
                </h3>
                <div className="h-64">
                  <Bar 
                    data={revenueData}
                    options={{
                      responsive: true,
                      maintainAspectRatio: false,
                      plugins: {
                        legend: {
                          display: false
                        }
                      }
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Additional Analytics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserGroupIcon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">92%</h3>
                <p className="text-gray-600">معدل الاحتفاظ بالعملاء</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 text-center"
              >
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrophyIcon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">87%</h3>
                <p className="text-gray-600">معدل تحقيق الأهداف</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 text-center"
              >
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <StarIcon className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">4.9</h3>
                <p className="text-gray-600">متوسط التقييمات</p>
              </motion.div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Enhanced Header */}
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
                  لوحة تحكم الإدارة
                </span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3 bg-gray-50 px-4 py-2 rounded-xl">
                <img 
                  src={user?.avatar || 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'}
                  alt={user?.name}
                  className="w-10 h-10 rounded-full border-2 border-white shadow-lg"
                />
                <div>
                  <span className="text-sm font-bold text-gray-900">{user?.name}</span>
                  <div className="text-xs text-gray-500">مدير النظام</div>
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
          {/* Enhanced Sidebar */}
          <div className="lg:w-64 space-y-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
              <nav className="space-y-3">
                {[
                  { id: 'overview', label: 'نظرة عامة', icon: ChartBarIcon, gradient: 'from-blue-500 to-purple-500' },
                  { id: 'clients', label: 'العملاء', icon: UserGroupIcon, gradient: 'from-green-500 to-emerald-500' },
                  { id: 'content', label: 'المحتوى', icon: VideoCameraIcon, gradient: 'from-orange-500 to-red-500' },
                  { id: 'analytics', label: 'التقارير', icon: ChartBarIcon, gradient: 'from-purple-500 to-pink-500' },
                  { id: 'settings', label: 'الإعدادات', icon: CogIcon, gradient: 'from-gray-500 to-gray-600' }
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

export default AdminDashboard;
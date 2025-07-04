import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  TrashIcon
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const AdminDashboard: React.FC = () => {
  const { user, logout } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for demonstration
  const stats = [
    { label: "إجمالي العملاء", value: "127", change: "+12", positive: true, icon: UserGroupIcon },
    { label: "الاشتراكات النشطة", value: "89", change: "+8", positive: true, icon: ChartBarIcon },
    { label: "الإيرادات الشهرية", value: "45,230 ر.س", change: "+15%", positive: true, icon: CurrencyDollarIcon },
    { label: "معدل الرضا", value: "4.8/5", change: "+0.2", positive: true, icon: BellIcon }
  ];

  const recentClients = [
    {
      id: 1,
      name: "أحمد محمد",
      email: "ahmed@example.com",
      plan: "الخطة المتقدمة",
      status: "نشط",
      joinDate: "2024-01-15",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "فاطمة العلي",
      email: "fatima@example.com",
      plan: "الخطة الأساسية",
      status: "نشط",
      joinDate: "2024-01-10",
      avatar: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "محمد السالم",
      email: "mohammed@example.com",
      plan: "الخطة الاحترافية",
      status: "منتهي",
      joinDate: "2023-12-20",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const workoutVideos = [
    {
      id: 1,
      title: "تمارين القوة - المستوى المتقدم",
      duration: "45 دقيقة",
      views: 234,
      uploadDate: "2024-01-10",
      thumbnail: "https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      title: "تمارين الكارديو للمبتدئين",
      duration: "30 دقيقة",
      views: 189,
      uploadDate: "2024-01-08",
      thumbnail: "https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      title: "تمارين المرونة واليوجا",
      duration: "25 دقيقة",
      views: 156,
      uploadDate: "2024-01-05",
      thumbnail: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const nutritionPlans = [
    {
      id: 1,
      title: "خطة إنقاص الوزن - الأسبوع 1",
      downloads: 45,
      uploadDate: "2024-01-12",
      size: "2.5 MB"
    },
    {
      id: 2,
      title: "خطة زيادة الكتلة العضلية",
      downloads: 38,
      uploadDate: "2024-01-09",
      size: "3.1 MB"
    },
    {
      id: 3,
      title: "وصفات صحية للرياضيين",
      downloads: 67,
      uploadDate: "2024-01-06",
      size: "4.2 MB"
    }
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
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
                    <div className="flex flex-col items-end">
                      <stat.icon className="h-8 w-8 text-blue-600 mb-2" />
                      <div className={`text-sm font-medium ${
                        stat.positive ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {stat.change}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Recent Clients */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">العملاء الجدد</h3>
                  <button
                    onClick={() => setActiveTab('clients')}
                    className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    عرض الكل
                  </button>
                </div>
                <div className="space-y-4">
                  {recentClients.slice(0, 3).map((client) => (
                    <div key={client.id} className="flex items-center space-x-4">
                      <img 
                        src={client.avatar} 
                        alt={client.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{client.name}</h4>
                        <p className="text-sm text-gray-600">{client.plan}</p>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                        client.status === 'نشط' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-red-100 text-red-800'
                      }`}>
                        {client.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">إجراءات سريعة</h3>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setActiveTab('content')}
                    className="flex flex-col items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                  >
                    <VideoCameraIcon className="h-8 w-8 text-blue-600 mb-2" />
                    <span className="text-sm font-medium text-blue-900">رفع فيديو</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('content')}
                    className="flex flex-col items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                  >
                    <DocumentTextIcon className="h-8 w-8 text-green-600 mb-2" />
                    <span className="text-sm font-medium text-green-900">خطة غذائية</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('clients')}
                    className="flex flex-col items-center p-4 bg-orange-50 hover:bg-orange-100 rounded-lg transition-colors"
                  >
                    <UserGroupIcon className="h-8 w-8 text-orange-600 mb-2" />
                    <span className="text-sm font-medium text-orange-900">إدارة العملاء</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('analytics')}
                    className="flex flex-col items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                  >
                    <ChartBarIcon className="h-8 w-8 text-purple-600 mb-2" />
                    <span className="text-sm font-medium text-purple-900">التقارير</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'clients':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">إدارة العملاء</h2>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                <PlusIcon className="h-5 w-5" />
                <span>إضافة عميل جديد</span>
              </button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        العميل
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الخطة
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الحالة
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        تاريخ الانضمام
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                        الإجراءات
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentClients.map((client) => (
                      <tr key={client.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img 
                              src={client.avatar} 
                              alt={client.name}
                              className="w-10 h-10 rounded-full object-cover ml-4"
                            />
                            <div>
                              <div className="text-sm font-medium text-gray-900">{client.name}</div>
                              <div className="text-sm text-gray-500">{client.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {client.plan}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            client.status === 'نشط' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-red-100 text-red-800'
                          }`}>
                            {client.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {client.joinDate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex items-center space-x-2">
                            <button className="text-blue-600 hover:text-blue-900">
                              <EyeIcon className="h-4 w-4" />
                            </button>
                            <button className="text-green-600 hover:text-green-900">
                              <PencilIcon className="h-4 w-4" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                              <TrashIcon className="h-4 w-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
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
              <h2 className="text-2xl font-bold text-gray-900">إدارة المحتوى</h2>
              <div className="flex space-x-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                  <VideoCameraIcon className="h-5 w-5" />
                  <span>رفع فيديو</span>
                </button>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors">
                  <DocumentTextIcon className="h-5 w-5" />
                  <span>رفع خطة غذائية</span>
                </button>
              </div>
            </div>

            {/* Workout Videos */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">فيديوهات التمارين</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {workoutVideos.map((video) => (
                  <div key={video.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <h4 className="font-medium text-gray-900 mb-2">{video.title}</h4>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <span>{video.duration}</span>
                        <span>{video.views} مشاهدة</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-2">{video.uploadDate}</p>
                      <div className="flex items-center space-x-2 mt-4">
                        <button className="text-blue-600 hover:text-blue-900">
                          <PencilIcon className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
                          <TrashIcon className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nutrition Plans */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">الخطط الغذائية</h3>
              <div className="space-y-4">
                {nutritionPlans.map((plan) => (
                  <div key={plan.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="bg-red-100 p-2 rounded-lg">
                        <DocumentTextIcon className="h-6 w-6 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{plan.title}</h4>
                        <p className="text-sm text-gray-600">{plan.size} • {plan.downloads} تحميل</p>
                        <p className="text-xs text-gray-500">{plan.uploadDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <EyeIcon className="h-4 w-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <PencilIcon className="h-4 w-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <TrashIcon className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'analytics':
        return (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900">التقارير والإحصائيات</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">نمو العملاء</h3>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">رسم بياني لنمو العملاء</p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="font-semibold text-gray-900 mb-4">الإيرادات الشهرية</h3>
                <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500">رسم بياني للإيرادات</p>
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
                <span className="text-lg font-bold text-gray-900">لوحة تحكم الإدارة</span>
              </Link>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img 
                  src={user?.avatar || 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400'}
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
                  { id: 'clients', label: 'العملاء', icon: UserGroupIcon },
                  { id: 'content', label: 'المحتوى', icon: VideoCameraIcon },
                  { id: 'analytics', label: 'التقارير', icon: ChartBarIcon },
                  { id: 'settings', label: 'الإعدادات', icon: CogIcon }
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

export default AdminDashboard;
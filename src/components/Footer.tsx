import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-blue-600 to-orange-500 p-2 rounded-lg">
                <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <span className="text-xl font-bold">كابتن خالد</span>
            </div>
            <p className="text-gray-400">
              مدرب شخصي معتمد متخصص في التدريب الرياضي والتغذية الصحية.
              هدفنا مساعدتك في الوصول لأفضل نسخة من نفسك.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">روابط سريعة</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/plans" className="text-gray-400 hover:text-white transition-colors">
                  الخطط التدريبية
                </Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-400 hover:text-white transition-colors">
                  احجز الآن
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-400 hover:text-white transition-colors">
                  تسجيل الدخول
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">خدماتنا</h3>
            <ul className="space-y-2 text-gray-400">
              <li>تدريب شخصي أونلاين</li>
              <li>خطط غذائية مخصصة</li>
              <li>استشارات رياضية</li>
              <li>متابعة دورية</li>
              <li>برامج تأهيل</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">تواصل معنا</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center space-x-3">
                <PhoneIcon className="h-5 w-5" />
                <span>+966 50 123 4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <EnvelopeIcon className="h-5 w-5" />
                <span>info@coach-khalid.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <ClockIcon className="h-5 w-5" />
                <span>السبت - الخميس: 8:00 - 22:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 كابتن خالد. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
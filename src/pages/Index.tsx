
import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import AuthForm from "@/components/auth/AuthForm";
import WorkflowContainer from "@/components/workflow/WorkflowContainer";
import AdminPanel from "@/components/admin/AdminPanel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";
import { Book, BookOpen, Play, Search, UserPlus } from "lucide-react";

const Index = () => {
  const isMobile = useIsMobile();
  // These states would normally be managed with a proper auth system
  // This is just for demonstration purposes
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userType, setUserType] = useState<"A" | "B" | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Toggle states for demo purposes
  const toggleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  const setDemoUserType = (type: "A" | "B" | null) => {
    setUserType(type);
    setIsLoggedIn(!!type);
  };
  
  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };
  
  const renderContent = () => {
    if (isAdmin) {
      return <AdminPanel />;
    }
    
    if (isLoggedIn && userType) {
      return <WorkflowContainer userType={userType} />;
    }

    // Classbon-style login page with hero section
    return (
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-12 md:mb-20">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-right">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-classbon-dark leading-tight">
              آموزش برنامه‌نویسی و طراحی وب با
              <span className="text-classbon-primary inline-block"> کلاسبن</span>
            </h1>
            <p className="text-gray-600 mb-8 leading-relaxed">
              با آموزش‌های تخصصی و کاربردی کلاسبن، مسیر یادگیری خود را شخصی‌سازی کنید و به سرعت مهارت‌های خود را ارتقا دهید.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
              <a href="#" className="btn-classbon-primary flex items-center">
                <BookOpen className="ml-2 h-5 w-5" />
                مشاهده دوره‌ها
              </a>
              <a href="#" className="btn-classbon-outline flex items-center">
                <Play className="ml-2 h-5 w-5" />
                دوره‌های رایگان
              </a>
            </div>
          </div>
          <div className="md:w-1/2 px-4">
            <div className="card-classbon shadow-classbon py-8 px-6 md:px-10">
              <AuthForm />
            </div>
          </div>
        </div>

        {/* Featured categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-10 heading-classbon pb-2">دسته‌بندی‌های محبوب</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {[
              { title: "فرانت‌اند", icon: "📱", color: "bg-blue-50 text-blue-500" },
              { title: "بک‌اند", icon: "🖥️", color: "bg-green-50 text-green-500" },
              { title: "موبایل", icon: "📱", color: "bg-purple-50 text-purple-500" },
              { title: "هوش مصنوعی", icon: "🤖", color: "bg-amber-50 text-amber-500" }
            ].map((category, index) => (
              <div key={index} className="card-hover cursor-pointer">
                <div className={`rounded-lg p-6 text-center ${category.color}`}>
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <h3 className="font-bold">{category.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Featured courses */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold heading-classbon pb-2">دوره‌های پیشنهادی</h2>
            <a href="#" className="text-classbon-primary flex items-center hover:underline">
              مشاهده همه
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((course) => (
              <div key={course} className="card-classbon overflow-hidden card-hover">
                <div className="relative">
                  <img 
                    src="/placeholder.svg" 
                    alt="Course Thumbnail" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className="bg-classbon-primary text-white text-xs px-2 py-1 rounded">پرفروش</span>
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-gray-500">استاد محمدی</span>
                    <div className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="text-sm text-gray-600 mr-1">4.9</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-lg mb-2 hover:text-classbon-primary transition-colors">آموزش جامع React.js</h3>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-classbon-primary font-bold">۴۵۰,۰۰۰ تومان</span>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      ۲۵ ساعت
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="bg-gradient-classbon rounded-xl p-8 mb-16 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">+۱۰۰</div>
              <div>دوره آموزشی</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">+۵۰</div>
              <div>مدرس مجرب</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">+۱۵,۰۰۰</div>
              <div>دانشجوی راضی</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">+۹۵٪</div>
              <div>رضایت شاگردان</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <AppLayout>
      {renderContent()}
    </AppLayout>
  );
};

export default Index;

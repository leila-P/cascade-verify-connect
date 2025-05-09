
import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import AuthForm from "@/components/auth/AuthForm";
import WorkflowContainer from "@/components/workflow/WorkflowContainer";
import AdminPanel from "@/components/admin/AdminPanel";
import { Card, CardContent } from "@/components/ui/card";
import { useIsMobile } from "@/hooks/use-mobile";

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
    
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="mb-12 overflow-hidden shadow-xl rounded-xl">
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-12 px-6">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">سامانه آموزش آنلاین</h2>
              <p className="text-blue-100 max-w-2xl mx-auto text-lg">
                پلتفرم جامع آموزش آنلاین برای مدرسان و شاگردان با امکانات پیشرفته
              </p>
            </div>
          </div>
          <CardContent className="pt-6">
            <p className="text-center text-gray-600 mb-8">
              به سامانه آموزش آنلاین خوش آمدید. در این سامانه شما می‌توانید به عنوان مدرس دوره‌های آموزشی ایجاد کنید یا به عنوان شاگرد دوره‌ها را مشاهده و خریداری نمایید.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border shadow-md card-hover overflow-hidden relative">
                <div className="absolute top-0 left-0 w-2 h-full bg-userA"></div>
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-userA/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-userA" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-xl text-userA mb-2">ورود به عنوان مدرس</h3>
                  <p className="text-sm text-gray-600 mb-6">ثبت دوره‌های آموزشی و مدیریت محتوا</p>
                  <button 
                    onClick={() => setDemoUserType("A")} 
                    className="w-full bg-gradient-to-r from-userA to-userA-dark hover:from-userA-dark hover:to-userA text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    ورود به پنل مدرس
                  </button>
                  <div className="mt-4 grid grid-cols-3 gap-2 w-full">
                    {['ثبت دوره', 'آپلود محتوا', 'انتشار'].map((item, i) => (
                      <span key={i} className="text-xs bg-blue-50 text-userA px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-xl border shadow-md card-hover overflow-hidden relative">
                <div className="absolute top-0 left-0 w-2 h-full bg-userB"></div>
                <div className="flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-userB/10 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-userB" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-xl text-userB mb-2">ورود به عنوان شاگرد</h3>
                  <p className="text-sm text-gray-600 mb-6">مشاهده و خرید دوره‌های آموزشی</p>
                  <button 
                    onClick={() => setDemoUserType("B")} 
                    className="w-full bg-gradient-to-r from-userB to-userB-dark hover:from-userB-dark hover:to-userB text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    ورود به پنل شاگرد
                  </button>
                  <div className="mt-4 grid grid-cols-3 gap-2 w-full">
                    {['جستجو', 'خرید دوره', 'مشاهده محتوا'].map((item, i) => (
                      <span key={i} className="text-xs bg-green-50 text-userB px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Admin demo button */}
            <div className="text-center mt-10">
              <button 
                onClick={() => { setIsAdmin(true); setIsLoggedIn(true); }} 
                className="text-sm text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
              >
                ورود به پنل ادمین (نسخه نمایشی)
              </button>
            </div>
          </CardContent>
        </Card>
        
        <AuthForm />
        
        {/* Features Section */}
        <div className="mt-16 mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">ویژگی‌های سامانه آموزش آنلاین</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "ثبت دوره‌های آموزشی",
                description: "مدرسان می‌توانند به راحتی دوره‌های آموزشی خود را ثبت و محتوای آن را مدیریت کنند",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              {
                title: "پرداخت آنلاین",
                description: "شاگردان می‌توانند به سادگی دوره‌های مورد نظر خود را خریداری کنند",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                  </svg>
                )
              },
              {
                title: "دسترسی به محتوا",
                description: "دسترسی آنلاین به محتوای دوره‌ها در هر زمان و هر مکان",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                )
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl border shadow-sm card-hover">
                <div className="text-primary mb-4">{feature.icon}</div>
                <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
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


import React, { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import AuthForm from "@/components/auth/AuthForm";
import WorkflowContainer from "@/components/workflow/WorkflowContainer";
import AdminPanel from "@/components/admin/AdminPanel";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
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
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-center mb-6">سامانه آموزش آنلاین</h2>
            <p className="text-center mb-4">
              به سامانه آموزش آنلاین خوش آمدید. در این سامانه شما می‌توانید به عنوان مدرس دوره‌های آموزشی ایجاد کنید یا به عنوان شاگرد دوره‌ها را مشاهده و خریداری نمایید.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
              <div className="p-4 border rounded-md text-center">
                <h3 className="font-semibold text-lg text-userA mb-2">ورود به عنوان مدرس</h3>
                <p className="text-sm mb-4">ثبت دوره‌های آموزشی و مدیریت محتوا</p>
                <button 
                  onClick={() => setDemoUserType("A")} 
                  className="bg-userA text-white px-4 py-2 rounded-md hover:bg-userA-dark"
                >
                  ورود به پنل مدرس
                </button>
              </div>
              <div className="p-4 border rounded-md text-center">
                <h3 className="font-semibold text-lg text-userB mb-2">ورود به عنوان شاگرد</h3>
                <p className="text-sm mb-4">مشاهده و خرید دوره‌های آموزشی</p>
                <button 
                  onClick={() => setDemoUserType("B")} 
                  className="bg-userB text-white px-4 py-2 rounded-md hover:bg-userB-dark"
                >
                  ورود به پنل شاگرد
                </button>
              </div>
            </div>
            {/* Admin demo button */}
            <div className="text-center mt-8">
              <button 
                onClick={() => { setIsAdmin(true); setIsLoggedIn(true); }} 
                className="text-sm text-muted-foreground underline"
              >
                ورود به پنل ادمین (نسخه نمایشی)
              </button>
            </div>
          </CardContent>
        </Card>
        
        <AuthForm />
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

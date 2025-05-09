
import React, { useState } from "react";
import { Button } from "@/components/ui/button";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Dummy toggle for demo purposes
  const toggleAuth = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  
  const toggleAdmin = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div dir="rtl" className="min-h-screen flex flex-col bg-gray-50">
      <header className="bg-white border-b shadow-sm">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <h1 className="text-2xl font-bold text-primary">سامانه چند مرحله‌ای</h1>
          </div>
          
          <div className="flex items-center space-x-2 rtl:space-x-reverse">
            {isLoggedIn ? (
              <>
                <Button variant="ghost" onClick={toggleAdmin}>
                  {isAdmin ? "پنل کاربر" : "پنل ادمین"}
                </Button>
                <Button onClick={toggleAuth}>خروج</Button>
              </>
            ) : (
              <Button onClick={toggleAuth}>ورود</Button>
            )}
          </div>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4 flex-1">
        {children}
      </main>
      
      <footer className="bg-gray-100 border-t py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          تمامی حقوق برای سامانه چند مرحله‌ای محفوظ است © ۱۴۰۲
        </div>
      </footer>
    </div>
  );
};

export default AppLayout;

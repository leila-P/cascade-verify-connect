
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

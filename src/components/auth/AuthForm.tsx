
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus, LogIn } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserTypeSelection from "./UserTypeSelection";
import { toast } from "@/components/ui/use-toast";
import VerificationCode from "./VerificationCode";

type UserType = "A" | "B" | null;
type AuthStep = "select-type" | "enter-email" | "verify-code";

const AuthForm = () => {
  const [userType, setUserType] = useState<UserType>(null);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [authStep, setAuthStep] = useState<AuthStep>("select-type");
  const [verificationCode, setVerificationCode] = useState("");
  
  // Simulated verification code (in real app, this would be generated and sent via email)
  const simulatedCode = "123456";

  const handleTypeSelection = (type: UserType) => {
    setUserType(type);
    setAuthStep("enter-email");
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "خطا",
        description: "لطفا ایمیل خود را وارد کنید",
        variant: "destructive",
      });
      return;
    }
    
    // In a real application, we would send a verification code to this email
    // For now, we'll simulate this by showing a success message
    toast({
      title: "کد تایید ارسال شد",
      description: `کد تایید به ${email} ارسال شد. (کد نمونه: ${simulatedCode})`,
    });
    
    setAuthStep("verify-code");
  };

  const handleVerifyCode = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, we would validate this code against what was sent
    // For demo purposes, we'll accept any 6-digit code or the simulated code
    if (verificationCode === simulatedCode || (verificationCode.length === 6 && /^\d+$/.test(verificationCode))) {
      // Simulate successful login
      toast({
        title: "ورود موفقیت‌آمیز",
        description: `به عنوان ${userType === "A" ? "مدرس" : "شاگرد"} وارد شدید.`,
      });
      
      console.log("Login successful:", { userType, email });
      
      // In a real app, we would update auth state and redirect user
      // For demo purposes, we'll just log the info
    } else {
      toast({
        title: "خطا",
        description: "کد تایید نامعتبر است",
        variant: "destructive",
      });
    }
  };

  const goBack = () => {
    if (authStep === "verify-code") {
      setAuthStep("enter-email");
    } else if (authStep === "enter-email") {
      setAuthStep("select-type");
      setUserType(null);
    }
  };

  const renderAuthStep = () => {
    switch (authStep) {
      case "select-type":
        return (
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">انتخاب نوع کاربری</h2>
              <p className="text-gray-600">لطفا نوع حساب کاربری خود را انتخاب کنید</p>
            </div>
            
            <div className="mt-8">
              <UserTypeSelection selectedType={userType} onSelectType={handleTypeSelection} />
            </div>
          </div>
        );
      
      case "enter-email":
        return (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <div className="space-y-2 text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">ورود به حساب کاربری</h2>
              <p className="text-gray-600">
                {userType === "A" 
                  ? "ورود به پنل مدرس" 
                  : "ورود به پنل شاگرد"}
              </p>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="email">ایمیل</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="name@example.com" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
                className="transition-all duration-300 focus:ring-2 focus:ring-offset-1 focus:ring-primary"
              />
            </div>
            
            <Button type="submit" className="w-full mt-4">
              <LogIn className="mr-2 h-4 w-4" /> ارسال کد تایید
            </Button>
            
            <Button type="button" variant="ghost" className="w-full" onClick={goBack}>
              بازگشت به انتخاب نوع کاربری
            </Button>
          </form>
        );
        
      case "verify-code":
        return (
          <form onSubmit={handleVerifyCode} className="space-y-4">
            <div className="space-y-2 text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">تایید ایمیل</h2>
              <p className="text-gray-600">
                کد ارسال شده به {email} را وارد کنید
              </p>
            </div>
            
            <div className="grid gap-2">
              <Label htmlFor="verification-code">کد تایید</Label>
              <VerificationCode 
                value={verificationCode} 
                onChange={setVerificationCode} 
              />
              
              <div className="text-sm text-gray-500 mt-2 text-center">
                کد نمونه: {simulatedCode}
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full mt-4"
              disabled={!verificationCode || verificationCode.length !== 6}
            >
              تایید و ورود
            </Button>
            
            <Button type="button" variant="ghost" className="w-full" onClick={goBack}>
              بازگشت به مرحله قبل
            </Button>
          </form>
        );
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto overflow-hidden shadow-xl border-0 rounded-xl">
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 py-6">
        <CardTitle className="text-2xl font-bold text-center text-white">
          سامانه آموزش آنلاین
        </CardTitle>
        <CardDescription className="text-center text-blue-100">
          پلتفرم جامع آموزش آنلاین برای مدرسان و شاگردان
        </CardDescription>
      </div>
      
      <CardContent className="pt-6 px-6 pb-4">
        {renderAuthStep()}
      </CardContent>
    </Card>
  );
};

export default AuthForm;

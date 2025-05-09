
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserPlus, LogIn } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import UserTypeSelection from "./UserTypeSelection";

type UserType = "A" | "B" | null;

const AuthForm = () => {
  const [userType, setUserType] = useState<UserType>(null);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", isLogin ? "Login" : "Register", "User Type:", userType);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">
          {isLogin ? "ورود به سیستم" : "ثبت نام"}
        </CardTitle>
        <CardDescription className="text-center">
          {isLogin 
            ? "وارد حساب کاربری خود شوید" 
            : "یک حساب کاربری جدید ایجاد کنید"}
        </CardDescription>
      </CardHeader>
      <Tabs 
        defaultValue="login" 
        value={isLogin ? "login" : "register"}
        onValueChange={(value) => setIsLogin(value === "login")}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">ورود</TabsTrigger>
          <TabsTrigger value="register">ثبت نام</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <CardContent className="pt-4">
            <form onSubmit={handleSubmit}>
              <div className="grid w-full gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">ایمیل</Label>
                  <Input id="email" type="email" placeholder="name@example.com" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">رمز عبور</Label>
                  <Input id="password" type="password" required />
                </div>
                <Button type="submit" className="w-full">
                  <LogIn className="mr-2 h-4 w-4" /> ورود
                </Button>
              </div>
            </form>
          </CardContent>
        </TabsContent>
        <TabsContent value="register">
          <CardContent className="pt-4">
            <form onSubmit={handleSubmit}>
              <div className="grid w-full gap-4">
                <div className="grid gap-2">
                  <Label>نوع کاربر</Label>
                  <UserTypeSelection selectedType={userType} onSelectType={setUserType} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reg-name">نام و نام خانوادگی</Label>
                  <Input id="reg-name" type="text" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reg-email">ایمیل</Label>
                  <Input id="reg-email" type="email" placeholder="name@example.com" required />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="reg-password">رمز عبور</Label>
                  <Input id="reg-password" type="password" required />
                </div>
                <Button 
                  type="submit" 
                  disabled={!userType}
                  className="w-full"
                >
                  <UserPlus className="mr-2 h-4 w-4" /> ثبت نام
                </Button>
              </div>
            </form>
          </CardContent>
        </TabsContent>
      </Tabs>
      <CardFooter className="flex justify-center text-sm text-muted-foreground">
        {isLogin ? (
          <p>
            حساب کاربری ندارید؟{" "}
            <Button variant="link" className="p-0" onClick={() => setIsLogin(false)}>
              ثبت نام کنید
            </Button>
          </p>
        ) : (
          <p>
            قبلا ثبت نام کرده‌اید؟{" "}
            <Button variant="link" className="p-0" onClick={() => setIsLogin(true)}>
              وارد شوید
            </Button>
          </p>
        )}
      </CardFooter>
    </Card>
  );
};

export default AuthForm;

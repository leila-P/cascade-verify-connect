
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type UserType = "A" | "B";

interface RegistrationStepProps {
  userType: UserType;
}

const RegistrationStep: React.FC<RegistrationStepProps> = ({ userType }) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">ثبت اطلاعات {userType === "A" ? "کاربر نوع A" : "کاربر نوع B"}</h3>
          <p className="text-sm text-muted-foreground">لطفا اطلاعات خود را با دقت وارد کنید</p>
        </div>
        
        <div className="grid gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">نام</Label>
              <Input id="firstName" placeholder="نام خود را وارد کنید" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">نام خانوادگی</Label>
              <Input id="lastName" placeholder="نام خانوادگی خود را وارد کنید" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nationalId">کد ملی</Label>
              <Input id="nationalId" placeholder="کد ملی خود را وارد کنید" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobileNumber">شماره موبایل</Label>
              <Input id="mobileNumber" placeholder="شماره موبایل خود را وارد کنید" />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">آدرس</Label>
            <Input id="address" placeholder="آدرس دقیق خود را وارد کنید" />
          </div>
          
          {userType === "A" ? (
            <div className="space-y-2">
              <Label htmlFor="companyName">نام شرکت</Label>
              <Input id="companyName" placeholder="نام شرکت خود را وارد کنید" />
            </div>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="education">تحصیلات</Label>
              <Input id="education" placeholder="میزان تحصیلات خود را وارد کنید" />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default RegistrationStep;

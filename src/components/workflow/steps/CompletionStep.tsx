
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

type UserType = "A" | "B";

interface CompletionStepProps {
  userType: UserType;
}

const CompletionStep: React.FC<CompletionStepProps> = ({ userType }) => {
  return (
    <Card>
      <CardContent className="pt-6 text-center">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <Check className="h-10 w-10 text-green-600" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold mb-2">فرآیند با موفقیت تکمیل شد</h3>
        <p className="text-gray-500 mb-6">
          تمامی مراحل با موفقیت انجام شده است و فرآیند تکمیل شده است.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-md mb-6 text-right">
          <h4 className="font-medium mb-2">خلاصه فرآیند:</h4>
          <ul className="space-y-2 list-disc list-inside text-sm">
            <li>ثبت اطلاعات {userType === "A" ? "کاربر نوع A" : "کاربر نوع B"}</li>
            <li>احراز هویت: <span className="text-green-600">تأیید شده</span></li>
            <li>پرداخت: <span className="text-green-600">موفق</span></li>
            <li>بارگذاری اسناد: <span className="text-green-600">کامل شده</span></li>
            <li>ارسال لینک: <span className="text-green-600">انجام شده</span></li>
          </ul>
        </div>
        
        <div className="space-y-4">
          <Button className="w-full">
            دانلود گزارش نهایی
          </Button>
          
          <Button variant="outline" className="w-full">
            بازگشت به داشبورد
          </Button>
          
          <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
            <p className="text-sm text-blue-800">
              گواهی تکمیل فرآیند به ایمیل شما ارسال شده است. همچنین می‌توانید آن را از بخش "سوابق" در پروفایل خود مشاهده کنید.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CompletionStep;

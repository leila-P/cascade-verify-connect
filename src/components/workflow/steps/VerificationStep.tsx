
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Upload } from 'lucide-react';

type UserType = "A" | "B";

interface VerificationStepProps {
  userType: UserType;
}

const VerificationStep: React.FC<VerificationStepProps> = ({ userType }) => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">احراز هویت {userType === "A" ? "کاربر نوع A" : "کاربر نوع B"}</h3>
          <p className="text-sm text-muted-foreground">لطفا مدارک هویتی خود را بارگذاری کنید</p>
        </div>
        
        <div className="grid gap-6">
          <div className="space-y-2">
            <Label>تصویر کارت ملی</Label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
              <Upload className="h-10 w-10 text-gray-400 mb-2" />
              <p className="text-sm text-gray-500 mb-2">فایل را اینجا رها کنید یا کلیک کنید</p>
              <Input 
                id="nationalCardUpload" 
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={(e) => console.log(e.target.files)}
              />
              <Button 
                variant="outline" 
                onClick={() => document.getElementById('nationalCardUpload')?.click()}
              >
                انتخاب فایل
              </Button>
            </div>
          </div>
          
          {userType === "A" ? (
            <div className="space-y-2">
              <Label>مدارک ثبت شرکت</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 mb-2">فایل را اینجا رها کنید یا کلیک کنید</p>
                <Input 
                  id="companyDocsUpload" 
                  type="file" 
                  className="hidden"
                  accept="application/pdf"
                  onChange={(e) => console.log(e.target.files)}
                />
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById('companyDocsUpload')?.click()}
                >
                  انتخاب فایل
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-2">
              <Label>تصویر صفحه اول شناسنامه</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
                <Upload className="h-10 w-10 text-gray-400 mb-2" />
                <p className="text-sm text-gray-500 mb-2">فایل را اینجا رها کنید یا کلیک کنید</p>
                <Input 
                  id="idBookUpload" 
                  type="file" 
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => console.log(e.target.files)}
                />
                <Button 
                  variant="outline" 
                  onClick={() => document.getElementById('idBookUpload')?.click()}
                >
                  انتخاب فایل
                </Button>
              </div>
            </div>
          )}
          
          <div className="bg-yellow-50 p-4 rounded-md border border-yellow-200">
            <p className="text-sm text-yellow-800">
              تذکر: مدارک شما پس از بررسی توسط ادمین تأیید خواهد شد. این فرآیند ممکن است تا ۲۴ ساعت طول بکشد.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VerificationStep;

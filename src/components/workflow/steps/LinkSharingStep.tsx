
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type UserType = "A" | "B";

interface LinkSharingStepProps {
  userType: UserType;
}

const LinkSharingStep: React.FC<LinkSharingStepProps> = ({ userType }) => {
  const [copied, setCopied] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const inviteLink = "https://example.com/invite/abc123xyz";
  
  const handleCopy = () => {
    navigator.clipboard.writeText(inviteLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  
  const handleSendEmail = () => {
    setEmailSent(true);
    setTimeout(() => setEmailSent(false), 2000);
  };

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">ارسال دعوت‌نامه به {userType === "A" ? "کاربر نوع B" : "کاربر نوع A"}</h3>
          <p className="text-sm text-muted-foreground">
            لطفاً لینک دعوت را برای {userType === "A" ? "کاربر نوع B" : "کاربر نوع A"} ارسال کنید
          </p>
        </div>
        
        <div className="grid gap-6">
          <div className="space-y-2">
            <Label htmlFor="inviteLink">لینک دعوت</Label>
            <div className="flex space-x-2 rtl:space-x-reverse">
              <Input 
                id="inviteLink" 
                value={inviteLink} 
                readOnly
                className="flex-1"
              />
              <Button onClick={handleCopy}>
                {copied ? "کپی شد!" : "کپی لینک"}
              </Button>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="inviteEmail">ارسال ایمیل دعوت</Label>
            <div className="flex space-x-2 rtl:space-x-reverse">
              <Input 
                id="inviteEmail" 
                type="email"
                placeholder="ایمیل گیرنده را وارد کنید"
                className="flex-1"
              />
              <Button onClick={handleSendEmail}>
                {emailSent ? "ارسال شد!" : "ارسال ایمیل"}
              </Button>
            </div>
          </div>
          
          <div className="bg-indigo-50 p-4 rounded-md border border-indigo-200">
            <p className="text-sm text-indigo-800 mb-2 font-medium">توضیحات:</p>
            <p className="text-sm text-indigo-800">
              {userType === "A" 
                ? "این لینک را برای کاربر نوع B ارسال کنید تا بتوانند فرآیند را ادامه دهند. لینک به مدت ۷ روز معتبر است."
                : "این لینک را برای کاربر نوع A ارسال کنید تا بتوانند فرآیند را بررسی و تأیید کنند. لینک به مدت ۷ روز معتبر است."
              }
            </p>
          </div>
          
          <div className="rounded-md bg-gray-50 p-4">
            <p className="text-sm text-gray-500 mb-2">پیام‌های اخیر:</p>
            <div className="text-sm border-b pb-2 mb-2">
              <p className="font-medium">ارسال لینک به example@mail.com</p>
              <p className="text-xs text-gray-400">امروز، ساعت 14:23</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LinkSharingStep;

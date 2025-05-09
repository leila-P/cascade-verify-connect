
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

type UserType = "A" | "B";

interface PaymentStepProps {
  userType: UserType;
}

const PaymentStep: React.FC<PaymentStepProps> = ({ userType }) => {
  const amount = userType === "A" ? "1,500,000" : "900,000";

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold">پرداخت هزینه</h3>
          <p className="text-sm text-muted-foreground">لطفاً روش پرداخت را انتخاب کنید</p>
        </div>
        
        <div className="grid gap-6">
          <div className="p-4 rounded-md bg-gray-50">
            <div className="flex justify-between items-center">
              <span className="font-semibold">مبلغ قابل پرداخت:</span>
              <span className="font-bold text-xl">{amount} تومان</span>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium">انتخاب روش پرداخت</h4>
            <RadioGroup defaultValue="online">
              <div className="flex items-center space-x-2 rtl:space-x-reverse border rounded-md p-3">
                <RadioGroupItem value="online" id="online" />
                <Label htmlFor="online" className="flex-1">پرداخت آنلاین</Label>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse border rounded-md p-3">
                <RadioGroupItem value="wallet" id="wallet" />
                <Label htmlFor="wallet" className="flex-1">پرداخت از کیف پول</Label>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse border rounded-md p-3 opacity-50">
                <RadioGroupItem value="credit" id="credit" disabled />
                <Label htmlFor="credit" className="flex-1">پرداخت اعتباری (در دسترس نیست)</Label>
              </div>
            </RadioGroup>
          </div>
          
          <Button className="w-full">
            پرداخت و انتقال به درگاه بانک
          </Button>
          
          <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
            <p className="text-sm text-blue-800">
              اطلاعیه: پس از پرداخت موفق، یک پیامک تأیید به شماره همراه شما ارسال خواهد شد.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PaymentStep;

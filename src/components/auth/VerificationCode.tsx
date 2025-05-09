
import React from 'react';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

interface VerificationCodeProps {
  value: string;
  onChange: (value: string) => void;
}

const VerificationCode: React.FC<VerificationCodeProps> = ({ value, onChange }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-sm text-gray-600 mb-4">کد ۶ رقمی ارسال شده به ایمیل خود را وارد کنید</p>
      <InputOTP 
        value={value} 
        onChange={onChange} 
        maxLength={6}
        className="justify-center gap-2"
        dir="ltr"
      >
        <InputOTPGroup className="gap-2">
          <InputOTPSlot index={0} className="border-classbon-primary focus:border-classbon-secondary h-12 w-12 text-lg" />
          <InputOTPSlot index={1} className="border-classbon-primary focus:border-classbon-secondary h-12 w-12 text-lg" />
          <InputOTPSlot index={2} className="border-classbon-primary focus:border-classbon-secondary h-12 w-12 text-lg" />
          <InputOTPSlot index={3} className="border-classbon-primary focus:border-classbon-secondary h-12 w-12 text-lg" />
          <InputOTPSlot index={4} className="border-classbon-primary focus:border-classbon-secondary h-12 w-12 text-lg" />
          <InputOTPSlot index={5} className="border-classbon-primary focus:border-classbon-secondary h-12 w-12 text-lg" />
        </InputOTPGroup>
      </InputOTP>
      <button 
        className="text-classbon-primary mt-4 text-sm hover:underline"
        onClick={() => {/* Resend code logic */}}
      >
        ارسال مجدد کد
      </button>
    </div>
  );
};

export default VerificationCode;

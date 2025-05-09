
import React, { useRef, useState } from 'react';
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
      <InputOTP 
        value={value} 
        onChange={onChange} 
        maxLength={6}
        className="justify-center"
        dir="ltr"
      >
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
};

export default VerificationCode;
